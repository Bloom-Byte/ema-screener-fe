"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { AppContext } from "./Helpers";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppContextProvider = ({ children }) => {
  const [botCreatedSuccess, setBotCreatedSuccess] = useState(false);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [forgotPass, setForgotPass] = useState(false);

  //First get the token from localStorage and pass it as a parameter to the getCurrentUser function

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const token = window.localStorage.getItem("token");
  //     setToken(token);
  //   }
  // }, [token]);

  const contextValue = {
    // getCurrentUser,
    token,
    setToken,
    setUserId,
    userId,
    forgotPass,
    setForgotPass,
  };

  return (
    <AppContext.Provider value={{ contextValue }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
