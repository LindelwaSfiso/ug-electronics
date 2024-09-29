import React from "react";
import ContactUs from "@/components/home/ContactUs";
import UgMapLocation from "@/components/common/UgMapLocation";
import {cn} from "@/lib/utils";
import {IconBellRinging, IconCamera, IconDoor, IconFingerprint} from "@tabler/icons-react";

export default function ServicesOverView() {
    return (
        <div className="screen-padding mx-auto my-16">

            <h1 className="text-primary/90 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                Services We Offer
            </h1>


            <div className="my-16">

                <ServiceFeature
                    title={"CCTV Camera Systems Installation"}
                    description={
                        <>
                            <p>
                                Professional installation and maintenance of high-quality surveillance cameras for
                                constant monitoring.
                            </p>
                            <p>
                                CCTV (Closed-circuit television) cameras work by capturing video footage through a
                                camera, which then transmitted to a monitoring or recording device.
                            </p>
                            <h4 className="text-lg mt-8 font-bold">Benefits:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4">
                                {
                                    CCTV_CARDS.map((card, index) => {
                                        return (
                                            <CctvCard
                                                key={index}
                                                title={card.title} description={card.description}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </>
                    }
                    icon={<IconCamera/>}
                    index={0}/>


                <ServiceFeature
                    title={"Garage Motors"}
                    description={
                        <>
                            <p>
                                Supply and installation of reliable garage motors for smooth and secure operation.
                            </p>
                            <p>
                                Garage Motors, or garage door openers, are devices that automate the opening and closing
                                of garage doors. They typically consists of a motor, a drive system (chain, belt) and a
                                control system.
                            </p>
                            <h4 className="text-lg mt-8 font-bold">Benefits:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
                                {
                                    GARAGE_CARDS.map((card, index) => {
                                        return (
                                            <CctvCard
                                                key={index}
                                                title={card.title} description={card.description}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </>
                    }
                    icon={<IconDoor/>}
                    index={1}/>


                <ServiceFeature
                    title={"Alarm Systems Installations"}
                    description={
                        <>
                            <p>
                                Advanced alarm systems providing immediate alerts in case of any security breach.
                            </p>
                            <p>
                                Alarm system is a security device designed to detect and alert home owners or property
                                managers to unauthorized access or emergencies.
                            </p>
                            <h4 className="text-lg mt-8 font-bold">Benefits:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
                                {
                                    ALARMS_CARDS.map((card, index) => {
                                        return (
                                            <CctvCard
                                                key={index}
                                                title={card.title} description={card.description}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </>
                    }
                    icon={<IconBellRinging/>}
                    index={2}/>


                <ServiceFeature
                    title={"Access Control - Biometric"}
                    description={
                        <>
                            <p>
                                Cutting-edge biometric systems for accurate and secure access control.
                            </p>
                            <p>
                                Biometrics in access control refers to using unique physiological or behavioral
                                characteristics to verify an individual&apos;s identity.
                            </p>
                            <h4 className="text-lg mt-8 font-bold">Benefits:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
                                {
                                    ACCESS_CONTROL_CARDS.map((card, index) => {
                                        return (
                                            <CctvCard
                                                key={index}
                                                title={card.title} description={card.description}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </>
                    }
                    icon={<IconFingerprint/>}
                    index={3}/>

            </div>


            <UgMapLocation/>

            <div className="flex flex-col mt-20 mb-10">
                <h1 className="text-primary/90 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                    Let&apos;s Talk
                </h1>
                <p className="text-base text-muted-foreground mt-4">
                    Got a project on your mind? Let&apos;s discuss about the details.
                </p>

            </div>

            <ContactUs/>

        </div>
    )
}


const ServiceFeature = (
    {
        title,
        description,
        icon,
        index,
    }: {
        title: string;
        description: React.ReactNode;
        icon: React.ReactNode;
        index: number;
    }) => {

    return (
        <div
            className={cn(
                "flex flex-col py-10 mb-16 lg:border-l relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"/>
            )}
            {index >= 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"/>
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div
                    className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center"/>
                <span
                    className="text-lg md:text-xl transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-300 relative z-10 px-10">
                {description}
            </div>
        </div>
    );
};


const CCTV_CARDS = [
    {
        title: "Enhanced Security",
        description: "CCTV deter criminal activity by providing visible surveillance, which can discourage theft, vandalism and other crime."
    },
    {
        title: "Evidence collection",
        description: "CCTV Cameras capture footage that can be used as evidence in investigations or legal proceedings, helping to identify suspects and clarify incidents."
    },
    {
        title: "Real-time Monitoring",
        description: "They allow for live monitoring of premises, enabling immediate response to suspicious activities."
    },
    {
        title: "Remote Access",
        description: "Offers remote access via smartphones or computers, allowing user to view live or recorded footage from anywhere."
    },
    {
        title: "Improved Safety",
        description: "They monitor areas such as entrance, parking lots, and hazardous locations, improving overall safety for both employees abd the public."
    },
    {
        title: "Operational Insights",
        description: "In businesses, cctv can hel monitor operations, assess employee performance and optimize workflow."
    },
    {
        title: "Insurance Benefits",
        description: "Having cctv can sometimes lower insurance premiums or assist in claims by providing clear documentation of incidents."
    }
]


const GARAGE_CARDS = [
    {
        title: "Convince & Efficiency",
        description: "Automates the process of opening and closing the garage door, allowing you to operate it using a remote,smartphone app, or wall-mounted switch, which is especially useful in adverse weather conditions or when carrying items."
    },
    {
        title: "Safety & Security",
        description: "Comes with safety features like auto-reverse mechanisms that prevent the door from closing on objects or people. Some models include motion sensors to detect obstacles."
    },
]

const ALARMS_CARDS = [
    {
        title: "Enhanced Security",
        description: "Helps deter potential intruders by signaling that the property is protected. They can alert security services or owners to unauthorized access or suspicious activity."
    },
    {
        title: "Emergency Response",
        description: "In an event of a break-in, fire or other emergencies, alarm systems can automatically notify emergency services, providing a rapid response that can minimize damage and enhance safety."
    },
]


const ACCESS_CONTROL_CARDS = [
    {
        title: "Enhanced Security",
        description: "Prevents unauthorized entry and protect sensitive information or arenas."
    },
    {
        title: "Improved Monitoring",
        description: "Access control systems often include logging and reporting features, allowing organizations to monitor who accessed certain areas and when."
    },
    {
        title: "Flexibility",
        description: "Access control systems can be tailored to fit different levels of security and can be adjusted as organizational needs change."
    },
    {
        title: "Audit trail",
        description: "Detailed logs provide a history of access control events, which can be useful for auditing, compliance and investigating security incidents."
    },
]


const CctvCard = ({title, description}: { title: string; description: string; }) => {
    return (
        <div className="text content border rounded-2xl p-4">
            <h1 className="font-semibold text-base md:text-lg relative z-10">
                {title}
            </h1>
            <p className="font-normal text-sm relative z-10 my-2">
                {description}
            </p>
        </div>
    )
}