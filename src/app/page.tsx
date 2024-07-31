import Link from "next/link"
import PortraitImg from '@/components/images/portrait-nn.jpg';
import VintageImg from '@/components/images/vintage-nn.jpg';
import BWImg from '@/components/images/bw-nn.jpg';
import CarImg from '@/components/images/car-nn.jpg';
import Image from "next/image";

export default function Home() {
  return (
      <div className="flex flex-col">
        <section className="w-full bg-gray-100 dark:bg-gray-800 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Image
                  src={PortraitImg}
                  width={600}
                  height={800}
                  alt="Photographer"
                  className="mx-auto rounded-xl object-cover aspect-[3/4]"
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">John Doe</h1>
              <p className="text-gray-500 dark:text-gray-400 max-w-[600px]">
                John Doe is a talented photographer with a passion for capturing the beauty of the world
                around him. With
                an eye for detail and a keen sense of composition, he creates stunning images that tell a
                story and evoke
                emotion.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="#" className="group" prefetch={false}>
                <Image
                    src={BWImg}
                    width={600}
                    height={400}
                    alt="Photo 1"
                    className="rounded-xl object-cover aspect-[3/2] group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <Image
                    src={VintageImg}
                    width={600}
                    height={400}
                    alt="Photo 2"
                    className="rounded-xl object-cover aspect-[3/2] group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <Image
                    src={CarImg}
                    width={600}
                    height={400}
                    alt="Photo 3"
                    className="rounded-xl object-cover aspect-[3/2] group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
