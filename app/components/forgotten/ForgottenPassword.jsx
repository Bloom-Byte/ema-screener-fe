"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { Suspense, useState } from "react";
import NextLink from "next/link";
import { FcGoogle } from "react-icons/fc";
// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../firebase-config/Firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useAppContext } from "@/app/helper/Helpers";

function SearchBarFallback() {
  return <>placeholder</>;
}
const ForgottenPassword = () => {
  const { contextValue } = useAppContext();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const [hideForgotPassword, setHideForgotPassword] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);

  // const router = useRouter();

  // const router = useRouter();

  const search = useSearchParams();

  const recoverPassword = async (e) => {
    e.preventDefault();

    const extractedToken = search.get("resettoken");

    console.log(extractedToken, "extractedToken");

    const token = contextValue.token || localStorage.getItem("token");

    const userInfo = {
      token: extractedToken,
      new_password: newPassword,
    };

    console.log(userInfo, "userInfo");

    if (userInfo.new_password !== confirmPassword) {
      toast.error("Password does not match");
    } else if (extractedToken && userInfo.new_password) {
      setLoadingBtn(true);

      try {
        const response = await axios({
          method: "POST",
          url:
            "https://be.emascreener.bloombyte.dev/api/v1/accounts/reset-password/",
          data: userInfo,
          headers: {
            Authorization: `AuthToken ${token}`,
            "Content-Type": "application/json",
          },
        }).catch((err) => console.log(err, "network error"));

        if (response.status === 200 || "success") {
          setLoadingBtn(false);
          toast.success("Password reset successful");
          // localStorage.setItem("token", response.data.token);
          router.push("/login");
          // const token = localStorage.getItem("token");
          // contextValue.setToken(token);
          // contextValue.getCurrentUser(response.data.token);
        } else if (response.status == 400) {
          setIsAuth(true);
          setTimeout(() => {
            setIsAuth(false);
          }, 4000);
        } else {
          console.log("Validation Error");
          setIsAuth(true);
          setTimeout(() => {
            setIsAuth(false);
          }, 4000);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <Suspense fallback={<SearchBarFallback />}>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Container
            width="100vw"
            height="100vh"
            overflow="hidden"
            p="0"
            m="0 auto"
            maxHeight="100vh"
            bgColor="#ffffff40"
            border="2px red olid"
          >
            <Container
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              height="95%"
              width="100%"
              p="0"
              m="0"
              bgColor="#ffffff40"
            >
              <Box>
                <Image
                  boxSize="50px"
                  objectFit="cover"
                  src="./logos.png"
                  alt="Chat gpt"
                  margin="30px auto"
                  borderRadius="50%"
                />
              </Box>
              <Box
                display="flex"
                // flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
                width="95%"
                p="10px"
                m="0 auto"
                bgColor="#fff"
                borderRadius="15px"
                boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
              >
                <Stack
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  m="0 auto"
                  spacing="20px"
                  h="100%"
                  className="w-[90%] max-sm:w-[100%] "
                >
                  <Heading as="h3" size="lg">
                    Enter your account
                  </Heading>
                  <form
                    onSubmit={recoverPassword}
                    className="flex flex-col gap-6 w-full "
                  >
                    {hidePassword ? (
                      <Box position="relative">
                        <Input
                          onChange={(e) => setNewPassword(e.target.value)}
                          type="text"
                          placeholder="Enter new password"
                          size="lg"
                          defaultValue={confirmPassword}
                        />
                        <span
                          onClick={() => setHidePassword(false)}
                          className="absolute right-2 top-3 z-10 cursor-pointer"
                        >
                          {<ViewOffIcon />}{" "}
                        </span>
                      </Box>
                    ) : (
                      <Box position="relative">
                        <Input
                          type="password"
                          placeholder="Enter new password"
                          size="lg"
                          onChange={(e) => setNewPassword(e.target.value)}
                          defaultValue={confirmPassword}
                        />
                        <span
                          onClick={() => setHidePassword(true)}
                          className="absolute right-2 top-3 z-10 cursor-pointer"
                        >
                          {<ViewIcon />}{" "}
                        </span>
                      </Box>
                    )}

                    {hideForgotPassword ? (
                      <Box position="relative">
                        <Input
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          type="text"
                          placeholder="Confirm password"
                          size="lg"
                          defaultValue={newPassword}
                        />
                        <span
                          onClick={() => setHideForgotPassword(false)}
                          className="absolute right-2 top-3 z-10 cursor-pointer"
                        >
                          {<ViewOffIcon />}{" "}
                        </span>
                      </Box>
                    ) : (
                      <Box position="relative">
                        <Input
                          type="password"
                          placeholder="Confirm password"
                          size="lg"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          defaultValue={newPassword}
                        />
                        <span
                          onClick={() => setHideForgotPassword(true)}
                          className="absolute right-2 top-3 z-10 cursor-pointer"
                        >
                          {<ViewIcon />}{" "}
                        </span>
                      </Box>
                    )}
                    {loadingBtn ? (
                      <Button
                        size="lg"
                        disabled
                        type="button"
                        colorScheme="blue"
                        // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                      >
                        <svg
                          aria-hidden="true"
                          role="status"
                          className="inline w-4 h-4 me-3 text-white animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                        Changing Password...
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        w="100%"
                        colorScheme="blue"
                        size="lg"
                      >
                        Set New Password
                      </Button>
                    )}
                    {isAuth ? (
                      <Text color="red" textAlign="center">
                        {" "}
                        seems something went wrong.{" "}
                      </Text>
                    ) : (
                      ""
                    )}
                  </form>
                </Stack>
              </Box>
            </Container>
          </Container>
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
};

export default ForgottenPassword;
