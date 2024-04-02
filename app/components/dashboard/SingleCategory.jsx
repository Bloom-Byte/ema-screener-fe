import { DeleteIcon } from "@chakra-ui/icons";
import { Td, Tr } from "@chakra-ui/react";
import React from "react";

const SingleCategory = (props) => {
  const deleteCoin = () => {
    props.setCoins(props.coins.filter((coin) => coin.SN !== props.coin.SN));
  };
  return (
    <Tr>
      <Td textAlign="center">{props.coin.SN}</Td>
      <Td textAlign="center">{props.coin.symbol}</Td>
      <Td textAlign="center">{props.coin.category}</Td>
      <Td textAlign="center">{props.coin.subCategory}</Td>
      <Td>
        <DeleteIcon onClick={deleteCoin} cursor="pointer" />{" "}
      </Td>
    </Tr>
  );
};

export default SingleCategory;
