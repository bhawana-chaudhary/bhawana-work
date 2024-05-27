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
import ColFourCardIcon from "../components/asliOne/ColFourCardIcon";
import Footer from "../components/asliOne/Footer";

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
  const [isIconCardHovered, setIsIconCardHovered] = useState(false);
  const [isFooterCircleHovered, setIsFooterCircleHovered] = useState(false);

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

  // ----------

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
        className={`pt-[150px] desktop:pt-28 tablet:pt-24 phablet:pt-16 sm:pt-11 `}
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
        className={`pt-[150px] z-[10] desktop:pt-28 tablet:pt-24 phablet:pt-16 sm:pt-11 `}
        subtitle="( Rich Features & Infinite Possibilities )"
        mainTitle1="Take your creativity to a whole new level with "
        mainTitleSpan="Asli"
        mainTitle2=" theme!"
        rxValue="40%"
        ryValue="36%"
      />
      <ColFourCardIcon
        className={Style.icon_outerWrap}
        setIsIconCardHovered={setIsIconCardHovered}
      />
      <Footer
        className={Style.hover_circle}
        setIsFooterCircleHovered={setIsFooterCircleHovered}
      />
      <div
        className={`cursor absolute w-[62px] h-[62px] bg-transparent pointer-events-none rounded-[50%] flex justify-center items-center transition duration-300 ease-in-out z-20 
        `}
        // ${
        //   cursorPosition.inside && isIconCardHovered
        //     ? "!top-0 !left-0 !transform !scale-[2.2] !opacity-[1] w-full h-full border-[1px] border-solid border-[#fdf9cf] !pointer-events-auto "
        //     : ""
        // }
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          // left:
          //   cursorPosition.x && !isIconCardHovered
          //     ? `${cursorPosition.x}px`
          //     : "",
          // top:
          //   cursorPosition.y && !isIconCardHovered
          //     ? `${cursorPosition.y}px`
          //     : "",

          opacity:
            cursorPosition.inside && !isHovered && !isFooterCircleHovered
              ? 1
              : 0,
          transform:
            cursorPosition.inside && !isHovered && !isFooterCircleHovered
              ? ""
              : "scale(2.2)",
          boxShadow:
            cursorPosition.inside && !isHovered && !isFooterCircleHovered
              ? "rgb(253, 249, 207) 0px 0px 0px 1px inset"
              : "rgba(253, 249, 207, 0.527) 0px 0px 0px 1px inset",
          // width: cursorPosition.inside && !isCardHovered ? "" : "120px",
          // height: cursorPosition.inside && !isCardHovered ? "" : "120px",
          backgroundColor:
            cursorPosition.inside && !isCardHovered ? "" : "rgb(253, 249, 207)",

          width:
            cursorPosition.inside && !isCardHovered && !isIconCardHovered
              ? ""
              : isCardHovered || isIconCardHovered
              ? "152px"
              : "120px",
          height:
            cursorPosition.inside && !isCardHovered && !isIconCardHovered
              ? ""
              : isCardHovered || isIconCardHovered
              ? "152px"
              : "120px",
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
