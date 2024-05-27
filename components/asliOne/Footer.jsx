import React, { useState } from "react";
import Link from "next/link";
import Style from "../../styles/asliOne.module.scss";

export default function Footer({ setIsFooterCircleHovered }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <footer className={`asli_footer relative w-full pb-16 overflow-hidden `}>
        <div className=" relative w-full py-5 ">
          <div
            className={`${Style.animatScroll_Text} relative top-[64px] overflow-hidden bg-white  !mx-[-10px] transform rotate-[-357deg] desktop:top-[60px] xl:rotate-[-355deg] tablet:top-[56px] phablet:top-[42px] sm:top-[32px] `}
            // style={{ transform: "rotate(-357deg)" }}
          >
            <div
              className={`${Style.animation_wrap} relative flex pt-4 pb-3 tablet:pt-3 tablet:pb-2 md:pt-2 md:pb-0 `}
            >
              <div
                className={` ${Style.animation_item} ${
                  isHovered ? Style.animatwrap_hovered : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <h2 className=" !text-[#20211f] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px]  desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  Asli WordPress Theme
                </h2>
                <h2 className=" !text-[#20211f] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px]  desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  /
                </h2>
                <h2 className=" !text-[#20211f] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px]  desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  Asli WordPress Theme
                </h2>
                <h2 className=" !text-[#20211f] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px]  desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  /
                </h2>
              </div>
              <div
                className={` ${Style.animation_item} ${
                  isHovered ? Style.animatwrap_hovered : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <h2 className=" !text-[#20211f] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px]  desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  Asli WordPress Theme
                </h2>
                <h2 className=" !text-[#20211f] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px]  desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  /
                </h2>
                <h2 className=" !text-[#20211f] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px]  desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  Asli WordPress Theme
                </h2>
                <h2 className=" !text-[#20211f] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px]  desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  /
                </h2>
              </div>
            </div>
          </div>
          <div
            className={`${Style.animatScroll_Text} ${Style.animatScroll_Text2} relative top-[-64px] overflow-hidden bg-[#313130] !mx-[-10px] transform rotate-[357deg] desktop:top-[-54px] xl:rotate-[355deg] tablet:top-[-43px] phablet:top-[-33px] sm:top-[-32px] `}
            style={{ transform: "rotate(357deg)" }}
          >
            <div
              className={`${Style.animation_wrap} relative flex pt-4 pb-3 tablet:pt-3 tablet:pb-2 md:pt-2 md:pb-0 `}
            >
              <div
                className={` ${Style.animation_item} ${
                  isHovered ? Style.animatwrap_hovered : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <h2 className=" !text-[#fdf9cf] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px] desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  Download Now
                </h2>
                <h2 className=" !text-[#fdf9cf] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px] desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  /
                </h2>
                <h2 className=" !text-[#fdf9cf] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px] desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  Download Now
                </h2>
                <h2 className=" !text-[#fdf9cf] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px] desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  /
                </h2>
                <h2 className=" !text-[#fdf9cf] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px] desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  Download Now
                </h2>
                <h2 className=" !text-[#fdf9cf] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px] desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  /
                </h2>
              </div>
              <div
                className={` ${Style.animation_item} ${
                  isHovered ? Style.animatwrap_hovered : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <h2 className=" !text-[#fdf9cf] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px] desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  Download Now
                </h2>
                <h2 className=" !text-[#fdf9cf] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px] desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  /
                </h2>
                <h2 className=" !text-[#fdf9cf] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px] desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  Download Now
                </h2>
                <h2 className=" !text-[#fdf9cf] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px] desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  /
                </h2>
                <h2 className=" !text-[#fdf9cf] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px] desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  Download Now
                </h2>
                <h2 className=" !text-[#fdf9cf] !text-[68px] !mx-7 desktop:!text-[58px] tablet:!text-[52px] phablet:!text-[45px] sm:!text-[40px] desktop:!mx-6 tablet:!mx-5 phablet:!mx-4 sm:!mx-3 ">
                  /
                </h2>
              </div>
            </div>
          </div>
          <div
            className={`${Style.hover_circle}hover_circle group absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[181px] h-[181px] bg-[#fdf9cf] border-[#fdf9cf] border-solid border-[1px] rounded-[50%] z-[3]  tablet:w-[170px] phablet:w-[150px] sm:w-[135px]  tablet:h-[170px] phablet:h-[150px] sm:h-[135px] `}
            onMouseEnter={() => setIsFooterCircleHovered(true)}
            onMouseLeave={() => setIsFooterCircleHovered(false)}
          >
            <Link href="/" className={`${Style.redirect_link}`}>
              .
            </Link>
            <span className=" absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center text-[#313130] text-[16px] font-nunitoSans font-bold transition-all duration-500 ease-in-out opacity-[1]  group-hover:opacity-0  group-hover:top-[40%] tablet:text-[15px] phablet:text-[14px] sm:text-[13px] ">
              Get it only for $59
            </span>
            <span className=" absolute  top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center text-[#313130] text-[16px] font-nunitoSans font-bold transition-all duration-500 ease-in-out opacity-0  group-hover:opacity-[1] group-hover:top-[50%] tablet:text-[15px] phablet:text-[14px] sm:text-[13px] ">
              Get it only for $59
            </span>
          </div>
        </div>
        <div className="footer_text_wrap relative w-full mt-5 text-center md:mt-4 ">
          <h6
            className={` text-[#dfdfdf] text-[20px] font-nunitoSans font-normal tablet:text-[18px] md:text-[16px] `}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </h6>
        </div>
      </footer>
    </>
  );
}
