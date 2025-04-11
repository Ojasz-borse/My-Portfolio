import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Postacc from "../../img/Post-acc.png";
import Hoobank from "../../img/Hoobank.png";
import Amazon from "../../img/Amazon-clone.png";
import Website from "../../img/Website.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
       
        <SwiperSlide>
          <img src={Hoobank} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Website} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Amazon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Postacc} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
