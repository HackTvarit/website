import React from "react";

const MainStrip = () => {
  return (
    <div className="relative my-20">
      <div className="strips relative text-5xl p-2 font-extrabold">
        <div className="flex justify-between">
          <div className="">WEB DEVELOPMENT</div>
          <div className="">WEB3</div>
          <div className="">DATA SCIENCE</div>
          <div className="">BLOCKCHAIN</div>
        </div>
      </div>
      <div className="strips-reverse absolute top-0 w-full left-0 text-5xl -rotate-3 p-2 font-extrabold">
        <div className="flex justify-between overflow-hidden">
          <div className="">WEB DEVELOPMENT</div>
          <div className="">WEB3</div>
          <div className="">DATA SCIENCE</div>
          <div className="">BLOCKCHAIN</div>
        </div>
      </div>
    </div>
  );
};

export default MainStrip;
