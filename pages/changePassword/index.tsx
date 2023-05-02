// @ts-nocheck
import React, { useState, useEffect, useRef, useMemo } from "react";
import ReactDOM from "react-dom";
import Button from "../../components/shareComponent/Button";
import { useAtom } from "jotai";
import { showAtom } from "../../components/shareComponent/Store";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { signIn } from "next-auth/react";

// @ts-nocheck

export default function Index(props) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [show, showState] = useAtom(showAtom);
  const [isLogin, setIsLogin] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  console.log(props.onChangePassword);

  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  async function changePasswordHandler(passwordData) {
    console.log(passwordData);
    console.log(JSON.stringify(passwordData));
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

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredOldPassword = oldPasswordRef.current?.value;
    const enteredNewPassword = newPasswordRef.current?.value;

    console.log(enteredNewPassword, enteredOldPassword);

    changePasswordHandler({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
    console.log(changePasswordHandler);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className=" top-0 left-0 flex h-full w-full items-center justify-center rounded-lg">
        <div className="z-50 h-80 w-96 rounded-lg bg-mainBgColor">
          <div>
            <div className="mt-4 flex items-center justify-center">
              Sasan Co
            </div>
            <div className="ml-4  mr-4 mt-8 flex flex-col">
              <div>Current Password:</div>
              <input ref={oldPasswordRef} />
              <div>new Password:</div>
              <input ref={newPasswordRef} />
            </div>
            <div
              onClick={(e) => submitHandler(e)}
              className="mt-8 flex items-center justify-center space-x-12"
            >
              <Button
                buttonColor="bg-green-500 w-40 h-14"
                textColor="text-white"
                input="change Password"
              />
              <div onClick={() => showState(false)}>
                <Button
                  buttonColor={"bg-red-500 w-36 h-14"}
                  textColor={"text-white"}
                  input={"Cancel"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
