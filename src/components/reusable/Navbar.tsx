import Image from "next/image";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="max-w-screen-xl items-center mx-auto py-4 flex justify-between">
      <Image src="/images/NavLogo.svg" alt="" height={77} width={103} />
      <div className="flex gap-14">
        <div className="">Home</div>
        <div className="">About</div>
        <div className="">Contact</div>
        <div className="">Product</div>
        <div className="">FAQ</div>
      </div>
      <button className="nav-shadow px-8 py-4 text-[#002C82] rounded-lg bg-white text-lg font-semibold">
        Register
      </button>
    </nav>
  );
};

export default Navbar;
