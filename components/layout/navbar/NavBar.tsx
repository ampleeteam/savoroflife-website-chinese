"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavOptionsMobile from "./NavOptionsMobile";
import NavOptionsWeb from "./NavOptionsWeb";

const NavBar = () => {
  const currentPath = usePathname();

  return (
    <header
      className={`w-full absolute z-10 py-3 bg-gradient-to-t from-transparent to-black w-full absolute z-10  py-3${
        currentPath === "/meals" ? "bg-[#223733]" : "bg-opacity-0"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-4 md:px-16 py-4 bg-transparent">
        <div>
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/logo-2.svg"
              alt="logo-2"
              width={54}
              height={29}
              className="object-contain"
            />
            <Image
              src="/logo-1.svg"
              alt="logo-1"
              width={134}
              height={40}
              className="object-contain ml-2"
            />
          </Link>
        </div>
        <div>
          <NavOptionsWeb />
          <NavOptionsMobile />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
