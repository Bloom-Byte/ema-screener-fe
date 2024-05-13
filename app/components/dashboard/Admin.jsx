"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import Tippy from "@tippyjs/react";
import React, { useEffect, useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import "tippy.js/dist/tippy.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { useAppContext } from "@/app/helper/Helpers";
import { LuFilter } from "react-icons/lu";

const Admin = (props) => {
  const { contextValue } = useAppContext();

  const [symbol, setSymbol] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [subCategory, setSubCategory] = useState("");
  const [exchangeField, setExchangeField] = useState("");
  const [successfulBtn, setSuccessfulBtn] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  //Function to handle adding coin
  const addCoin = async (e) => {
    e.preventDefault();
    setSuccessfulBtn(true);
    const allCoins = {
      symbol: symbol,
      category: category,
      subcategory: subCategory,
      exchange: exchangeField,
    };
    try {
      if (
        allCoins.symbol &&
        allCoins.category &&
        allCoins.exchange &&
        allCoins.subcategory
      ) {
        await axios({
          method: "POST",
          url: `${contextValue.base_url}/currencies/`,
          data: allCoins,
          headers: {
            Authorization: `AuthToken ${
              contextValue.token || localStorage.getItem("token")
            }`,
          },
        })
          .then((res) => {
            props.setEmaCurrencies((prev) => [res.data, ...prev]);
            setSuccessfulBtn(false);
            toast.success("Currency added successfully");
            setCategory(" ");
            setExchangeField(" ");
            setSubCategory("");
            setSymbol("");
          })
          .catch((err) => {
            console.log(err);
            setSuccessfulBtn(false);
            toast.error("Failed to add currency");
          });
      } else {
        console.log("empty values detected");
        toast.error("Empty values detected");
        setSuccessfulBtn(false);
      }
    } catch (error) {
      console.log(error);
      setSuccessfulBtn(false);
    }
  };

  //Function to search for coin
  const searchCoin = async (e) => {
    e.preventDefault();

    try {
      await axios({
        method: "GET",
        url: `${contextValue.base_url}/currencies/?search=${searchValue}`,
        headers: {
          Authorization: `AuthToken ${
            contextValue.token || localStorage.getItem("token")
          }`,
        },
      })
        .then((res) => {
          props.setEmaCurrencies(res.data.results);
          // setSearchValue("");
          setSearchValue("");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Seems an error has occurred");
        });
    } catch (error) {
      console.log(error);
    }
  };

  const filterByCategory = async () => {
    props.setFilteredSubCategory([]);
    props.setEmaCurrencies([]);
    props.setLoaded(true);
    const ApiKey = process.env.NEXT_PUBLIC_API_KEY;
    if (ApiKey) {
      try {
        await axios({
          method: "GET",
          url: `${contextValue.base_url}/currencies/categories`,
          headers: {
            "x-API-KEY": ApiKey,
            "Content-Type": "application/json",
          },
        }).then((res) => {
          props.setFilteredCategory(res.data.data.categories);
          props.setLoaded(false);
        });
      } catch (error) {
        console.log(error);
        props.setLoaded(false);
      }
    }
  };

  const filterBySubCategory = async () => {
    props.setFilteredCategory([]);
    props.setEmaCurrencies([]);
    props.setLoaded(true);
    const ApiKey = process.env.NEXT_PUBLIC_API_KEY;
    if (ApiKey) {
      try {
        await axios({
          method: "GET",
          url: `${contextValue.base_url}/currencies/categories`,
          headers: {
            "x-API-KEY": ApiKey,
            "Content-Type": "application/json",
          },
        }).then((res) => {
          props.setFilteredSubCategory(res.data.data.subcategories);
          props.setLoaded(false);
        });
      } catch (error) {
        console.log(error);
        props.setLoaded(false);
      }
    }
  };

  const getAllCurrencies = async () => {
    props.setFilteredCategory([]);
    props.setFilteredSubCategory([]);
    props.setLoaded(true);
    const ApiKey = process.env.NEXT_PUBLIC_API_KEY;
    if (ApiKey) {
      try {
        await axios({
          method: "GET",
          url: `${contextValue.base_url}/currencies/`,
          headers: {
            "x-API-KEY": ApiKey,
            "Content-Type": "application/json",
          },
        }).then((res) => {
          props.setEmaCurrencies(res.data.results);
          props.setLoaded(false);
        });
      } catch (error) {
        console.log(error);
        props.setLoaded(false);
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ margin: "20px auto" }}
      >
        <Container width="100%" maxW="95%" m="0 auto" p="0">
          <Text>Add Currency </Text>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            gap="10px"
          >
            <form onSubmit={addCoin}>
              <Flex
                p="0"
                flexWrap={{ base: "wrap", md: "nowrap" }}
                alignItems="center"
                m="20px auto"
                gap="15px"
              >
                <Input
                  onChange={(e) => setSymbol(e.target.value)}
                  placeholder="Enter Symbol"
                  value={symbol}
                  type="text"
                />

                <Select
                  onChange={(e) => setCategory(e.target.value)}
                  cursor="pointer"
                  placeholder="Select Category"
                  value={category}
                >
                  <option style={{ cursor: "pointer" }} value="Crypto">
                    Crypto{" "}
                  </option>
                  <option style={{ cursor: "pointer" }} value="Forex">
                    Forex{" "}
                  </option>
                  <option
                    style={{ cursor: "pointer" }}
                    value="Metals & commodities"
                  >
                    Metals & Commodities{" "}
                  </option>
                  <option style={{ cursor: "pointer" }} value="Stocks">
                    Stocks{" "}
                  </option>
                  <option style={{ cursor: "pointer" }} value="Indices">
                    Indices{" "}
                  </option>
                </Select>

                <Input
                  onChange={(e) => setSubCategory(e.target.value)}
                  placeholder="Enter subCategory"
                  value={subCategory}
                  type="text"
                />
                <Input
                  onChange={(e) => setExchangeField(e.target.value)}
                  placeholder="Enter Exchange Field"
                  value={exchangeField}
                  type="text"
                />
                {successfulBtn ? (
                  <Button disabled type="button" colorScheme="yellow" w="100%">
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
                    Adding Currency...
                  </Button>
                ) : (
                  <Button type="submit" colorScheme="yellow" w="100%">
                    Submit
                  </Button>
                )}
              </Flex>
            </form>

            <form onClick={searchCoin} className="flex items-center gap-3">
              <Input
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search"
                borderRadius="6px"
                value={searchValue}
                color="#000"
                type="text"
                // className="py-1 px-2 text-[#000] outline-0 rounded-[8px]"
              />
              <Button
                colorScheme="yellow"
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

            <Flex my="10px" alignItems="center" gap="15px">
              <Button
                onClick={filterByCategory}
                colorScheme="yellow"
                className="rounded-[6px]"
                opacity={props.filteredCategory?.length > 0 ? 0.7 : 1}
              >
                Category{" "}
              </Button>
              <Button
                onClick={filterBySubCategory}
                colorScheme="yellow"
                className="rounded-[6px]"
                opacity={props.filteredSubCategory?.length > 0 ? 0.7 : 1}
              >
                Sub-Category{" "}
              </Button>
              <span onClick={getAllCurrencies} className="cursor-pointer">
                {<LuFilter cursor="pointer" />}{" "}
              </span>
            </Flex>
          </Box>
          <ToastContainer />
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default Admin;
