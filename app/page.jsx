import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaHandPointRight } from "react-icons/fa";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="banner flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl-pb-24">
          {/* Text data */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m<br />
              <span className="text-accent">Hitesh Solanki</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">Hi, I&apos;m a passionate Web Developer at W3nuts. I specialize in crafting seamless digital experiences using WordPress, Laravel, and Core PHP. With over 6 years of experience, I transform ideas into interactive and efficient web solutions.</p>

            <div className="hier-social-btns flex flex-col xl:flex-row items-center gap-2">
              <Link href="mailto:iamhitesh3@gmail.com" className="mb-5 xl:mb-0">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <FaHandPointRight className="mr-1" />
                  <span>Hire me</span>
                </Button>
              </Link>
              <div className="social mb-8 xl:mb-0 ml-0 xl:ml-5">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-hover hover:text-primary transition-all duration-1000 ease-in-out" />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="photo-wrap order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
