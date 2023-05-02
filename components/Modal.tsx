// @ts-nocheck
import React, { useState, useEffect, useRef, useMemo } from "react";
import ReactDOM from "react-dom";
import Button from "./shareComponent/Button";
import { useAtom } from "jotai";
import { showAtom } from "./shareComponent/Store";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { getSession, signIn } from "next-auth/react";
import Link from "next/link";
// @ts-nocheck

export default function Modal() {
  const [isBrowser, setIsBrowser] = useState(false);
  const [show, showState] = useAtom(showAtom);
  const [isLogin, setIsLogin] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const loginButtonText = useMemo(() => {
    if (isLogin) {
      return "Create account";
    } else {
      return "Login";
    }
  }, [isLogin]);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
  };
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);
  const handleClickOutside = (e) => {
    if (refOne && !refOne.current?.contains(e.target)) {
      showState(false);
      console.log("i was clicked");
    } else {
      console.log("bitch");
    }
  };

  const axiosPost = async (props) => {
    const { data } = await axios.post("api/auth/Signup", {
      method: "POST",
      body: props,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
    console.log(data.data + "fukc this shits");
    return data.data;
  };

  const onSuccess = () => {
    console.log("it works");
  };
  const onError = () => {
    console.log("it works");
  };

  /*    function createUser(email,password){
        // @ts-ignore
        return useQuery("createuser",axiosPost(email,password),{
            onSuccess,
            onError
        })
    }*/
  const queryClient = useQueryClient();
  // @ts-ignore
  const { mutate, isLoading, error } = useMutation(axiosPost, {
    onSuccess: (email, password) => {
      const message = "success";
      alert(message);
      console.log(message);
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      console.log("it was succesful");
      /*queryClient.invalidateQueries('create');*/
    },
  });

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;
    const info = {
      email: enteredEmail,
      password: enteredPassword,
    };

    if (isLogin === false) {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      if (result.error === null) {
        showState(false);
      }
      console.log(result);
      console.log(result.error + "im not wrong");
      console.log("u were wrong m8");
    } else {
      try {
        const result = await mutate(info);
        console.log(result);
      } catch (error) {
        console.log("this shit hits");
        console.log(error);
      }
    }
  };

  async function changePasswordHandler(passwordData) {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }
  const modalContent = show ? (
    <>
      <form>
        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-lg">
          <div
            className="z-50 h-80 w-96 rounded-lg bg-mainBgColor"
            ref={refOne}
          >
            <div>
              <div className="mt-4 flex items-center justify-center">
                Sasan Co
              </div>
              <div className="ml-4  mr-4 mt-8 flex flex-col">
                <div>UserName:</div>
                <input ref={emailInputRef} />
                <div>Password:</div>
                <input ref={passwordInputRef} />
              </div>
              <div
                onClick={(e) => submitHandler(e)}
                className="mt-8 flex items-center justify-center space-x-12"
              >
                <Button
                  buttonColor="bg-green-500 w-24 h-14"
                  textColor="text-white"
                  input={loginButtonText}
                />
                <div onClick={() => showState(false)}>
                  <Button
                    buttonColor={"bg-red-500 w-24 h-14"}
                    textColor={"text-white"}
                    input={"Cancel"}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 flex flex-col items-center justify-center border-t-2">
              {isLogin ? (
                <div onClick={() => setIsLogin(!isLogin)}>
                  do u have a account click here
                </div>
              ) : (
                <div onClick={() => setIsLogin(!isLogin)}>
                  u dont have a account click here
                </div>
              )}
              <Link href="changePassword">Change Your Password!</Link>
            </div>
          </div>
        </div>
      </form>
    </>
  ) : null;

  if (isBrowser) {
    // @ts-ignore
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("loginPopUp")
    );
  } else {
    return null;
  }
}
