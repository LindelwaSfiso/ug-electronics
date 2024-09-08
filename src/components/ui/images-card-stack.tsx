"use client";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

let interval: any;

type Card = {
    id: number;
    content: React.ReactNode;
};

export const ImagesCardStack = (
    {
        items,
        offset,
        scaleFactor,
    }: {
        items: Card[];
        offset?: number;
        scaleFactor?: number;
    }) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState<Card[]>(items);

    useEffect(() => {
        startFlipping();

        return () => clearInterval(interval);
    }, []);
    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards]; // create a copy of the array
                newArray.unshift(newArray.pop()!); // move the last element to the front
                return newArray;
            });
        }, 3000);
    };

    return (
        <div className="relative h-full w-full">
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="absolute dark:bg-black bg-white h-full w-full rounded-3xl shadow-xl border border-2 border-gray-300 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between overflow-hidden"
                        style={{
                            transformOrigin: "top center",
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            right: index * -CARD_OFFSET,
                            left: index * 2 * CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                            zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                        }}
                    >
                        {card.content}
                    </motion.div>
                );
            })}
        </div>
    );
};
