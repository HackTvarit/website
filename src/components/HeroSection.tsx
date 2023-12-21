import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="py-20" id="Home">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="flex justify-center">
          <Image src="/images/HomeName.svg" alt="" width={517} height={160} />
        </div>
      </div>
      <div
        className="border mt-20 border-[#ffffff42] py-2 text-center text-3xl font-black"
        style={{
          background: "rgba(255, 255, 255, 0.10)",
          letterSpacing: "7.891px",
        }}
      >
        <span className="text-[#EC81BA]">Ignite,</span>{" "}
        <span className="text-[#91FFFE]">Innovation</span>{" "}
        <span className="text-[#FFEFC5]">Code the Future</span>
      </div>
      <div className="flex justify-center text-xl mt-20">
        <button className="border border-white py-4 px-6 rounded">
          Join Our Community
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
