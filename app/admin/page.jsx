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

const page = () => {
  const { contextValue } = useAppContext();

  const router = useRouter();
  const [emaCurrencies, setEmaCurrencies] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // toast.success("Login successful");
    const tok = window.localStorage.getItem("token");
    const userId = window.localStorage.getItem("userId");
    getCurrentUser(
      `${contextValue.token || tok}`,
      `${contextValue.userId || userId}`
    );
    // toast.success("Login successful");
  }, []);

  // getCurrentUser takes in a parameter called token which we'll get from getCurrentUser which is th token response
  const getCurrentUser = async (token, userId) => {
    // const tok = window.localStorage.getItem("token");
    // const userId = window.localStorage.getItem("useriD");
    // console.log(token, userId, "inside getCurrentUser");
    if (token && userId) {
      try {
        toast.success("Login successful");
      } catch (err) {
        console.log(err);
        toast.error(`user login failed!`);
        router.push("/login");
      }
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    setLoaded(true);
    // const WS = new WebSocket(`wss://be.emascreener.bloombyte.dev/api/v1/currencies/`, ['custom-header1', 'custom-header2']);

    const token = contextValue.token || localStorage.getItem("token");
    axios({
      method: "GET",
      url: "https://be.emascreener.bloombyte.dev/api/v1/currencies/",
      // data: "",
      headers: {
        Authorization: `AuthToken ${token} `,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // console.log(res.data.results, "res.data");
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
  }, []);

  return (
    <div className="w-full overflow-x-hidden h-full min-h-full">
      <AdminNavbar />
      <Admin
        emaCurrencies={emaCurrencies}
        setEmaCurrencies={setEmaCurrencies}
      />
      <SeeAllCategories
        emaCurrencies={emaCurrencies}
        setEmaCurrencies={setEmaCurrencies}
        loaded={loaded}
        setLoaded={setLoaded}
      />
    </div>
  );
};

export default page;
