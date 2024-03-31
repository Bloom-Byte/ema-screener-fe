"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[100%] bg-white text-#000">
      <div className="flex items-center m-auto py-4 w-[95%] max-[500px]:justify-between ">
        <div className="flex items-center gap-3 w-[45%] ">
          <div className="w-[50px]">
            <img className="w-full rounded-full" src="./logos.png" alt="img" />
          </div>
          <h1 className=" text-#000 max-[500px]:text-[16px]">ECMA Screener </h1>
        </div>
        <div className="flex items-center gap-3 justify-center text-[20px] ">
          <h1 className=" text-#000 max-[500px]:hidden">Current Time </h1>
          <p className=" text-#000"> {currentTime.format("HH:mm:ss")} </p>
          <h1 className=" text-#000">UTC </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
