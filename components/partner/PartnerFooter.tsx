import Link from "next/link";

export default function PartnerFooter() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="container-px mx-auto max-w-7xl py-12 text-center">
        <span className="font-heading text-lg font-extrabold tracking-tight">
          <span className="bg-gradient-to-l from-ember-400 to-blush-500 bg-clip-text text-transparent">
            وَهـج
          </span>
        </span>
        <p className="mt-2 text-sm text-white/50">مجتمع Discord مميز</p>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/40">
          <span>بالتعاون مع</span>
          <Link href="/" className="font-semibold text-white/70 transition-colors hover:text-ember-300">
            Vynox Studio
          </Link>
        </div>

        <p className="mt-6 text-xs text-white/30">
          © 2026 وَهـج. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
