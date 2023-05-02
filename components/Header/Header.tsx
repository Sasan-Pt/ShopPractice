import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAtom } from "jotai";
import { objectsAtom, showAtom, totalPrice } from "../shareComponent/Store";
import Button from "../shareComponent/Button";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { session } from "next-auth/core/routes";
import Link from "next/link";
import Checkout from "../../pages/Checkout";

const Header = (props: string | null | undefined) => {
  const [totalNumber, setTotalNumber] = useAtom(objectsAtom);
  console.log(totalNumber.length);

  const [show, showState] = useAtom(showAtom);
  const [showMenuBar, setShowMenuBar] = useState(false);
  const { data, status } = useSession();
  const userName = data?.user?.email;
  const signOutHandler = () => {
    signOut();
  };
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        showState(false);
      }
    });
  }, []);

  return (
    <>

      <div className="mt-4 " style={{direction:"rtl"}}>
        <div className=" flex justify-center items-center space-x-2 tphase:space-x-8 secondPhase:justify-between">
          <div className="flex">
            <div className="flex h-8 w-24  tphase:h-8 tphase:w-24">
              <Image src="/delete 2.png" width="103" height="80" />
            </div>
            <div className="flex h-8 w-24 font-bold tphase:h-6 tphase:w-24">
              iam bold
            </div>
          </div>
          <div className="flex secondPhase:hidden">
            <div className="aphase:w-23 relative left-[-11px] flex flex w-12 w-8 items-center justify-center bg-thirdColor clip tphase:w-12">
              <Image
                src="/Search.jpg"
                width="23"
                height="23"
                className="bg-thirdColor"
              />
            </div>
            <input
              className=" w-80 rounded-lg bg-secondColor  pr-3 firstPhase:w-44"
              type="text"
              placeholder="بگردید ..."
            />
          </div>
          <div className={"flex"}>
            <Link href="Checkout">
              <div className=" relative min-h-[23px] min-w-[23px]">
                <Image src="/ShoopingCart.png" width="23" height="23" />
                <div className="absolute left-4 top-[-8px]">
                  {totalNumber.length !== 0 ? (
                    <div className="flex w-6 items-center justify-center rounded-full bg-red-600 text-white">
                      {totalNumber.length}
                    </div>
                  ) : null}
                </div>
              </div>
            </Link>
            <div className="flex " onMouseEnter={() => setShowMenuBar(true)}
                 >
              <div
                  className="group flex min-h-[23px] min-w-[23px] pl-2 pr-2"

              >
                <div className={"min-h-[23px] min-w-[23px]"}>
                  <Image src="/Login.png" width="25" height="25" />
                </div>

                {showMenuBar ? (
                    <div className="absolute z-50 mt-[2%] h-24  w-28 rounded bg-mouseoverToolBar  align-middle thirdPhase:left-6 thirdPhase:top-8" onMouseLeave={() => setShowMenuBar(!showMenuBar)}>
                      <div className="text-center">
                        {userName ? (
                            <>
                              <div onClick={signOutHandler}>Sign Out</div>
                              <Link href="changePassword">change Password</Link>
                            </>
                        ) : (
                            <div onClick={() => showState(!show)}>Sign In</div>
                        )}
                      </div>
                    </div>
                ) : null}
              </div>
              <div className="flex thirdPhase:hidden">
                {props ? userName : "ورود/خروج"}
              </div>


            </div>
          </div>
{/*          <div className="flex ">
            <div
              className="group flex min-h-[23px] min-w-[23px] pl-2 pr-2"
              onMouseEnter={() => setShowMenuBar(true)}
              onMouseLeave={() => setShowMenuBar(!showMenuBar)}
            >
              <div className={"min-h-[23px] min-w-[23px]"}>
                <Image src="/Login.png" width="25" height="25" />
              </div>

              {showMenuBar ? (
                <div className="absolute z-50 mt-[2%] h-24  w-28 rounded bg-mouseoverToolBar  align-middle">
                  <div className="text-center">
                    {userName ? (
                      <>
                        <div onClick={signOutHandler}>Sign Out</div>
                        <Link href="changePassword">change Password</Link>
                      </>
                    ) : (
                      <div onClick={() => showState(!show)}>Sign In</div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>

            {props ? userName : "ورود/خروج"}
          </div>*/}
        </div>
      </div>
    </>
  );
};

export default Header;
