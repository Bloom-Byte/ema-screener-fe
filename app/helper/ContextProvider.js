"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { AppContext } from "./Helpers";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [forgotPass, setForgotPass] = useState(false);

  const base_url = process.env.NEXT_PUBLIC_API_URL;

  const contextValue = {
    token,
    setToken,
    setUserId,
    userId,
    forgotPass,
    setForgotPass,
    base_url,
  };

  return (
    <AppContext.Provider value={{ contextValue }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
