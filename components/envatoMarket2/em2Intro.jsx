import React from "react";
import Link from "next/link";
import Image from "next/image";
import EmStyle from "/styles/envato-market2.module.scss";

export default function em2Intro() {
  return (
    <>
      <section className="introWrapper relative w-full pt-14 pb-32 bg-[#e5e5e5] md:pt-10 md:pb-20 ">
        <div className={`${EmStyle.bottom_image} bg-transparent `}>
          <div className={`${EmStyle.clip_image} bg-white `}></div>
          <div
            className={`${EmStyle.clip_image} ${EmStyle.clip_image2} bg-white `}
          ></div>
        </div>
        <div className={` ${EmStyle.container} `}>
          <div className="intro_wrap  relative w-full flex flex-wrap ">
            <div className="heading_wrap relative w-[50%] text-right flex flex-wrap justify-end pr-12 border-r border-solid border-r-[#7a7a7a] md:w-full md:text-center md:pr-0 md:border-r-0 md:mb-4 ">
              <h2 className=" relative w-full max-w-[440px] text-[48px] text-[#001d3d] font-extrabold font-mulish leading-[1.03] lg:text-[40px] md:!text-[35px] md:max-w-full ">
                We are here to help you.
              </h2>
            </div>
            <div className="intro_content relative w-[50%] pl-14 md:pl-0 md:text-center md:w-full ">
              <p className=" text-[16px] text-[#7a7a7a] mb-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <Link
                href="/"
                className={`${EmStyle.orange_button} ${EmStyle.dark_orange_borderBtn}`}
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
