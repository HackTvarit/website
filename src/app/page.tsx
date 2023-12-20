import Navbar from "@/components/reusable/Navbar";
import FaqStrip from "@/components/strips/FaqStrip";
import MainStrip from "@/components/strips/MainStrip";
import PrizesStripe from "@/components/strips/PrizesStripe";
import SponsorStrip from "@/components/strips/SponsorStrip";
import TrackStrip from "@/components/strips/TrackStrip";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <MainStrip />
      <TrackStrip />
      <FaqStrip />
      <PrizesStripe />
      <SponsorStrip />
    </div>
  );
}
