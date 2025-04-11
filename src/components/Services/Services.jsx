import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  const cardsData = [
    {
      emoji: HeartEmoji,
      heading: "Problem Solving",
      detail: "C, C++, Python",
    },
    {
      emoji: Glasses,
      heading: "Web Development",
      detail: "HTML, CSS, JS, React, Node.js, PHP, MongoDB",
    },
    
    {
      emoji: Glasses,
      heading: "App Development",
      detail: "Flutter, Java (Android), React Native",
    },
  
  ];

  return (
    <div className="services" id="services">
      {/* Left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <spane>
          I provide innovative solutions tailored to your unique needs, ensuring
          exceptional quality and creativity in every project.
          <br />
          Let's turn your ideas into reality with my expertise and passion for excellence.
        </spane>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="cards">
  {cardsData.map((card, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ...transition, delay: index * 0.2 }}
    >
      <Card emoji={card.emoji} heading={card.heading} detail={card.detail} />
    </motion.div>
  ))}
</div>
<div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>

    

    </div>
  );
};

export default Services;
