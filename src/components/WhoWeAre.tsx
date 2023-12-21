import React from "react";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="max-w-screen-xl mx-auto" id="aboutUs">
      <div
        className="my-20 p-14 flex flex-col gap-8 items-center relative rounded-lg"
        style={{
          background: "linear-gradient(180deg, #0F002F 0%, #051745 100%)",
          boxShadow: "0px 0px 14.6px 7px rgba(0, 0, 0, 0.52)",
        }}
      >
        <div className="text-[#E1E1E1] text-6xl text-center font-extrabold">
          Who We Are
        </div>
        <Image
          src="/images/whoWeAre.png"
          style={{
            filter:
              "filter: drop-shadow(0px 0px 23.3px rgba(167, 196, 252, 0.20));",
          }}
          alt=""
          height={395}
          width={886}
        />
        <div className="text-center px-14">
          {
            "Welcome to the heartbeat of innovation! HackTvarit is not just an event; it's a community-driven platform designed to inspire, challenge, and elevate the tech enthusiasts of tomorrow. At HackTvarit. Our mission is to provide a space where aspiring developers, designers, and innovators can come together, learn from each other, and build solutions that have a real-world impact."
          }
        </div>
        <button className="px-8 mt-8 py-4 text-[#002C82] rounded-lg font-bold bg-white text-lg">
          Know more
        </button>
        <div className="absolute top-16 right-24">
          <svg
            width="82"
            height="78"
            viewBox="0 0 82 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.8171 2.16489C50.291 1.55828 51.2439 1.6922 51.5323 2.40595L80.73 74.6728C81.0184 75.3865 80.4259 76.1448 79.6636 76.0377L2.47988 65.1902C1.71757 65.083 1.3571 64.1909 1.83104 63.5843L49.8171 2.16489Z"
              stroke="#727171"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="absolute bottom-14 left-28">
          <svg
            width="82"
            height="78"
            viewBox="0 0 82 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.0105 2.10597C28.2738 1.38259 29.2214 1.2155 29.7162 1.8052L79.8166 61.5125C80.3114 62.1022 79.9823 63.0064 79.2242 63.1401L2.46599 76.6746C1.70788 76.8083 1.08936 76.0711 1.35265 75.3478L28.0105 2.10597Z"
              stroke="#727171"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
