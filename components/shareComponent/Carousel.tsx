import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Button from "./Button";
import { useQuery } from "react-query";
interface Types {
  show: string | null;
  widthSize: string | null;
  marginLeft: string | null;
  translate: string | null;
  secondShow: string | null;
  showButtons: string | null;
}
const Carousel: React.FC<Types> = ({
  show,
  widthSize,
  marginLeft,
  translate,
  secondShow,
  showButtons,
}) => {
  const [moveElement, setMoveElement] = useState<number>(0);
  const [page, setPage] = useState(0);
  const [loop, setLoop] = useState<any>(null);

  const [elemental, setElemental] = useState<any>();
  const mainUl: any = useRef();
  const [forwardNumber, setForwardNumber] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const fest = () => {};
  const startCarousel = () => {
    setLoop(
      setInterval(() => {
        Forward();
      }, 10000)
    );
  };
  const StopCarousel = () => {
    // @ts-ignore
    clearInterval(loop);
  };

  /*    useEffect(()=>{
        startCarousel()
        async function test4(){
                const response=await axios.get("/api/hello")
            setPictures(response.data.pictures)
        }
        test4()
    },[])*/
  const { data, isLoading, error, isError } = useQuery("carousel", () => {
    return axios.get("/api/hello");
  });

  const dataPictures = data?.data.pictures;

  const size = mainUl?.current?.children[0].getBoundingClientRect().width;

  const moveref: any = useRef();
  const carouselMove = (key: string, e) => {
    const currentSlide = mainUl.current.querySelector(".current-slide");

    const prevSlide = currentSlide.previousElementSibling
      ? currentSlide.previousElementSibling
      : { style: 0 };
    const prevSlideSize = prevSlide ? prevSlide.style.left : ["hi"];
    console.log(currentSlide.nex);
    console.log(prevSlide);

    const currentDot = dotFinder.current.querySelector(".current-slide");

    const prevDot = currentDot.previousElementSibling;
    const nextDot = currentDot.nextElementSibling;
    const nextElement = currentSlide.nextElementSibling
      ? currentSlide.nextElementSibling
      : null;

    const forwardSlideSize = nextElement ? nextElement.style.left : null;
    if (key === "forward") {
      setForwardNumber((prevState) => prevState + 1);
      if (forwardNumber >= 5) {
        setPrice(dataPictures[0].price);
      } else {
        setPrice(dataPictures[forwardNumber].price);
      }

      currentSlide.classList.remove("current-slide");
      currentDot.classList.remove("current-slide");
      if (forwardNumber < dataPictures.length) {
        mainUl.current.style.transform =
          "translateX(-" + forwardSlideSize + ")";
        nextElement?.classList.add("current-slide");
        nextDot.classList.add("current-slide");
      }
      if (forwardNumber >= dataPictures.length) {
        setForwardNumber(1);
        mainUl.current.children[0].classList.add("current-slide");
        dotFinder.current.children[0].classList.add("current-slide");
        mainUl.current.style.transform = "translateX(-" + 0 + ")";
      }
    }
    if (key === "backwards") {
      setForwardNumber((prevState) => prevState - 1);

      currentSlide.classList.remove("current-slide");
      currentDot.classList.remove("current-slide");
      if (forwardNumber > 1) {
        console.log("i worked too");
        prevDot.classList.add("current-slide");
        prevSlide?.classList.add("current-slide");
        mainUl.current.style.transform = "translateX(-" + prevSlideSize + ")";
      } else {
        mainUl.current.style.transform =
          "translateX(-" + mainUl.current.children[4].style.left + ")";
        setForwardNumber(dataPictures.length);
        dotFinder.current.children[4].classList.add("current-slide");
        mainUl.current.children[4]?.classList.add("current-slide");
        console.log(prevSlide);
      }
    }
    console.log(dataPictures.length);
  };
  console.log(forwardNumber);
  const dotFinder: any = useRef();
  const eventFinder = (e) => {
    const targetDot = e.target.closest("button");
    const currentSlide = mainUl.current.querySelector(".current-slide");
    const currentDot = dotFinder.current.querySelector(".current-slide");
    const dots = Object.values(dotFinder.current.children);
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const slide = mainUl.current.children;

    mainUl.current.style.transform =
      "translateX(-" + slide[targetIndex].style.left + ")";
    currentSlide.classList.remove("current-slide");
    slide[targetIndex]?.classList.add("current-slide");
    setForwardNumber(targetIndex + 1);

    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
  };

  useEffect(() => {
    if (mainUl && dataPictures) {
      setElemental(Object.values(mainUl?.current?.children));
    }
    if (dataPictures) {
      setPrice(dataPictures[0].price);
    }
  }, [dataPictures]);

  if (mainUl === true) {
    setElemental(Object.values(mainUl?.current?.children));
  }

  if (dataPictures && elemental) {
    elemental?.forEach((slide: HTMLLinkElement, index: number) => {
      slide.style.left = size * index + "px";
    });
  }

  return (
    <>
      <div className={`flex ${translate}`}>
        <div
          className={`carousel relative ${widthSize} ml-auto h-96 ${marginLeft} mt-0 mb-0 `}
        >
          <div
            className={`carousel__button absolute right-0   z-40 h-full bg-white bg-opacity-30 opacity-70 ${secondShow}`}
            onClick={() => carouselMove("forward")}
          >
            <div className=" mt-48">
              <Image src="/carousel/left arrow.png" width={30} height={40} />
            </div>
          </div>

          <div
            className="carousel__button absolute left-0  z-40 h-full bg-white bg-opacity-30 opacity-70"
            onClick={() => carouselMove("backwards")}
          >
            <div className="mt-48">
              <Image src="/carousel/right arrow.png" width={30} height={40} />
            </div>
          </div>

          <div className="carousel__track-container relative  h-full overflow-hidden bg-red-600">
            {dataPictures ? (
              <ul
                ref={mainUl}
                className="carousel__track relative h-full duration-300 ease-in "
              >
                <li
                  className="carousel__slide current-slide absolute h-96  w-full"
                  ref={moveref}
                >
                  <Image src={dataPictures[0].pic} layout="fill" priority />
                </li>
                <li className="carousel__slide absolute h-96 w-full">
                  <Image src={dataPictures[1].pic} layout="fill" priority />
                </li>
                <li className="carousel__slide absolute h-96 w-full">
                  <Image src={dataPictures[2].pic} layout="fill" priority />
                </li>
                <li className="carousel__slide absolute h-96 w-full">
                  <Image src={dataPictures[3].pic} layout="fill" priority />
                </li>
                <li className="carousel__slide absolute h-96 w-full">
                  <Image src={dataPictures[4].pic} layout="fill" priority />
                </li>
              </ul>
            ) : (
              <div>loading</div>
            )}
          </div>
        </div>

        <div
          className={`h-96 w-[40%] bg-buttons_Color ${show}  mr-2 flex flex-col items-center justify-center`}
        >
          <div>Cyberpunk 2077</div>
          <div>{price}</div>
          <Button
            buttonColor={
              "bg-gradient-to-r from-startButtonColor to-endButtonColor w-48 h-12"
            }
            textColor={"text-white"}
            input={"خرید"}
          />

          <div
            className="carousel__button absolute right-0   z-40 mr-2 h-full bg-white bg-opacity-30 opacity-70"
            onClick={() => carouselMove("forward")}
          >
            <div className=" mt-48">
              <Image src="/carousel/left arrow.png" width={30} height={40} />
            </div>
          </div>
        </div>
      </div>
      <div className={`mt-2 flex items-center justify-center ${showButtons}`}>
        <div onClick={(e) => eventFinder(e)} ref={dotFinder}>
          <button className="current-slide h-6 w-6 bg-secondColor">1</button>
          <button className="h-6 w-6 bg-secondColor">2</button>
          <button className="h-6 w-6 bg-secondColor">3</button>
          <button className="h-6 w-6 bg-secondColor">4</button>
          <button className="h-6 w-6 bg-secondColor">5</button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
