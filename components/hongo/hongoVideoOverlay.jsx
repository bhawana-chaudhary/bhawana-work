import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";
import "animate.css";

export default function HongoVideoOverlay() {
  const [isVideoOverlayVisible, setVideoOverlayVisible] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setVideoOverlayVisible(true);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  };

  const onClose = () => {
    setVideoOverlayVisible(false);
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section
        className={` intro_withVideo_wrapper  ${HongoStyle.lineOverlay} relative w-full py-[100px] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-hongoVideoImgGradient after:z-[2]  `}
      >
        <div
          className={`${HongoStyle.animation_slider} absolute top-[45%] left-[-50px] right-[-50px] rotate-[12.19deg] bg-hongoAnimatSlider2Gradient overflow-hidden !z-[3] `}
        >
          <div className={`${HongoStyle.animation_wrap} relative flex `}>
            <ul
              className={` ${HongoStyle.animation_item} ${HongoStyle.animation_item2}`}
            >
              <li className=" mx-16 uppercase ">
                <span className=" text-[138px] font-JakartaSans font-bold tracking-[-5px] leading-[208px] bg-clip-text text-transparent bg-hongoAnimatSlider2ListGradient ">
                  Shopify 2.0
                </span>
              </li>
              <li className=" mx-16 uppercase ">
                <span className=" text-[138px] font-JakartaSans font-bold tracking-[-5px] leading-[208px] bg-clip-text text-transparent bg-hongoAnimatSlider2ListGradient ">
                  Shopify 2.0
                </span>
              </li>
            </ul>
            <ul
              className={` ${HongoStyle.animation_item} ${HongoStyle.animation_item2}`}
            >
              <li className=" mx-16 uppercase ">
                <span className=" text-[138px] font-JakartaSans font-bold tracking-[-5px] leading-[208px] bg-clip-text text-transparent bg-hongoAnimatSlider2ListGradient ">
                  Shopify 2.0
                </span>
              </li>
              <li className=" mx-16 uppercase ">
                <span className=" text-[138px] font-JakartaSans font-bold tracking-[-5px] leading-[208px] bg-clip-text text-transparent bg-hongoAnimatSlider2ListGradient ">
                  Shopify 2.0
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${HongoStyle.container}`}>
          <div className="intro relative w-full max-w-[615px] mx-auto z-10 mb-[60px] text-center  animate__animated animate__fadeInUp animate__delay-2s ">
            <h2 className=" text-[55px] text-[#141416]  font-JakartaSans font-bold tracking-[-2px] leading-[55px] mb-5 ">
              Build your magnificent store with
              <span className=" bg-clip-text text-transparent bg-hongoH1Gradient ml-2 ">
                Shopify 2.0
              </span>
            </h2>
          </div>
          <div className="video_img_wrap relative w-full h-full max-h-[732px] mx-auto z-10 ">
            <Image
              src="/hongo/hongo-shopify-video.jpeg"
              width={1300}
              height={800}
              alt="img"
              className=" w-full h-full object-cover "
            />
            <div
              className="play_icon cursor-pointer absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] flex justify-center items-center bg-white rounded-[50%] overflow-hidden shadow-hongoVideoPlayIconShadow hover:scale-[1.1] transition duration-300 ease-in-out "
              onClick={handleClick}
            >
              <div className="icon max-w-[20px] h-[20px] ">
                <Image
                  src="/hongo/icon-play-darkGray.png"
                  width={50}
                  height={50}
                  alt="play"
                  className=" w-full h-full object-contain "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {isVideoOverlayVisible && (
        <section
          className=" video_overlay fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#0b0b0be6] flex items-center z-[999] overflow-hidden "
          onClick={onClose}
        >
          <div className="close_icon absolute top-10 right-10 w-full max-w-[20px] h-[20px] opacity-[0.6] hover:opacity-[1] transition-opacity duration-300 ease-in-out cursor-pointer ">
            <Image
              src="/hongo/icon-close-white.svg"
              width={50}
              height={50}
              alt="close"
              className=" w-full h-full object-contain "
            />
          </div>
          <div className={`${HongoStyle.container}`}>
            <div
              className="video_wrap relative w-full max-w-[1050px] h-[590px] mx-auto z-10 "
              onClick={handleClick}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/CiQovCRvvm0?si=ZDTbX4i9EARL92qE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className=" w-full h-full object-cover "
              ></iframe>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
