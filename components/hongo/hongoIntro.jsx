import React from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";
import "animate.css";

export default function HongoIntro({
  padding,
  introClassName,
  title,
  subtitle,
  paragraph,
}) {
  return (
    <>
      <section
        className={` hongoIntro ${introClassName} relative w-full  animate__animated animate__fadeInUp animate__delay-2s `}
        style={{ padding }}
      >
        <div className={`${HongoStyle.container}`}>
          <div className="intro relative w-full max-w-[780px] mx-auto z-10 text-center ">
            <h2 className=" text-[55px] text-[#141416]  font-JakartaSans font-bold tracking-[-2px] leading-[55px] mb-5 ">
              {title}
              <span className=" bg-clip-text text-transparent bg-hongoH1Gradient ">
                {subtitle}
              </span>
            </h2>
            <p className=" text-[18px] leading-[30px] text-[#7F7F8A] font-figtree font-normal ">
              {paragraph}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
