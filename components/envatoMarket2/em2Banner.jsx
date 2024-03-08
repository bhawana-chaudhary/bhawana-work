import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import EmStyle from "/styles/envato-market2.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import $ from "jquery";

import dynamic from "next/dynamic";

const DynamicSlider = dynamic(() => import("react-slick"), { ssr: false });

export default function Em2Banner() {
  const banner_image_slider = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5500,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      // prevArrow: <PrevArrow />,
      // nextArrow: <NextArrow />,
    };
    return (
      <DynamicSlider {...settings}>
        <div className={` ${EmStyle.bg_image} w-full h-full `}>
          <Image
            src="/envato-market2/banner-bg-img2.jpeg"
            alt="bg-img"
            width={2500}
            height={900}
            className=" w-full h-full object-cover "
          />
        </div>
        <div className={` ${EmStyle.bg_image} w-full h-full `}>
          <Image
            src="/envato-market2/laser-cutting-2.jpeg"
            alt="bg-img"
            width={2500}
            height={900}
            className=" w-full h-full object-cover "
          />
        </div>
      </DynamicSlider>
    );
  };
  return (
    <>
      <section
        className={`emBanner ${EmStyle.banner_overlay} relative w-full min-h-[780px] overflow-hidden flex items-center pt-28 pb-20 z-[2] lg:min-h-[700px] md:!min-h-[640px] sm:!min-h-[590px] `}
      >
        <div className={`${EmStyle.bottom_image} bg-transparent `}>
          <div className={`${EmStyle.clip_image} bg-white `}></div>
          <div
            className={`${EmStyle.clip_image} ${EmStyle.clip_image2} bg-white `}
          ></div>
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full overflow-hidden  ${EmStyle.banner_image_slider}`}
        >
          {banner_image_slider()}
        </div>
        <div className={` ${EmStyle.container} `}>
          <div className="banner_content relative w-full max-w-[600px] mx-auto text-center pt-20 z-10 lg:pt-16 md:!pt-9 ">
            {/* <span className=" absolute top-0 text-[160px] left-[calc(50%-400px)] uppercase font-extrabold font-mulish text-[#ffffff3b] leading-[1] lg:text-[120px] lg:left-[calc(50%-300px)] md:!text-[100px] md:!left-[calc(50%-250px)] sm:!text-[65px] sm:!left-[calc(50%-163px)] ">
              MANUFEC
            </span> */}
            <span className="absolute top-0 text-[160px] font-extrabold font-mulish text-[#ffffff3b] leading-[1] left-1/2 transform -translate-x-1/2  lg:text-[120px] md:!text-[65px]">
              MANUFEC
            </span>

            <h1 className=" text-white text-[5em] font-extrabold font-mulish leading-[1] mb-4  lg:text-[60px] md:!text-[42px] ">
              Manufacturing At Its Best
            </h1>
            <p className=" text-white text-[16px] font-light mb-7 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              explicabo velit cum atque dolorem quam unde aliquid repellendus.
            </p>
            <div className="button_wrap relative w-full flex flex-wrap justify-center mt-5 pb-3 overflow-visible xs:block ">
              <Link
                href="/"
                className={`${EmStyle.orange_button} xs:!block xs:mb-4 xs:mx-auto `}
              >
                <span>Learn More</span>
              </Link>
              <Link
                href="/"
                className={`${EmStyle.orange_button} ${EmStyle.white_button} ml-5  xs:!block xs:mx-auto `}
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
