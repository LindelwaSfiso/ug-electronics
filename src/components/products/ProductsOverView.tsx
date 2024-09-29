import React from "react";
import ContactUs from "@/components/home/ContactUs";


const products = [
    {
        id: 1,
        name: 'Thermal & Optical Bi-spectrum Network Bullet Camera',
        imageSrc: '/products/supply/2637P.jpeg',
        imageAlt: "Thermal & Optical Bi-spectrum Network Bullet Camera",
    },
    {
        id: 2,
        name: 'UltraLAN Outdoor CAT6 FTP with drain wire (500m)',
        imageSrc: '/products/supply/CAB-STP6ODU.jpg',
        imageAlt: "UltraLAN Outdoor CAT6 FTP with drain wire (500m)",
    },
    {
        id: 3,
        name: 'Trunking',
        imageSrc: '/products/supply/trunking_cat.jpg',
        imageAlt: "Trunking",
    },
    {
        id: 4,
        name: '12V 7.2A Sealed Lead Acid Battery',
        imageSrc: '/products/supply/P-BAT-12V7AH.jpg',
        imageAlt: "12V 7.2A Sealed Lead Acid Battery",
    },
    {
        id: 5,
        name: 'Dahua 8-Port Unmanaged Ethernet Switch (DH-PFS3008-8ET-V2)',
        imageSrc: '/products/supply/DH-PFS3008-8ET-V2-2-258x258.jpg',
        imageAlt: "Dahua 8-Port Unmanaged Ethernet Switch (DH-PFS3008-8ET-V2)",
    },
    {
        id: 6,
        name: '8 MP Smart Hybrid Light with ColorVu Motorized PTRZ ',
        imageSrc: '/products/supply/hikvision-1.jpeg',
        imageAlt: "8 MP Smart Hybrid Light with ColorVu Motorized PTRZ ",
    },
]


export default function ProductsOverView() {
    return (
        <div className="screen-padding mx-auto my-16">

            <h1 className="text-primary/90 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                Products We Supply
            </h1>


            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <div key={product.id} className="group relative">
                        <div
                            className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <p>
                                        <span aria-hidden="true" className="absolute inset-0"/>
                                        {product.name}
                                    </p>
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className="flex flex-col mt-20 mb-10">
                <h1 className="text-primary/90 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                    Let's Talk
                </h1>
                <p className="text-base text-muted-foreground mt-4">
                    Got a project you're building? Contact us today and we can talk about how we can supply you at
                    affordable prices.
                </p>

            </div>

            <ContactUs/>

        </div>
    )
}
