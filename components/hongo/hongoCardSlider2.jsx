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
    imageUrl: "/hongo/hongo-demo-img-1.jpeg",
  },
  {
    id: 2,
    imageUrl: "/hongo/hongo-demo-img-2.jpeg",
  },
  {
    id: 3,
    imageUrl: "/hongo/hongo-demo-img-3.jpeg",
  },
  {
    id: 4,
    imageUrl: "/hongo/hongo-demo-img-4.jpeg",
  },
  {
    id: 5,
    imageUrl: "/hongo/hongo-demo-img-5.jpeg",
  },
  {
    id: 6,
    imageUrl: "/hongo/hongo-demo-img-6.jpeg",
  },
  {
    id: 7,
    imageUrl: "/hongo/hongo-demo-img-7.jpeg",
  },
  {
    id: 8,
    imageUrl: "/hongo/hongo-demo-img-8.jpeg",
  },
  {
    id: 9,
    imageUrl: "/hongo/hongo-demo-img-9.jpeg",
  },
  {
    id: 10,
    imageUrl: "/hongo/hongo-demo-img-10.jpeg",
  },
  {
    id: 11,
    imageUrl: "/hongo/hongo-demo-img-11.jpeg",
  },
  {
    id: 12,
    imageUrl: "/hongo/hongo-demo-img-12.jpeg",
  },
  {
    id: 13,
    imageUrl: "/hongo/hongo-demo-img-13.jpeg",
  },
  {
    id: 14,
    imageUrl: "/hongo/hongo-demo-img-14.jpeg",
  },
  {
    id: 15,
    imageUrl: "/hongo/hongo-demo-img-15.jpeg",
  },
  {
    id: 16,
    imageUrl: "/hongo/hongo-demo-img-16.jpeg",
  },
  {
    id: 17,
    imageUrl: "/hongo/hongo-demo-img-17.jpeg",
  },
  {
    id: 18,
    imageUrl: "/hongo/hongo-demo-img-18.jpeg",
  },
  {
    id: 19,
    imageUrl: "/hongo/hongo-demo-img-19.jpeg",
  },
  {
    id: 20,
    imageUrl: "/hongo/hongo-demo-img-20.jpeg",
  },
];

export default function HongoCardSlider2() {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    pauseOnHover: false,
  };
  return (
    <>
      <section className=" hongoCard_sliderWrap relative w-full py-[100px] bg-[#090914] overflow-hidden ">
        <div className={`${HongoStyle.container}`}>
          <div className="intro relative w-full z-10  flex flex-wrap ">
            <div className="text relative w-[50%] pr-[30px] ">
              <h2 className=" text-[55px] text-white  font-JakartaSans font-bold tracking-[-2px] leading-[55px] mb-5 ">
                <span className=" bg-clip-text text-transparent bg-hongoH1Gradient ">
                  Powerful & engaging
                </span>
                <br />
                premade inner pages.
              </h2>
            </div>
            <div className="content relative w-[50%] ">
              <p className=" w-full max-w-[526px] text-[18px] leading-[30px] text-[#7F7F8A] font-figtree font-normal ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, esse aut. Accusamus nobis fugit vero quaerat
                laboriosam molestiae, porro excepturi quibusdam!
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${HongoStyle.hongo_dragSlider} ${HongoStyle.mask_gradient2} hongoCard_slider relative w-full pt-[60px] `}
          style={{ position: "relative" }}
          onMouseMove={handleMouseMove}
        >
          <div
            className={` relative w-full max-w-[1230px] mx-auto overflow-visible flex `}
          >
            <HongocardSlider {...settings}>
              {hongoCardSliderData.map((hongoCardSlider) => (
                <div
                  className="card relative w-[25%] min-h-[507px] px-[25px] "
                  key={hongoCardSlider.id}
                >
                  <div className="image_wrap relative w-full h-full rounded-[8px] overflow-hidden ">
                    <Link href="/" className={`${HongoStyle.redirect_link}`}>
                      .
                    </Link>
                    <Image
                      src={hongoCardSlider.imageUrl}
                      width={500}
                      height={500}
                      alt="card-img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </HongocardSlider>
          </div>
        </div>
        <div className="bottom_content relative w-full mt-[80px] ">
          <div className="text w-fit mx-auto flex items-center border-[1px] border-solid border-[#7f7f8a33] rounded-[60px] py-[13px] px-[35px] ">
            <span class="icon text-[28px] mr-[10px] ">👋</span>
            <p className=" text-[20px] text-white font-JakartaSans font-normal leading-[32px] ">
              Creating award-winning website easily with{" "}
              <span className=" font-bold border-b-[2px] border-solid border-b-white ">
                Hongo Shopify theme!
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
