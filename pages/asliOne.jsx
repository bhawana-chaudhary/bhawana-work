import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Style from "../styles/asliOne.module.scss";
import Banner from "../components/asliOne/AsliBanner";
import Intro from "../components/asliOne/Intro";
import ScrollWrap from "../components/asliOne/CircleScrollWrap";
import AnimatScrollText from "../components/asliOne/AnimatScrollText";

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

  return (
    <>
      <FontStyles />
      <Banner className={Style.curvedSvgText} setIsHovered={setIsHovered} />
      <Intro />
      <ScrollWrap />
      <AnimatScrollText />
      <Intro />
      <div
        className={`cursor absolute w-[62px] h-[62px] bg-transparent pointer-events-none rounded-[50%] flex justify-center items-center transition-opacity duration-300 ease-in-out z-10`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          opacity: cursorPosition.inside && !isHovered ? 1 : 0,
          transform: cursorPosition.inside && !isHovered ? "" : "scale(2.2)",
          boxShadow:
            cursorPosition.inside && !isHovered
              ? "rgb(253, 249, 207) 0px 0px 0px 1px inset"
              : "rgba(253, 249, 207, 0.527) 0px 0px 0px 1px inset",
        }}
      ></div>
    </>
  );
}
