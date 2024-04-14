"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Heading, Text } from "@chakra-ui/react";
import { TbLogout2 } from "react-icons/tb";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import axios from "axios";
import { useAppContext } from "@/app/helper/Helpers";
import { useRouter } from "next/navigation";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

const Navbar = () => {
  const { contextValue } = useAppContext();
  const [currentTime, setCurrentTime] = useState(moment());

  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Create a moment object representing the current time in UTC
  var now = moment.utc();

  // Format the current UTC time in hours, minutes, and seconds
  var formattedTime = now.format("yy/M/D HH:mm:ss");

  return (
    <div
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
      className="w-[100%] bg-white text-#000"
    >
      <div className=" w-[95%]  m-auto">
        <div className="flex items-center justify-between py-4 w-[100%] max-[1200px]:w-[95%] max-[700px]:w-[100%] max-[500px]:justify-between ">
          <div className="flex items-center gap-3 ">
            <div className="w-[50px] max-[450px]:hidden">
              <img
                className="w-full rounded-full"
                src="./logos.png"
                alt="img"
              />
            </div>
            <Heading
              as="h4"
              size="md"
              className="text-#000 max-[500px]:text-[16px]"
            >
              EMA Screener{" "}
            </Heading>
          </div>
          <div className="flex items-center gap-3 justify-center text-[20px] ">
            <Text className=" text-#000 max-[600px]:hidden">Current Time </Text>
            <Text className=" text-#000  max-[800px]:text-[16px] max-[500px]:text-[14px]">
              {" "}
              {formattedTime}{" "}
            </Text>
            {/* <Text className=" text-#000"> {utcTime.format("HH:mm:ss")} </Text> */}
            <Text className=" text-#000  max-[600px]:hidden">UTC </Text>
          </div>
          <div className="flex items-center gap-3 justify-center text-[20px] ">
            <Tippy
              placement="bottom"
              content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed cumque possimus iste nulla, incidunt, iure voluptatibus rem molestias veritatis sunt accusamus quam tenetur? Fugiat, voluptatem. Ullam odit facere magnam cupiditate voluptate sequi deleniti facilis eligendi officia molestiae suscipit dolor non commodi dignissimos incidunt, recusandae, assumenda nihil magni quos. Nam, soluta."
            >
              <span className="text-black cursor-pointer">
                {" "}
                <HiOutlineQuestionMarkCircle />
              </span>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
