import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const phrases = ["Easyway Classes", "Easyway AI"];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeInOut", duration: 0.3 },
  },
};

const TypingMotion = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000); // total duration before switching

    return () => clearTimeout(timeout);
  }, [index]);

  const currentText = phrases[index];

  return (
    <div className="text-4xl
                sm:text-6xl
                lg:text-7xl font-semibold m-2 
                bg-clip-text text-transparent
                bg-gradient-to-b from-blue-300 to-gray-400">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentText}
          className=" text-4xl
                sm:text-6xl
                lg:text-7xl font-semibold 
                bg-clip-text text-transparent
                bg-gradient-to-b from-blue-300 to-gray-400 flex flex-wrap "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {currentText.split("").map((char, i) => (
            <motion.span key={i} variants={letterVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TypingMotion;
