import React from "react";
import {cn} from "@/lib/utils";

export default function CompanyOverview() {
    return (
        <div className="container mx-auto my-32">

            <h1 className="text-primary/90 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                Company Overview
            </h1>

            <div className="my-10">
                {
                    companyOverviewItems.map((item, index) => (
                        <div
                            className={
                                cn("flex flex-col md:flex-row gap-4 my-16 items-center",
                                    index % 2 !== 0 && "md:flex-row-reverse"
                                )}
                        >
                            <div className="col-span-1 flex-1 flex flex-col gap-4">
                                <h2 className="text-lg font-semibold">
                                    {item.header}
                                </h2>
                                {item.description}
                            </div>

                            <div className="col-span-1 h-full w-[400px]">
                                <CompanyOverviewImage src={item.image} title={item.header}/>
                            </div>
                        </div>
                    ))
                }
            </div>


            <div className="flex flex-col my-20">

                <h1 className="text-primary/90 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                    Let's Talk
                </h1>
                <p className="text-base text-muted-foreground mt-4">
                    Got a project on your mind? Let's discuss about the details.
                </p>

            </div>

        </div>
    )
}

function CompanyOverviewImage({src, title}: { src: string; title: string; }) {
    return (
        <img
            alt={title}
            src={src}
            className="h-full w-full object-cover rounded-xl"/>
    )
}

function CompanyOverviewDescription({description}: { description: string; }) {
    return (
        <p className="text-base text-muted-foreground">
            {description}
        </p>
    )
}


const companyOverviewItems: { image: string; header: string; description: React.ReactNode }[] = [
    {
        image: '/company/ug-electronics-1.jpg',
        header: "About UG Electronics",
        description: <>
            <CompanyOverviewDescription
                description={"Umfezi Investments (PTY) LTD / UG Electronics is a 100% Swazi owned company with its main office in Mbabane, Eswatini. We specialize in security (CCTV, intercoms, alarm systems, biometrics, gate motors, garage motors), technology (pc and laptops repair), safety (fire detection systems, fire extinguisher and fire blankets) products and services."}/>
            <CompanyOverviewDescription
                description={"Our mandate is to provide supreme quality products and services to all clients. Our clients recognize our commitment and passion to deliver the highest quality work on schedule and within budget. Strongest procedures are enforced at every step of every job as we continue our drive to improve performance and exceed client expectations."}/>
        </>
    },
    {
        image: '/company/ug-electronics-2.jpg',
        header: "Our Mission & Objectives",
        description: <>
            <CompanyOverviewDescription
                description={"To form long term relationships of value with our clients and partners by providing quality products & services and employing the best resources and latest techniques."}/>
            <CompanyOverviewDescription
                description={"UG Electronics aim to provide the highest possible statement of quality products and services in our industry, giving clients the best satisfaction."}/>
        </>
    },
    {
        image: '/company/ug-electronics-3.jpg',
        header: "Vision",
        description: <>
            <CompanyOverviewDescription
                description={"To be the leader in our industry, by creating value added products and services that are recognized by our customers as key factors in their success. Our commitment is to continually earn customers loyalty through exceptional services provides by our dedicated employees."}/>

        </>
    }
]
