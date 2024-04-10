"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Tabled from "./components/tables/Table";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from "./helper/Helpers";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1); // Initial page number
  const [pageSize, setPageSize] = useState(20);
  const [allEmaRecords, setAllEmaRecords] = useState([]);
  const [loading, setLoading] = useState(false);

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
    console.log(pageNumber, "pageNumber");
    const offset = (pageNumber - 1) * pageSize;
    console.log(offset, "offset");
    const apiUrl = `https://be.emascreener.bloombyte.dev/api/v1/ema-records/?limit=${pageSize}&offset=${offset}`;
    try {
      const response = await axios({
        method: "GET",
        url: apiUrl,
        headers: {
          Authorization: `AuthToken ${localStorage.getItem("token")}`,
        },
      });
      const emaRecords = response.data.results;
      // console.log("Retrieved EMA records:", emaRecords);
      setAllEmaRecords(response.data.results);
      setLoading(false);
      // Process and display the retrieved EMA records in your UI
    } catch (error) {
      console.error("Error fetching EMA records:", error);
      // Handle the error in your UI
    }
  };
  // const totalPages = Math.ceil(allEmaRecords.length / pageSize);
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems = allEmaRecords.slice(startIndex, endIndex);

  const totalPages = Math.ceil(allEmaRecords.length / pageSize);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Call the fetchEmaRecords function whenever the pageNumber changes
  useEffect(() => {
    fetchEmaRecords();
  }, [pageNumber]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-[#332605] BORDER-2 Border-red-500 text-#fff w-full overflow-x-hidden h-[100%] min-h-[100%]"
      >
        <Navbar />
        <Search
          loading={loading}
          setLoading={setLoading}
          setAllEmaRecords={setAllEmaRecords}
        />
        <Tabled
          currentItems={currentItems}
          pageSize={pageSize}
          allEmaRecords={allEmaRecords}
          setAllEmaRecords={setAllEmaRecords}
          loading={loading}
        />
        <div className="pagination-container">
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={number === pageNumber ? "bg-red" : "bg-blue"}
                onClick={() => handlePageClick(number)}
              >
                {number}
              </li>
            ))}
          </ul>
        </div>
        <h1> Heelo world</h1>
        <ToastContainer />
      </motion.div>
    </AnimatePresence>
  );
}
