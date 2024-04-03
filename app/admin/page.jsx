"use client";
import React, { useState } from "react";
import Admin from "../components/dashboard/Admin";
import Navbar from "../components/Navbar/Navbar";
import SeeAllCategories from "../components/dashboard/SeeAllCategories";

const page = () => {
  const [coins, setCoins] = useState([
    {
      SN: 1,
      category: "Coin",
      symbol: "BTC",
      subCategory: "Bitcoin",
      exchange: "1000",
    },
    {
      SN: 2,
      category: "Coin",
      symbol: "Meta",
      subCategory: "MetaMask",
      exchange: "600",
    },
  ]);

  return (
    <div className="w-full overflow-x-hidden h-full min-h-full">
      <Navbar />
      <Admin coins={coins} setCoins={setCoins} />
      <SeeAllCategories coins={coins} setCoins={setCoins} />
    </div>
  );
};

export default page;
