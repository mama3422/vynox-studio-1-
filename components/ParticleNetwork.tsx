"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

/**
 * Animated particle/connection background used behind the hero.
 *
 * Performance notes (the desktop visual output is unchanged):
 * - No per-node `shadowBlur` — that canvas op forces a software blur pass on
 *   most mobile browsers and was the single biggest cost per frame. Instead
 *   we pre-render one small glow sprite on an offscreen canvas and blit it
 *   with `drawImage`, which is cheap and GPU-friendly.
 * - Distance checks between nodes compare squared distances (no `Math.sqrt`
 *   in the hot O(n²) loop); the falloff for line opacity is derived from the
 *   squared ratio too.
 * - Node count, link distance, and device-pixel-ratio cap are all reduced
 *   automatically on small / coarse-pointer (mobile) screens.
 * - The loop pauses via `cancelAnimationFrame` (no `setInterval` anywhere)
 *   whenever the tab is hidden or the canvas scrolls out of view, and is
 *   skipped entirely for `prefers-reduced-motion: reduce`.
 * - Resize handling is debounced and reuses existing node positions when the
 *   change is minor (e.g. iOS Safari's address bar show/hide), so it never
 *   thrashes the node array on every scroll tick.
 */
export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let animationFrame = 0;
    let isRunning = false;
    let isIntersecting = true;
    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
    let glowSprite: HTMLCanvasElement | null = null;

    function isMobileMode() {
      return coarsePointerQuery.matches || width < 768;
    }

    function makeGlowSprite() {
      const size = 48;
      const sprite = document.createElement("canvas");
      sprite.width = size;
      sprite.height = size;
      const sctx = sprite.getContext("2d")!;
      const gradient = sctx.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2
      );
      gradient.addColorStop(0, "rgba(200, 232, 255, 0.95)");
      gradient.addColorStop(0.35, "rgba(163, 220, 255, 0.55)");
      gradient.addColorStop(1, "rgba(76, 184, 255, 0)");
      sctx.fillStyle = gradient;
      sctx.fillRect(0, 0, size, size);
      return sprite;
    }

    function buildNodes(count: number) {
      return Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.8,
      }));
    }

    function resize(forceRegenerate: boolean) {
      if (!canvas) return;
      const rect = canvas.parentElement!.getBoundingClientRect();
      const newWidth = rect.width;
      const newHeight = rect.height;

      const mobile = coarsePointerQuery.matches || newWidth < 768;
      const nextDpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2);

      // Skip node regeneration for minor height-only changes (mobile browser
      // chrome showing/hiding) — just resize the canvas buffer in that case.
      const widthChanged = Math.abs(newWidth - width) > 24;
      const heightChanged = Math.abs(newHeight - height) > 160;
      const shouldRegenerate =
        forceRegenerate || nodes.length === 0 || widthChanged || heightChanged;

      width = newWidth;
      height = newHeight;
      dpr = nextDpr;

      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (shouldRegenerate) {
        const density = mobile ? 1 / 20000 : 1 / 14000;
        const [minCount, maxCount] = mobile ? [12, 34] : [24, 70];
        const count = Math.min(
          maxCount,
          Math.max(minCount, Math.floor(width * height * density))
        );
        nodes = buildNodes(count);
      } else {
        // Keep existing particles in bounds after a small viewport tweak.
        for (const n of nodes) {
          if (n.x > width) n.x = width;
          if (n.y > height) n.y = height;
        }
      }
    }

    function drawFrame() {
      if (!ctx) return;
      const mobile = isMobileMode();
      const linkDistance = mobile ? 110 : 150;
      const linkDistanceSq = linkDistance * linkDistance;

      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      ctx.strokeStyle = "rgba(76, 184, 255, 1)";
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < linkDistanceSq) {
            ctx.globalAlpha = (1 - distSq / linkDistanceSq) * 0.35;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      if (glowSprite) {
        for (const n of nodes) {
          const size = n.r * 6;
          ctx.drawImage(glowSprite, n.x - size / 2, n.y - size / 2, size, size);
        }
      }
    }

    function step() {
      drawFrame();
      animationFrame = requestAnimationFrame(step);
    }

    function start() {
      if (isRunning) return;
      isRunning = true;
      animationFrame = requestAnimationFrame(step);
    }

    function stop() {
      isRunning = false;
      cancelAnimationFrame(animationFrame);
    }

    function evaluateRunState() {
      const shouldRun =
        isIntersecting && !document.hidden && !reducedMotionQuery.matches;
      if (shouldRun) {
        start();
      } else {
        stop();
      }
    }

    function handleResize() {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => resize(false), 180);
    }

    glowSprite = makeGlowSprite();
    resize(true);

    if (reducedMotionQuery.matches) {
      // Render a single static frame instead of animating.
      drawFrame();
    } else {
      evaluateRunState();
    }

    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", evaluateRunState);

    const reducedMotionHandler = () => {
      if (reducedMotionQuery.matches) {
        stop();
        drawFrame();
      } else {
        evaluateRunState();
      }
    };
    reducedMotionQuery.addEventListener?.("change", reducedMotionHandler);

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isIntersecting = entry.isIntersecting;
          evaluateRunState();
        },
        { threshold: 0 }
      );
      observer.observe(canvas);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", evaluateRunState);
      reducedMotionQuery.removeEventListener?.("change", reducedMotionHandler);
      observer?.disconnect();
      if (resizeTimeout) clearTimeout(resizeTimeout);
      stop();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
