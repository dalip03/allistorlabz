import HeroSection from "./components/HeroSection";
import BannerSection from "./components/BannerSection";
import WhySupplements from "./components/WhySupplements";

export default function Home() {
  return (
 <div className="overflow-x-hidden bg-white">
  <HeroSection/>
  <BannerSection/>
  <WhySupplements/>
 </div>
  );
}
