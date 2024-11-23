"use client";
import "./globals.css";
import { Plus_Jakarta_Sans, Work_Sans, Source_Serif_4 } from "next/font/google";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Providers from "@/components/providers/Providers";

// Plus Jakarta Sans font family with 4 weights and 2 styles
const Jakarta_Sans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

// Work Sans font family with 4 weights and 2 styles
const work_Sans = Work_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

// Source Serif 4 font family with 4 weights and 2 styles
const source_Serif_4 = Source_Serif_4({
  weight: ["200", "300", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif-4",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning //required for the use of ThemeProvider by next-themes
      className={`${source_Serif_4.className} ${Jakarta_Sans.className} ${work_Sans.className} font-sans`}
    >
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
