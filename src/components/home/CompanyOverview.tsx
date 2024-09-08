import {ImagesCardStack} from "@/components/ui/images-card-stack";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function CompanyOverview() {
    return (
        <div className="container mx-auto my-32">

            <h1 className="text-primary/90 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                Company Overview
            </h1>

            <div className="flex flex-row w-full pr-10 gap-x-24 mt-8">

                <div className="flex-1">

                    <Accordion type="single" collapsible className="w-full" defaultValue="aboutUs">
                        <AccordionItem value="aboutUs">
                            <AccordionTrigger>About Us</AccordionTrigger>
                            <AccordionContent>
                                Umfezi Investments (PTY) LTD / UG Electronics is a 100% Swazi owned company with its
                                main office in Mbabane, Eswatini.
                                We specialize in security (CCTV, intercoms, alarm systems, biometrics, gate motors,
                                garage motors), technology (pc and laptops repair), safety (fire detection systems, fire
                                extinguisher and fire blankets) products and services.
                                <br/>
                                Our mandate is to provide supreme quality products and services to all clients.
                                Our clients recognize our commitment and passion to deliver the highest quality work on
                                schedule and within budget.
                                Strongest procedures are enforced at every step of every job as we continue our drive to
                                improve performance and exceed client expectations.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="mission">
                            <AccordionTrigger>Mission & Objective</AccordionTrigger>
                            <AccordionContent>
                                To form long term relationships of value with our clients and partners by providing
                                quality products & services and employing the best resources and latest techniques.
                                <br/>
                                UG Electronics aim to provide the highest possible statement of quality products and
                                services in our industry, giving clients the best satisfaction.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="vision">
                            <AccordionTrigger>Vision</AccordionTrigger>
                            <AccordionContent>
                                To be the leader in our industry, by creating value added products and services that are
                                recognized by our customers as key factors in their success.
                                Our commitment is to continually earn customers loyalty through exceptional services
                                provides by our dedicated employees.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                </div>


                <div className={"w-96 h-80"}>
                    <ImagesCardStack
                        offset={20}
                        scaleFactor={0.1}
                        items={[
                            {
                                id: "image-1",
                                content: <CompanyOverviewImage
                                    src={"/company/ug-electronics-2.jpg"}
                                    title={""}/>
                            },
                            {
                                id: "image-1",
                                content: <CompanyOverviewImage
                                    src={"/company/ug-electronics-1.jpg"}
                                    title={""}/>
                            },
                            {
                                id: "image-1",
                                content: <CompanyOverviewImage
                                    src={"/company/ug-electronics-3.jpg"}
                                    title={""}/>
                            }
                        ]}/>
                </div>

            </div>

        </div>
    )
}

function CompanyOverviewImage({src, title}: { src: string; title: string; }) {
    return (
        <img
            alt={title}
            src={src}
            className="h-full w-full object-cover rounded-3xl"/>
    )
}