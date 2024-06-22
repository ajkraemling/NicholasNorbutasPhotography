'use client'
import React, {useEffect, useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import {Judson} from "next/font/google";
import {Car} from "lucide-react";

const judson = Judson({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

interface headerLinks {
    pathRoute: string;
    label: string;
}

const paths: headerLinks[] = [
    {
        pathRoute: "/",
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
        <header style={{background: "#162430"}} className={`flex flex-col text-wrap m-0 px-2 ${judson.className}`}>
            <div
                style={{fontSize: 32, lineHeight: "40px"}}
                className="h-[auto] text-white text-center text-wrap "
            >
                NICHOLAS NORBUTAS PHOTOGRAPHY
            </div>
        </header>
    );
}


export function Nav() {
    const pathname = usePathname();
    const router = useRouter();
    const [currentPath, setCurrentPath] = useState(pathname);

    useEffect(() => {
        if (pathname !== currentPath) {
            setCurrentPath(pathname);
        }
    }, [currentPath, pathname]);

    const handleLinkClick = (path: string) => {
        if (path !== pathname) {
            setCurrentPath(path); // Temporarily set for animation
            router.push(path);
        }
    };

    return (
        <nav className="sticky top-0 flex flex-col items-center bg-[#162430] z-10 px-[5vw] md:px-[10vw] lg:px-[20vw] text-center shadow-md w-[100%] overflow-clip">
            <div className="flex w-full justify-around">
                {paths.map((path, index) => (
                    <a
                        key={index}
                        onClick={() => handleLinkClick(path.pathRoute)}
                        className={`hover:text-amber-400 py-2 w-full cursor-pointer ${path.pathRoute === pathname ? "text-amber-300" : "text-white"}`}
                    >
                        {path.label}
                    </a>
                ))}
            </div>
            <div className="relative w-full">
                <div
                    className={`absolute -bottom-2 flex w-full`}
                    style={{
                        marginLeft: `${(paths.findIndex(p => p.pathRoute === currentPath)) * 25}%`,
                        transition: "margin-left 1s cubic-bezier(.1,.85,.1,1)"
                    }}
                >
                    <div style={{
                        width: "25%",
                        backgroundColor: "#A55B5E",
                        height: "5px",
                        alignSelf: "center",
                        marginTop: "3px",
                    }}></div>
                    <Car className="fill-amber-50 text-amber-800"
                         style={{ color: "#632d2d", fill: "#934e4e", transform: "translateX(-70%) translateY(-17%)" }} />
                </div>
            </div>
        </nav>
    );
}