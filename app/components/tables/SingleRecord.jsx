import { Flex, Td, Tr } from "@chakra-ui/react";
import moment from "moment";
import Image from "next/image";
import React from "react";
import {
  BsCircleFill,
  BsDash,
  BsGraphDownArrow,
  BsGraphUpArrow,
} from "react-icons/bs";

const SingleRecord = (props) => {
  // console.log(props.emaRecords["ema20"], "ema 20");

  return (
    <Tr>
      <Td textAlign="center">{props.emaRecords.currency?.symbol}</Td>

      <Td textAlign="center">{props.emaRecords.currency?.category}</Td>
      <Td textAlign="center">{props.emaRecords.currency?.subcategory}</Td>
      <Td textAlign="center">{props.emaRecords?.close}</Td>

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
          <div style={{ margin: "0 auto" }}>
            <Image
              width={20}
              height={20}
              style={{ margin: "0 auto" }}
              src="/sideways_img.png"
              alt="img"
            />
          </div>
          // <span
          //   style={{
          //     textAlign: "center",
          //     margin: "0 auto",
          //   }}
          // >
          //   <BsDash
          //     style={{
          //       textAlign: "center",
          //       margin: "0 auto",
          //     }}
          //     color="white"
          //   />
          // </span>
        )}
      </Td>

      <Td textAlign="center">{props.emaRecords?.monhigh}</Td>
      <Td textAlign="center">{props.emaRecords?.monmid}</Td>
      <Td textAlign="center">{props.emaRecords?.monlow}</Td>
      <Td textAlign="center">{props.emaRecords["ema20"]}</Td>
      <Td textAlign="center">{props.emaRecords["ema50"]}</Td>
      <Td textAlign="center">{props.emaRecords["ema100"]}</Td>
      <Td textAlign="center">{props.emaRecords["ema200"]}</Td>
      <Td textAlign="center">
        <Flex alignItems="center" justifyContent="center" gap="20px">
          {props.emaRecords["20>50"] == true ? (
            <span>
              <BsCircleFill color="#66FF00" />
            </span>
          ) : (
            <span>
              <BsCircleFill color="#FF3131" />
            </span>
          )}
          {props.emaRecords["50>100"] == true ? (
            <span>
              <BsCircleFill color="#66FF00" />
            </span>
          ) : (
            <span>
              <BsCircleFill color="#FF3131" />
            </span>
          )}
          {props.emaRecords["100>200"] == true ? (
            <span>
              <BsCircleFill color="#66FF00" />
            </span>
          ) : (
            <span>
              <BsCircleFill color="#FF3131" />
            </span>
          )}
          {props.emaRecords["close>100"] == true ? (
            <span>
              <BsCircleFill color="#66FF00" />
            </span>
          ) : (
            <span>
              <BsCircleFill color="#FF3131" />
            </span>
          )}
        </Flex>
      </Td>

      <Td textAlign="center">
        {props.emaRecords["20>50"] &&
        props.emaRecords["50>100"] &&
        props.emaRecords["100>200"] &&
        props.emaRecords["close>100"] == true
          ? "Strong Up"
          : props.emaRecords["20>50"] &&
            props.emaRecords["50>100"] &&
            props.emaRecords["100>200"] &&
            !props.emaRecords["close>100"] == true
          ? "Up"
          : props.emaRecords["20>50"] &&
            props.emaRecords["50>100"] &&
            !props.emaRecords["100>200"] &&
            !props.emaRecords["close>100"]
          ? "Positive"
          : !props.emaRecords["20>50"] &&
            !props.emaRecords["50>100"] &&
            !props.emaRecords["100>200"] &&
            !props.emaRecords["close>100"] == false
          ? "Strong Down"
          : !props.emaRecords["20>50"] &&
            !props.emaRecords["50>100"] &&
            !props.emaRecords["100>200"] &&
            props.emaRecords["close>100"]
          ? "Down"
          : !props.emaRecords["20>50"] &&
            !props.emaRecords["50>100"] &&
            props.emaRecords["100>200"] &&
            props.emaRecords["close>100"]
          ? "Negative"
          : "Sideways"}
      </Td>
      <Td textAlign="center">{props.emaRecords?.currency?.exchange}</Td>
    </Tr>
  );
};

export default SingleRecord;
