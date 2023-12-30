import { Faq, HeroSection, Prizes, Social, WhoWeAre } from "@/components";
import Tracks from "@/components/Tracks";
import { Footer, Navbar } from "@/components/reusable";
import {
  FaqStrip,
  MainStrip,
  PrizesStripe,
  SponsorStrip,
  TrackStrip,
} from "@/components/strips";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <MainStrip />
      <WhoWeAre />
      <TrackStrip />
      <Tracks />
      <Social />
      <FaqStrip />
      <Faq />
      <PrizesStripe />
      <Prizes />
      <SponsorStrip />
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="flex flex-col items-center">
          <div className="">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
          <div className="text-[3.75rem] font-bold">Happy Hacking !</div>
        </div>
      </div>
      <Footer />
      <div className="absolute top-12 flex justify-center w-full">
        {/* <Image src="/images/bgGlow.png" alt="" height={} width={}/> */}
        <svg
          width="885"
          height="516"
          viewBox="0 0 885 516"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_111_41)">
            <path
              d="M442.5 170L662.037 293.75H222.963L442.5 170Z"
              fill="#C1ACFF"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_111_41"
              x="0.962402"
              y="-52"
              width="883.075"
              height="567.75"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="111"
                result="effect1_foregroundBlur_111_41"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
