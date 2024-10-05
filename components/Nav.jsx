"use client";

import { menulinks } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const pathName = usePathname();
    return (
        <nav className="flex gap-8">
            {menulinks.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                        {link.title}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Nav;