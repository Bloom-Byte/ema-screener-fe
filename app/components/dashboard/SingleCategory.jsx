import { DeleteIcon } from "@chakra-ui/icons";
import { Td, Tr } from "@chakra-ui/react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

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
      <Td textAlign="center">{props.coin.exchange}</Td>
      <Td>
        <Tippy placement="bottom" content="delete">
          <span>
            <DeleteIcon onClick={deleteCoin} cursor="pointer" />{" "}
          </span>
        </Tippy>
      </Td>
    </Tr>
  );
};

export default SingleCategory;
