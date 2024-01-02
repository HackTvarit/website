import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";

const Social = () => {
  return (
    <div className="max-w-screen-xl mx-auto" id="contact">
      <div
        className="rounded-lg px-8 py-14"
        style={{
          background: "linear-gradient(180deg, #00285F 0%, #612897 100%)",
          boxShadow: "0px 0px 14.6px 7px rgba(0, 0, 0, 0.52)",
        }}
      >
        <div className="text-[#E1E1E1] text-6xl text-center font-extrabold">
          Want To Be Part of Us
        </div>
        <div className="flex justify-center gap-32 mt-28 pb-14">
          <div
            className="bg-[#00122A] w-max"
            style={{ border: "1.186px solid #612897" }}
          >
            <Image
              src="/images/GithubImage.png"
              alt=""
              height={254}
              width={250}
            />
            <div className="py-6 flex gap-2 items-center justify-center text-2xl font-bold">
              <FaGithub />
              <span>Github</span>
            </div>
          </div>
          <div
            className="bg-[#00122A] w-max"
            style={{ border: "1.186px solid #612897" }}
          >
            <Image
              src="/images/TwitterImage.png"
              alt=""
              height={254}
              width={250}
            />
            <div className="py-6 flex gap-2 items-center justify-center text-2xl font-bold">
              <FaSquareXTwitter />
              <span>Twitter</span>
            </div>
          </div>
          <div
            className="bg-[#00122A] w-max"
            style={{ border: "1.186px solid #612897" }}
          >
            <Image
              src="/images/DiscordImage.png"
              alt=""
              height={254}
              width={250}
            />
            <div className="py-6 flex gap-2 items-center justify-center text-2xl font-bold">
              <BsDiscord />
              <span>Discord</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-xl mt-8">
          <a href="https://discord.gg/Sb3FMt8m">
          <button className="border border-white py-4 px-6 rounded">
            Join Our Community
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
