"use client";
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/tables/Table";
import Search from "./components/Search/Search";

export default function Home() {
  // #171101
  return (
    <main className="bg-[#332605] text-#fff w-full h-full">
      <Navbar />
      <Search />
      <Table />
    </main>
  );
}
