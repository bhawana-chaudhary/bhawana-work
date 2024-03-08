import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "../styles/global.module.scss";

const tabData = [
  {
    id: 1,
    category: "Personal Growth",
  },
  {
    id: 2,
    category: "Career Ambitions",
  },
];

const tabData1 = [
  {
    id: 1,
    cardTitle: "Lorem, ipsum",
    cardDetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam omnis sunt optio.",
    time: "1 hr",
    price: "$70",
    btnText: "Book Now",
  },
  {
    id: 2,
    cardTitle: "Lorem, ipsum",
    cardDetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam omnis sunt optio.",
    time: "1 hr",
    price: "$70",
    btnText: "Book Now",
  },
  {
    id: 3,
    cardTitle: "Lorem ipsum dolor sit amet consectetur",
    cardDetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam omnis sunt optio.",
    time: "1 hr",
    price: "$70",
    btnText: "Book Now",
  },
];

const tabData2 = [
  {
    id: 1,
    cardTitle: "2 Lorem, ipsum",
    cardDetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam omnis sunt optio.",
    time: "1 hr",
    price: "$70",
    btnText: "Book Now",
  },
  {
    id: 2,
    cardTitle: "2 Lorem, ipsum",
    cardDetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam omnis sunt optio.",
    time: "1 hr",
    price: "$70",
    btnText: "Book Now",
  },
  {
    id: 3,
    cardTitle: "2 Lorem, ipsum",
    cardDetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam omnis sunt optio.",
    time: "1 hr",
    price: "$70",
    btnText: "Book Now",
  },
];

export default function WixService() {
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

  // const [activeTab, setActiveTab] = useState(0);
  // const handleTabClick = (index) => {
  //   setActiveTab(index);
  // };
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const bottomLineWidth = activeTab === "tab1" ? "50%" : "100%";

  return (
    <>
      <section
        className={`${
          Styles.wixService
        } relative w-full bg-white min-h-[915px] py-[50px] overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100vw] before:h-[100vh] before:bg-[url('/wix/parallax-img2.webp')] before:bg-fixed before:bg-cover before:translate-y-[(-${
          scrollY * 0.3
        }px)] before:bg-center`}
        id="services"
      >
        <div
          className={`${Styles.container} relative w-full py-0 px-[20px] mx-auto my-0 max-w-[1170px]`}
        >
          <div className={`${Styles.content} z-20`}>
            <h2
              className={`text-[44px] relative uppercase text-black  font-sans font-extrabold leading-[1.05] pt-[25px] tracking-[3px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[45px] before:h-[2px] before:bg-black `}
            >
              SERVICES
            </h2>
          </div>
          <div className={`${Styles.tab_wrapper} mt-[100px]`}>
            <div className={`${Styles.tab_header} relative w-full mb-[60px]`}>
              <ul
                className={`relative w-fit flex mx-auto after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#9fbfc1]`}
              >
                <li
                  className={`${
                    activeTab === "tab1" ? "active" : ""
                  } relative w-fit py-[14px] px-[30px]`}
                  onClick={() => handleTabChange("tab1")}
                >
                  <span
                    className={`text-[16px] text-black font-light font-sans tracking-[0.5px] cursor-pointer`}
                  >
                    Personal Growth
                  </span>
                </li>

                <li
                  className={`${
                    activeTab === "tab2" ? "active" : ""
                  } relative w-fit py-[14px] px-[30px]`}
                  onClick={() => handleTabChange("tab2")}
                >
                  <span
                    className={`text-[16px] text-black font-light font-sans tracking-[0.5px] cursor-pointer`}
                  >
                    Career Ambitions
                  </span>
                </li>
                <div
                  style={{ width: bottomLineWidth }}
                  className={`${Styles.bottom_line} absolute bottom-[-2px] left-0 w-[50%] h-[4px] bg-[#3a7c80] z-[1]  transition-all`}
                ></div>
              </ul>
            </div>
            <div className={`${Styles.tab_content_outer_wrap} relative w-full`}>
              {activeTab === "tab1" && (
                <div
                  className={`${Styles.tab_content} ${
                    activeTab === 1 ? Styles.active : ""
                  } relative w-full`}
                  id="tab-1"
                >
                  <div
                    className={`${Styles.tab_card_wrap}  relative w-mainRow ml-[-15px]  flex flex-wrap`}
                  >
                    {tabData1.map((tabitem) => (
                      <div
                        key={tabitem.id}
                        className={`${Styles.card} relative w-threeCard mx-[15px] mb-[30px] text-center bg-white p-[30px] pb-[90px] flex flex-wrap justify-center`}
                      >
                        <h4
                          className={`text-[24px] text-black font-extralight font-sans tracking-[0.5px] mb-3`}
                        >
                          {tabitem.cardTitle}
                        </h4>
                        <p
                          className={`text-[16px] text-black font-extralight font-sans tracking-[0.5px] mb-2`}
                        >
                          {tabitem.cardDetail}
                        </p>
                        <p
                          className={`text-[16px] text-black font-extralight font-sans tracking-[0.5px] mb-2`}
                        >
                          <span>{tabitem.time}</span>
                        </p>
                        <p
                          className={`text-[16px] text-black font-extralight font-sans tracking-[0.5px] mb-2`}
                        >
                          <span>{tabitem.price}</span>
                        </p>
                        <Link
                          href="/"
                          className={` absolute bottom-[30px] capitalize bg-black border-2 border-black px-[15px] py-[6px] text-[16px] text-white font-extralight inline-block tracking-[1px] hover:bg-white hover:text-black transition-colors duration-500`}
                        >
                          {tabitem.btnText}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "tab2" && (
                <div
                  className={`${Styles.tab_content} ${
                    activeTab === 2 ? Styles.active : ""
                  } relative w-full`}
                  id="tab-2"
                >
                  <div
                    className={`${Styles.tab_card_wrap}  relative w-mainRow ml-[-15px]  flex flex-wrap`}
                  >
                    {tabData2.map((tabitem) => (
                      <div
                        key={tabitem.id}
                        className={`${Styles.card} relative w-threeCard mx-[15px] mb-[30px] text-center bg-white p-[30px] pb-[90px] flex flex-wrap justify-center`}
                      >
                        <h4
                          className={`text-[24px] text-black font-extralight font-sans tracking-[0.5px] mb-3`}
                        >
                          {tabitem.cardTitle}
                        </h4>
                        <p
                          className={`text-[16px] text-black font-extralight font-sans tracking-[0.5px] mb-2`}
                        >
                          {tabitem.cardDetail}
                        </p>
                        <p
                          className={`text-[16px] text-black font-extralight font-sans tracking-[0.5px] mb-2`}
                        >
                          <span>{tabitem.time}</span>
                        </p>
                        <p
                          className={`text-[16px] text-black font-extralight font-sans tracking-[0.5px] mb-2`}
                        >
                          <span>{tabitem.price}</span>
                        </p>
                        <Link
                          href="/"
                          className={` absolute bottom-[30px] capitalize bg-black border-2 border-black px-[15px] py-[6px] text-[16px] text-white font-extralight inline-block tracking-[1px] hover:bg-white hover:text-black transition-colors duration-500`}
                        >
                          {tabitem.btnText}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
