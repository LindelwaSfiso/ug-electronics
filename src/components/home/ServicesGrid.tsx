import Link from "next/link";
import SlideUpTransition from "@/transitions/slide-up";

type ImagesType = {
    title: string;
    src: string;
    hoverSrc?: string;
}

const images: ImagesType[] = [
    {
        title: "Network CCTV Cameras",
        src: "/products/hikvision-camera-dome.png",
        hoverSrc: "/products/hikvision-camera-1.png"
    },
    {
        title: "PTZ CCTV Cameras",
        src: "/products/hikvision-camera-ptz.png",
    },
    {
        title: "Access Control-Biometric",
        src: "/products/hikvision-biometric.png",
    },
    {
        title: "Gate Motors",
        src: "/products/centurion-d10.jpg",
    },
]


export default function ServicesGrid() {
    return (
        <SlideUpTransition>
            <div className="my-16 grid grid-rows-2 grid-flow-col gap-2 container mx-auto">

                <div className="row-span-2 bg-gray-100 flex flex-col p-4 rounded-xl">
                    <span
                        className="uppercase text-xs font-bold text-muted-foreground">Comprehensive Security Solutions</span>
                    <h1 className="text-lg md:text-xl lg:text-2xl text-red-500 font-bold tracking-tight leading-none mt-2">
                        Protect Your Home/Business
                    </h1>
                    <p className="text-sm md:text-base text-slate-800 tracking-tight leading-none mt-4">
                        Safeguard your home or business with our integrated security systems. Our CCTV cameras provide
                        constant surveillance, deterring potential intruders and capturing crucial footage. Biometric
                        access
                        control ensures that only authorized individuals can enter your premises, enhancing security and
                        reducing unauthorized access. Our alarm systems offer immediate alerts in case of any breach,
                        allowing for quick response and minimizing potential damage. Trust us to deliver a comprehensive
                        security solution that keeps your property safe and secure.
                    </p>
                </div>

                {
                    images.map((image, index) => (
                        <Link href="/products"
                              className="relative row-span-1 col-span-1 border border-gray-200 rounded-xl group transition-all ease-in-out hover:border-red-400"
                              key={index}>
                            <img
                                alt={image.title}
                                src={image.src}
                                className="h-40 py-2 w-72 object-contain group-hover:scale-110"/>

                            <p className="absolute bottom-0 p-2 bg-gray-100 backdrop-blur-sm w-full text-sm md:text-base rounded-b-xl border border-gray-200 group-hover:bg-red-100 group-hover:border-0">
                                {image.title}
                            </p>
                        </Link>
                    ))
                }

            </div>
        </SlideUpTransition>
    )
}
