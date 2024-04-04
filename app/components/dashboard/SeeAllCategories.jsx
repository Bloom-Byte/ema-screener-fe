"use client";
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";
import SingleCategory from "./SingleCategory";

const SeeAllCategories = (props) => {
  return (
    <div className="w-[95%] my-[30px] mx-auto overflow-x-scroll overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ">
      <TableContainer>
        <Table
          variant="striped"
          // bgColor="gray.100"
          // stripedBgColor="gray.400"
          textAlign="center"
          colorScheme="teal"
          color="black"
        >
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th textAlign="center">S/N</Th>
              <Th textAlign="center">Symbol</Th>
              <Th textAlign="center">Category</Th>
              <Th textAlign="center">Sub Category</Th>
              <Th textAlign="center">Exchange</Th>
            </Tr>
          </Thead>
          {props.coins.length > 0 ? (
            <Tbody>
              {props.coins.map((coin, index) => {
                return (
                  <SingleCategory
                    key={index}
                    setCoins={props.setCoins}
                    coins={props.coins}
                    coin={coin}
                  />
                );
              })}
            </Tbody>
          ) : (
            <Tr textAlign="center">
              <Td colSpan={4}>
                <Box
                  textAlign="center"
                  margin="auto"
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={4}
                >
                  You have not added anything yet
                </Box>
              </Td>
            </Tr>
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default SeeAllCategories;
