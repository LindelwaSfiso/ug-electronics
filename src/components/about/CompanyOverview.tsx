import React from "react";
import BrandsSection from "@/components/home/BrandsSection";
import ContactUs from "@/components/home/ContactUs";
import MissionVisionCards from "@/components/about/MissionVisionCards";
import UgMapLocation from "@/components/common/UgMapLocation";

export default function CompanyOverview() {
    return (
        <div className="screen-padding mx-auto my-16">

            <h1 className="text-primary/90 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                Company Overview
            </h1>


            {/* about ug electronics */}
            <div className="my-10 mt-16">
                <div className="grid lg:grid-rows-2 grid-col-2 lg:grid-flow-col lg:gap-1">
                    <div className="row-span-2 col-span-2 lg:col-span-3">
                        <span className="uppercase text-xs font-bold text-muted-foreground">
                            About UG Electronics
                        </span>
                        <h1 className="text-primary/90 text-base md:text-xl lg:text-xl font-bold tracking-tight leading-none mt-2">
                            We Provide security With Smart Features since 2014
                        </h1>
                        <div className="text-sm md:text-base text-gray-600 mt-4 mb-4 lg:mb-0 pr-0 lg:pr-4">
                            Umfezi Investments (PTY) LTD / UG Electronics is a 100% Swazi owned company with its main
                            office in Mbabane, Eswatini. We specialize in security (CCTV, intercoms, alarm systems,
                            biometrics, gate motors, garage motors), technology (pc and laptops repair), safety (fire
                            detection systems, fire extinguisher and fire blankets) products and services.
                            <br/><br/>
                            Our mandate is to provide supreme quality products and services to all clients. Our clients
                            recognize our commitment and passion to deliver the highest quality work on schedule and
                            within budget. Strongest procedures are enforced at every step of every job as we continue
                            our drive to improve performance and exceed client expectations.
                            <br/><br/>
                            <span
                                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                Security
                                </span>
                            <span
                                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                CCTV
                                </span>
                            <span
                                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                Safety
                                </span>
                            <span
                                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                Alarm Systems
                                </span>
                            <span
                                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                Garage Motors
                                </span>
                        </div>
                    </div>
                    <div className="col-span-2 lg:row-span-1 h-[12rem] mb-1 lg:mb-0">
                        <img
                            alt=""
                            src="/company/ug-electronics-2.jpg"
                            className="h-full w-full object-cover"/>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <img
                            alt=""
                            src="/company/ug-electronics-1.jpg"
                            className="h-full w-full object-cover"/>
                    </div>
                    <div className="ml-1 lg:ml-0 col-span-1">
                        <img
                            alt=""
                            src="/company/ug-electronics-3.jpg"
                            className="h-full w-full object-cover"/>
                    </div>
                </div>
            </div>

            <BrandsSection/>


            <div className="mt-10">
                <MissionVisionCards/>
            </div>

            <UgMapLocation/>

            <div className="flex flex-col mt-20 mb-10">
                <h1 className="text-primary/90 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                    Let's Talk
                </h1>
                <p className="text-base text-muted-foreground mt-4">
                    Got a project on your mind? Let's discuss about the details.
                </p>

            </div>

            <ContactUs/>

        </div>
    )
}
