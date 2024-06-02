'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import {Josefin_Sans, Judson} from "next/font/google";

const judson = Judson({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const josefin_sans = Josefin_Sans({
    weight: '200',
    subsets: ['latin'],
    display: 'swap',
})

interface headerLinks {
    pathRoute : string;
    label : string;
}

const paths:headerLinks[] = [
    {
        pathRoute: "/dashboard",
        label: "DASHBOARD",
    },
    {
        pathRoute: "/gallery",
        label: "GALLERY",
    },
    {
        pathRoute: "/pricing",
        label: "PRICING",
    },
    {
        pathRoute: "/about",
        label: "ABOUT",
    },
]

export function Header() {
    return (
        <header style={{ background: "#162430" }} className={`flex flex-col text-nowrap m-0 p-0 ${judson.className}`}>
            <div
                style={{fontSize: 32, lineHeight: "40px" }}
                className="h-[41px] text-white text-center"
            >
                NICHOLAS NORBUTAS PHOTOGRAPHY
            </div>
        </header>
    );
}


export function Nav() {
    const route = usePathname();

    return (
        <nav
            className={`sticky top-0 flex flex-row justify-center gap-16 h-[40px] bg-[#162430] ${josefin_sans.className}`}
            style={{ background: "#162430", fontSize: 20, lineHeight: "40px" }}
        >
            {paths.map((path, index) => (
                <a
                    key={index}
                    href={path.pathRoute}
                    className={`hover:text-amber-400 ${path.pathRoute === route ? "text-amber-300" : "text-white"}`}
                >
                    {path.label}
                </a>
            ))}
        </nav>
    );
}
