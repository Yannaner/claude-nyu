import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-ui",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Claude at NYU — Builder Club",
  description:
    "The Claude Builder Club at New York University. Build AI-powered projects with Claude. All majors welcome.",
  metadataBase: new URL("https://claude-nyu.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: { title: "Claude at NYU — Builder Club", description: "Build, learn, and create with the Claude Builder Club at NYU.", url: "/", images: ["/collaboration-art-v2.webp"] },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/claude-logo.svg",
    apple: "/claude-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${sourceSerif.variable} ${dmSans.variable}`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
