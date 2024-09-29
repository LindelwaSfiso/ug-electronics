import Link from "next/link";
import SlideUpTransition from "@/transitions/slide-up";

type ImagesType = {
    title: string;
    src: string;
    hoverSrc?: string;
}

const images: ImagesType[] = [
    {
        title: "IP CCTV Cameras",
        src: "/products/hikvision-camera-dome.png",
        hoverSrc: "/products/hikvision-camera-1.png"
    },
    {
        title: "PTZ CCTV Cameras",
        src: "/products/hikvision-camera-ptz.png",
    },
    {
        title: "Access Control",
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
            <div className="my-16 flex flex-col lg:flex-row gap-2 screen-padding">

                <div className="flex-1 bg-gray-50 flex flex-col p-8 rounded-xl border border-gray-200">
                    <span
                        className="uppercase text-xs font-bold text-muted-foreground">Comprehensive Security Solutions</span>
                    <h1 className="text-primary/90 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mt-2">
                        Protect Your Home & Business
                    </h1>
                    <p className="text-sm md:text-base text-gray-600 mt-4">
                        Safeguard your home or business with our integrated security systems. Our CCTV cameras provide
                        constant surveillance, deterring potential intruders and capturing crucial footage. Biometric
                        access
                        control ensures that only authorized individuals can enter your premises, enhancing security and
                        reducing unauthorized access. Our alarm systems offer immediate alerts in case of any breach,
                        allowing for quick response and minimizing potential damage. Trust us to deliver a comprehensive
                        security solution that keeps your property safe and secure.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    {
                        images.map((image, index) => (
                            <Link href="/products"
                                  className="relative border border-gray-200 rounded-xl group transition-all ease-in-out hover:border-red-400 overflow-hidden flex justify-center items-center"
                                  key={index}>
                                <img
                                    alt={image.title}
                                    src={image.src}
                                    className="md:h-56 lg:h-40 lg:w-48 xl:w-64 py-2 object-contain group-hover:scale-110"/>

                                <p className="absolute bottom-0 p-2 bg-gray-50 text-gray-500 backdrop-blur-sm w-full text-sm md:text-base rounded-b-xl border border-gray-200 group-hover:bg-red-100 group-hover:border-0">
                                    {image.title}
                                </p>
                            </Link>
                        ))
                    }
                </div>

            </div>
        </SlideUpTransition>
    )
}
