"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Tabled from "./components/tables/Table";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, ListItem, Text, UnorderedList } from "@chakra-ui/react";
// import { useAppContext } from "./helper/Helpers";

export default function Home() {
  // const { contextValue } = useAppContext();

  const [pageNumber, setPageNumber] = useState(1); // Initial page number
  const [pageSize, setPageSize] = useState(20);
  const [allEmaRecords, setAllEmaRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePageClick = (page) => {
    setPageNumber(page);
  };

  const fetchEmaRecords = async () => {
    setLoading(true);
    // console.log(pageNumber, "pageNumber");
    // const offset = (pageNumber - 1) * pageSize;
    // console.log(offset, "offset");
    // const token = localStorage.getItem("token");

    // const apiUrl = `https://be.emascreener.bloombyte.dev/api/v1/ema-records/?limit=${pageSize}&offset=${offset}`;
    const wsUrl = `wss://be.emascreener.bloombyte.dev:8000/ws/ema-records/update/?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
    try {
      const WS = new WebSocket(wsUrl);
      WS.onopen = () => {
        WS.onopen("Hey server, this is the client");
        console.log("WebSocket connection opened");
      };

      WS.onerror = (e) => {
        console.error("WebSocket connection error:", e);
      };

      WS.onmessage = (e) => {
        // Handle incoming messages here
        console.log("Received message:", e.data);
      };
      // const response = await axios({
      //   method: "GET",
      //   url: apiUrl,
      //   headers: {
      //     Authorization: `AuthToken ${localStorage.getItem("token")}`,
      //   },
      // }).catch((error) => {
      //   console.error("Error fetching EMA records:", error);
      //   toast.error("Error fetching EMA records");
      //   setLoading(false);
      // });
      // const emaRecords = response.data.results;
      // console.log("Retrieved EMA records:", emaRecords);
      // setAllEmaRecords(response.data.results);
      setLoading(false);
      // Process and display the retrieved EMA records in your UI
    } catch (error) {
      console.error("Error fetching EMA records:", error);
      toast.error("Error fetching EMA records");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEmaRecords();
  }, [pageNumber, pageSize]); // Refetch when pageNumber or pageSize changes

  const totalPages = Math.ceil(filteredResults.length / pageSize);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  //! This is another pagination logic
  // const totalPages = Math.ceil(allEmaRecords.length / pageSize);
  // const startIndex = (pageNumber - 1) * pageSize;
  // const endIndex = Math.min(startIndex + pageSize, allEmaRecords.length);
  // const currentItems = allEmaRecords.slice(startIndex, endIndex);

  // const pageNumbers = Array.from(
  //   { length: totalPages },
  //   (_, index) => index + 1
  // );

  //*Another pagination logic
  // const totalPages = Math.ceil(allEmaRecords.length / pageSize);
  // const startIndex = (pageNumber - 1) * pageSize;
  // const endIndex = startIndex + pageSize;
  // const currentItems = allEmaRecords.slice(startIndex, endIndex);

  // const totalPages = Math.ceil(allEmaRecords.length / pageSize);
  // const pageNumbers = [];
  // for (let i = 1; i <= totalPages; i++) {
  //   pageNumbers.push(i);
  // }

  // // Call the fetchEmaRecords function whenever the pageNumber changes
  // useEffect(() => {
  //   fetchEmaRecords();
  // }, [pageNumber]);

  console.log(pageNumbers, "pageNumbers");

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-[#332605] text-#fff w-full overflow-x-hidden h-[100%] min-h-[100%]"
      >
        <Navbar />
        <Search
          loading={loading}
          setLoading={setLoading}
          setAllEmaRecords={setAllEmaRecords}
          setFilteredResults={setFilteredResults}
        />
        <Tabled
          // currentItems={currentItems}
          pageSize={pageSize}
          allEmaRecords={allEmaRecords}
          setAllEmaRecords={setAllEmaRecords}
          filteredResults={filteredResults}
          loading={loading}
        />
        <div
          // style={{ border: "2px red solid" }}
          className="pagination-container"
        >
          <UnorderedList
            listStyleType="none"
            display="flex"
            gap="10px"
            className="pagination"
          >
            {pageNumbers.map((number) => (
              <ListItem
                bgColor="#F4A608"
                key={number}
                fontSize="20px"
                p="7px 15px"
                onClick={() => handlePageClick(number)}
              >
                {number}
              </ListItem>
            ))}
          </UnorderedList>
          {/* <Button onClick={handlePreviousPage}>Previous</Button>
          {pageNumbers.map((number) => (
            <Button key={number} onClick={() => handlePageClick(number)}>
              {number}
            </Button>
          ))}
          <Button onClick={handleNextPage}>Next</Button> */}
          {/* <ul className="pagination">
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={number === pageNumber ? "bg-red" : "bg-blue"}
                onClick={() => handlePageClick(number)}
              >
                {number}
              </li>
            ))}
          </ul> */}
        </div>
        <ToastContainer />
      </motion.div>
    </AnimatePresence>
  );
}
