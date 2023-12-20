import React from "react";

const MainStrip = () => {
  return (
    <div className="">
      <div className="strips relative text-5xl my-20 p-2 font-extrabold">
        <div className="flex justify-between">
          <div className="">WEB DEVELOPMENT</div>
          <div className="">WEB3</div>
          <div className="">DATA SCIENCE</div>
          <div className="">BLOCKCHAIN</div>
        </div>
      </div>
      <div className="strips-reverse text-5xl -translate-y-40 -rotate-3 my-20 p-2 font-extrabold">
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
