import type { NextPage } from "next";
import Header from "./Header/Header";
import Ribbon from "./Header/Ribbon";
import React from "react";
import Carousel from "./shareComponent/Carousel";
import Button from "./shareComponent/Button";
import MiddleRibbon from "./Body/middleRibbon";
import GameSection from "./Body/gameSection";
import MainFooter from "./Footer/mainFooter";

const Main: NextPage = () => {
  return (
    <>

      <Carousel
        show={"hidden"}
        widthSize="w-[98%]"
        marginLeft={"mr-auto"}
        translate={"null mt-2"}
        secondShow={"null"}
        showButtons={"hidden"}
      />
      <Button
        buttonColor={"bg-buttons_Color w-32 h-20 mt-2"}
        textColor={"text-black"}
        input={"بازی های جدید"}
        disable={true}
      />
      <Carousel
        show={null}
        widthSize="w-[90%]"
        marginLeft={"mr-0"}
        translate={"translate-x-[-0%] mt-2 ml-2"}
        secondShow={"hidden"}
        showButtons={"null"}
      />
      <MiddleRibbon />
      <GameSection />
    </>
  );
};

export default Main;
