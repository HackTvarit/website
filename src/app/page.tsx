import { HeroSection, Faq, Prizes, Social, WhoWeAre } from "@/components";
import { Navbar, Footer } from "@/components/reusable";
import {
  FaqStrip,
  MainStrip,
  PrizesStripe,
  SponsorStrip,
  TrackStrip,
} from "@/components/strips";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <MainStrip />
      <WhoWeAre />
      <TrackStrip />
      <Social />
      <FaqStrip />
      <Faq />
      <PrizesStripe />
      <Prizes />
      <SponsorStrip />
      <Footer />
    </div>
  );
}
