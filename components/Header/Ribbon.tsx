import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import SearchImage from "../../public/Search.jpg"

const Ribbon = () => {
  const [showSearchBar,setShowSearchBar]=useState(false)
  return (
    <>
      <div
        className="flex h-full  w-full bg-firstColor pr-[2%] "
        style={{ direction: "rtl" }}
      >
        <div className="mr-auto  flex align-center border-black  aphase:hidden mt-2 mb-2">
          {showSearchBar ? <input className={" w-16  h-4  bg-searchBarColor flex align-center"}/> : null }
          <div className="flex  align-center justify-center w-8 h-4 bg-searchIconColor "onClick={()=>{setShowSearchBar(!showSearchBar)}}>
            <Image src={SearchImage} width={23} height={23}/>
          </div>

          <div className="flex flex-col">
            <div className="mr-auto  ml-2 w-4 border-t-2 border-black "></div>
            <div className="mt-[4px] mr-auto ml-2 w-4 border-t-2 border-black"></div>
            <div className="mt-[4px] mr-auto ml-2  w-4 border-t-2 border-black "></div>
          </div>

        </div>

        <div className="mt-4 flex w-full space-x-12  pr-[2%] secondPhase:hidden">
          <div></div>
          <Link href="/">خانه</Link>
          <Link href="newGames">جدید</Link>
          <Link href="offGames">تخقیقات</Link>
          <Link href="contact">تماس با ما</Link>
        </div>
      </div>
    </>
  );
};

export default Ribbon;
