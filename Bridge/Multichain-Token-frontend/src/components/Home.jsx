// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../images/in-game/demoImage0.jpg"
import img2 from "../images/in-game/demoImage2.jpg"
import img3 from "../images/in-game/demoImage3.jpg"
import img4 from "../images/in-game/demoImage4.jpg"
import img5 from "../images/in-game/demoImage5.jpg"
import img6 from "../images/in-game/demoImage6.jpg"
import img7 from "../images/in-game/demoImage7.jpg"
import img8 from "../images/in-game/demoImage8.jpg"
import img9 from "../images/in-game/demoImage9.jpg"
import img10 from "../images/in-game/demoImage10.jpg"


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);

const Home = () => {
  return (
    <div className="Home  relative" id="home">
      <Swiper
        pagination={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="slide1" />
        </SwiperSlide>
      </Swiper>
      <div className="home-overlay absolute flex flex-col justify-center items-center right-0 left-0 bottom-0   z-10">
        <h1 className="text-4xl font-bold text-white md:text-8xl">
          LAND OF REALM
        </h1>
        <p className="font-light text-white text-sm md:text-base">
          IN-GAME PRE-RELEASE SCREENSHOTS
        </p>
      </div>
    </div>
  );
};

export default Home;
