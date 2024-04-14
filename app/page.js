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
import Paginate from "./components/paginate/Paginate";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1); // Initial page number
  const [postsPerPage, setPostsPerPage] = useState(20);
  const [allEmaRecords, setAllEmaRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const fetchEmaRecords = async () => {
    setLoading(true);

    const wsUrl = `ws://be.emascreener.bloombyte.dev:8000/ws/ema-records/?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
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
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOFFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredResults.slice(indexOFFirstPost, indexOfLastPost);

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
          allEmaRecords={allEmaRecords}
          setAllEmaRecords={setAllEmaRecords}
          filteredResults={currentPosts}
          loading={loading}
        />
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={filteredResults.length}
          handlePageClick={handlePageClick}
          currentPage={currentPage}
        />
        <ToastContainer />
      </motion.div>
    </AnimatePresence>
  );
}
