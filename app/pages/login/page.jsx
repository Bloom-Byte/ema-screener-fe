"use client";
import Login from "../../components/login/Login";
import EnterEmail from "../../components/EnterEmail";
import { ToastContainer } from "react-toastify";
import { useAppContext } from "../../helper/Helpers";

const page = () => {
  const { contextValue } = useAppContext();

  return (
    <div>
      {contextValue.forgotPass ? <EnterEmail /> : <Login />}
      <ToastContainer />
    </div>
  );
};

export default page;
