"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import { TbLogout2 } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import Tippy from "@tippyjs/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/helper/Helpers";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const AdminNavbar = () => {
  const { contextValue } = useAppContext();

  const [currentTime, setCurrentTime] = useState(moment());

  //!Function for showing the current time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const router = useRouter();

  const logOut = async () => {
    const TOKEN = contextValue.token || localStorage.getItem("token");
    const USER_ID = contextValue.userId || localStorage.getItem("userId");
    try {
      // console.log(TOKEN, "context");
      // console.log(TOKEN, USER_ID, "details");

      if (TOKEN && USER_ID) {
        await axios({
          method: "POST",
          url: "https://be.emascreener.bloombyte.dev/api/v1/accounts/logout/",
          headers: {
            Authorization: `AuthToken ${TOKEN}`,
            "X-API-KEY": "ZPQZsfIX.yOW01At15aQpF2Z1Ll6I4JmMX87OkWqH",
          },
          data: {
            user_id: USER_ID,
          },
        })
          .then(async (res) => {
            console.log(res.data);
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            contextValue.setToken(" ");
            contextValue.setUserId(" ");
            router.push("/login");
            toast.success("Logged out successfully");
          })
          .catch(async (err) => {
            console.log(err, "Axios Error has Occurred");
            toast.error("Logout unsuccessful");
          });
      } else {
        console.log("No token found");
      }
    } catch (error) {
      console.log(error, "An Error has occurred");
      toast.error("Logout has failed");
    }
  };

  return (
    <div
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
      className="w-[100%] bg-black text-#fff"
    >
      <div className="flex items-center justify-between m-auto py-4 w-[95%]  max-[500px]:justify-between ">
        <div className="flex items-center gap-3  ">
          <div className="w-[50px] max-[450px]:hidden">
            <img className="w-full rounded-full" src="./logos.png" alt="img" />
          </div>
          <Heading
            as="h4"
            size="md"
            textColor="white"
            className="text-#fff max-[500px]:text-[16px]"
          >
            ECMA Screener{" "}
          </Heading>
        </div>
        <div className="flex items-center gap-3 justify-center text-[20px] ">
          {/* <Text textColor="white" className=" text-#fff max-[550px]:hidden">
            Current Time{" "}
          </Text> */}
          {/* <Text textColor="white" className=" text-#fff">
            {" "}
            {currentTime.format("HH:mm:ss")}{" "}
          </Text> */}
          {/* <Text textColor="white" className=" text-#fff max-[600px]:hidden">
            UTC{" "}
          </Text> */}
        </div>
        <Flex alignItems="center" gap="15px">
          {/* <Tippy content="Homepage" placement="bottom">
            <Link href="/">
              <span className="text-#fff cursor-pointer p-2">
                <IoHomeOutline fontSize="24px" color="white" />
              </span>
            </Link>
          </Tippy> */}
          <Tippy content="Logout" placement="bottom">
            <span onClick={logOut} className="text-#fff cursor-pointer p-2">
              <TbLogout2 fontSize="24px" color="white" />
            </span>
          </Tippy>
        </Flex>
      </div>
    </div>
  );
};

export default AdminNavbar;
