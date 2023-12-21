import React from "react";
import Image from "next/image";

const Prizes = () => {
  return (
    <div className="max-w-screen-xl mx-auto" id="prizes">
      <div className="flex justify-center items-end gap-8">
        <div
          className="py-8 px-4 w-96 items-center rounded-lg"
          style={{
            background: "linear-gradient(180deg, #424EE5 0%, #612897 100%)",
            boxShadow: "8px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="flex py-4 justify-center">
            <Image
              src="/images/PrizeSecond.png"
              alt=""
              height={274}
              width={270}
            />
          </div>
          <div className="text-center text-5xl font-extrabold">30 k</div>
          <div className="text-[#D2E5FF]">
            <div className="font-extrabold text-center mt-8">
              Exclusive Winner party
            </div>
            <hr className="mt-4 bg-[#D2E5FF]"></hr>
            <div className="font-extrabold text-center mt-4">
              Software License Access
            </div>
          </div>
          <div className="flex justify-center ">
            <button className="px-12 mt-8 py-4 text-[#002C82] rounded-2xl font-bold bg-white nav-shadow">
              View More
            </button>
          </div>
        </div>
        <div
          className="py-8 px-4 w-96 items-center rounded-lg"
          style={{
            background: "linear-gradient(180deg, #424EE5 0%, #612897 100%)",
            boxShadow: "8px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="flex justify-center">
            <Image
              src="/images/PrizeMain.png"
              alt=""
              height={342}
              width={214}
            />
          </div>
          <div className="text-center text-5xl font-extrabold">50 k</div>
          <div className="text-[#D2E5FF]">
            <div className="font-extrabold text-center mt-8">
              Exclusive Winner party
            </div>
            <hr className="mt-4 bg-[#D2E5FF]"></hr>
            <div className="font-extrabold text-center mt-4">
              Go daddy Subscription
            </div>
            <hr className="mt-4 bg-[#D2E5FF]"></hr>
            <div className="font-extrabold text-center mt-4">
              Software License Access
            </div>
          </div>
          <div className="flex justify-center ">
            <button className="px-12 mt-8 py-4 text-[#002C82] rounded-2xl font-bold bg-white nav-shadow">
              View More
            </button>
          </div>
        </div>
        <div
          className="py-8 px-4 w-96 items-center rounded-lg"
          style={{
            background: "linear-gradient(180deg, #424EE5 0%, #612897 100%)",
            boxShadow: "8px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="flex py-4 justify-center">
            <Image
              src="/images/PrizeSecond.png"
              alt=""
              height={274}
              width={270}
            />
          </div>
          <div className="text-center text-5xl font-extrabold">20 k</div>
          <div className="text-[#D2E5FF]">
            <div className="font-extrabold text-center mt-8">
              Exclusive Winner party
            </div>
            <hr className="mt-4 bg-[#D2E5FF]"></hr>
            <div className="font-extrabold text-center mt-4">
              Software License Access
            </div>
          </div>
          <div className="flex justify-center">
            <button className="px-12 mt-8 py-4 text-[#002C82] rounded-2xl font-bold bg-white nav-shadow">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
