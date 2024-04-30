import { DeleteIcon } from "@chakra-ui/icons";
import { Td, Tr } from "@chakra-ui/react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAppContext } from "@/app/helper/Helpers";

const SingleCategory = (props) => {
  const { contextValue } = useAppContext();

  //Function to delete Currencies
  const deleteCurrency = async () => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${contextValue.base_url}/currencies/${props.coin.id}/delete/`,
        headers: {
          Authorization: `AuthToken ${
            contextValue.token || localStorage.getItem("token")
          }`,
        },
      }).catch((err) => console.log(err));
      if (response.status === 200) {
        toast.success("Currency deleted successfully");
        props.setEmaCurrencies(
          props.emaCurrencies.filter(
            (currency) => currency.id !== props.coin.id
          )
        );
      } else {
        toast.error("Error deleting currency");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error deleting currency");
    }
  };

  return (
    <Tr>
      <Td textAlign="center">{props.index}</Td>
      {/* <Td textAlign="center">{props.coin.name}</Td> */}
      <Td textAlign="center">{props.coin.symbol}</Td>
      <Td textAlign="center">{props.coin.category}</Td>
      {/* <Td textAlign="center">{props.coin.current_price}</Td> */}
      <Td textAlign="center">{props.coin.subcategory}</Td>
      <Td textAlign="center">{props.coin.exchange}</Td>
      <Td>
        <Tippy placement="bottom" content="delete">
          <span>
            <DeleteIcon onClick={deleteCurrency} cursor="pointer" />{" "}
          </span>
        </Tippy>
      </Td>
    </Tr>
  );
};

export default SingleCategory;
