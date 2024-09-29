import Marquee from "react-fast-marquee";


const BRAND_IMAGES: string[] = [
    "/brands/brands-01.png",
    "/brands/brands-02.png",
    "/brands/brands-03.png",
    "/brands/brands-04.png",
    "/brands/brands-06.png",
    "/brands/brands-07.png",
    "/brands/brands-08.png",
    "/brands/brands-09.png",
]

export default function BrandsSection() {
    return (
        <Marquee pauseOnHover={true} loop={0} className="my-8 md:my-16">
            {
                BRAND_IMAGES.map((imgSrc, index) => (
                    <img
                        key={index}
                        src={imgSrc}
                        alt={imgSrc}
                        className="object-contain w-[60%] h-[96px]"
                        height={100} width={100}/>
                ))
            }
        </Marquee>
    )
}