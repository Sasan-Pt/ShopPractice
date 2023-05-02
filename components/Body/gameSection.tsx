import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import axios from "axios";
import Image from "next/image";
import Button from "../shareComponent/Button";
import { useAmp } from "next/amp";
import { useAtom } from "jotai";
import { objectsAtom, totalPrice } from "../shareComponent/Store";
import { number } from "prop-types";

const GameSection: React.FC = () => {
  const [objects, setObjects] = useAtom(objectsAtom);
  const [beta, setBeta] = useAtom(totalPrice);

  const newGameList = (hero) => {
    axios.post("api/games", hero);
  };
  const { data, isLoading, error, isError } = useQuery(
    "Test",
    () => {
      return axios.get("api/games");
    },
    {
      cacheTime: 10000,
    }
  );

  if (isLoading) {
    return <h2>Loadings...</h2>;
  }
  const buttTest = (event) => {
    event.preventDefault();
    const name = event.target.form.childNodes[1].innerHTML;
    const price = event.target.form.childNodes[2].children[1].innerHTML.replace(
      "$",
      ""
    );
    let newPrice = +price;
    // @ts-ignore
    setObjects((prevObjects) => [...prevObjects, { name, price }]);
    setBeta((prevState) => prevState + newPrice);
  };
  return (
    <div className="mt-4 flex items-center justify-center">
      <ul className="ml-8 flex flex-wrap items-center justify-center">
        {data?.data.pictures.map((x) => {
          return (
            <form className="mt-2 mr-4 basis-[22%]">
              <Image src={x.pic} width={400} height={450} />
              <div className="flex items-center justify-center font-bold">
                {x.name}
              </div>
              <div
                className="ml-8 mr-8 mt-2 flex justify-between"
                style={{ direction: "rtl" }}
              >
                <div>قیمت:</div>
                <div>{x.price}$</div>
              </div>
              <Button
                buttonColor={"bg-secondaryButtonColor w-full h-12 mt-4"}
                textColor={"text-white"}
                input={"add to shop"}
                buttest={buttTest}
              />
            </form>
          );
        })}
      </ul>
    </div>
  );
};

export default GameSection;
