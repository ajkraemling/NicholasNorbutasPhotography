import Image from "next/image";
import PortraitImg from '@/components/images/portrait-nn.jpg';

export default function About() {
    return (
        <div className="flex flex-col h-full">
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <Image
                            src={PortraitImg}
                            alt="handsome face"
                            width={300}
                            height={300}
                            className="rounded-full w-48 h-48 object-cover"
                        />
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">John Doe</h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                I&apos;m a passionate photographer with a keen eye for capturing the beauty in everyday
                                moments. My work is a
                                reflection of my love for the world around me and my desire to share that with others.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="grid gap-4">
                            <h2 className="text-2xl font-bold">Experience</h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                With over 10 years of experience in the photography industry, I have honed my skills and
                                developed a
                                unique style that sets me apart. I&apos;ve had the privilege of working with a wide
                                range of clients, from
                                individuals to large corporations, capturing their stories and moments through my lens.
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <h2 className="text-2xl font-bold">Photography Style</h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                My photography style is a blend of candid and editorial, capturing the natural beauty of
                                my subjects
                                while also adding a touch of artistic flair. I&apos;m drawn to the interplay of light
                                and shadow, and I
                                strive to create images that evoke emotion and tell a story.
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <h2 className="text-2xl font-bold">Awards &amp; Achievements</h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                I&apos;m honored to have received several prestigious awards and recognitions for my
                                work, including the
                                International Photography Award and the National Geographic Photographer of the Year.
                                These accolades
                                are a testament to my dedication and passion for the craft of photography.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
