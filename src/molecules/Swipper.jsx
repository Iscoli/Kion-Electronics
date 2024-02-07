
import styles from "./Swipper.module.scss";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Basket1 from "../assets/kion-image/Kion1.jpeg";
import Basket2 from "../assets/kion-image/Kion5.jpeg";
import Basket3 from "../assets/kion-image/Kion3.jpeg";
import Basket4 from "../assets/kion-image/Kion4.jpeg";
import Basket5 from "../assets/kion-image/Kion2.jpeg";

// import { Link } from "react-router-dom";

function Swipper() {
  return (
    <div className={styles.mainSwipper}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="mySwipper-container">
          <SwiperSlide style={{ position: "relative" }}>
            <img
              loading="lazy"
              className={styles.swipperImg}
              src={Basket1}
              alt="Basket one"
            />
            
          </SwiperSlide>
          <SwiperSlide style={{ position: "relative" }}>
            <img
              loading="lazy"
              className={styles.swipperImg}
              src={Basket2}
              alt="Basket two"
            />
           
          </SwiperSlide>
          <SwiperSlide style={{ position: "relative" }}>
            <img
              loading="lazy"
              className={styles.swipperImg}
              src={Basket3}
              alt="Basket three"
            />
            
          </SwiperSlide>
          <SwiperSlide style={{ position: "relative" }}>
            <img
              loading="lazy"
              className={styles.swipperImg}
              src={Basket4}
              alt="Basket four"
            />
            
          </SwiperSlide>
          <SwiperSlide style={{ position: "relative" }}>
            <img
              loading="lazy"
              className={styles.swipperImg}
              src={Basket5}
              alt="Basket five"
            />
          
          </SwiperSlide>
        </div>
      </Swiper>
      
    </div>
  );
}

export default Swipper;
