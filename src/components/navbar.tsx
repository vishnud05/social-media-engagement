"use client";
import { cn } from "@/lib/utils";
import { GithubIcon, Youtube } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "About",
    href: "/about",
  },
];
const Navbar = () => {
  const currPath = usePathname();
  return (
    <div className="sticky top-0 flex flex-col justify-center items-center py-6 w-full  border-solid  max-md:max-w-full bg-gradient-to-b from-slate-900 to-transparent z-10 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row flex-wrap gap-10 justify-between items-center max-w-full w-[1224px]">
        <div className="flex overflow-hidden relative gap-px items-start self-stretch px-1 py-0.5 my-auto ">
          <div className="flex z-0 gap-2.5 items-center">
            <Link
              href="/"
              className="text-2xl text-center font-bold tracking-wide bg-clip-text bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(0,0,0,0.7)] "
            >
              <img
                src="/logo.png"
                alt="SocialLens"
                className="h-12 object-cover"
              />
            </Link>
          </div>
        </div>
        <div className="flex gap-4 justify-center max-sm:w-full items-center self-stretch my-auto text-base whitespace-nowrap min-w-[240px] text-slate-400">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={cn(
                "gap-2 self-stretch p-2 my-auto cursor-pointer",
                currPath === item.href ? "text-white" : "text-slate-400"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <a
          href="https://github.com/vishnud05/social-media-engagement"
          target="_blank"
        >
          <Link
            href={"https://github.com/vishnud05/social-media-engagement"}
            target="_blank"
            className="gap-2.5 hidden sm:flex items-center self-stretch px-6 py-3 my-auto text-base font-medium leading-none text-white bg-violet-600 hover:bg-violet-700 rounded-[36px] max-md:px-5"
          >
            <GithubIcon /> Github
          </Link>
        </a>
      </div>
    </div>
  );
};
export default Navbar;
