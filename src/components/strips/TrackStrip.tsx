import React from "react";

const TrackStrip = () => {
  return (
    <div className="relative my-20">
      <div className="strips relative text-5xl p-2 font-extrabold">
        <div className="flex justify-between">
          <div className="">TRACK</div>
          <div className="">TRACK</div>
          <div className="">TRACK</div>
          <div className="">TRACK</div>
        </div>
      </div>
      <div className="strips-reverse absolute top-0 w-full left-0 text-5xl -rotate-3 p-2 font-extrabold">
        <div className="flex justify-between overflow-hidden">
          <div className="">TRACK</div>
          <div className="">TRACK</div>
          <div className="">TRACK</div>
          <div className="">TRACK</div>
        </div>
      </div>
    </div>
  );
};

export default TrackStrip;
