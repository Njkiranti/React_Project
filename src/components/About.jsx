import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section
      id="about"
      className="bg-gray-100 py-16 sm:py-20 md:py-24 lg:py-32 animate-fadeIn "
      data-aos="fade-up"
    >
      <div className="container mx-auto text-center px-6 sm:px-8 md:px-12 lg:px-16 transition transform hover:scale-105">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 "
          data-aos="zoom-in"
        >
          About Me
        </h2>
        <p
          className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl text-justify"
          data-aos="fade-right"
        >
          I am a passionate and results-driven Social Media Manager with a keen eye for trends and a strong understanding of various digital platforms.
           With 2 years of experience in crafting engaging content, developing strategic campaigns, and analyzing performance metrics,
           I thrive on creating impactful online presences for brands and individuals alike.
          
        </p>
        <br />
        <p
          className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl text-justify  "
          data-aos="fade-right"
        >
          My journey in social media management began with a love for storytelling and connecting with audiences. Over the years,
          I've honed my skills in content creation, community engagement, and data-driven decision-making. I specialize in building
          brand loyalty, increasing audience reach, and driving conversions through innovative and tailored social media strategies.
        </p>
      </div>
    </section>
  );
};

export default About;
