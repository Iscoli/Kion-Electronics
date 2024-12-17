
import FeaturedProducts from "../component/FeaturedProducts";
import VideoSection from "../component/VideosSection";
import SpecialOffers from "../component/SpecialOffers";
import AboutCompany from "../component/AboutCompany";
import Newsletter from "../component/NewssLetter";

import Hero from '../component/Hero';



function Home() {
  return (
    <>
      
      <Hero/>
      <FeaturedProducts />
      <VideoSection />
      <SpecialOffers />
      <AboutCompany />
      <Newsletter />
      
    </>
  );
}

export default Home
