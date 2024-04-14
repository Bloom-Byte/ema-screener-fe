import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { useAppContext } from "@/app/helper/Helpers";
const Search = (props) => {
  const { contextValue } = useAppContext();

  const [timeFrame, setTimeFrame] = useState("");
  const [currency, setCurrency] = useState("");
  const [watchList, setWatchList] = useState("");
  const [ema, setEma] = useState("");
  const [emaValue, setEmaValue] = useState("");
  const [emaTwenty, setEmaTwenty] = useState("");
  const [emaFifty, setEmaFifty] = useState("");
  const [emaHundred, setEmaHundred] = useState("");
  const [emaTwoHundred, setEmaTwoHundred] = useState("");
  const [closeHundred, setCloseHundred] = useState("");
  const [trend, setTrend] = useState("");

  //* Function to filter Results
  const filterResults = async () => {
    props.setLoading(true);
    const token = contextValue.token || localStorage.getItem("token");
    // console.log(trend, "timeFrame");
    try {
      await axios({
        method: "GET",
        // url: `https://be.emascreener.bloombyte.dev/api/v1/ema-records/?currency=${currency}&trend=${trend}&watch=${watchList}&timeframe=${timeFrame}`,
        url: `https://be.emascreener.bloombyte.dev/api/v1/ema-records/?${emaTwenty}=${emaValue}&${emaFifty}=${emaValue}&${emaHundred}=${emaValue}&${emaTwoHundred}=${emaValue}&${closeHundred}=${emaValue}&currency=${currency}&trend=${trend}&watch=${watchList}&timeframe=${timeFrame}`,
        headers: {
          Authorization: `AuthToken ${token}`,
          "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
        },
      })
        .then((res) => {
          console.log(res);
          props.setFilteredResults(res.data.results);
          props.setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          props.setLoading(false);
        });
    } catch (error) {
      console.log(error);
      props.setLoading(false);
    }
  };

  useEffect(() => {
    filterResults();
  }, [timeFrame, watchList, emaValue, trend]);

  return (
    <div className="my-[30px]">
      <div className="flex items-center justify-between w-[95%] flex-wrap gap-4 mx-auto">
        <form onSubmit={filterResults} className="flex items-center gap-3">
          <Input
            type="text"
            borderRadius="6px"
            color="#fff"
            // className="py-1 px-2 text-[#000] outline-0 rounded-[8px]"
            placeholder="Search"
            onChange={(e) => setCurrency(e.target.value)}
          />
          <Button
            colorScheme
            bgColor="#F4A608"
            color="#fff"
            className="rounded-[6px]"
            onClick={filterResults}
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
              onClick={(e) => {
                setWatchList(e.target.value);
                setEmaFifty("");
                setEmaValue("");
                setEmaTwenty("");
                setEmaHundred("");
                setEmaTwoHundred("");
                setCurrency("");
                setTimeFrame("");
                setTrend("");
                setCloseHundred("");
              }}
              style={{ color: "#000" }}
              className="w-[80px] outline-none"
            >
              <option value="A">Must Watch</option>
              <option value="B">Buy</option>
              <option value="C">Strong Buy</option>
              <option value="D">Negative Watch</option>
              <option value="E">Down</option>
              <option value="F">Strong Down</option>
            </select>
          </Tippy>
          <div className="flex items-center flex-wrap gap-3">
            <Button
              colorScheme
              bgColor="#F4A608"
              opacity={emaValue == 20 ? 0.5 : 1}
              color="#fff"
              className="rounded-[6px]"
              onClick={() => {
                setEmaTwenty("ema20");
                setEmaValue(20);
                setEmaFifty("");
                setEmaHundred("");
                setEmaTwoHundred("");
                setCloseHundred("");

                setCurrency("");
                setTimeFrame("");
                setTrend("");
                setWatchList("");
              }}
            >
              20{" "}
            </Button>
            <Button
              colorScheme
              bgColor="#F4A608"
              opacity={emaValue == 50 ? 0.5 : 1}
              color="#fff"
              className="rounded-[6px]"
              onClick={() => {
                setEmaFifty("ema50");
                setEmaValue(50);
                setEmaTwenty("");
                setEmaHundred("");
                setEmaTwoHundred("");
                setCloseHundred("");

                setCurrency("");
                setTimeFrame("");
                setTrend("");
                setWatchList("");
              }}
            >
              50{" "}
            </Button>
            <Button
              colorScheme
              bgColor="#F4A608"
              opacity={emaValue == 100 ? 0.5 : 1}
              color="#fff"
              className="rounded-[6px]"
              onClick={() => {
                setEmaHundred("ema100");
                setEmaValue(100);
                setEmaTwenty("");
                setEmaFifty("");
                setEmaTwoHundred("");
                setCloseHundred("");

                setCurrency("");
                setTimeFrame("");
                setTrend("");
                setWatchList("");
              }}
            >
              100{" "}
            </Button>
            <Button
              colorScheme
              bgColor="#F4A608"
              opacity={emaValue == 200 ? 0.5 : 1}
              color="#fff"
              className="rounded-[6px]"
              onClick={() => {
                setEmaTwoHundred("ema200");
                setEmaValue(200);
                setEmaTwenty("");
                setEmaFifty("");
                setEmaHundred("");
                setCurrency("");
                setTimeFrame("");
                setTrend("");
                setWatchList("");
              }}
            >
              200{" "}
            </Button>
            <Button
              colorScheme
              bgColor="#F4A608"
              opacity={emaValue == 200 ? 0.5 : 1}
              color="#fff"
              className="rounded-[6px]"
              onClick={() => {
                setCloseHundred("close100");
                setEmaTwoHundred("ema200");
                setEmaValue(200);
                setEmaTwenty("");
                setEmaFifty("");
                setEmaHundred("");
                setCurrency("");
                setTimeFrame("");
                setTrend("");
                setWatchList("");
              }}
            >
              close{">"}100{" "}
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
        <div className="flex items-center gap-3">
          <Tippy content="Filter upwards" placement="bottom">
            <Button
              colorScheme
              bgColor="#F4A608"
              opacity={trend == 1 ? 0.5 : 1}
              color="#fff"
              className="rounded-[6px]"
              onClick={() => {
                setTrend(1);
                setEmaHundred("");
                setEmaValue("");
                setEmaTwenty("");
                setEmaFifty("");
                setEmaTwoHundred("");
                setCurrency("");
                setTimeFrame("");
                setWatchList("");
              }}
            >
              1{" "}
            </Button>
          </Tippy>
          <Tippy content="Filter downward" placement="bottom">
            <Button
              colorScheme
              bgColor="#F4A608"
              opacity={trend == -1 ? 0.5 : 1}
              color="#fff"
              className="rounded-[6px]"
              onClick={() => {
                setTrend(-1);
                setEmaHundred("");
                setEmaValue("");
                setEmaTwenty("");
                setEmaFifty("");
                setEmaTwoHundred("");
                setCurrency("");
                setTimeFrame("");
                setWatchList("");
              }}
            >
              -1{" "}
            </Button>
          </Tippy>
          <Tippy content="Filter sideways" placement="bottom">
            <Button
              colorScheme
              bgColor="#F4A608"
              opacity={trend == "0" ? 0.5 : 1}
              color="#fff"
              className="rounded-[6px]"
              onClick={() => {
                setTrend(0);
                setEmaValue("");
                setEmaTwenty("");
                setEmaFifty("");
                setEmaHundred("");
                setEmaTwoHundred("");
                setCurrency("");
                setTimeFrame("");
                setWatchList("");
              }}
            >
              0{" "}
            </Button>
          </Tippy>
          <Tippy placement="bottom" content="Filter by trends">
            <span className="text-white cursor-pointer">
              {" "}
              <HiOutlineQuestionMarkCircle />
            </span>
          </Tippy>
        </div>
        <div
          style={{ color: "#fff" }}
          className="flex items-center gap-3 flex-wrap"
        >
          <Tippy content="Filter by 15 minutes" placement="bottom">
            <Button
              onClick={() => {
                setTimeFrame("00:00:15");
                setEmaHundred("");
                setEmaValue("");
                setEmaTwenty("");
                setEmaFifty("");
                setEmaTwoHundred("");
                setCurrency("");
                setTrend("");
                setWatchList("");
              }}
              colorScheme
              bgColor="#F4A608"
              opacity={timeFrame == "00:00:15" ? 0.5 : 1}
              color="#fff"
            >
              15min{" "}
            </Button>
          </Tippy>
          <Tippy content="Filter by 1 hour" placement="bottom">
            <Button
              onClick={() => {
                setTimeFrame("1:00:00");
                setEmaHundred("");
                setEmaValue("");
                setEmaTwenty("");
                setEmaFifty("");
                setEmaTwoHundred("");
                setCurrency("");
                setTrend("");
                setWatchList("");
              }}
              colorScheme
              bgColor="#F4A608"
              opacity={timeFrame == "1:00:00" ? 0.5 : 1}
              color="#fff"
              className="rounded-[6px]"
            >
              1 hour{" "}
            </Button>
          </Tippy>
          <Tippy content="Filter by 4 hours" placement="bottom">
            <Button
              onClick={() => {
                setTimeFrame("4:00:00");
                setEmaHundred("");
                setEmaValue("");
                setEmaTwenty("");
                setEmaFifty("");
                setEmaTwoHundred("");
                setCurrency("");
                setTrend("");
                setWatchList("");
              }}
              colorScheme
              bgColor="#F4A608"
              opacity={timeFrame == "4:00:00" ? 0.5 : 1}
              color="#fff"
              className="rounded-[6px]"
            >
              4 hours{" "}
            </Button>
          </Tippy>
          <Tippy content="Filter by 1 day" placement="bottom">
            <Button
              onClick={() => {
                setTimeFrame("24:00:00");
                setEmaHundred("");
                setEmaValue("");
                setEmaTwenty("");
                setEmaFifty("");
                setEmaTwoHundred("");
                setCurrency("");
                setTrend("");
                setWatchList("");
              }}
              opacity={timeFrame == "24:00:00" ? 0.5 : 1}
              colorScheme
              bgColor="#F4A608"
              color="#fff"
              className="rounded-[6px]"
            >
              1 day{" "}
            </Button>
          </Tippy>
          <Tippy content="Filter by 1 week" placement="bottom">
            <Button
              onClick={() => {
                setTimeFrame("168:00:00");
                setEmaHundred("");
                setEmaValue("");
                setEmaTwenty("");
                setEmaFifty("");
                setEmaTwoHundred("");
                setCurrency("");
                setTrend("");
                setWatchList("");
              }}
              opacity={timeFrame == "168:00:00" ? 0.5 : 1}
              colorScheme
              bgColor="#F4A608"
              color="#fff"
              className="rounded-[6px]"
            >
              1 week{" "}
            </Button>
          </Tippy>
        </div>
      </div>
    </div>
  );
};

export default Search;
