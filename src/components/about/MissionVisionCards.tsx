import React from "react";
import {useId} from "react";
import {GoGoal} from "react-icons/go";
import {CiViewList} from "react-icons/ci";
import {TfiTarget} from "react-icons/tfi";

export function MissionVisionCards() {
    return (
        <div className="py-5 lg:py-10">
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-2 max-w-7xl mx-auto">
                {grid.map((feature) => (
                    <div
                        key={feature.title}
                        className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
                    >
                        <Grid size={20}/>
                        <div className="flex flex-row items-center gap-2">
                            {feature.icon}
                            <p className="text-lg md:text-xl lg:text-2xl font-bold text-neutral-800 dark:text-white relative z-20">
                                {feature.title}
                            </p>
                        </div>
                        <p className="text-neutral-500 mt-4 text-base font-normal relative z-20">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const grid = [
    {
        title: "Our Mission",
        description:
            "To form long term relationships of value with our clients and partners by providing quality products & services and employing the best resources and latest techniques.",
        icon: <GoGoal className="w-6 h-6 text-red-600"/>
    },
    {
        title: "Our Vision",
        description:
            "To be the leader in our industry, by creating value added products and services that are recognized by our customers as key factors in their success. Our commitment is to continually earn customers loyalty through exceptional services provides by our dedicated employees.",
        icon: <TfiTarget className="w-6 h-6 text-red-600"/>
    },

    {
        title: "Our Objectives",
        description:
            "UG Electronics aim to provide the highest possible statement of quality products and services in our industry, giving clients the best satisfaction.",
        icon: <CiViewList className="w-6 h-6 text-red-600"/>
    },
];

export const Grid = (
    {
        pattern,
        size,
    }: {
        pattern?: number[][];
        size?: number;
    }) => {
    const p = pattern ?? [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
    return (
        <div
            className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
            <div
                className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x="-12"
                    y="4"
                    squares={p}
                    className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
                />
            </div>
        </div>
    );
};

export function GridPattern({width, height, x, y, squares, ...props}: any) {
    const patternId = useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none"/>
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${patternId})`}
            />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]: any) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}`}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height}
                        />
                    ))}
                </svg>
            )}
        </svg>
    );
}


export default MissionVisionCards;