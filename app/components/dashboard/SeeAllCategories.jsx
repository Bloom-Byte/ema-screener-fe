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
          textAlign="center"
          colorScheme="teal"
          color="black"
        >
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th textAlign="center">S/N</Th>
              <Th textAlign="center">Name</Th>
              <Th textAlign="center">Symbol.</Th>
              <Th textAlign="center">Category</Th>
              <Th textAlign="center">Current Price</Th>
              <Th textAlign="center">Sub Category</Th>
              <Th textAlign="center">Exchange</Th>
            </Tr>
          </Thead>
          {props.emaCurrencies.length > 0 ? (
            <Tbody>
              {props.emaCurrencies.map((coin, index) => {
                return (
                  <SingleCategory
                    key={coin.id}
                    index={index}
                    setEmaCurrencies={props.setEmaCurrencies}
                    emaCurrencies={props.emaCurrencies}
                  />
                );
              })}
              {/* {props.emaCurrencies.map((coin, index) => {
                return (
                  <SingleCategory
                    key={coin.id}
                    setEmaCurrencies={props.setEmaCurrencies}
                    emaCurrencies={props.emaCurrencies}
                    coin={coin}
                  />
                );
              })} */}
            </Tbody>
          ) : (
            <Thead>
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
            </Thead>
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default SeeAllCategories;
