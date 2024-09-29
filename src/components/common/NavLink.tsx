"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

export default function NavLink({index, link}: { index: number; link: { title: string; url: string; } }) {

    const path = usePathname()
    const isSelected = path === link.url;

    return (
        <Link
            key={index}
            href={link.url}
            className={cn(
                "group relative md:p-4 lg:p-5 flex items-center h-full uppercase text-muted-foreground transition-colors hover:text-foreground",
                isSelected && "text-red-600"
            )}
        >
            {link.title}
            <span
                className="absolute left-0 top-0 w-full h-0 transition-all bg-red-600 opacity-20 z-0 group-hover:h-full"/>
        </Link>
    )
}


export function NavLink2({index, link}: { index: number; link: { title: string; url: string; } }) {

    const path = usePathname()
    const isSelected = path === link.url;

    return (
        <Link
            key={index}
            href={link.url}
            className={cn(
                "text-muted-foreground hover:text-foreground",
                isSelected && "text-red-500"
            )}
        >
            {link.title}
        </Link>
    )
}

