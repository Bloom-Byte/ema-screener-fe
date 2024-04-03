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

const Admin = (props) => {
  const [symbol, setSymbol] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [subCategory, setSubCategory] = useState("");
  const [exchangeField, setExchangeField] = useState("");

  const addCoin = (e) => {
    e.preventDefault();
    const allCoins = {
      SN: props.coins.length + 1,
      symbol: symbol,
      category: category,
      subCategory: subCategory,
      exchange: exchangeField,
    };
    props.setCoins((prev) => [...prev, allCoins]);
  };

  useEffect(() => {
    toast.success("Login Successful");
  }, []);

  console.log(exchangeField, "this is the exchange field");

  return (
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
        >
          <form onSubmit={addCoin}>
            <Flex
              p="0"
              flexWrap={{ base: "wrap", md: "nowrap" }}
              alignItems="center"
              m="20px auto"
              gap="20px"
            >
              <Input
                onChange={(e) => setSymbol(e.target.value)}
                placeholder="Enter Symbol"
              />
              <Select
                onClick={(e) => setCategory(e.target.value)}
                cursor="pointer"
                placeholder="Select Category"
              >
                <option style={{ cursor: "pointer" }} value="A">
                  A{" "}
                </option>
                <option style={{ cursor: "pointer" }} value="B">
                  B{" "}
                </option>
                <option style={{ cursor: "pointer" }} value="C">
                  C{" "}
                </option>
                <option style={{ cursor: "pointer" }} value="D">
                  D{" "}
                </option>
                <option style={{ cursor: "pointer" }} value="E">
                  E{" "}
                </option>
              </Select>
              {/* <Input
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter Category"
              /> */}
              <Input
                onChange={(e) => setSubCategory(e.target.value)}
                placeholder="Enter subCategory"
              />
              <Input
                onChange={(e) => setExchangeField(e.target.value)}
                placeholder="Enter Exchange Field"
              />
              <Button type="submit" colorScheme="teal" w="100%">
                Submit
              </Button>
            </Flex>
          </form>

          <form className="flex items-center gap-3">
            <Input
              type="text"
              borderRadius="6px"
              color="#000"
              // className="py-1 px-2 text-[#000] outline-0 rounded-[8px]"
              placeholder="Search"
            />
            <Button
              // color=""
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
        </Box>
        <ToastContainer />
      </Container>
    </motion.div>
  );
};

export default Admin;
