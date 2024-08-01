'use client'
import React, {useEffect, useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import {Judson} from "next/font/google";
import {Car} from "lucide-react";
import "./Header.css";

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
    const [isShaking, setIsShaking] = useState(false);
    const [isWheelie, setIsWheelie] = useState(false);
    const [side, setSide] = useState(false); // false is left, true is right
    const [changed, setChanged] = useState(false);
    const [transitioning, setTransitioning] = useState(false); // Track if a transition is in progress
    const [barPosition, setBarPosition] = useState('right'); // 'right' or 'left'

    useEffect(() => {
        if (pathname !== currentPath) {
            setCurrentPath(pathname);
        }
    }, [pathname, currentPath]);

    const handleLinkClick = (path : string, i : number) => {
        if (transitioning || path === pathname) return; // Prevent new link changes during transition

        const routeI = paths.findIndex(rt => rt.pathRoute === pathname);
        // console.log("Before UseEffect: isShaking, isWheelie, side, changed: ", isShaking, isWheelie, side, changed);

        if (routeI < i && !side) { // if link is on left, and car is on right
            setChanged(true);
            setSide(true);
            setBarPosition('left');
        } else if (routeI > i && side) { // if link is on right, and car is on left
            setChanged(true);
            setSide(false);
            setBarPosition('right');
        } else {
            setChanged(false);
        }

        setIsShaking(true);
        setTransitioning(true); // Set transitioning state

        setTimeout(() => {
            setIsShaking(false);
            setChanged(false);
            setIsWheelie(true);
            setCurrentPath(path);
            router.push(path);

            setTimeout(() => {
                setIsWheelie(false);
                setTransitioning(false); // Reset transitioning state after animations complete
            }, 1000); // Duration of the wheelie animation
        }, 500); // Duration of the shake animation
    };

    return (
        <nav className="sticky top-0 flex flex-col items-center bg-[#162430] z-10 px-[5vw] md:px-[10vw] lg:px-[20vw] text-center shadow-md w-[100%] overflow-clip">
            <div className="flex w-full justify-around">
                {paths.map((path, index) => (
                    <a
                        key={index}
                        onClick={() => {
                            handleLinkClick(path.pathRoute, index)
                        }}
                        className={`hover:text-amber-400 py-2 w-full hover:cursor-pointer ${(pathname.includes(path.pathRoute) && path.pathRoute != "/") || (path.pathRoute === pathname) ? "text-amber-300" : "text-white"}`}
                    >
                        {path.label}
                    </a>
                ))}
            </div>
            <div className="relative w-full">
                <div
                    className={`absolute -bottom-2 flex w-full car-go`}
                    style={{
                        marginLeft: `${(paths.findIndex(p => (pathname.includes(p.pathRoute) && p.pathRoute != "/") || (p.pathRoute === pathname))) * 25}%`,
                        transition: "margin-left 1.5s cubic-bezier(0.6, 0.05, 0.28, 1)"
                    }}
                >
                    <div style={{
                        width: "25%",
                        backgroundColor: "#A55B5E",
                        height: "5px",
                        alignSelf: "center",
                        marginTop: "3px",
                    }}></div>
                    <Car
                        className={`fill-amber-50 text-amber-800 
                        ${isShaking ? (changed ? (side ? 'car-shake-left-to-right' : 'car-shake-right-to-left') : (side ? 'car-shake-right' : 'car-shake-left')) : ''} 
                        ${isWheelie ? side ? 'car-wheelie-right' : 'car-wheelie-left' : ''} 
                        ${!side ? 'scale-x-100' : '-scale-x-100'} 
                        `}
                        style={{color: "#632d2d", fill: "#934e4e", transform: `translateX(-30%) translateY(-17%) ${!side ? "scaleX(-100%)" : "scaleX(100%)"}`}}/>
                </div>
            </div>
        </nav>
    );
}