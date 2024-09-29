import {cn} from "@/lib/utils";
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
    IconCamera,
    IconDoor,
    IconHomeBolt,
    IconBellRinging,
    IconCircuitMotor,
    IconFingerprint,
    IconDeviceLaptop,
    IconBuildingWarehouse
} from "@tabler/icons-react";

export function ServicesSummary() {
    const features = [
        {
            title: "CCTV Camera Systems",
            description:
                "Professional installation and maintenance of high-quality surveillance cameras for constant monitoring.",
            icon: <IconCamera/>,
        },
        {
            title: "Garage Motors",
            description:
                "Supply and installation of reliable garage motors for smooth and secure operation.",
            icon: <IconDoor/>,
        },
        {
            title: "Electric Fence",
            description:
                "Robust electric fencing solutions to deter intruders and protect your property.",
            icon: <IconHomeBolt/>,
        },
        {
            title: "Alarm Systems",
            description: "Advanced alarm systems providing immediate alerts in case of any security breach.",
            icon: <IconBellRinging/>,
        },
        {
            title: "Gate Motors",
            description: "High-quality gate motors ensuring automated and secure access to your premises.",
            icon: <IconCircuitMotor/>,
        },
        {
            title: "Access Control - Biometric",
            description:
                "Cutting-edge biometric systems for accurate and secure access control.",
            icon: <IconFingerprint/>,
        },
        {
            title: "PC and Laptop Repairs",
            description:
                "Expert repair services for PCs and laptops to keep your devices running smoothly.",
            icon: <IconDeviceLaptop/>,
        },
        {
            title: "IT Equipment Supply",
            description: "Supply of essential IT networking equipment to ensure seamless connectivity and performance.",
            icon: <IconBuildingWarehouse/>,
        },
    ];
    return (
        <div className="screen-padding flex flex-col gap-y-4 my-12 mb-0 md:my-16">
            <h1 className="text-primary/90 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                Services We Offered
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index}/>
                ))}
            </div>
        </div>
    );
}

const Feature = (
    {
        title,
        description,
        icon,
        index,
    }: {
        title: string;
        description: string;
        icon: React.ReactNode;
        index: number;
    }) => {

    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
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
                    className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
