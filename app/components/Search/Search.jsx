import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { useAppContext } from "@/app/helper/Helpers";
const Search = () => {
  const { contextValue } = useAppContext();

  const [timeFrame, setTimeFrame] = useState("");
  const [currency, setCurrency] = useState("");
  const [watchList, setWatchList] = useState("");
  const [emaTwenty, setEmaTwenty] = useState("");
  const [emaFifty, setEmaFifty] = useState("");
  const [emaHundred, setEmaHundred] = useState("");
  const [trend, setTrend] = useState("");
  const [watch, setWatch] = useState("");

  const filterResults = async () => {
    const token = contextValue.token || localStorage.getItem("token");

    const response = await axios({
      method: "GET",
      url: `https://be.emascreener.bloombyte.dev/api/v1/ema-records/?ema${emaTwenty}=${10}&currency=${currency}&watch=${watchList}&timeframe=00:20:00${timeFrame}`,
      headers: {
        Authorization: `AuthToken ${token}`,
      },
    }).catch((err) => console.log(err));
  };

  useEffect(() => {
    filterResults();
  }, [
    timeFrame,
    currency,
    watchList,
    emaTwenty,
    emaFifty,
    emaHundred,
    trend,
    watch,
  ]);

  return (
    <div className="my-[30px]">
      <div className="flex items-center justify-between w-[95%] flex-wrap gap-4 mx-auto">
        <form className="flex items-center gap-3">
          <Input
            type="text"
            borderRadius="6px"
            color="#fff"
            // className="py-1 px-2 text-[#000] outline-0 rounded-[8px]"
            placeholder="Search"
          />
          <Button
            colorScheme
            bgColor="#F4A608"
            color="#fff"
            className="rounded-[6px]"
            type="submit"
            // style={{ color: "#fff" }}
          >
            Search
          </Button>
          <Tippy placement="bottom" content="Search for your coins">
            <span className="text-white cursor-pointer">
              {" "}
              <HiOutlineQuestionMarkCircle />
            </span>
          </Tippy>
        </form>
        {/* <div className="flex flex-col items-center gap-1">
          <div className="flex items-center">
            <button className="bg-[#F4A608] py-1 px-3">on</button>
            <button className="bg-[#fff] py-1 px-3">off</button>
          </div>
          <p className="text-white">Watchlist </p>
        </div> */}
        <div
          style={{ color: "#fff" }}
          className="flex items-center flex-wrap gap-6"
        >
          <Tippy placement="bottom" content="Shows level of priority">
            <select
              onClick={(e) => setWatchList(e.target.value)}
              style={{ color: "#000" }}
              className="w-[80px] outline-none"
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </Tippy>
          <div className="flex items-center gap-3">
            <Button
              colorScheme
              bgColor="#F4A608"
              color="#fff"
              className="rounded-[6px]"
              onClick={() => setEmaTwenty(20)}
            >
              20{" "}
            </Button>
            <Button
              colorScheme
              bgColor="#F4A608"
              color="#fff"
              className="rounded-[6px]"
            >
              500{" "}
            </Button>
            <Button
              colorScheme
              bgColor="#F4A608"
              color="#fff"
              className="rounded-[6px]"
            >
              100{" "}
            </Button>
            <Button
              colorScheme
              bgColor="#F4A608"
              color="#fff"
              className="rounded-[6px]"
            >
              200{" "}
            </Button>
            <Tippy
              placement="bottom"
              content="Shows trends over a period of time"
            >
              <span className="text-white cursor-pointer">
                {" "}
                <HiOutlineQuestionMarkCircle />
              </span>
            </Tippy>
          </div>
        </div>
        <div
          style={{ color: "#fff" }}
          className="flex items-center gap-3 flex-wrap"
        >
          <Tippy content="Filter by 15 minutes" placement="bottom">
            <Button
              onClick={() => setTimeFrame("00:00:15")}
              colorScheme
              bgColor="#F4A608"
              color="#fff"
            >
              15min{" "}
            </Button>
          </Tippy>
          <Tippy content="Filter by 1 hour" placement="bottom">
            <Button
              onClick={() => setTimeFrame("1:00:00")}
              colorScheme
              bgColor="#F4A608"
              color="#fff"
              className="rounded-[6px]"
            >
              1 hour{" "}
            </Button>
          </Tippy>
          <Tippy content="Filter by 4 hours" placement="bottom">
            <Button
              onClick={() => setTimeFrame("4:00:00")}
              colorScheme
              bgColor="#F4A608"
              color="#fff"
              className="rounded-[6px]"
            >
              4 hours{" "}
            </Button>
          </Tippy>
          <Tippy content="Filter by 1 day" placement="bottom">
            <Button
              onClick={() => setTimeFrame("24:00:00")}
              colorScheme
              bgColor="#F4A608"
              color="#fff"
              className="rounded-[6px]"
            >
              1 day{" "}
            </Button>
          </Tippy>
          {/* <Tippy content="Filter by 1 week" placement="bottom">
            <Button
              colorScheme
              bgColor="#F4A608"
              color="#fff"
              className="rounded-[6px]"
            >
              1 week{" "}
            </Button>
          </Tippy> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
