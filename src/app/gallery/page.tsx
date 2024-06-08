'use client'
import styles from "../styles.module.css";
import {useState} from "react";
import PortraitImg from '@/components/images/portrait-nn.png';
import VintageImg from '@/components/images/vintage-nn.jpg';
import BWImg from '@/components/images/bw-nn.jpg';
import CarImg from '@/components/images/car-nn.jpg';
import type {StaticImageData} from 'next/image';
import Image from 'next/image';

interface GalleryTab {
    title: string;
    img: string | StaticImageData;
}

const galleryTabs: GalleryTab[] = [
    {
        title: "Vintage",
        img: VintageImg
    },
    {
        title: "Portraits",
        img: PortraitImg
    },
    {
        title: "Black and White",
        img: BWImg
    },
    {
        title: "Car Photography",
        img: CarImg
    }
];

export default function Home() {
    const [sections, setSections] = useState(4)

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 m-4 gap-4">
            {galleryTabs.map((tab, key) => (
                <div
                    key={key}
                    className={`${styles.tabCard} relative h-[85vh] transition-transform duration-300 transform hover:scale-[103%] overflow-hidden`}
                    style={{
                        boxShadow: '-4px 4px 4px rgba(0, 0, 0, 0.25)', // x-offset y-offset blur-radius color
                    }}
                >
                    <Image
                        src={tab.img}
                        alt={tab.title}
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className={styles.tabTitle}>{tab.title}</div>
                </div>
            ))}
        </div>
    );
}
