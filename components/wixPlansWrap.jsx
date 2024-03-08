import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "../styles/global.module.scss";

export default function WixPlansWrap() {
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
        className={`${
          Styles.wixService
        } relative w-full bg-white pt-[50px] pb-28 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100vw] before:h-[100vh] before:bg-[url('/wix/parallax-img2.webp')] before:bg-fixed before:bg-cover before:translate-y-[(-${
          scrollY * 0.3
        }px)] before:bg-center`}
        id="plans"
      >
        <div
          className={`${Styles.container} relative w-full py-0 px-[20px] mx-auto my-0 max-w-[1170px]`}
        >
          <div className={`${Styles.content} z-20 text-center`}>
            <h2 className=" text-[42px] relative text-black  font-sans font-extrabold leading-[1.05] tracking-[3px] uppercase mb-5 ">
              Choose the Plan for You
            </h2>
            <p className=" text-[15px] font-light ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              voluptatem quo velit?
            </p>
          </div>
          <div className="col_three_wrap relative w-mainRow ml-[-15px] mt-14 flex flex-wrap ">
            <div className="col_three relative w-threeCard mx-[15px] border-solid border-[2px] border-black ">
              <div className="wrap relative  min-h-[342px] p-8 text-center bg-[#ffffff52] text-black flex flex-wrap ">
                <h5 className=" w-full text-[20px] font-light mb-2 ">
                  Lorem, ipsum
                </h5>
                <h6 className=" w-full font-light flex justify-center mb-3 ">
                  <span className=" text-[20px] leading-[1] ">$</span>
                  <span className=" text-[70px] leading-[1.1] ">50</span>
                </h6>
                <p className=" w-full text-[14px] font-light mb-2 ">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <p className=" w-full text-[13px] font-light ">
                  <span>Valid for 3 months</span>
                </p>
                <Link
                  href="/"
                  className={`relative w-full capitalize bg-black border-2 border-black px-[15px] py-[10px] text-[16px] text-white font-extralight inline-block tracking-[1px] hover:bg-white hover:text-black transition-colors duration-500 mt-4 `}
                >
                  Select
                </Link>
              </div>
              <div className="menu_wrap relative  min-h-[316px] p-8 bg-white text-black ">
                <ul>
                  <li className=" w-full text-[14px] font-light mb-4 text-center ">
                    <span className={`${Styles.wix_plan_menu}`}>
                      1 Lorem ipsum dolor sit
                    </span>
                  </li>
                  <li className=" w-full text-[14px] font-light mb-4 text-center ">
                    <span className={`${Styles.wix_plan_menu}`}>
                      2 Lorem ipsum dolor
                    </span>
                  </li>
                  <li className=" w-full text-[14px] font-light mb-4 text-center ">
                    <span className={`${Styles.wix_plan_menu}`}>
                      Lorem ipsum
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col_three relative w-threeCard mx-[15px] border-solid border-[2px] border-black ">
              <div className="wrap relative  min-h-[342px] p-8 text-center bg-white text-black flex flex-wrap ">
                <h5 className=" w-full text-[20px] font-light mb-2 ">
                  Lorem, ipsum
                </h5>
                <h6 className=" w-full font-light flex justify-center mb-3 ">
                  <span className=" text-[20px] leading-[1] ">$</span>
                  <span className=" text-[70px] leading-[1.1] ">100</span>
                </h6>
                <p className=" w-full text-[14px] font-light mb-2 ">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <p className=" w-full text-[13px] font-light ">
                  <span>Valid for 3 months</span>
                </p>
                <Link
                  href="/"
                  className={`relative w-full capitalize bg-black border-2 border-black px-[15px] py-[10px] text-[16px] text-white font-extralight inline-block tracking-[1px] hover:bg-white hover:text-black transition-colors duration-500 mt-4 `}
                >
                  Select
                </Link>
              </div>
              <div className="menu_wrap relative  min-h-[316px] p-8 bg-[#ffffff52] text-black ">
                <ul>
                  <li className=" w-full text-[14px] font-light mb-4 text-center ">
                    <span
                      className={`${Styles.wix_plan_menu} ${Styles.black_icon}`}
                    >
                      1 Lorem ipsum dolor sit
                    </span>
                  </li>
                  <li className=" w-full text-[14px] font-light mb-4 text-center ">
                    <span
                      className={`${Styles.wix_plan_menu} ${Styles.black_icon}`}
                    >
                      2 Lorem ipsum dolor
                    </span>
                  </li>
                  <li className=" w-full text-[14px] font-light mb-4 text-center ">
                    <span
                      className={`${Styles.wix_plan_menu} ${Styles.black_icon}`}
                    >
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </span>
                  </li>
                  <li className=" w-full text-[14px] font-light mb-4 text-center ">
                    <span
                      className={`${Styles.wix_plan_menu} ${Styles.black_icon}`}
                    >
                      Lorem ipsum
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col_three relative w-threeCard mx-[15px] border-solid border-[2px] border-black ">
              <div className="wrap relative  min-h-[342px] p-8 text-center bg-[#ffffff52] text-black flex flex-wrap ">
                <h5 className=" w-full text-[20px] font-light mb-2 ">
                  Lorem, ipsum
                </h5>
                <h6 className=" w-full font-light flex justify-center mb-3 ">
                  <span className=" text-[20px] leading-[1] ">$</span>
                  <span className=" text-[70px] leading-[1.1] ">70</span>
                </h6>
                <p className=" w-full text-[14px] font-light mb-2 ">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <p className=" w-full text-[13px] font-light ">
                  <span>Valid for 3 months</span>
                </p>
                <Link
                  href="/"
                  className={`relative w-full capitalize bg-black border-2 border-black px-[15px] py-[10px] text-[16px] text-white font-extralight inline-block tracking-[1px] hover:bg-white hover:text-black transition-colors duration-500 mt-4 `}
                >
                  Select
                </Link>
              </div>
              <div className="menu_wrap relative  min-h-[316px] p-8 bg-white text-black ">
                <ul>
                  <li className=" w-full text-[14px] font-light mb-4 text-center ">
                    <span className={`${Styles.wix_plan_menu}`}>
                      1 Lorem ipsum dolor sit
                    </span>
                  </li>
                  <li className=" w-full text-[14px] font-light mb-4 text-center ">
                    <span className={`${Styles.wix_plan_menu}`}>
                      2 Lorem ipsum dolor
                    </span>
                  </li>
                  <li className=" w-full text-[14px] font-light mb-4 text-center ">
                    <span className={`${Styles.wix_plan_menu}`}>
                      Lorem ipsum
                    </span>
                  </li>
                  <li className=" w-full text-[14px] font-light mb-4 text-center ">
                    <span className={`${Styles.wix_plan_menu}`}>
                      1 Lorem ipsum dolor sit
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
