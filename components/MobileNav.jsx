"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';
import { menulinks } from "@/constants/constants"
import Social from "./Social";
const MobileNav = () => {
    const pathName = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="logo-mob mt-32 mb-5 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Hitesh<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                {/* Nav */}
                <nav className="flex flex-col justify-center items-center gap-8 mb-5">
                    {menulinks.map((link, index) => {
                        return (
                            <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                                {link.title}
                            </Link>
                        )
                    })}
                </nav>
                <div className="social mb-8 xl:mb-0 ml-0 xl:ml-5">
                    <Social containerStyles="flex gap-6 justify-center items-center" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-hover hover:text-primary transition-all duration-1000 ease-in-out" />
                </div>
            </SheetContent>
        </Sheet>

    )
}

export default MobileNav;