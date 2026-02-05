import "./globals.css";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Query Coverage Validation",
  description:
    "A binary validation of whether a page fully answers its target query. No scores. No guessing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body className="bg-white text-black antialiased font-mono">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
