import "./globals.css";
import { PT_Sans, Open_Sans } from "next/font/google";
import localFont from "next/font/local";

const PTSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ptsans",
});
const OpenSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-opensans",
});
const OpenSansCondensed = localFont({
  src: [
    {
      path: "./OpenSans-CondLight.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./OpenSans-CondLightItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./OpenSans-CondBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-opensanscond",
});

export const metadata = {
  title: "Estevão Gomes",
  description: "Estevão Gomes - Desenvolvedor Front-End",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${PTSans.variable} ${OpenSans.variable} ${OpenSansCondensed.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
