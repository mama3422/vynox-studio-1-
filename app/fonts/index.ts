import localFont from "next/font/local";

// Latin — display (headings)
export const fontDisplay = localFont({
  src: "./SpaceGrotesk.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "300 700",
});

// Latin — body
export const fontBody = localFont({
  src: "./Inter.ttf",
  variable: "--font-body",
  display: "swap",
  weight: "300 800",
});

// Arabic — display (headings)
export const fontDisplayAr = localFont({
  src: "./Cairo.ttf",
  variable: "--font-display-ar",
  display: "swap",
  weight: "400 800",
});

// Arabic — body
export const fontBodyAr = localFont({
  src: [
    { path: "./IBMPlexSansArabic-Regular.ttf", weight: "400", style: "normal" },
    { path: "./IBMPlexSansArabic-Medium.ttf", weight: "500", style: "normal" },
    { path: "./IBMPlexSansArabic-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./IBMPlexSansArabic-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-body-ar",
  display: "swap",
});
