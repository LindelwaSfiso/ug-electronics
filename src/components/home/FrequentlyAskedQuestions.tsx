import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function FrequentlyAskedQuestions() {
    return (
        <div className="screen-padding my-32">

            <h1 className="text-primary/90 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                Frequently Asked Questions
            </h1>

            <div className="md:px-8 mt-8">
                <Accordion type="single" collapsible className="w-full" defaultValue="aboutUs">
                    <AccordionItem value="aboutUs">
                        <AccordionTrigger>UG Operating Hours</AccordionTrigger>
                        <AccordionContent>
                            Our operating hours are as follows:
                            <ul className="list-disc ps-8 py-2">
                                <li>Monday to Friday: 8:00 AM to 5:00 PM</li>
                                <li>Saturday: 8:00 AM to 1:00 PM</li>
                                <li>Sunday: Closed</li>
                            </ul>
                            We are dedicated to providing our services throughout Eswatini. Whether you’re in Manzini,
                            Mbabane, or any other region, we are here to assist you during these hours. If you have any
                            questions or need further assistance outside of these times, please feel free to contact us,
                            and we’ll get back to you as soon as possible.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="mission">
                        <AccordionTrigger>Where is UG located?</AccordionTrigger>
                        <AccordionContent>
                            UG is located at the Mbabane Industrial Site, opposite HiFiCorp, HW GlassWork Building,
                            Office Number 2.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="vision">
                        <AccordionTrigger>Do we accept lay-buys?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we do. Come to us, we can negotiate better terms.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </div>
    )
}