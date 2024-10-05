import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="logo">
                        <Link href="/">
                            <h1 className="text-4xl font-semibold">
                                Hitesh<span className="text-accent">.</span>
                            </h1>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="desktop-nav hidden xl:flex items-center gap-8">
                        <Nav />
                        <div className="hire-me">
                            <Link href="/contact">
                                <Button>Hire Me</Button>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Mobile Nav */}
                    <div className="xl:hidden">
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;