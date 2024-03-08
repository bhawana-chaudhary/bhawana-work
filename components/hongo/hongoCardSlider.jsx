import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dynamic from "next/dynamic";

const HongocardSlider = dynamic(() => import("react-slick"), { ssr: false });

const hongoCardSliderData = [
  {
    id: 1,
    imageUrl: "/hongo/hongo-slider-img-1.jpeg",
  },
  {
    id: 2,
    imageUrl: "/hongo/hongo-slider-img-2.jpeg",
  },
  {
    id: 3,
    imageUrl: "/hongo/hongo-slider-img-3.jpeg",
  },
  {
    id: 4,
    imageUrl: "/hongo/hongo-slider-img-4.jpeg",
  },
  {
    id: 5,
    imageUrl: "/hongo/hongo-slider-img-5.jpeg",
  },
  {
    id: 6,
    imageUrl: "/hongo/hongo-slider-img-6.jpeg",
  },
  {
    id: 7,
    imageUrl: "/hongo/hongo-slider-img-7.jpeg",
  },
  {
    id: 8,
    imageUrl: "/hongo/hongo-slider-img-8.jpeg",
  },
];

export default function HongoCardSlider() {
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
    inside: true,
  });

  const handleMouseMove = (e) => {
    const sliderRect = document
      .querySelector(".hongoCard_slider")
      .getBoundingClientRect();
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
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
  };

  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // const handleMouseMove = (e) => {
  //   setCursorPosition({ x: e.clientX - 40, y: e.clientY - 570 });
  // };

  return (
    <>
      <section className=" hongoCard_sliderWrap relative w-full py-[100px] bg-[#090914] overflow-hidden ">
        <div className={`${HongoStyle.container}`}>
          <div className="intro relative w-full z-10  flex flex-wrap ">
            <div className="text relative w-[50%] pr-[30px] ">
              <h2 className=" text-[55px] text-white  font-JakartaSans font-bold tracking-[-2px] leading-[55px] mb-5 ">
                Modern styles to list <br />
                <span className=" bg-clip-text text-transparent bg-hongoH1Gradient ">
                  your collections.
                </span>
              </h2>
            </div>
            <div className="content relative w-[50%] ">
              <p className=" w-full max-w-[526px] text-[18px] leading-[30px] text-[#7F7F8A] font-figtree font-normal ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, esse aut. Accusamus nobis fugit vero quaerat
                laboriosam molestiae, porro excepturi quibusdam odit eligendi!
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${HongoStyle.hongo_dragSlider} hongoCard_slider relative w-full pt-[60px] cursor-none `}
          style={{ position: "relative" }}
          onMouseMove={handleMouseMove}
        >
          <div
            className={`${HongoStyle.mask_gradient} relative w-full flex px-20 `}
          >
            <HongocardSlider {...settings}>
              {hongoCardSliderData.map((hongoCardSlider) => (
                <div
                  className="card relative w-[25%] px-[25px]"
                  key={hongoCardSlider.id}
                >
                  <div className="image_wrap w-full h-[390px] ">
                    <Image
                      src={hongoCardSlider.imageUrl}
                      width={500}
                      height={500}
                      alt="card-img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="slider_cardContent relative w-full mt-3 text-center ">
                    <h6 className=" text-[17px] text-white leading-[26px] font-JakartaSans font-medium ">
                      Lorem, ipsum
                    </h6>
                    <p className=" text-[17px] text-[#7f7f8a] leading-[26px] font-figtree font-medium ">
                      Accusamus nobis fugit
                    </p>
                  </div>
                </div>
              ))}
            </HongocardSlider>
          </div>
          <div
            className="cursor absolute w-[100px] h-[100px] bg-[#ffffffc9] backdrop-blur-[5px] rounded-[50%] pointer-events-none flex justify-center items-center transition-opacity duration-300 ease-in-out z-10 "
            style={{
              left: cursorPosition.x,
              top: cursorPosition.y,
              opacity: cursorPosition.inside ? 1 : 0,
            }}
          >
            <span className=" text-[14px] text-[#090914] uppercase font-figtree font-semibold ">
              drag
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
