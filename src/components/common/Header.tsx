import Link from "next/link";
import {Menu, Package2} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import StickyHeader from "@/components/common/sticky_header";

type HeaderLink = {
    title: string;
    url: string;
}

const navLinks: HeaderLink[] = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "Services",
        url: "/services"
    },
    {
        title: "Products",
        url: "/products"
    },
    {
        title: "About",
        url: "/about"
    },
]

export default function Header() {
    return (
        <header
            className="backdrop-blur-sm bg-white sticky top-0 z-[9999] flex h-[6.5rem] items-center gap-4 border-b bg-background">
            <nav
                className="h-full w-full hidden md:flex md:flex-col">

                <StickyHeader/>

                <div
                    className="container mx-auto flex-1 w-full container hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Package2 className="h-6 w-6"/>
                        <span className="sr-only">UG Electronics</span>
                    </Link>

                    <div
                        className="h-full flex-col text-lg font-medium md:flex md:flex-row md:items-center  md:text-sm ml-auto">
                        {
                            navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className="group relative md:p-4 lg:p-5 flex items-center h-full uppercase text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {link.title}
                                    <span
                                        className="absolute left-0 top-0 w-full h-0 transition-all bg-red-600 opacity-20 z-0 group-hover:h-full"/>
                                </Link>
                            ))
                        }
                    </div>
                </div>

            </nav>

            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5"/>
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Package2 className="h-6 w-6"/>
                            <span className="sr-only">UG Electronics</span>
                        </Link>


                        {
                            navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    {link.title}
                                </Link>
                            ))
                        }

                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}
