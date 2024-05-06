import React, { useState } from "react";
import Style from "../../styles/asliOne.module.scss";

export default function AnimatScrollText() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <section className={`asliTextSlider relative w-full bg-[#777777] `}>
        <div
          className={`${Style.animatScroll_Text} relative bg-transparent overflow-hidden `}
        >
          <div className="text_wrapper relative w-full max-w-[1520px] mx-auto text-center px-[100px] mb-8 ">
            <h6 className=" text-[#fdf9cf] text-[20px] font-nunitoSans font-bold ">
              <span>(</span> WebGL Sliders & Infinite Scrolling <span>)</span>
            </h6>
          </div>
          <div className={`${Style.animation_wrap} relative flex `}>
            <div
              className={` ${Style.animation_item} ${
                isHovered ? Style.animatwrap_hovered : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h2>Fullscreen Portfolio</h2>
              <h2>/</h2>
              <h2>Fullscreen Portfolio</h2>
              <h2>/</h2>
            </div>
            <div
              className={` ${Style.animation_item} ${
                isHovered ? Style.animatwrap_hovered : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h2>Fullscreen Portfolio</h2>
              <h2>/</h2>
              <h2>Fullscreen Portfolio</h2>
              <h2>/</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
