import HeroSection from "./components/HeroSection";
import BannerSection from "./components/BannerSection";
import WhySupplements from "./components/WhySupplements";
import SupplementSection from "./components/SupplementSection";
import SupplimentWorks from "./components/SupplementWorks";

export default function Home() {
  return (
 <div className="overflow-x-hidden bg-white">
  {/* all pages  */}
  <HeroSection/>
  <BannerSection/>
  <WhySupplements/>
  <SupplementSection/>
  <SupplimentWorks/>

 </div>
  );
}
