"use client";

import React, {useRef} from "react";
import {useInView} from "framer-motion";

export default function SlideUpTransition({children,}: Readonly<{ children: React.ReactNode; }>) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})

    return (
        <div ref={ref}
             style={{
                 transform: isInView ? "none" : "translateY(50px)",
                 opacity: isInView ? 1 : 0,
                 transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
             }}
        >
            {children}
        </div>
    )
}