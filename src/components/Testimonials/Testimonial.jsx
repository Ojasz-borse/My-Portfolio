import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Truly outstanding work! The attention to detail and commitment to excellence were evident in every aspect of the project. I am thoroughly impressed and will definitely be returning for future projects.",
    },
    {
      img: profilePic2,
      review:
        "This professional goes above and beyond to ensure complete satisfaction. The level of craftsmanship and dedication is unmatched, resulting in a final product that surpassed all my expectations.",
    },
    {
      img: profilePic3,
      review:
        "Working with this professional was an absolute pleasure! They delivered exceptional results, capturing every detail with precision and creativity. I couldn't be happier with the final product.",
    },
    {
      img: profilePic4,
      review:
        "The quality of work exceeded all my expectations. From start to finish, the process was seamless, and the end result was nothing short of perfection. Highly recommended!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
