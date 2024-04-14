import { ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

const Paginate = ({
  postsPerPage,
  totalPosts,
  handlePageClick,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

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
            p="7px 15px"
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
