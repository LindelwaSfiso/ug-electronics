"use client";

import {HomeSliderDataType} from "@/components/home/HomeSlider";
import {cn} from "@/lib/utils";

type HomeSliderButtonsProps = {
    homeSliderData: HomeSliderDataType[],
    currentSliderIndex: number;
    setCurrentSlideIndex: React.Dispatch<React.SetStateAction<number>>;
    setDirection: React.Dispatch<React.SetStateAction<string>>;
}

export default function HomeSliderButtons(
    {homeSliderData, currentSliderIndex, setCurrentSlideIndex, setDirection}: HomeSliderButtonsProps
) {

    const onButtonClick = (direction: string) => {
        if (direction === "prev") {
            setDirection("backwards")
            setCurrentSlideIndex(prevState => {
                if (prevState > 0) return prevState - 1
                return homeSliderData.length - 1
            })
        } else {
            setDirection("forward")
            setCurrentSlideIndex(prevState => {
                if (prevState < homeSliderData.length - 1) return prevState + 1
                return 0
            })

        }
    }

    const selectHomeSlide = (index: number) => {
        if (index < homeSliderData.length - 1) {
            setCurrentSlideIndex(index)
            setDirection("forward")
        }
    }

    return (
        <div
            className="absolute flex flex-row justify-between items-center bottom-4 right-0 left-0 mx-auto container z-[20]">
            <div>

                <button type="button" onClick={() => onButtonClick("prev")}
                        className="text-white bg-transparent border-gray-200 border hover:border-red-800 hover:bg-red-800 focus:outline-none font-medium rounded-full hover:rounded-s-full hover:rounded-e-none text-sm p-2.5 text-center inline-flex items-center transition-all me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="w-5 h-5">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"/>
                    </svg>
                    <span className="sr-only">Slider Prev Button</span>
                </button>

                <button type="button" onClick={() => onButtonClick("next")}
                        className="text-white bg-transparent border-gray-200 border hover:border-red-800 hover:bg-red-800 focus:outline-none font-medium rounded-full hover:rounded-e-full hover:rounded-s-none text-sm p-2.5 text-center inline-flex items-center transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="w-5 h-5">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1"/>
                    </svg>
                    <span className="sr-only">Slider Next Button</span>
                </button>

            </div>


            <div
                className="flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">

                {
                    homeSliderData.map((_, index) => {
                        return (
                            <button
                                key={index}
                                type="button"
                                className={
                                    cn(
                                        "w-3 h-3 rounded-full bg-white hover:bg-red-800 hover:border-blue-100 hover:border-1",
                                        currentSliderIndex === index && "bg-red-800 hover:bg-red-800"
                                    )}
                                aria-label={`Slide$index`}
                                onClick={() => selectHomeSlide(index)}/>
                        )
                    })
                }
            </div>

        </div>
    )
}