import React from "react";
import Link from "next/link";

const Ribbon = () => {
  return (
    <>
      <div
        className=" w-full  bg-firstColor pr-[2%] h-full "
        style={{ direction: "rtl" }}
      >
        <div className="flex flex-col border-black mr-auto pt-2 aphase:hidden">
          <div className="border-t-2  w-4 border-black mr-auto ml-2 "></div>
          <div className="border-t-2 mt-[4px] w-4 border-black mr-auto ml-2"></div>
          <div className="border-t-2 mt-[4px] w-4 border-black mr-auto ml-2 mb-2 "></div>
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
