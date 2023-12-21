import React from "react";

const SponsorStrip = () => {
  return (
    <div className="relative my-20">
      <div className="strips relative text-5xl p-2 font-extrabold">
        <div className="flex justify-between">
          <div className="">SPONSOR</div>
          <div className="">SPONSOR</div>
          <div className="">SPONSOR</div>
          <div className="">SPONSOR</div>
        </div>
      </div>
      <div className="strips-reverse absolute top-0 w-full left-0 text-5xl -rotate-3 p-2 font-extrabold">
        <div className="flex justify-between overflow-hidden">
          <div className="">SPONSOR</div>
          <div className="">SPONSOR</div>
          <div className="">SPONSOR</div>
          <div className="">SPONSOR</div>
        </div>
      </div>
    </div>
  );
};

export default SponsorStrip;
