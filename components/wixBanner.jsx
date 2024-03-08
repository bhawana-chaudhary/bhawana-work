import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "../styles/global.module.scss";

export default function WixBanner() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className={`${Styles.wixOnebanner} relative w-full bg-white min-h-[100vh] pt-[200px]`}
      >
        <div
          className={`${Styles.bg_wrapper} fixed top-0 left-0 w-full h-full`}
          style={{ transform: `translateY(-${scrollY * 0.3}px)` }}
        >
          <video
            autoPlay
            muted
            loop
            src="/wix/wix-banner-video.mp4"
            className={`${Styles.bg_wrap} w-full h-full object-cover`}
          ></video>
        </div>
        <div
          className={`${Styles.container} relative w-full py-0 px-[20px] mx-auto my-0 max-w-[1170px]`}
        >
          <div className={`${Styles.banner_content} text-center z-20`}>
            <h6
              className={`text-[17px] uppercase text-black font-medium font-sans tracking-[1.3px] mb-[17px]`}
            >
              Lorem ipsum dolor sit amet consectetur
            </h6>
            <h1
              className={`text-[110px] text-black  font-sans font-extrabold tracking-[30px] leading-[1.05] mb-3`}
            >
              SUCCESS
            </h1>
            <p
              className={`text-[23px] text-black font-light font-sans tracking-[1.95px] mb-[30px]`}
            >
              Now Available for Online Coaching
            </p>
            <Link
              href="/"
              className={`relative capitalize bg-black border-2 border-black px-[15px] py-[10px] text-[16px] text-white font-extralight inline-block tracking-[1px] hover:bg-white hover:text-black transition-colors duration-500`}
            >
              Lorem ipsum
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
