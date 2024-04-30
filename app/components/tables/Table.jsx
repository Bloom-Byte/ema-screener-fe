"use client";
import React from "react";
import "./Tables.css";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import SingleRecord from "./SingleRecord";
const Tabled = (props) => {
  return (
    <div className="w-[95%] my-[30px] mx-auto overflow-x-scroll overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ">
      {props.loading ? (
        <Box w="100%" minW="100%" maxW="100%" m="0 auto" textAlign="center">
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-8 h-8 me-3 text-[#525355] animate-spin"
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
      ) : (
        <TableContainer>
          <Table
            variant={props.allEmaRecords.length > 0 ? "striped" : "simple"}
            textAlign="center"
            colorScheme="gold"
            color="black"
          >
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr backgroundColor="white">
                <Th backgroundColor="white" textAlign="center">
                  S/N
                </Th>
                <Th textAlign="center">Symbol</Th>
                <Th textAlign="center">Category</Th>
                <Th textAlign="center">Sub Category</Th>
                <Th textAlign="center">Trend</Th>
                <Th textAlign="center">Time (UTC)</Th>
                <Th textAlign="center">Exchange</Th>
                <Th textAlign="center">MH</Th>
                <Th textAlign="center">MM</Th>
                <Th textAlign="center">ML</Th>
                <Th textAlign="center">20&gt;50</Th>
                <Th textAlign="center">50&gt;100</Th>
                <Th textAlign="center">100&gt;200</Th>
                <Th textAlign="center">
                  {"Close"} {">"} 100
                </Th>
                <Th textAlign="center">Close</Th>
                <Th textAlign="center">Indicator</Th>
                <Th textAlign="center">EMA 20</Th>
                <Th textAlign="center">EMA 50</Th>
                <Th textAlign="center">EMA 100</Th>
                <Th textAlign="center">EMA 200</Th>
              </Tr>
            </Thead>
            <Tbody>
              {!props.loading ? (
                props.filteredResults.length > 0 ? (
                  props.filteredResults.map((emaRecords, index) => {
                    return (
                      <SingleRecord
                        key={index + 1}
                        index={index + 1}
                        emaRecords={emaRecords}
                      />
                    );
                  })
                ) : (
                  <Tr>
                    <Td colSpan={13}>Nothing to be seen</Td>
                  </Tr>
                )
              ) : (
                <Tr>
                  <Td colSpan={13}>Loading...</Td>
                </Tr>
              )}
              {/* {props.filteredResults.length > 0 ? (
                props.filteredResults.map((emaRecords, index) => {
                  return (
                    <SingleRecord
                      key={index + 1}
                      index={index + 1}
                      emaRecords={emaRecords}
                    />
                  );
                })
              ) : (
                <Tr>
                  <Td colSpan={13}>Nothing to be seen</Td>
                </Tr>
              )} */}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Tabled;
