import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "../../styles/asliOne.module.scss";

export default function AsliBanner({ curvedSvgText, setIsHovered }) {
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const curvedSvgText = document.querySelector(".curvedSvgText");
      if (!curvedSvgText) return;

      if (window.scrollY > 0) {
        curvedSvgText.classList.add(Style["scroll-animation"]);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          curvedSvgText.classList.remove(Style["scroll-animation"]);
        }, 200);
      } else {
        curvedSvgText.classList.remove(Style["scroll-animation"]);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      <section className=" asli_banner relative w-full min-h-[100vh] bg-[#777777] flex justify-center items-center ">
        <div
          className={` ${Style.banneranimation_slider} ${Style.bgGray_overlay} bgImage_wrap absolute top-0 left-0 w-full h-full overflow-hidden flex justify-between z-[1] `}
        >
          <div
            className={`${Style.animation_wrap} image_wrap w-[16.66%] h-full lg:w-[25%] `}
          >
            <div className={`relative w-full`}>
              <div className={` image w-full min-h-fit p-2 md:p-1 `}>
                <Image
                  src="/asli/banner_img_1.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2 md:p-1 `}>
                <Image
                  src="/asli/banner_img_2.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2 md:p-1 `}>
                <Image
                  src="/asli/banner_img_3.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2 md:p-1 `}>
                <Image
                  src="/asli/banner_img_4.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2 md:p-1 `}>
                <Image
                  src="/asli/banner_img_5.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
            <div className={`relative w-full`}>
              <div className={` image w-full min-h-fit p-2 md:p-1 `}>
                <Image
                  src="/asli/banner_img_1.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2 md:p-1 `}>
                <Image
                  src="/asli/banner_img_2.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2 md:p-1 `}>
                <Image
                  src="/asli/banner_img_3.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2 md:p-1 `}>
                <Image
                  src="/asli/banner_img_4.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2 md:p-1 `}>
                <Image
                  src="/asli/banner_img_5.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
            <div className={`relative w-full`}>
              <div className={` image w-full min-h-fit p-2 md:p-1 `}>
                <Image
                  src="/asli/banner_img_1.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2 md:p-1 `}>
                <Image
                  src="/asli/banner_img_2.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2 md:p-1 `}>
                <Image
                  src="/asli/banner_img_3.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2 md:p-1 `}>
                <Image
                  src="/asli/banner_img_4.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2 md:p-1 `}>
                <Image
                  src="/asli/banner_img_5.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
          <div
            className={`${Style.animation_wrap} ${Style.animation_wrap2} image_wrap w-[16.66%] h-full mr-auto lg:w-[25%] `}
          >
            <div className={`relative w-full`}>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_1.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_2.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_3.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_4.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_5.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_6.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
            <div className={`relative w-full`}>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_1.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_2.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_3.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_4.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_5.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_6.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
            <div className={`relative w-full`}>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_1.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_2.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_3.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_4.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_5.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img2_6.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
          <div
            className={`${Style.animation_wrap} image_wrap w-[16.66%] h-full ml-auto lg:w-[25%] `}
          >
            <div className={`relative w-full`}>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_1.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_2.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_3.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_4.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_5.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_6.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
            <div className={`relative w-full`}>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_1.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_2.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_3.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_4.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_5.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_6.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
            <div className={`relative w-full`}>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_1.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_2.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_3.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_4.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_5.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img3_6.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
          <div
            className={`${Style.animation_wrap}  ${Style.animation_wrap2} image_wrap w-[16.66%] h-full lg:w-[25%] `}
          >
            <div className={`relative w-full`}>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_1.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_2.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_3.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_4.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_5.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_6.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
            <div className={`relative w-full`}>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_1.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_2.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_3.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_4.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_5.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_6.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
            <div className={`relative w-full`}>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_1.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_2.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_3.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_4.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_5.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className={` image w-full min-h-fit p-2  md:p-1 `}>
                <Image
                  src="/asli/banner_img4_6.webp"
                  width={400}
                  height={800}
                  alt="img"
                  loading="lazy"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="banner_content relative w-full text-center z-10 ">
          <h1
            className={` text-[#fdf9cf] text-[190px] font-nanumMyeongjo tracking-[-2px] leading-[1.1] desktop:text-[165px] tablet:text-[144px] phablet:text-[130px] sm:text-[110px] `}
          >
            Asli
          </h1>
          <p className=" text-white font-nunitoSans font-medium text-[22px] desktop:text-[20px] tablet:text-[18px] md:text-[16px] ">
            LOREM ipsum dolor sit amet.
          </p>
          <div
            className={` ${Style.curvedSvgText} curvedSvgText relative w-fit mx-auto mt-10 flex justify-center rounded-[50%] cursor-pointer `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
              window.history.replaceState(
                null,
                null,
                window.location.href.split("#")[0]
              );
              window.scrollTo({
                top: document.getElementById("asliIntro").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            <svg
              id="curved1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 170 170"
              width="170"
              height="170"
              className={` ${Style.curvedSvg} `}
            >
              <defs>
                <path
                  id="curve"
                  d="
                M 85, 85
                m -64, 0
                a 64,64 0 1,1 128,0
                a 64,64 0 1,1 -128,0"
                />
              </defs>
              <text fontSize="13" className=" uppercase tracking-[2.5px] ">
                <textPath xlinkHref="#curve">
                  <tspan dx="5">View Demo</tspan> <tspan dx="5"> → </tspan>
                  <tspan dx="5">View Demo</tspan>
                  <tspan dx="5"> → </tspan>
                  <tspan dx="5">View Demo</tspan>
                  <tspan dx="5"> → </tspan>
                </textPath>
              </text>
            </svg>
            <div
              className={`${Style.rotateSvg} absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  transform="translate(10.000000, 9.160254) rotate(-330.000000) translate(-10.000000, -9.160254) "
                  points="9 -0.839745962 11 -0.839745962 11 19.160254 9 19.160254"
                ></polygon>
                <polygon
                  transform="translate(10.000000, 9.160254) rotate(-30.000000) translate(-10.000000, -9.160254) "
                  points="9 -0.839745962 11 -0.839745962 11 19.160254 9 19.160254"
                ></polygon>
                <polygon
                  transform="translate(10.000000, 9.160254) rotate(-90.000000) translate(-10.000000, -9.160254) "
                  points="9 -0.839745962 11 -0.839745962 11 19.160254 9 19.160254"
                ></polygon>
              </svg>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
