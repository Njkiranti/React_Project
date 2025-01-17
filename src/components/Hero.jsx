import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="h-screen bg-center text-white flex items-center justify-center animate-fadeIn "
      style={{
        backgroundImage: 'url("/src/Image/NIra & Co.png")',
        backgroundSize: 'contain', // Prevent stretching and zooming
        backgroundRepeat: 'no-repeat', // Ensure image is not repeated
      }}
      id="hero"
    >
      <motion.div
        initial={{ opacity: 0, y: -50, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        className="text-center px-6 sm:px-12 md:px-16 bg-[#022574] bg-opacity-50 rounded-lg"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 transition transform hover:scale-105 ">
        Nirpadha Rayamajhi
        </h1>
        <p className="text-gray-300 mt-4 text-xl sm:text-2xl">
          Social Media Manager | Content Creator 
        </p>
        <div className="mt-6 flex justify-center space-x-4 flex-wrap">
          {/* <a
            href="https://twitter.com"
            className="px-6 py-2 bg-blue-500 rounded hover:bg-blue-600 text-sm sm:text-base"
          >
            Twitter
          </a>
          <a
            href="https://youtube.com"
            className="px-6 py-2 bg-red-500 rounded hover:bg-red-600 text-sm sm:text-base"
          >
            YouTube
          </a> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
