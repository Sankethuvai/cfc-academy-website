import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CFC Excellence Cricket Academy | Hyderabad",
  description:
    "Train with professional cricket coaches in Hyderabad. Skill development, fitness, discipline, and match-focused programs at CFC Excellence Cricket Academy.",
  keywords: [
    "Cricket academy Hyderabad",
    "Cricket coaching Aramghar",
    "CFC Excellence",
    "Cricket training for kids",
    "Professional cricket coaching",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
