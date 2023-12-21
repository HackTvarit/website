import Prizes from "@/components/Prizes";
import WhoWeAre from "@/components/WhoWeAre";
import Navbar from "@/components/reusable/Navbar";
import FaqStrip from "@/components/strips/FaqStrip";
import MainStrip from "@/components/strips/MainStrip";
import PrizesStripe from "@/components/strips/PrizesStripe";
import SponsorStrip from "@/components/strips/SponsorStrip";
import TrackStrip from "@/components/strips/TrackStrip";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <MainStrip />
      <WhoWeAre />
      <TrackStrip />
      <div className="max-w-screen-xl mx-auto">
        <div
          className="rounded-lg px-8 py-14"
          style={{
            background: "linear-gradient(180deg, #00285F 0%, #612897 100%)",
            boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
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
              <div className="text-center py-6 text-2xl font-bold">Github</div>
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
              <div className="text-center py-6 text-2xl font-bold">Twitter</div>
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
              <div className="text-center py-6 text-2xl font-bold">Discord</div>
            </div>
          </div>
          <div className="flex justify-center text-xl mt-8">
            <button className="border border-white py-4 px-6 rounded">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
      <FaqStrip />
      <PrizesStripe />
      <Prizes />
      <SponsorStrip />
    </div>
  );
}
