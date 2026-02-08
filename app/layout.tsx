import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lineSeedJP = localFont({
  src: [
    {
      path: "./fonts/LINESeedJP_OTF_Th.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/LINESeedJP_OTF_Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/LINESeedJP_OTF_Bd.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/LINESeedJP_OTF_Eb.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-line-seed-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "しくみスタジオ | AI・DXで中小企業の変革を支援",
  description:
    "しくみスタジオは、AI・DXコンサルティング、AIコミュニティ運営、セミナー事業を通じて中小企業のビジネス変革を支援します。",
  openGraph: {
    title: "しくみスタジオ | AI・DXで中小企業の変革を支援",
    description:
      "AI・DXコンサルティング、AIコミュニティ運営、セミナー事業を通じて中小企業のビジネス変革を支援します。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${lineSeedJP.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
