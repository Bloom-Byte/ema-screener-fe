"use client";
import { Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react";
import Tippy from "@tippyjs/react";
import React, { useEffect, useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import "tippy.js/dist/tippy.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = (props) => {
  const [symbol, setSymbol] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [subCategory, setSubCategory] = useState("");
  const addCoin = (e) => {
    e.preventDefault();
    const allCoins = {
      SN: props.coins.length + 1,
      symbol: symbol,
      category: category,
      subCategory: subCategory,
    };
    props.setCoins((prev) => [...prev, allCoins]);
  };

  useEffect(() => {
    toast.success("Login Successful");
  }, []);

  return (
    <div style={{ margin: "20px auto" }}>
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
              <Input
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter Category"
              />
              <Input
                onChange={(e) => setSubCategory(e.target.value)}
                placeholder="Enter subCategory"
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
    </div>
  );
};

export default Admin;
