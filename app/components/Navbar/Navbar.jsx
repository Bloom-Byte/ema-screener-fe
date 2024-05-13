"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Heading, Text } from "@chakra-ui/react";
import { TbLogout2 } from "react-icons/tb";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import NavModal from "./Modal";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const [isOpen, setIsOpen] = useState(false);

  //useEffect to show current time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Create a moment object representing the current time in UTC
  var now = moment.utc();

  // Format the current UTC time in hours, minutes, and seconds
  var formattedTime = now.format("HH:mm:ss - yy/M/D");

  return (
    <div
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
      className="w-[100%] bg-white text-#000"
    >
      <div className=" w-[95%]  m-auto">
        <div className="flex items-center justify-between py-4 w-[100%] max-[1200px]:w-[95%] max-[700px]:w-[100%] max-[500px]:justify-between ">
          <div className="flex items-center gap-3 cursor-default ">
            <div className="w-[50px] max-[450px]:hidden">
              <img className="w-full rounded-full" src="./logo.png" alt="img" />
            </div>
            <Heading
              as="h4"
              size="sm"
              // cursor="pointer"
              className="text-#000 max-[500px]:text-[16px]"
            >
              TREND CATCHER{" "}
            </Heading>
          </div>
          <div className="flex items-center gap-3 justify-center text-[20px] ">
            <Text
              fontFamily="Sedan SC"
              fontWeight="600"
              className=" text-#000 max-[600px]:hidden"
            >
              Current Time:{" "}
            </Text>
            <Text
              fontFamily="Sedan SC"
              fontWeight="700"
              className=" text-#000  text-[26px] max-[800px]:text-[24px] max-[500px]:text-[20px]"
            >
              {" "}
              {formattedTime}{" "}
            </Text>
            <Text
              fontFamily="Sedan SC"
              fontWeight="600"
              className=" text-#000  max-[600px]:hidden"
            >
              UTC{" "}
            </Text>
          </div>
          <div className="flex items-center gap-3 justify-center text-[20px] ">
            <Tippy placement="bottom" content="help">
              <span
                onClick={() => setIsOpen(true)}
                className="text-black cursor-pointer"
              >
                {" "}
                <HiOutlineQuestionMarkCircle />
              </span>
            </Tippy>
          </div>
        </div>
      </div>
      {isOpen ? <NavModal isOpen={isOpen} setIsOpen={setIsOpen} /> : ""}
    </div>
  );
};

export default Navbar;
