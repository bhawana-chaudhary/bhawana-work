import React from "react";
import Image from "next/image";
import Style from "../../styles/asliOne.module.scss";

const colFourData = [
  {
    id: 1,
    iconUrl: "/asli/cardIcon_1.svg",
    cardText: "AJAX Transitions",
  },
  {
    id: 2,
    iconUrl: "/asli/cardIcon_2.svg",
    cardText: "WebGL Motion Effects",
  },
  {
    id: 3,
    iconUrl: "/asli/cardIcon_3.svg",
    cardText: "Powered by Elementor",
  },
  {
    id: 4,
    iconUrl: "/asli/cardIcon_4.svg",
    cardText: "Split Text Animations",
  },
  {
    id: 5,
    iconUrl: "/asli/cardIcon_5.svg",
    cardText: "Fluid Typography",
  },
  {
    id: 6,
    iconUrl: "/asli/cardIcon_6.svg",
    cardText: "Interactive Cursor",
  },
  {
    id: 7,
    iconUrl: "/asli/cardIcon_7.svg",
    cardText: "Parallax Effects",
  },
  {
    id: 8,
    iconUrl: "/asli/cardIcon_8.svg",
    cardText: "Fullscreen & Classic Menu",
  },
  {
    id: 9,
    iconUrl: "/asli/cardIcon_9.svg",
    cardText: "Smooth Scrolling",
  },

  {
    id: 10,
    iconUrl: "/asli/cardIcon_10.svg",
    cardText: "Translation Ready",
  },
  {
    id: 11,
    iconUrl: "/asli/cardIcon_11.svg",
    cardText: "Fully Responsive",
  },
  {
    id: 12,
    iconUrl: "/asli/cardIcon_12.svg",
    cardText: "Well Documented",
  },
];

export default function ColFourCardIcon({ setIsIconCardHovered }) {
  return (
    <>
      <section
        className={`colFour_cardIcon relative w-full py-[100px] px-[50px] md:px-5 desktop:py-[80px] tablet:py-[60px] md:py-[40px] `}
      >
        <div className="colFour_wrapper relative w-full max-w-[1140px] mx-auto ">
          <div className="colFour_cardWrap w-[calc(100%+30px)] ml-[-15px] flex flex-wrap sm:w-[calc(100%+20px)] sm:ml-[-10px] ">
            {colFourData.map((iconCard, index) => (
              <div
                className="colFour relative w-[calc(25%-30px)] mx-[15px] mb-[20px] p-[15px] tablet:w-[calc(33.33%-30px)] phablet:w-[calc(33.33%-30px)] sm:w-[calc(50%-20px)] sm:mx-[10px] sm:p-0 sm:mb-[30px] "
                key={index}
              >
                <div
                  className={` ${Style.icon_outerWrap} icon_outerWrap relative w-[152px] h-[152px] mx-auto flex justify-center items-center border-[1px] border-solid border-[#ffffff33] rounded-[50%] md:w-[138px] md:h-[138px] `}
                  onMouseEnter={() => setIsIconCardHovered(true)}
                  onMouseLeave={() => setIsIconCardHovered(false)}
                >
                  <div className="icon_wrap max-w-[40px] h-[40px] md:max-w-[32px] md:h-[32px] ">
                    <Image
                      width={100}
                      height={100}
                      src={iconCard.iconUrl}
                      className=" w-full h-full object-contain "
                      alt="icon"
                    />
                  </div>
                </div>
                <div className="cardIcon_text w-full text-center mt-4 ">
                  <h5
                    className={` text-white text-[22px] font-nunitoSans font-normal desktop:text-[20px] tablet:text-[18px] md:text-[16px] `}
                  >
                    {iconCard.cardText}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
