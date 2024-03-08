import React from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";
import "animate.css";

export default function HongoBanner() {
  return (
    <>
      <section
        className={`${HongoStyle.hongoBanner} relative w-full min-h-[1011px] py-36 bg-[#141416] overflow-hidden `}
      >
        <div className="banner-img absolute bottom-[-100px] left-0 ">
          <Image
            src="/hongo/hero-section-img.jpeg"
            width={2500}
            height={1600}
            alt="banner-img"
          />
        </div>
        <div className={`${HongoStyle.container}`}>
          <div className="banner_content relative w-full max-w-[672px] mx-auto text-center z-10 ">
            <h1 className=" text-[57px] text-white  font-JakartaSans font-semibold tracking-[-2px] leading-[60px] mb-5 ">
              The multipurpose premium{" "}
              <span className=" bg-clip-text text-transparent bg-hongoH1Gradient ">
                Shopify theme
              </span>
            </h1>
            <p className=" w-full max-w-[513px] text-[17px] text-white leading-[26px] opacity-[0.6] font-light mx-auto ">
              Elevate your online store with Hongo: A creative, revolutionary
              and conversion optimised Shopify theme with unique demos.
            </p>
            <div className="button_wrapper flex flex-wrap justify-center mt-[35px] ">
              <div
                className={`${HongoStyle.hongo_leftIcon_button} bg-white border-[2px] border-solid border-white `}
              >
                <Link href="/" className={`${HongoStyle.redirect_link}`}>
                  .
                </Link>
                <div className={`${HongoStyle.icon}`}>
                  <Image
                    src="/hongo/icon-play.png"
                    width={50}
                    height={50}
                    alt="icon"
                    className=" w-full h-full object-contain "
                  />
                </div>
                <div className={`${HongoStyle.text}`}>
                  <span className={`${HongoStyle.top_text} text-[#141419] `}>
                    Explore hongo
                  </span>
                  <span className={`${HongoStyle.bottom_text} text-[#141419] `}>
                    Explore hongo
                  </span>
                </div>
              </div>
              <div
                className={`${HongoStyle.hongo_leftIcon_button} bg-transparent border-[2px] border-solid border-[#ffffff33] ml-[14px] `}
              >
                <Link href="/" className={`${HongoStyle.redirect_link}`}>
                  .
                </Link>
                <div className={`${HongoStyle.icon}`}>
                  <Image
                    src="/hongo/icon-shopping-bag.png"
                    width={50}
                    height={50}
                    alt="icon"
                    className=" w-full h-full object-contain "
                  />
                </div>
                <div className={`${HongoStyle.text}`}>
                  <span className={`${HongoStyle.top_text} text-white `}>
                    Open free store
                  </span>
                  <span className={`${HongoStyle.bottom_text} text-white `}>
                    Open free store
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="side_img absolute top-[33%] right-[6%] w-full max-w-[150px] h-[150px] animate__animated animate__fadeInRight ">
          <Image
            src="/hongo/hero-section-seal.webp"
            width={200}
            height={200}
            alt="img"
          />
        </div>
      </section>
    </>
  );
}
