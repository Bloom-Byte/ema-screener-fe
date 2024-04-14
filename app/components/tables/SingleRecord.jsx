import { Td, Tr } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";

const SingleRecord = (props) => {
  console.log(props.emaRecords.trend);
  return (
    <Tr>
      <Td textAlign="center">{props.index}</Td>
      <Td textAlign="center">{props.emaRecords.currency.symbol}</Td>
      <Td textAlign="center">{props.emaRecords.currency.subcategory}</Td>
      <Td textAlign="center">{props.emaRecords.trend}</Td>
      {/* <Td textAlign="center">{props.emaRecords.currency.symbol}</Td> */}
      <Td textAlign="center">
        {moment(props.emaRecords.timestamp).format("YYYY-M-D h:mm:ss")}
      </Td>
      <Td textAlign="center">{props.emaRecords.currency.exchange}</Td>
      <Td textAlign="center">{props.emaRecords.monhigh}</Td>
      <Td textAlign="center">{props.emaRecords.monmid}</Td>
      <Td textAlign="center">{props.emaRecords.monlow}</Td>
      <Td textAlign="center">
        {props.emaRecords["20>50"] == true ? (
          <span
            style={{
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <BsGraphUpArrow
              style={{ textAlign: "center", margin: "0 auto" }}
              color="green"
            />
          </span>
        ) : (
          <span
            style={{
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <BsGraphDownArrow
              style={{
                textAlign: "center",
                margin: "0 auto",
              }}
              color="red"
            />
          </span>
        )}
      </Td>
      <Td textAlign="center">
        {props.emaRecords["50>100"] == true ? (
          <span>
            <BsGraphUpArrow
              style={{
                textAlign: "center",
                margin: "0 auto",
              }}
              color="green"
            />
          </span>
        ) : (
          <span>
            <BsGraphDownArrow
              style={{
                textAlign: "center",
                margin: "0 auto",
              }}
              color="red"
            />
          </span>
        )}
      </Td>
      <Td textAlign="center">
        {props.emaRecords["100>200"] == true ? (
          <span>
            <BsGraphUpArrow
              style={{
                textAlign: "center",
                margin: "0 auto",
              }}
              color="green"
            />
          </span>
        ) : (
          <span>
            <BsGraphDownArrow
              style={{ textAlign: "center", margin: "0 auto" }}
              color="red"
            />
          </span>
        )}
      </Td>
      <Td textAlign="center">
        {props.emaRecords["close>100"] == true ? (
          <span>
            <BsGraphUpArrow
              style={{
                textAlign: "center",
                margin: "0 auto",
              }}
              color="green"
            />
          </span>
        ) : (
          <span>
            <BsGraphDownArrow
              style={{ textAlign: "center", margin: "0 auto" }}
              color="red"
            />
          </span>
        )}
      </Td>
    </Tr>
  );
};

export default SingleRecord;
