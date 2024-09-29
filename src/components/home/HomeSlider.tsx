"use client";

import {useEffect, useState} from "react";
import HomeSliderButtons from "@/components/home/HomeSliderButtons";
import {AnimatePresence, motion} from "framer-motion";


export default function HomeSlider() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
    const [direction, setDirection] = useState<string>("forward");
    const currentSlide = homeSliderData[currentSlideIndex];

    useEffect(() => {
        const updateCarousel = setInterval(() => {
            setDirection("forward")
            setCurrentSlideIndex(prevState => {
                if (prevState < homeSliderData.length - 1)
                    return prevState + 1
                return 0
            })
        }, 3000)

        return () => {
            clearInterval(updateCarousel);
        }
    }, [])

    return (
        <AnimatePresence initial={false}>
            <section className="min-h-[calc(75vh_-_7rem)] md:min-h-[calc(100vh_-_7rem)] z-[0] relative overflow-hidden">

                <img
                    className="absolute h-full w-full z-[-1] left-0 right-0 object-cover animate-zooming origin-top"
                    src={currentSlide.image}
                    alt={currentSlide.title}/>

                <div className="absolute top-0 left-0 z-[1] bg-gray-800 bg-opacity-70 w-full h-full"/>

                <div className="absolute top-0 h-full w-full z-[20] px-4">
                    <div className="mt-16 container mx-auto">
                        <motion.p
                            initial={{y: '-40%', opacity: 0}}
                            animate={{y: '0%', opacity: 1}}
                            exit={{y: "10%", opacity: 0}}
                            key={`topTitle${currentSlide.key}`}
                            className="text-white/70">
                            {currentSlide.topTitle}
                        </motion.p>

                        <motion.p
                            initial={{x: direction === "forward" ? '-40%' : '40%', opacity: 0}}
                            animate={{x: '0%', opacity: 1}}
                            exit={{x: direction === "forward" ? '10%' : '-10%', opacity: 0}}
                            key={`title${currentSlide.key}`}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white md:max-w-4xl">
                            {currentSlide.title}
                        </motion.p>

                        {
                            currentSlide.other &&
                            <p className="mt-4 text-sm md:text-base lg:text-lg font-medium tracking-tight leading-none text-white md:max-w-4xl">
                                {currentSlide.other}
                            </p>
                        }

                        <motion.p
                            initial={{y: direction === 'forward' ? '40%' : '-40%', opacity: 0}}
                            animate={{y: '0%', opacity: 1}}
                            exit={{y: direction === 'forward' ? '-10%' : '-10%', opacity: 0}}
                            key={`description${currentSlide.key}`}
                            className="mt-5 lg:mt-10 text-sm md:text-base lg:text-lg tracking-relaxed leading-none text-white md:max-w-4xl">
                            {currentSlide.description}
                        </motion.p>
                    </div>
                </div>


                <HomeSliderButtons
                    homeSliderData={homeSliderData}
                    currentSliderIndex={currentSlideIndex}
                    setCurrentSlideIndex={setCurrentSlideIndex}
                    setDirection={setDirection}/>

            </section>
        </AnimatePresence>
    )
}


export type HomeSliderDataType = {
    key: string,
    image: string;
    title: string;
    topTitle: string;
    description: string;
    other?: string;
}

const homeSliderData: HomeSliderDataType[] = [
    {
        key: "slide1",
        image: "/home/home-8.jpg",
        title: "Experience the Confidence of Security",
        topTitle: "Security solutions for every need.",
        description: " Ensure the safety of your property with our top-notch CCTV camera installation services. We offer both analog and IP camera solutions tailored to meet your specific security needs. Our expert team guarantees seamless installation and maintenance for optimal surveillance.",
        other: "Professional CCTV Camera Installation"
    },
    {
        key: "slide2",
        image: "/home/home-10.jpg",
        title: "Reliable Gate Motor Supply and Installation.",
        topTitle: "Automated Access.",
        description: "Enhance the convenience and security of your property with our gate motor supply and installation services. We provide high-quality, solar-powered gate motors that ensure smooth and efficient operation, giving you peace of mind and ease of access."
    },
    {
        key: "slide3",
        image: "/home/home-12.jpg",
        title: "Cutting-Edge Biometric Access Control.",
        topTitle: "Advanced Security.",
        description: " Upgrade your security with our state-of-the-art biometric access control systems. Our solutions offer unparalleled accuracy and reliability, ensuring that only authorized personnel can access your premises. Experience the future of security with our advanced technology."
    },
    {
        key: "slide4",
        image: "/home/home-13.jpg",
        title: "Robust Electric Fence and Alarm Systems.",
        topTitle: "Comprehensive Protection.",
        description: " Protect your property with our robust electric fence and alarm systems. Our installations provide a strong deterrent against intruders and immediate alerts in case of any breach. Trust us to deliver comprehensive security solutions that keep you safe."
    },
]