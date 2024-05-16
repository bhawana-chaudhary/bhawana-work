import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Style from "../styles/asliOne.module.scss";
import Banner from "../components/asliOne/AsliBanner";
import Intro from "../components/asliOne/Intro";
import ScrollWrap from "../components/asliOne/CircleScrollWrap";
import AnimatScrollText from "../components/asliOne/AnimatScrollText";
import ColThreeCard from "../components/asliOne/ColThreeCard";
import AnimatScrollSlider from "../components/asliOne/AnimatScrollSlider";
import AnimatScrollSlider2 from "../components/asliOne/AnimatScrollSlider2";
import AnimatScrollSlider3 from "../components/asliOne/AnimatScrollSlider3";
import Loader from "../components/asliOne/Loader";

const FontStyles = () => (
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
      rel="stylesheet"
    />
  </Head>
);

export default function AsliOne() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
    inside: true,
  });
  const handleMouseMove = (e) => {
    const sliderRect = document.body.getBoundingClientRect();
    const cursorX = e.clientX - sliderRect.left;
    const cursorY = e.clientY - sliderRect.top;

    const isInsideSlider =
      cursorX >= 0 &&
      cursorX <= sliderRect.width &&
      cursorY >= 0 &&
      cursorY <= sliderRect.height;

    setCursorPosition({
      x: cursorX - 40,
      y: cursorY - 40,
      inside: isInsideSlider,
    });
  };
  useEffect(() => {
    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [bodyBackgroundColor, setBodyBackgroundColor] = useState("#777777");
  const changeBodyBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
  };
  useEffect(() => {
    changeBodyBackgroundColor(bodyBackgroundColor);
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bodyBackgroundColor]);

  return (
    <>
      <FontStyles />
      <Banner className={Style.curvedSvgText} setIsHovered={setIsHovered} />
      <Intro
        className={`pt-[150px]`}
        mainTitle1="A unique "
        mainTitleSpan="AJAX & WebGL"
        mainTitle2=" driven WordPress theme suitable for creative minds – designers,
            photographers, creative agencies and production studios."
        rxValue="48%"
        ryValue="48%"
      />
      <ScrollWrap />
      <AnimatScrollText />
      <ColThreeCard
        className={Style.card}
        setIsCardHovered={setIsCardHovered}
      />
      <AnimatScrollSlider
        className={Style.curvedSvgText}
        setIsHovered={setIsHovered}
      />
      <AnimatScrollSlider2 />

      <AnimatScrollSlider3
        className={Style.curvedSvgText}
        setIsHovered={setIsHovered}
      />
      <Intro
        className={`py-[150px] z-[10] `}
        subtitle="( Rich Features & Infinite Possibilities )"
        mainTitle1="Take your creativity to a whole new level with "
        mainTitleSpan="Asli"
        mainTitle2=" theme!"
        rxValue="40%"
        ryValue="36%"
      />
      <div
        className={`cursor absolute w-[62px] h-[62px] bg-transparent pointer-events-none rounded-[50%] flex justify-center items-center transition duration-300 ease-in-out z-20`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          opacity: cursorPosition.inside && !isHovered ? 1 : 0,
          transform: cursorPosition.inside && !isHovered ? "" : "scale(2.2)",
          boxShadow:
            cursorPosition.inside && !isHovered
              ? "rgb(253, 249, 207) 0px 0px 0px 1px inset"
              : "rgba(253, 249, 207, 0.527) 0px 0px 0px 1px inset",
          width: cursorPosition.inside && !isCardHovered ? "" : "120px",
          height: cursorPosition.inside && !isCardHovered ? "" : "120px",
          backgroundColor:
            cursorPosition.inside && !isCardHovered ? "" : "rgb(253, 249, 207)",
        }}
      >
        <span
          className={`${
            isCardHovered ? "block" : "hidden"
          } text-[14px] text-black font-nunitoSans font-semibold transition duration-300 ease-in-out `}
        >
          Explore Demo
        </span>
      </div>
      <Loader />
    </>
  );
}
