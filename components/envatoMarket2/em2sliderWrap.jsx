import React from "react";
import Link from "next/link";
import Image from "next/image";
import EmStyle from "/styles/envato-market2.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dynamic from "next/dynamic";
const DynamicSlider = dynamic(() => import("react-slick"), { ssr: false });

export default function Em2sliderWrap() {
  const em2slider_content = () => {
    const settings = {
      dots: false,
      arrows: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <DynamicSlider {...settings}>
        <div className={` ${EmStyle.bg_image} relative w-full `}>
          <div className="star_icon_wrap relative w-fit flex ">
            <div className="icon max-w-[16px] h-[16px] mr-2 ">
              <Image
                src="/envato-market2/icon-star.png"
                width={50}
                height={50}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
            <div className="icon max-w-[16px] h-[16px] mr-2 ">
              <Image
                src="/envato-market2/icon-star.png"
                width={50}
                height={50}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
            <div className="icon max-w-[16px] h-[16px] mr-2 ">
              <Image
                src="/envato-market2/icon-star.png"
                width={50}
                height={50}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
            <div className="icon max-w-[16px] h-[16px] mr-2 ">
              <Image
                src="/envato-market2/icon-star.png"
                width={50}
                height={50}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
            <div className="icon max-w-[16px] h-[16px] mr-2 ">
              <Image
                src="/envato-market2/icon-star.png"
                width={50}
                height={50}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
          </div>
          <p className=" text-[#001d3d] leading-[1.5] font-normal my-8 md:my-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </p>
          <div className="bottom_text flex flex-wrap justify-between items-center ">
            <div className="author">
              <h5 className=" text-[19px] text-[#001d3d] font-bold ">Rieza</h5>
              <p className=" text-[14px] text-[#00000080] ">Client</p>
            </div>
            <div className=" bottom_icon relative top-[-2px] icon_img w-full max-w-[60px] h-[60px] md:max-w-[45px] md:h-[45px] ">
              <Image
                src="/envato-market2/icon-quote.png"
                width={90}
                height={90}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
          </div>
        </div>
        <div className={` ${EmStyle.bg_image} relative w-full `}>
          <div className="star_icon_wrap relative w-fit flex ">
            <div className="icon max-w-[16px] h-[16px] mr-2 ">
              <Image
                src="/envato-market2/icon-star.png"
                width={50}
                height={50}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
            <div className="icon max-w-[16px] h-[16px] mr-2 ">
              <Image
                src="/envato-market2/icon-star.png"
                width={50}
                height={50}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
            <div className="icon max-w-[16px] h-[16px] mr-2 ">
              <Image
                src="/envato-market2/icon-star.png"
                width={50}
                height={50}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
            <div className="icon max-w-[16px] h-[16px] mr-2 ">
              <Image
                src="/envato-market2/icon-star.png"
                width={50}
                height={50}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
            <div className="icon max-w-[16px] h-[16px] mr-2 ">
              <Image
                src="/envato-market2/icon-star.png"
                width={50}
                height={50}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
          </div>
          <p className=" text-[#001d3d] leading-[1.5] font-normal my-8 md:my-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </p>
          <div className="bottom_text flex flex-wrap justify-between items-center ">
            <div className="author">
              <h5 className=" text-[19px] text-[#001d3d] font-bold ">Clara</h5>
              <p className=" text-[14px] text-[#00000080] ">Client</p>
            </div>
            <div className=" bottom_icon relative top-[-2px] icon_img w-full max-w-[60px] h-[60px] md:max-w-[45px] md:h-[45px] ">
              <Image
                src="/envato-market2/icon-quote.png"
                width={90}
                height={90}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
          </div>
        </div>
        <div className={` ${EmStyle.bg_image} relative w-full `}>
          <div className="star_icon_wrap relative w-fit flex ">
            <div className="icon max-w-[16px] h-[16px] mr-2 ">
              <Image
                src="/envato-market2/icon-star.png"
                width={50}
                height={50}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
            <div className="icon max-w-[16px] h-[16px] mr-2 ">
              <Image
                src="/envato-market2/icon-star.png"
                width={50}
                height={50}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
            <div className="icon max-w-[16px] h-[16px] mr-2 ">
              <Image
                src="/envato-market2/icon-star.png"
                width={50}
                height={50}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
            <div className="icon max-w-[16px] h-[16px] mr-2 ">
              <Image
                src="/envato-market2/icon-star.png"
                width={50}
                height={50}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
            <div className="icon max-w-[16px] h-[16px] mr-2 ">
              <Image
                src="/envato-market2/icon-star.png"
                width={50}
                height={50}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
          </div>
          <p className=" text-[#001d3d] leading-[1.5] font-normal my-8 md:my-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </p>
          <div className="bottom_text flex flex-wrap justify-between items-center ">
            <div className="author">
              <h5 className=" text-[19px] text-[#001d3d] font-bold ">Romeo</h5>
              <p className=" text-[14px] text-[#00000080] ">Client</p>
            </div>
            <div className=" bottom_icon relative top-[-2px] icon_img w-full max-w-[60px] h-[60px] md:max-w-[45px] md:h-[45px] ">
              <Image
                src="/envato-market2/icon-quote.png"
                width={90}
                height={90}
                alt="icon"
                className=" w-full h-full object-contain "
              />
            </div>
          </div>
        </div>
      </DynamicSlider>
    );
  };
  return (
    <>
      <section className=" sliderWrapper relative w-full py-20  lg:py-14 md:!py-10 ">
        <div className={`${EmStyle.container}`}>
          <div className="intro w-full max-w-[550px] text-center mx-auto mb-8 ">
            <h2 className=" relative text-[48px] text-[#001d3d] font-extrabold font-mulish leading-[1.03] mb-5 lg:text-[40px] md:mb-4 md:!text-[35px] ">
              Our Testimonials
            </h2>
            <p className=" text-[16px] text-[#7a7a7a] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div
            className={`${EmStyle.em2slider_wrap} relative w-full rounded-[30px] shadow-em2imgContentShadow2 p-12 bg-[url('/envato-market2/office-building.jpeg')] bg-center bg-cover flex flex-wrap items-center md:p-8 sm:block `}
          >
            <div className="img_wrapper relative w-full max-w-[262px] flex justify-center z-10 lg:max-w-[196px] sm:mx-auto ">
              <div className="image w-full max-w-[196px] h-[196px] rounded-[50%] overflow-hidden border-[10px] border-solid border-white ">
                <Image
                  src="/envato-market2/girl-image.jpeg"
                  width={250}
                  height={250}
                  alt="img"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
            <div
              className={` relative w-[calc(100%-262px)] pl-5 z-10  ${EmStyle.em2slider_content} lg:w-[calc(100%-196px)] sm:!w-full sm:pl-0 sm:mt-6 `}
            >
              {em2slider_content()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
