import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Header, Nav} from "@/components/ui/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicholas Norbutas Photography",
  description: "Nicholas Norbutas Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{
          backgroundImage:
              'linear-gradient(to right, #AACCEE, #DACACE)',
      }}>
      <Header />
      <Nav />
      {children}
      </body>
    </html>
  );
}
