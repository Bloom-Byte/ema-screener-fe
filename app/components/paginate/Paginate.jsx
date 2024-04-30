import { ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

const Paginate = ({
  postsPerPage,
  totalPosts,
  handlePageClick,
  currentPage,
  filteredResults,
}) => {
  //This function would allow it to work normally but if it can get too long
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // //!This function here is designed to only show 3 numbers at a time depending on the current page
  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  // let displayNumbers = [];
  // if (currentPage === 1) {
  //   displayNumbers = [1, 2, 3];
  // } else if (currentPage === pageNumbers.length) {
  //   displayNumbers = [currentPage - 2, currentPage - 1, currentPage];
  // } else {
  //   displayNumbers = [currentPage - 1, currentPage, currentPage + 1];
  // }

  return (
    <nav className=" flex justify-end my-[30px] ">
      <UnorderedList
        listStyleType="none"
        display="flex"
        gap="10px"
        className="flex justify-end  w-[95%] m-auto"
      >
        {pageNumbers.map((number, index) => (
          <ListItem
            bgColor="#F4A608"
            opacity={currentPage == number ? 0.5 : 1}
            key={number}
            fontSize="20px"
            p="4px 10px"
            borderRadius="4px"
            onClick={() => handlePageClick(number)}
            cursor="pointer"
          >
            {number}
          </ListItem>
        ))}
      </UnorderedList>
    </nav>
  );
};
export default Paginate;
