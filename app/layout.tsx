import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" w-full h-full">
      <body className={inter.className + "grid w-full h-full"}>{children}</body>
    </html>
  );
}
