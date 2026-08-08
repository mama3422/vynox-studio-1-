import type { Metadata, Viewport } from "next";
import { fontDisplay, fontBody, fontDisplayAr, fontBodyAr } from "./fonts";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vynoxstudio.com"),
  title: "Vynox Studio — Professional Digital Development Studio",
  description:
    "Vynox Studio is a digital development studio specializing in FiveM, Discord systems, custom software, and web development.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Vynox Studio — Professional Digital Development Studio",
    description:
      "Vynox Studio is a digital development studio specializing in FiveM, Discord systems, custom software, and web development.",
    images: ["/og-banner.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vynox Studio",
    description:
      "Professional digital development studio — FiveM, Discord, and custom software.",
    images: ["/og-banner.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#070B14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontDisplayAr.variable} ${fontBodyAr.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
