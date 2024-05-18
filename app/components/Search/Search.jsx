import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  Select,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Checkbox,
} from "@chakra-ui/react";

import axios from "axios";
import { useAppContext } from "@/app/helper/Helpers";
import { LuFilter } from "react-icons/lu";

const Search = (props) => {
  const { contextValue } = useAppContext();

  const [timeFrame, setTimeFrame] = useState("");
  const [currency, setCurrency] = useState("");
  const [watchList, setWatchList] = useState("");
  const [emaValue, setEmaValue] = useState("");
  const [emaTwenty, setEmaTwenty] = useState("");
  const [emaFifty, setEmaFifty] = useState("");
  const [emaHundred, setEmaHundred] = useState("");
  const [emaTwoHundred, setEmaTwoHundred] = useState("");
  const [closeHundred, setCloseHundred] = useState("");
  const [trend, setTrend] = useState("");
  const [modalState, setModalState] = useState(false); //State to control the modal if it shoes or not
  const [closeSubCategoryModal, setCloseSubCategoryModal] = useState(false); //State to show the modal for the subCategory if it shows or not
  const [selectedCategory, setSelectedCategory] = useState(""); //state to get the name of the category that was selected
  const [selectedSubCategory, setSelectedSubCategory] = useState(""); //State to get the subCategory that was selected
  const [getCategoryError, setGetCategoryError] = useState(false); //State to show if there is an error

  //* Function to filter Results
  const filterResults = async () => {
    props.setLoading(true);
    props.setFilteredCategory([]);
    props.setFilteredSubCategory([]);

    // const token = contextValue.token || localStorage.getItem("token");
    const ApiKey = process.env.NEXT_PUBLIC_API_KEY;
    if (ApiKey) {
      try {
        // console.log(watchList, "watchlist");

        const response = await axios({
          method: "GET",
          url: `${contextValue.base_url}/ema-records/?${emaTwenty}=${emaValue}&${emaFifty}=${emaValue}&${emaHundred}=${emaValue}&${emaTwoHundred}=${emaValue}&${closeHundred}=${emaValue}&currency=${currency}&trend=${trend}&watch=${watchList}&timeframe=${timeFrame}&category=${selectedCategory}&subcategory=${selectedSubCategory}`,
          headers: {
            "x-API-KEY": ApiKey,
            "Content-Type": "application/json",
          },
        });

        if (response.status == 200) {
          console.log(response);
          props.setFilteredResults(response.data.results);
          props.setLoading(false);
        } else {
          console.log("An error has occurred");
          props.setLoading(false);
        }
        // console.log(resonse, "I am response");
      } catch (error) {
        console.log(error);
        props.setLoading(false);
      }
    }
  };

  useEffect(() => {
    filterResults();
  }, [
    timeFrame,
    watchList,
    emaValue,
    trend,
    selectedCategory,
    selectedSubCategory,
  ]);

  const filterByCategory = async () => {
    try {
      // props.setFilteredSubCategory([]);
      setModalState(true);

      const ApiKey = process.env.NEXT_PUBLIC_API_KEY;
      if (ApiKey) {
        const response = await axios({
          method: "GET",
          url: `${contextValue.base_url}/currencies/categories`,
          headers: {
            "x-API-KEY": ApiKey,
            "Content-Type": "application/json",
          },
        });

        if (response.status == 200) {
          const allCategories = response.data.data.categories.map(
            (category, index) => ({
              id: index + 1,
              category,
            })
          );
          props.setFilteredCategory(allCategories);
        } else {
          console.log("Error retrieving Categories has occurred");
          setGetCategoryError(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filterBySubCategory = async () => {
    // props.setFilteredCategory([]);
    // props.setFilteredResults([]);
    // props.setLoading(true);
    const ApiKey = process.env.NEXT_PUBLIC_API_KEY;
    setCloseSubCategoryModal(true);
    if (ApiKey) {
      try {
        const response = await axios({
          method: "GET",
          url: `${contextValue.base_url}/currencies/categories`,
          headers: {
            "x-API-KEY": ApiKey,
            "Content-Type": "application/json",
          },
        });

        if (response.status == 200) {
          const allSubCategories = response.data.data.subcategories.map(
            (subCategory, index) => ({
              id: index + 1,
              name: subCategory,
            })
          );
          props.setFilteredSubCategory(allSubCategories);
        } else {
          console.log("error retrieving sub Categories");
        }
      } catch (error) {
        console.log(error);
        // props.setLoading(false);
      }
    }
  };

  const getAllCurrencies = async () => {
    props.setFilteredCategory([]);
    props.setFilteredSubCategory([]);
    // props.setLoading(true);
    const ApiKey = process.env.NEXT_PUBLIC_API_KEY;
    if (ApiKey) {
      try {
        await axios({
          method: "GET",
          url: `${contextValue.base_url}/ema-records/`,
          headers: {
            "x-API-KEY": ApiKey,
            "Content-Type": "application/json",
          },
        }).then((res) => {
          props.setFilteredResults(res.data.results);
          // props.setLoading(false);
        });
      } catch (error) {
        console.log(error);
        // props.setLoading(false);
      }
    }
  };

  return (
    <div className="my-[30px]">
      <div className="flex items-center justify-between w-[95%]  flex-wrap gap-4 mx-auto">
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
        <div style={{ color: "#fff" }} className="flex items-center  gap-6">
          <Tippy placement="bottom" content="Shows level of priority">
            <Select
              p="0"
              m="0"
              maxW="220px"
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
              cursor="pointer"
              placeholder="Select option"
            >
              <option style={{ color: "#000", cursor: "pointer" }} value="A">
                Positive Watch
              </option>
              <option style={{ color: "#000", cursor: "pointer" }} value="B">
                Up
              </option>
              <option style={{ color: "#000", cursor: "pointer" }} value="C">
                Strong Up
              </option>
              <option style={{ color: "#000", cursor: "pointer" }} value="D">
                Negative Watch
              </option>
              <option style={{ color: "#000", cursor: "pointer" }} value="E">
                Down
              </option>
              <option style={{ color: "#000", cursor: "pointer" }} value="F">
                Strong Down
              </option>
              <option
                style={{ color: "#000", cursor: "pointer" }}
                value="SIDEWAYS"
              >
                Sideways
              </option>
            </Select>
          </Tippy>
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
              Up{" "}
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
              Down{" "}
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
              Sideways{" "}
            </Button>
          </Tippy>
          <Tippy placement="bottom" content="Filter by trends">
            <span className="text-white cursor-pointer">
              {" "}
              <HiOutlineQuestionMarkCircle />
            </span>
          </Tippy>
        </div>

        <Flex my="10px" alignItems="center" gap="15px">
          <Popover isLazy>
            <PopoverTrigger>
              <Button
                onClick={filterByCategory}
                bgColor="#F4A608"
                color="#fff"
                colorScheme
                className="rounded-[6px]"
                opacity={props.filteredCategory?.length > 0 ? 0.7 : 1}
              >
                Category
              </Button>
            </PopoverTrigger>
            {modalState && (
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  {getCategoryError ? (
                    <Box color="red">Error getting Categories</Box>
                  ) : props.filteredCategory?.length > 0 ? (
                    props.filteredCategory?.map((category) => (
                      <Category
                        key={category.id}
                        category={category}
                        filterByCategory={props.filteredCategory}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        setSelectedSubCategory={setSelectedSubCategory}
                        setModalState={setModalState}
                        setCurrency={setCurrency}
                        setWatchList={setWatchList}
                        setEmaValue={setEmaValue}
                        setEmaTwenty={setEmaTwenty}
                        setEmaFifty={setEmaFifty}
                        setEmaHundred={setEmaHundred}
                        setEmaTwoHundred={setEmaTwoHundred}
                        setCloseHundred={setCloseHundred}
                        setTrend={setTrend}
                        setTimeFrame={setTimeFrame}
                      />
                    ))
                  ) : (
                    <Box
                      w="100%"
                      minW="100%"
                      maxW="100%"
                      m="0 auto"
                      textAlign="center"
                    >
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-4 h-4 me-3 text-[#525355] animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Box>
                  )}
                </PopoverBody>
              </PopoverContent>
            )}
          </Popover>

          <Popover isLazy>
            <PopoverTrigger>
              <Button
                onClick={filterBySubCategory}
                bgColor="#F4A608"
                color="#fff"
                colorScheme
                className="rounded-[6px]"
                opacity={props.filteredSubCategory?.length > 0 ? 0.7 : 1}
              >
                Sub Category
              </Button>
            </PopoverTrigger>
            {closeSubCategoryModal && (
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  {props.filteredSubCategory?.length > 0 ? (
                    props.filteredSubCategory?.map((subCategory) => (
                      <SubCategory
                        key={subCategory.id}
                        subCategory={subCategory}
                        filteredSubCategory={props.filteredSubCategory}
                        setFilteredSubCategory={props.setFilteredSubCategory}
                        setSelectedSubCategory={setSelectedSubCategory}
                        setSelectedCategory={setSelectedCategory}
                        setCloseSubCategoryModal={setCloseSubCategoryModal}
                        setCurrency={setCurrency}
                        setWatchList={setWatchList}
                        setEmaValue={setEmaValue}
                        setEmaTwenty={setEmaTwenty}
                        setEmaFifty={setEmaFifty}
                        setEmaHundred={setEmaHundred}
                        setEmaTwoHundred={setEmaTwoHundred}
                        setCloseHundred={setCloseHundred}
                        setTrend={setTrend}
                        setTimeFrame={setTimeFrame}
                      />
                    ))
                  ) : (
                    <Box
                      w="100%"
                      minW="100%"
                      maxW="100%"
                      m="0 auto"
                      textAlign="center"
                    >
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-4 h-4 me-3 text-[#525355] animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Box>
                  )}
                </PopoverBody>
              </PopoverContent>
            )}
          </Popover>

          <span
            onClick={getAllCurrencies}
            style={{ opacity: props.filteredResults?.length > 0 ? 0.7 : 1 }}
            className="text-white cursor-pointer"
          >
            {<LuFilter color="white" cursor="pointer" />}{" "}
          </span>
        </Flex>

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
                setTimeFrame("1 00:00:00");
                setEmaHundred("");
                setEmaValue("");
                setEmaTwenty("");
                setEmaFifty("");
                setEmaTwoHundred("");
                setCurrency("");
                setTrend("");
                setWatchList("");
              }}
              opacity={timeFrame == "1 00:00:00" ? 0.5 : 1}
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
                setTimeFrame("7 00:00:00");
                setEmaHundred("");
                setEmaValue("");
                setEmaTwenty("");
                setEmaFifty("");
                setEmaTwoHundred("");
                setCurrency("");
                setTrend("");
                setWatchList("");
              }}
              opacity={timeFrame == "7 00:00:00" ? 0.5 : 1}
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

const Category = (props) => {
  return (
    <Box
      onClick={() => {
        props.setSelectedCategory(props.category.category);
        props.setSelectedSubCategory("");
        props.setModalState(false);
        props.setTrend("");
        props.setEmaHundred("");
        props.setEmaValue("");
        props.setEmaTwenty("");
        props.setEmaFifty("");
        props.setEmaTwoHundred("");
        props.setCurrency("");
        props.setTimeFrame("");
        props.setWatchList("");
      }}
      cursor="pointer"
      my="5px"
    >
      {props.category.category}
    </Box>
  );
};

const SubCategory = (props) => {
  return (
    <Box
      onClick={() => {
        props.setSelectedSubCategory(props.subCategory.name);
        props.setSelectedCategory("");
        props.setCloseSubCategoryModal(false);
        props.setTrend("");
        props.setEmaHundred("");
        props.setEmaValue("");
        props.setEmaTwenty("");
        props.setEmaFifty("");
        props.setEmaTwoHundred("");
        props.setCurrency("");
        props.setTimeFrame("");
        props.setWatchList("");
      }}
      cursor="pointer"
      my="5px"
    >
      {props.subCategory.name}
    </Box>
  );
};

export default Search;
