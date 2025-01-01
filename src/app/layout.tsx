import type { Metadata } from "next";
import { New_Tegomin, Noto_Serif_JP } from "next/font/google";

const TITLE = "react-minolith-nextjs-example";
const DESCRIPTION = "react-minolith Next.js example.";

const NewTegomin = New_Tegomin({
  subsets: ["latin"],
  variable: "--font-family-new-tegomin",
  weight: "400",
});

const NotoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-family-noto-serif-jp",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: "%s / react-minolith-nextjs-example",
  },
  description: DESCRIPTION,
  robots: {
    index: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${NotoSerifJp.variable} ${NewTegomin.variable}`}>
        {children}
      </body>
    </html>
  );
}

