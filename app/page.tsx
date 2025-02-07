import HeroSection from "./components/Hero";
import PickDrop from "./components/PickDrop";
import CarCardCarousel from "./components/Popular";
import Recomendation from "./components/Recomendation";

export default function Home() {
  return (
    <div className="bg-[#F6F7F9]">
      
      <HeroSection />
      <PickDrop />
      <CarCardCarousel />
      <Recomendation />

    </div>
  );
}
