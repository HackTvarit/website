import React from "react";

const FaqStrip = () => {
  return (
    <div className="">
      <div className="strips relative text-5xl my-20 p-2 font-extrabold">
        <div className="flex justify-between">
          <div className="">FAQ</div>
          <div className="">FAQ</div>
          <div className="">FAQ</div>
          <div className="">FAQ</div>
        </div>
      </div>
      <div className="strips-reverse text-5xl -translate-y-40 -rotate-3 my-20 p-2 font-extrabold">
        <div className="flex justify-between overflow-hidden">
          <div className="">FAQ</div>
          <div className="">FAQ</div>
          <div className="">FAQ</div>
          <div className="">FAQ</div>
        </div>
      </div>
    </div>
  );
};

export default FaqStrip;
