import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center pb-40 bg-sun bg-no-repeat bg-cover bg-center h-[70vh] items-center ">
      <motion.h2
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 100, scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        className="text-white text-8xl font-bold sm:text-2xl"
      >
        Welcome to our store
      </motion.h2>
      <motion.div
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 100, scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
        className="border-b-8 h-4 border-white w-2/4"
      ></motion.div>
    </div>
  );
};

export default Hero;
