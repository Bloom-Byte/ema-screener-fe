"use client";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Tabled from "./components/tables/Table";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-[#332605] text-#fff w-full overflow-x-hidden h-[100%] min-h-[100%]"
      >
        <Navbar />
        <Search />
        <Tabled />
      </motion.div>
    </AnimatePresence>
  );
}
