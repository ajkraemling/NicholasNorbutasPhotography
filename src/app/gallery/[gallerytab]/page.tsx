import ClickablePicture from "@/components/ui/ClickablePicture";
import BWImg from '@/components/images/bw-nn.jpg';
import type {StaticImageData} from "next/image";
import VintageImg from "@/components/images/vintage-nn.jpg";
import PortraitImg from "@/components/images/portrait-nn.jpg";
import CarImg from "@/components/images/car-nn.jpg";


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

export default function Page(props: { params: { gallerytab: string } }) {

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-4 gap-4">

            {/*{props.params.gallerytab}*/}
            {galleryTabs.map((tab, key) => (
                <div key={key}>
                    <ClickablePicture img={tab.img} title={tab.title} description={tab.description} />
                </div>
            ))}
        </div>
    );
}
