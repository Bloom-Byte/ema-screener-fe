import { Td, Tr } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import {
  BsCircleFill,
  BsDash,
  BsGraphDownArrow,
  BsGraphUpArrow,
} from "react-icons/bs";

const SingleRecord = (props) => {
  // console.log(props.emaRecords.timestamp, );
  return (
    <Tr>
      <Td textAlign="center">{props.index}</Td>
      <Td textAlign="center">{props.emaRecords.currency?.symbol}</Td>
      <Td textAlign="center">{props.emaRecords.currency?.subcategory}</Td>
      <Td textAlign="center">
        {props.emaRecords?.trend == 1 ? (
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
        ) : props.emaRecords?.trend == -1 ? (
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
        ) : (
          <span
            style={{
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <BsDash
              style={{
                textAlign: "center",
                margin: "0 auto",
              }}
              color="white"
            />
          </span>
        )}
      </Td>
      {/* <Td textAlign="center">{props.emaRecords.currency.symbol}</Td> */}
      <Td textAlign="center">{props.emaRecords?.timeframe}</Td>
      {/* <Td textAlign="center">
        {moment(props.emaRecords.timeframe).format("h:mm:ss")}
      </Td> */}
      <Td textAlign="center">{props.emaRecords?.currency?.exchange}</Td>
      <Td textAlign="center">{props.emaRecords?.monhigh}</Td>
      <Td textAlign="center">{props.emaRecords?.monmid}</Td>
      <Td textAlign="center">{props.emaRecords?.monlow}</Td>
      <Td textAlign="center">
        {props.emaRecords["20>50"] == true ? (
          <span
            style={{
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <BsCircleFill
              style={{ textAlign: "center", margin: "0 auto" }}
              color="#66FF00"
            />
          </span>
        ) : (
          <span
            style={{
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <BsCircleFill
              style={{
                textAlign: "center",
                margin: "0 auto",
              }}
              color="#FF3131"
            />
          </span>
        )}
      </Td>
      <Td textAlign="center">
        {props.emaRecords["50>100"] == true ? (
          <span>
            <BsCircleFill
              style={{
                textAlign: "center",
                margin: "0 auto",
              }}
              color="#66FF00"
            />
          </span>
        ) : (
          <span>
            <BsCircleFill
              style={{
                textAlign: "center",
                margin: "0 auto",
              }}
              color="#FF3131"
            />
          </span>
        )}
      </Td>
      <Td textAlign="center">
        {props.emaRecords["100>200"] == true ? (
          <span>
            <BsCircleFill
              style={{
                textAlign: "center",
                margin: "0 auto",
              }}
              color="#66FF00"
            />
          </span>
        ) : (
          <span>
            <BsCircleFill
              style={{ textAlign: "center", margin: "0 auto" }}
              color="#FF3131"
            />
          </span>
        )}
      </Td>
      <Td textAlign="center">
        {props.emaRecords["close>100"] == true ? (
          <span>
            <BsCircleFill
              style={{
                textAlign: "center",
                margin: "0 auto",
              }}
              color="#66FF00"
            />
          </span>
        ) : (
          <span>
            <BsCircleFill
              style={{ textAlign: "center", margin: "0 auto" }}
              color="#FF3131"
            />
          </span>
        )}
      </Td>
    </Tr>
  );
};

export default SingleRecord;
