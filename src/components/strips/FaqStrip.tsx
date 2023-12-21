import React from "react";
import Marquee from "react-fast-marquee";

const FaqStrip = () => {
  return (
    <div className="relative my-20">
      <div className="strips relative text-5xl p-2 font-extrabold">
        <Marquee className="flex justify-between" direction="right">
          <div className="px-40">FAQ</div>
          <div className="px-40">FAQ</div>
          <div className="px-40">FAQ</div>
          <div className="px-40">FAQ</div>
        </Marquee>
      </div>
      <div className="strips-reverse absolute top-0 w-full left-0 text-5xl -rotate-3 p-2 font-extrabold">
        <Marquee className="flex justify-between">
          <div className="px-40">FAQ</div>
          <div className="px-40">FAQ</div>
          <div className="px-40">FAQ</div>
          <div className="px-40">FAQ</div>
        </Marquee>
      </div>
    </div>
  );
};

export default FaqStrip;
