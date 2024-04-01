"use client";
import React from "react";
import "./Tables.css";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";

const Table = () => {
  return (
    <div className="overflow-x-scroll overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ">
      <table>
        <tr className="bg-[#F4A608]">
          <th>S/N</th>
          {/* <th>Category</th> */}
          <th>Sub Category</th>
          <th>Symbol</th>
          <th>Time (UTC)</th>
          <th>MH</th>
          <th>MM</th>
          <th>ML</th>
          <th>20&gt;50</th>
          <th>50&gt;100</th>
          <th>100&gt;200</th>
        </tr>
        <tr>
          <td>1</td>
          <td className="flex items-center justify-center gap-2">
            Bitcoin{" "}
            <span>
              <BsGraphUpArrow color="green" />{" "}
            </span>
          </td>
          <td>3</td>
          <td>3</td>
          <td>4</td>
          <td>4</td>
          <td>5</td>
          <td>5</td>
          <td>5</td>
          <td>5</td>
        </tr>
        <tr>
          <td>2</td>
          <td className="flex items-center justify-center gap-2">
            &#x20AC;{" "}
            <span>
              {" "}
              <BsGraphDownArrow color="red" />
            </span>
          </td>
          <td>$150</td>
          <td>4</td>
          <td>5</td>
          <td>5</td>
          <td>5</td>
          <td>5</td>
          <td>5</td>
          <td>5</td>
        </tr>
        <tr>
          <td>3</td>
          <td>&#xa3;</td>
          <td>&#xa3;</td>
          <td>$300</td>
          <td>4</td>
          <td>5</td>
          <td>5</td>
          <td>5</td>
          <td>5</td>
          <td>5</td>
        </tr>
        <tr>
          <td>4</td>
          <td>&#xa5;</td>
          <td>$250</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          {/* <td>4</td> */}
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>5</td>
        </tr>
        <tr>
          <td>5</td>
          <td>&#xa2;</td>
          <td>$250</td>
          <td>$250</td>
          <td>4</td>
          {/* <td>4</td> */}
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>5</td>
        </tr>
        <tr>
          <td>6</td>
          <td>&#x20B9;</td>
          <td>$250</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          {/* <td>4</td> */}
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>5</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
