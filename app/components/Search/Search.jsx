import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { Button, Input } from "@chakra-ui/react";
const Search = () => {
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
            <select style={{ color: "#000" }} className="w-[80px] outline-none">
              <option value="">A</option>
              <option value="">B</option>
              <option value="">C</option>
            </select>
          </Tippy>
          <div className="flex items-center gap-3">
            <Button
              colorScheme
              bgColor="#F4A608"
              color="#fff"
              className="rounded-[6px]"
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
            <Button colorScheme bgColor="#F4A608" color="#fff">
              15min{" "}
            </Button>
          </Tippy>
          <Tippy content="Filter by 1 hour" placement="bottom">
            <Button
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
