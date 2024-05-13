"use client";
import React, { useEffect, useState } from "react";
import Admin from "../components/dashboard/Admin";
import SeeAllCategories from "../components/dashboard/SeeAllCategories";
import AdminNavbar from "../components/adminNav/AdminNavbar";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from "../helper/Helpers";
import Paginate from "../components/paginate/Paginate";

const page = () => {
  const { contextValue } = useAppContext();

  const router = useRouter();
  const [emaCurrencies, setEmaCurrencies] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredCategory, setFilteredCategory] = useState();
  const [filteredSubCategory, setFilteredSubCategory] = useState();
  const [currentPage, setCurrentPage] = useState(1); // Initial page number
  const [postsPerPage, setPostsPerPage] = useState(20);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const tok = window.localStorage.getItem("token");
    const userId = window.localStorage.getItem("userId");
    //If the Tok value is absent then use the contextToken else if tok is present use the value from the storage
    if (!contextValue.token || !tok) {
      router.push("/login");
    } else {
      getCurrentUser(
        `${tok}` || `${contextValue.token}`,
        `${userId}` || `${contextValue.userId}`
      );
    }
  }, []);

  // getCurrentUser takes in a parameter called token which we'll get from getCurrentUser which is th token response
  const getCurrentUser = async (token, userId) => {
    // console.log(token, userId, "stuff");
    if (token && userId) {
      try {
        toast.success("Login successful");
      } catch (err) {
        console.log(err);
        toast.error(`user login failed!`);
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    getAllCurrencies();
  }, []);

  const getAllCurrencies = async () => {
    setLoaded(true);

    // const token = contextValue.token || localStorage.getItem("token");
    const ApiKey = process.env.NEXT_PUBLIC_API_KEY;

    if (ApiKey) {
      try {
        await axios({
          method: "GET",
          url: `${contextValue.base_url}/currencies/`,
          headers: {
            // Authorization: `AuthToken ${token}`,
            "x-API-KEY": ApiKey,
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            setEmaCurrencies(res.data.results);
            setLoaded(false);
          })
          .catch((error) => {
            console.log(error.response.status, "this is status");
            if (error.response.status == 401) {
              console.log(error, "An Error retrieving records has occurred");
              router.push("/login");
            }
          });
      } catch (error) {
        toast.error("An Error has occured");
        console.log(error, "An Error retrieving records has occurred");
        // router.push("/login");
      }
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOFFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = emaCurrencies.slice(indexOFFirstPost, indexOfLastPost);

  return (
    <div className="w-full overflow-x-hidden h-full min-h-full">
      <AdminNavbar />
      <Admin
        emaCurrencies={emaCurrencies}
        setEmaCurrencies={setEmaCurrencies}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setLoaded={setLoaded}
        setFilteredCategory={setFilteredCategory}
        setFilteredSubCategory={setFilteredSubCategory}
        filteredCategory={filteredCategory}
        filteredSubCategory={filteredSubCategory}
      />
      <SeeAllCategories
        emaCurrencies={currentPosts}
        setEmaCurrencies={setEmaCurrencies}
        loaded={loaded}
        setLoaded={setLoaded}
        filteredCategory={filteredCategory}
        filteredSubCategory={filteredSubCategory}
      />
      {emaCurrencies.length > 0 ? (
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={emaCurrencies.length}
          handlePageClick={handlePageClick}
          currentPage={currentPage}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default page;
