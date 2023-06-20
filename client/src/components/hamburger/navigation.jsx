import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const navigationVariants = {
  initial: {
    x: "-0.2rem",
    opacity: 0,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const Navigation = ({ menuOpen }) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <nav className="grid place-items-center w-1/3 h-10 m-auto mt-6">
          <motion.ul
            variants={navigationVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            className="flex justify-between w-full"
          >
            <motion.li variants={navigationVariants}>About</motion.li>
            <motion.li variants={navigationVariants}>Blog</motion.li>
            <motion.li variants={navigationVariants}>Projects</motion.li>
          </motion.ul>
        </nav>
      )}
    </AnimatePresence>
  );
};
export default Navigation;
