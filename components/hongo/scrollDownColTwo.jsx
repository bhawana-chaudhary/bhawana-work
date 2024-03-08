// import React, { useEffect, useRef } from "react";
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";

const hongoScrollDownData = [
  {
    id: 1,
    imageUrl: "/hongo/hongo-card-product-2.jpeg",
    subHeading: "GROW YOUR BUSINESS WITH SHOPIFY",
    heading: "Lorem ipsum dolor",
    headingSpan: "sit amet",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aperiam quo iure voluptates cum inventore tempora, dolore vel dolorum dicta aliquam et voluptatum maiores nobis blanditiis, ipsam numquam. Ut, tempora!",
  },
  {
    id: 2,
    imageUrl: "/hongo/hongo-card-product-4.jpeg",
    reverse: true,
    subHeading: "GROW YOUR BUSINESS WITH SHOPIFY",
    heading: "Lorem ipsum dolor",
    headingSpan: "sit amet",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aperiam quo iure voluptates cum inventore tempora, dolore vel dolorum dicta aliquam et voluptatum maiores nobis blanditiis, ipsam numquam. Ut, tempora!",
  },
  {
    id: 3,
    imageUrl: "/hongo/hongo-card-product-9.jpeg",
    subHeading: "GROW YOUR BUSINESS WITH SHOPIFY",
    heading: "Lorem ipsum dolor",
    headingSpan: "sit amet",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aperiam quo iure voluptates cum inventore tempora, dolore vel dolorum dicta aliquam et voluptatum maiores nobis blanditiis, ipsam numquam. Ut, tempora!",
  },
];

export default function ScrollDownColTwo() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [circleColor, setCircleColor] = useState("#d1d5db");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollHeightHandler = () => {
      const section = document.querySelector(".scrollDown_ColTwo");
      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollPercentage =
        ((windowHeight - sectionRect.top) / sectionRect.height) * 100;

      setScrollHeight(Math.min(scrollPercentage, 100));

      const scrollLineTwo = document.querySelector(".scroll_line_two");
      if (scrollLineTwo) {
        const scrollLineTwoRect = scrollLineTwo.getBoundingClientRect();
        const scrollLineTwoTop = scrollLineTwoRect.top;
        const scrollLineTwoBottom = scrollLineTwoRect.bottom;

        const circles = document.querySelectorAll(".circle");
        circles.forEach((circle) => {
          const circleRect = circle.getBoundingClientRect();
          const circleTop = circleRect.top;
          const circleBottom = circleRect.bottom;

          if (
            circleBottom >= scrollLineTwoTop &&
            circleTop <= scrollLineTwoBottom
          ) {
            circle.style.backgroundColor = "#eb314d";
          } else {
            circle.style.backgroundColor = "#d1d5db";
          }
        });
      }
    };

    window.addEventListener("scroll", scrollHeightHandler);

    return () => {
      window.removeEventListener("scroll", scrollHeightHandler);
    };
  }, []);

  return (
    <>
      <section
        className={` scrollDown_ColTwo ${HongoStyle.lineOverlay} relative w-full py-[100px] `}
      >
        <div className={`${HongoStyle.container_big}`}>
          <div
            className={`${HongoStyle.col_two_wrapper} relative w-full overflow-hidden md:pl-14 z-10 `}
          >
            <div className="scroll_line_one absolute top-0 left-[50%] translate-x-[-50%] w-[8px] h-full bg-gray-300 rounded-md lg:w-[6px] md:left-4 md:-translate-x-0 "></div>
            <div
              className={`${HongoStyle.scroll_line} scroll_line_two absolute top-0 left-[50%] translate-x-[-50%] w-[8px] rounded-md lg:w-[6px] md:left-4 md:-translate-x-0 `}
              style={{
                height:
                  scrollHeight === 100
                    ? "100%"
                    : `calc(${scrollHeight}% - 200px)`,
                backgroundColor: "#eb314d",
                // transition: "none",
                transition:
                  scrollHeight === 100 ? "height 0.5s ease-in-out" : `none`,
              }}
            ></div>
            {hongoScrollDownData.map((hongoScrollDownRow) => (
              <div
                className={`row relative w-[calc(100%+200px)] ml-[-100px] mb-14 flex flex-wrap items-center  desktop:w-[calc(100%+140px)] desktop:ml-[-70px]  tablet:w-[calc(100%+100px)] tablet:ml-[-50px] md:w-full md:ml-0 ${
                  hongoScrollDownRow.reverse === true ? "flex-row-reverse" : ""
                }`}
                key={hongoScrollDownRow.id}
              >
                <div
                  className="circle absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] rounded-[50%] bg-gray-300 md:left-[-47px] md:translate-x-0 "
                  style={{ backgroundColor: circleColor }}
                ></div>

                <div className="col_two w-[calc(50%-200px)] mx-[100px] desktop:w-[calc(50%-140px)] desktop:mx-[70px] tablet:w-[calc(50%-100px)] tablet:mx-[50px] md:w-full md:mx-0 md:mb-[20px] ">
                  <div className="image_wrap w-full h-[600px] rounded-lg overflow-hidden desktop:h-[426px] tablet:h-[335px] md:h-[330px] xs:h-[290px] ">
                    <Image
                      src={hongoScrollDownRow.imageUrl}
                      width={800}
                      height={700}
                      alt="img"
                      className=" w-full h-full object-cover "
                    />
                  </div>
                </div>
                <div className="col_two w-[calc(50%-200px)] mx-[100px] desktop:w-[calc(50%-140px)] desktop:mx-[70px] tablet:w-[calc(50%-100px)] tablet:mx-[50px] md:w-full md:mx-0 ">
                  <div className="content_wrap relative w-full pr-28 xl:pr-0 ">
                    <h6 class=" text-[#141416] text-[14px] font-JakartaSans font-semibold leading-[26px] uppercase mb-[5px] ">
                      {hongoScrollDownRow.subHeading}
                    </h6>
                    <h3 className=" text-[50px] text-[#141416]  font-JakartaSans font-bold tracking-[-2px] leading-[55px] mb-5 desktop:text-[45px] desktop:leading-[50px] tablet:text-[40px] tablet:leading-[45px] lg:mb-3 md:text-[36px] md:leading-[40px] xs:text-[32px] xs:leading-[36px] ">
                      {hongoScrollDownRow.heading} <br />
                      <span class=" bg-clip-text text-transparent bg-hongoH1Gradient ">
                        {hongoScrollDownRow.headingSpan}
                      </span>
                    </h3>
                    <p className=" text-[18px] leading-[30px] text-[#7F7F8A] font-figtree font-normal lg:text-[16px] ">
                      {hongoScrollDownRow.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
