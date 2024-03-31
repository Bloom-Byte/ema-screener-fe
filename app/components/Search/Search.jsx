import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
const Search = () => {
  return (
    <div className="my-[30px]">
      <div className="flex items-center justify-between w-[95%] flex-wrap gap-3 mx-auto">
        <form className="flex items-center flex-wrap gap-3">
          <input
            className="py-1 px-2 text-[#000] outline-0 rounded-[8px]"
            placeholder="Search"
          />
          <button
            className="bg-[#F4A608] py-1 px-4 rounded-[6px]"
            type="submit"
            style={{ color: "#fff" }}
          >
            Search
          </button>
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
            <select style={{ color: "#000" }} className="w-[80px] outline-none">
              <option value="">A</option>
              <option value="">B</option>
              <option value="">C</option>
            </select>
          </Tippy>
          <div className="flex items-center gap-3">
            <button
              style={{ color: "#fff" }}
              className="bg-[#F4A608] text-#fff p-2 rounded-[8px] cursor-pointer"
            >
              20{" "}
            </button>
            <button className="bg-[#F4A608]  p-2 rounded-[8px]  cursor-pointer">
              500{" "}
            </button>
            <button className="bg-[#F4A608] p-2 rounded-[8px]  cursor-pointer ">
              100{" "}
            </button>
            <button className="bg-[#F4A608] p-2 rounded-[8px] cursor-pointer">
              200{" "}
            </button>
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
            <button className="bg-[#F4A608] text-#fff py-2 px-4 rounded-[5px] cursor-pointer">
              15min{" "}
            </button>
          </Tippy>
          <Tippy content="Filter by 1 hour" placement="bottom">
            <button className="bg-[#F4A608] text-#fff py-2 px-4 rounded-[5px] cursor-pointer">
              1 hour{" "}
            </button>
          </Tippy>
          <Tippy content="Filter by 4 hours" placement="bottom">
            <button className="bg-[#F4A608] text-#fff py-2 px-4 rounded-[8px] cursor-pointer">
              4 hours{" "}
            </button>
          </Tippy>
          <Tippy content="Filter by 1 day" placement="bottom">
            <button className="bg-[#F4A608] text-#fff py-2 px-4 rounded-[6px] cursor-pointer">
              1 day{" "}
            </button>
          </Tippy>
          <Tippy content="Filter by 1 week" placement="bottom">
            <button className="bg-[#F4A608] text-#fff py-2 px-4 rounded-[6px] cursor-pointer">
              1 week{" "}
            </button>
          </Tippy>
        </div>
      </div>
    </div>
  );
};

export default Search;
