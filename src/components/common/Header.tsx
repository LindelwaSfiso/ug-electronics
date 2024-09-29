import Link from "next/link";
import {Menu} from "lucide-react";
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import StickyHeader from "@/components/common/sticky_header";
import NavLink, {NavLink2} from "@/components/common/NavLink";

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
            className="backdrop-blur-sm bg-white sticky top-0 z-50 pb-2 md:pb-0 flex flex-col md:h-[6.5rem] items-center gap-4 border-b bg-background">
            <nav
                className="md:h-full w-full flex flex-col">

                <StickyHeader/>

                <div
                    className="container mx-auto flex-1 w-full container hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <img
                            src={"/logo.jpg"} alt={"UG Electronics"}
                            width={500} height={500} className="h-14 w-14"/>
                        <span className="sr-only">UG Electronics</span>
                    </Link>

                    <div
                        className="h-full flex-col text-lg font-medium md:flex md:flex-row md:items-center  md:text-sm ml-auto">
                        {
                            navLinks.map((link, index) => (
                                <NavLink index={index} link={link}/>
                            ))
                        }
                    </div>
                </div>

            </nav>

            <Sheet>
                <div className="md:hidden container mx-auto px-4 md:px-0 flex flex-row justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <img
                            src={"/logo.jpg"} alt={"UG Electronics"}
                            width={500} height={500} className="h-14 w-14"/>
                        <span className="sr-only">UG Electronics</span>
                    </Link>

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
                </div>
                <SheetContent side="right">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <img
                                src={"/logo.jpg"} alt={"UG Electronics"}
                                width={500} height={500} className="h-14 w-14"/>
                            <span className="sr-only">UG Electronics</span>
                        </Link>


                        {
                            navLinks.map((link, index) => (
                                <NavLink2 index={index} link={link}/>
                            ))
                        }

                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}
