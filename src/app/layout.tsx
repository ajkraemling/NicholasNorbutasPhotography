import type {Metadata} from "next";
import {Josefin_Sans} from "next/font/google";
import "./globals.css";
import {Header, Nav} from "@/components/ui/Header";

const josefin_sans = Josefin_Sans({
    weight: '200',
    subsets: ['latin'],
    display: 'swap',
})

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
        <body className={josefin_sans.className} style={{
            backgroundImage:
                'linear-gradient(to right, #AACCEE, #DACACE)',
        }}>
        <Header/>
        <Nav/>
        {children}
        </body>
        </html>
    );
}
