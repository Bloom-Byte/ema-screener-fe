"use client";
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Tabled from "./components/tables/Table";

export default function Home() {
  // #171101
  return (
    <main className="bg-[#332605] text-#fff w-full overflow-x-hidden h-full">
      <Navbar />
      <Search />
      <Tabled />
    </main>
  );
}
