import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image, {type StaticImageData} from "next/image";
import BWImg from "@/components/images/bw-nn.jpg";

export default function ClickablePicture(props: {
    img: string | StaticImageData,
    title: string,
    description: string,
    date?: string,
    location?: string
}) {
    return (
        <Dialog>
            <DialogTrigger>
                {/*<button>*/}
                    <Image
                        src={props.img}
                        alt={props.title}
                        objectFit="cover"
                        className="rounded-xl  group-hover:scale-105 transition-transform duration-300"
                    />
                {/*</button>*/}
            </DialogTrigger>
        </Dialog>

    );
}