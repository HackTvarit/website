import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="max-w-screen-xl items-center mx-auto py-4 flex justify-between">
      <Image src="/images/NavLogo.svg" alt="" height={77} width={103} />
      <div className="flex gap-14">
        <Link href="">Home</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
        <Link href="">Prizes</Link>
        <Link href="">FAQ</Link>
      </div>
      <button className="nav-shadow px-8 py-4 text-[#002C82] rounded-lg bg-white text-lg font-semibold">
        Register
      </button>
    </nav>
  );
};

export default Navbar;
