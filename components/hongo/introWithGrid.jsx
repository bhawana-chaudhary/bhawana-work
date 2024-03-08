import React, { useEffect } from "react";
// import $ from "jquery";
// import Waypoint from "waypoints";
// // import Waypoint from "../../node_modules/waypoints/src/waypoint.js";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";
import "animate.css";

export default function IntroWithGrid() {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     $(".animate__animated").each(function () {
  //       const waypoint = new Waypoint({
  //         element: this,
  //         handler: function (direction) {
  //           $(this.element).addClass("animate__fadeInUp");
  //         },
  //         offset: "75%", // Adjust this offset as needed
  //       });
  //     });
  //   }
  // }, []);
  return (
    <>
      <section
        className={`${HongoStyle.introWithGrid} ${HongoStyle.lineOverlay} relative w-full bg-white py-[100px] `}
      >
        <div className={`${HongoStyle.container}`}>
          <div className="intro relative w-full flex justify-between z-10 ">
            <div className="heading relative w-full max-w-[482px] ">
              <h2 className=" text-[45px] text-[#141416]  font-JakartaSans font-bold tracking-[-2px] leading-[50px] animate__animated animate__fadeInUp animate__delay-2s ">
                Most premium and{" "}
                <span className={`${HongoStyle.intro_bottom_line}`}>
                  exclusive
                </span>{" "}
                features.
              </h2>
            </div>
            <div className="text relative  w-full max-w-[575px] pr-[40px] ml-5 animate__animated animate__fadeInUp animate__delay-2s ">
              <p className=" text-[18px] leading-[30px] font-normal text-[#7F7F8A] font-figtree ">
                <span className=" text-[#141416] font-semibold ">
                  Lorem ipsum dolor, sit amet consectetur
                </span>{" "}
                - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                quae! Labore aliquam assumenda modi quaerat rem?
              </p>
            </div>
          </div>
          <div className="grid_wrapper relative mt-[70px] grid  min-h-[590px] grid-rows-2 grid-cols-4 gap-[30px] z-10 ">
            <div className="grid_item relative rounded-[8px] bg-white bg-[url('/hongo/hongo-grid-img1.jpeg')] bg-cover p-[35px] row-span-1 col-span-2 flex items-center animate__animated animate__fadeInLeft animate__delay-2s ">
              <div className="card-content relative z-[1] w-full max-w-[240px] ">
                <h3 className=" text-[48px] font-extrabold text-[#141416] leading-[58px] tracking-[-2px] font-JakartaSans ">
                  150+
                </h3>
                <p className=" text-[17px] font-medium text-[#141416] leading-[24px] font-JakartaSans mb-4 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <div
                  className={`${HongoStyle.hongo_leftIcon_button} ${HongoStyle.hongo_withoutIcon_button} bg-[#1c1c1c] `}
                >
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.text}`}>
                    <span className={`${HongoStyle.top_text} text-white `}>
                      Read more
                    </span>
                    <span className={`${HongoStyle.bottom_text} text-white `}>
                      Read more
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid_item relative rounded-[8px] bg-white bg-[url('/hongo/hongo-grid-img2.jpeg')] bg-cover p-[35px] row-span-1 col-span-1 before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-[209px] before:h-[314px] before:bg-[url('/hongo/hongo-grid-img2-2.webp')] flex items-end animate__animated animate__fadeInRight animate__delay-2s ">
              <div className="card-content relative z-[1] w-full max-w-[160px] ">
                <h3 className=" text-[20px] font-medium text-white leading-[24px] font-JakartaSans mb-2 ">
                  Lorem ipsum dolor sit.
                </h3>
                <p className=" text-[14px] font-normal text-white leading-[22px] font-JakartaSans opacity-[0.5] ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
            <div className="grid_item relative rounded-[8px] bg-white bg-[url('/hongo/hongo-grid-img3.jpeg')] bg-cover p-[35px] row-span-2 col-span-1  flex items-end animate__animated animate__fadeInRight animate__delay-2s ">
              <div className="card-content relative z-[1] w-full max-w-[240px] text-center mx-auto ">
                <h3 className=" text-[18px] font-semibold text-[#141416] leading-[28px] font-JakartaSans ">
                  Lorem ipsum.
                </h3>
                <p className=" text-[15px] font-normal text-[#7f7f8a] leading-[26px] font-JakartaSans opacity-[0.5] ">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className="grid_item relative rounded-[8px] bg-[#e1f0e5] p-[35px] row-span-1 col-span-1 animate__animated animate__fadeInUp animate__delay-3s ">
              <div className="card-content relative z-[1] w-full max-w-[240px] text-center mx-auto ">
                <div className="img_wrap relative w-full max-w-[97px] h-[82px] mx-auto mb-[10px] ">
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <Image
                    src="/hongo/hongo-grid-img4-1.jpeg"
                    width={100}
                    height={100}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
                <p>Lorem ipsum dolor sit.</p>
                <p className=" relative w-fit mx-auto mb-2 pl-5 before:content-[''] before:absolute before:top-[4px] before:left-0 before:w-[15px] before:h-[17px] before:bg-[url('/hongo/hongo-grid-img4-2.svg')] before:bg-no-repeat bg-contain ">
                  Lorem ipsum
                </p>
                <div className="img_wrap relative w-full max-w-[180px] h-[67px] mx-auto ">
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <Image
                    src="/hongo/hongo-grid-img4-3.jpeg"
                    width={100}
                    height={100}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </div>
            </div>
            <div className="grid_item relative rounded-[8px] bg-white bg-[url('/hongo/hongo-grid-img5.jpeg')] bg-cover p-[35px] row-span-1 col-span-2 flex items-center animate__animated animate__fadeInUp animate__delay-3s ">
              <div className="card-content relative z-[1] w-full max-w-[240px] ">
                <h3 className=" text-[22px] font-medium text-white leading-[28px] font-JakartaSans mb-[10px] ">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className=" text-[14px] font-normal text-white leading-[22px] font-JakartaSans opacity-[0.8] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  cum voluptates fugiat non nam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
