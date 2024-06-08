import styles from "../styles.module.css";
import PortraitImg from '@/components/images/portrait-nn.jpg';
import VintageImg from '@/components/images/vintage-nn.jpg';
import BWImg from '@/components/images/bw-nn.jpg';
import CarImg from '@/components/images/car-nn.jpg';
import type {StaticImageData} from 'next/image';
import Image from 'next/image';
import Link from "next/link";

interface GalleryTab {
    title: string;
    img: string | StaticImageData;
    newSrc: string;
}

const galleryTabs: GalleryTab[] = [
    {
        title: "Vintage",
        img: VintageImg,
        newSrc: "/gallery/vintage",
    },
    {
        title: "Portraits",
        img: PortraitImg,
        newSrc: "/gallery/portraits",
    },
    {
        title: "Black and White",
        img: BWImg,
        newSrc: "/gallery/black-white",
    },
    {
        title: "Cars",
        img: CarImg,
        newSrc: "/gallery/cars",
    }
];

export default function Home() {

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 m-4 gap-4">
            {galleryTabs.map((tab, key) => (
                <Link href={tab.newSrc}
                      key={key}
                      className={`${styles.tabCard} rounded-none flex relative h-[83vh] transition-transform duration-300 transform hover:scale-[103%] overflow-hidden`}
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
                    <div className={`${styles.tabTitle}  text-black text-wrap text-5xl font-bold`}>{tab.title}</div>
                </Link>
            ))}
        </div>
    );
}
