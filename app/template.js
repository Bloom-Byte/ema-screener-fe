"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 0 },
  enter: { opacity: 1, y: 0 },
};

export default function Template({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="h-[100%] max-h-[100%]"
    >
      {children}
    </motion.div>
  );
}
