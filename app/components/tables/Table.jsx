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
} from "@chakra-ui/react";
const Tabled = () => {
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
              <Th textAlign="center">Sub Category</Th>
              <Th textAlign="center">Symbol</Th>
              <Th textAlign="center">Time (UTC)</Th>
              <Th textAlign="center">Exchange</Th>
              <Th textAlign="center">MH</Th>
              <Th textAlign="center">MM</Th>
              <Th textAlign="center">ML</Th>
              <Th textAlign="center">20&gt;50</Th>
              <Th textAlign="center">50&gt;100</Th>
              <Th textAlign="center">100&gt;200</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr textAlign="center">
              <Td textAlign="center">1</Td>
              <Td textAlign="center">
                <p className="flex items-center gap-1">
                  <span
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    {" "}
                    Bitcoin
                  </span>
                </p>{" "}
              </Td>
              <Td textAlign="center">
                <p className="flex items-center gap-1">
                  <span
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    {" "}
                    Btc/Usdt
                  </span>
                </p>
              </Td>
              <Td textAlign="center">2024-03-24 19:03</Td>
              <Td textAlign="center">4</Td>
              <Td textAlign="center">
                <p className="flex items-center gap-1">
                  <span
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    {" "}
                    Bitcoin
                  </span>
                  <span>
                    <BsGraphDownArrow color="red" />
                  </span>
                </p>
              </Td>
              <Td textAlign="center">
                <p className="flex items-center gap-1">
                  <span
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    {" "}
                    Bitcoin
                  </span>
                  <span>
                    <BsGraphUpArrow color="green" />
                  </span>
                </p>
              </Td>{" "}
              <Td textAlign="center">
                <p className="flex items-center gap-1">
                  <span
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    {" "}
                    Bitcoin
                  </span>
                  <span>
                    <BsGraphDownArrow color="red" />
                  </span>
                </p>
              </Td>
              <Td textAlign="center">
                <p className="flex items-center gap-[5px]">
                  <span
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    Bitcoin
                  </span>
                  <span>
                    <BsGraphDownArrow color="red" />
                  </span>
                </p>
              </Td>
              <Td textAlign="center">50</Td>
              <Td textAlign="center">50</Td>
            </Tr>

            <Tr>
              <Td>2</Td>
              <Td>
                <p className="flex items-center gap-[5px]">
                  <span
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    {" "}
                    Etherium
                  </span>
                </p>{" "}
              </Td>
              <Td>ETH</Td>
              <Td>2024-03-24 19:03</Td>
              <Td>3</Td>
              <Td>30.48</Td>
              <Td>30.48</Td>
              <Td>30.48</Td>
              <Td>30.48</Td>
              <Td>30.48</Td>
              <Td>30.48</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>MetaMusk</Td>
              <Td>Meta</Td>
              <Td>2024-03-24 19:03</Td>

              <Td>2</Td>
              <Td>
                {" "}
                <p className="flex items-center gap-[5px]">
                  <span
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    {" "}
                    MetaMusk
                  </span>
                  <span>
                    <BsGraphUpArrow color="green" />
                  </span>
                </p>
              </Td>
              <Td>2</Td>
              <Td>
                {" "}
                <p className="flex items-center gap-1">
                  <span
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    {" "}
                    MetaMusk
                  </span>
                </p>
              </Td>
              <Td>2</Td>
              <Td>0.91444</Td>
              <Td>0.91444</Td>
            </Tr>
            <Tr>
              <Td>4</Td>
              <Td>4</Td>
              <Td>3</Td>
              <Td>2024-03-24 19:03</Td>

              <Td>0.91444</Td>
              <Td>0.91444</Td>
              <Td>0.91444</Td>
              <Td>0.91444</Td>
              <Td>0.91444</Td>
              <Td>0.91444</Td>
              <Td>0.91444</Td>
            </Tr>
            <Tr>
              <Td>5</Td>
              <Td>mets (m)</Td>
              <Td>3</Td>
              <Td>2024-03-24 19:03</Td>

              <Td>45</Td>
              <Td>45</Td>
              <Td>45</Td>
              <Td>45</Td>
              <Td>45</Td>
              <Td>0.91444</Td>
              <Td>0.91444</Td>
            </Tr>
            <Tr>
              <Td>6</Td>
              <Td>6</Td>
              <Td>6</Td>
              <Td>2024-03-24 19:03</Td>

              <Td>6</Td>
              <Td>6</Td>
              <Td>10</Td>
              <Td>10</Td>
              <Td>10</Td>
              <Td>0.91444</Td>
              <Td>0.91444</Td>
            </Tr>
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tabled;
