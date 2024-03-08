import React from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";

export default function HongoContentWithImg() {
  return (
    <>
      <section
        className={` hongoContent_WithImg ${HongoStyle.lineOverlay} relative w-full pb-[50px] bg-white `}
      >
        <div className={`${HongoStyle.container}`}>
          <div className="intro_with_image relative w-full flex flex-wrap items-center z-10 ">
            <div className="intro relative w-full max-w-[482px]  ">
              <h6 className=" text-[#141416] text-[14px] font-JakartaSans font-semibold leading-[26px] uppercase mb-[5px] ">
                GROW YOUR BUSINESS WITH SHOPIFY
              </h6>
              <h2 className=" text-[55px] text-[#141416]  font-JakartaSans font-bold tracking-[-2px] leading-[55px] mb-5 ">
                Now streamline your back office.
              </h2>
              <p className=" text-[18px] leading-[30px] text-[#7F7F8A] font-figtree font-normal mb-[25px] ">
                Setting up an online store is not always easy. But with Hongo
                you can jump start your online shop in no time.
              </p>
              <div
                className={`${HongoStyle.hongo_leftIcon_button} bg-[#1c1c1c] border-[2px] border-solid border-[#1c1c1c] `}
              >
                <Link href="/" className={`${HongoStyle.redirect_link}`}>
                  .
                </Link>
                <div className={`${HongoStyle.text}`}>
                  <span className={`${HongoStyle.top_text} text-white `}>
                    Purchase hongo
                  </span>
                  <span className={`${HongoStyle.bottom_text} text-white `}>
                    Purchase hongo
                  </span>
                </div>
              </div>
            </div>
            <div className="image_wrapper relative w-[calc(100%-482px)] pl-7 ">
              <div className="img-wrap relative w-full h-full max-h-[443px] shadow-hongoImageShadow rounded-[20px] overflow-hidden ">
                <Image
                  src="/hongo/hongo-ecommerce-optimization.webp"
                  width={700}
                  height={500}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
