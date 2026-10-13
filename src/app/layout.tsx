import type { Metadata } from "next";
import { Space_Grotesk, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.scss";
import { baseOpenGraph } from "./shared-metadata";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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

const title = "Ishii Koichi | Portfolio";
const description = "誰かの「こうしたい」を、動くかたちに。クライアントの要望をヒアリングし、使う人の立場で実装までやり切ります。";

export const metadata: Metadata = {
  // OGP画像などのURLを https:// から始まる形にするための基準
  metadataBase: new URL("https://portfolio.formkite.net"),
  title,
  description,
  openGraph: { ...baseOpenGraph, title, description, url: "/" },
  // X（旧Twitter）で、画像を大きく表示するカードにする
  twitter: { card: "summary_large_image" },
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
