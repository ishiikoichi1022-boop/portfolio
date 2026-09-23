import type { Metadata } from "next";
import { Space_Grotesk, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const mPlusRounded = M_PLUS_Rounded_1c({
  variable: "--font-rounded",
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ishii Koichi | Portfolio",
  description: "誰かの「こうしたい」を、動くかたちに。クライアントの要望をヒアリングし、使う人の立場で実装までやり切ります。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${spaceGrotesk.variable} ${mPlusRounded.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
