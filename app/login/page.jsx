"use client";
import React, { useState } from "react";
import Login from "../components/login/Login";
import EnterEmail from "../components/EnterEmail";
import { ToastContainer } from "react-toastify";

const page = () => {
  const [forgotPass, setForgotPass] = useState(false);
  return (
    <div>
      {forgotPass ? (
        <EnterEmail setForgotPass={setForgotPass} />
      ) : (
        <Login setForgotPass={setForgotPass} />
      )}
      <ToastContainer />
    </div>
  );
};

export default page;
