'use client'
import ClickablePicture from "@/components/ui/ClickablePicture";
import BWImg from '@/components/images/bw-nn.jpg';
import type {StaticImageData} from "next/image";
import VintageImg from "@/components/images/vintage-nn.jpg";
import PortraitImg from "@/components/images/portrait-nn.jpg";
import CarImg from "@/components/images/car-nn.jpg";
import {useEffect, useState} from "react";

interface GalleryTab {
    title: string;
    img: string | StaticImageData;
    description: string;
}

const galleryTabs: GalleryTab[] = [
    {
        title: "Vintage",
        img: VintageImg,
        description: "/gallery/vintage",
    },
    {
        title: "Portraits",
        img: PortraitImg,
        description: "/gallery/portraits",
    },
    {
        title: "Black and White",
        img: BWImg,
        description: "/gallery/black-white",
    },
    {
        title: "Cars",
        img: CarImg,
        description: "/gallery/cars",
    },
    {
        title: "Vintage",
        img: VintageImg,
        description: "/gallery/vintage",
    },
    {
        title: "Portraits",
        img: PortraitImg,
        description: "/gallery/portraits",
    },
    {
        title: "Black and White",
        img: BWImg,
        description: "/gallery/black-white",
    },
    {
        title: "Cars",
        img: CarImg,
        description: "/gallery/cars",
    }
];

export default function Page() {
    const [columns, setColumns] = useState(4);
    const [gallery, setGallery] = useState<GalleryTab[][]>([[], [], [], []]);
    useEffect(() => {
        function handleResize() {
            const oldColumns = columns;
            const cols = Math.min(4, Math.max(1, Math.floor(window.innerWidth / 400)));
            if (oldColumns !== cols) {
                setColumns(cols);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once to set initial columns based on the current window size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [columns]);

    useEffect(() => {
        const newGallery: GalleryTab[][] = Array.from({length: columns}, () => []);
        const columnHeights = Array(columns).fill(0); // Initialize column heights

        galleryTabs.forEach((tab) => {
            const {img} = tab;
            if (typeof img !== "string") {
                const aspectRatio = img.height / img.width;
                const height = aspectRatio * 400; // Estimate height based on fixed width (400)

                const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
                newGallery[shortestColumnIndex].push(tab);
                columnHeights[shortestColumnIndex] += height;
            }
        });

        setGallery(newGallery);
    }, [columns]);

    return (
            <div className={`grid grid-cols-${columns} p-2 gap-2`}>
                {gallery.map((column, index) => (
                    <div key={index}>
                        {column.map((tab, tabIndex) => (
                            <div key={tabIndex}>
                                <ClickablePicture img={tab.img} title={tab.title} description={tab.description}/>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
    );
}
