import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Style from "../../styles/asliOne.module.scss";

const scrollCardData = [
  {
    id: 1,
    imageUrl: "/asli/scrollWrap_img1.jpeg",
    // imageId: "scrollToElement",
    cardcounting: "01",
    cardTitle: "Emptiness",
  },
  {
    id: 2,
    imageUrl: "/asli/scrollWrap_img2.webp",
    cardcounting: "02",
    cardTitle: "Good Vibes Only",
  },
  {
    id: 3,
    imageUrl: "/asli/scrollWrap_img3.webp",
    cardcounting: "03",
    cardTitle: "Working Remotely",
  },
  {
    id: 4,
    imageUrl: "/asli/scrollWrap_img4.webp",
    cardcounting: "04",
    cardTitle: "Neon Lights",
  },
  {
    id: 5,
    imageUrl: "/asli/scrollWrap_img5.webp",
    cardcounting: "05",
    cardTitle: "Island Adventure",
  },
  {
    id: 6,
    imageUrl: "/asli/scrollWrap_img6.webp",
    cardcounting: "06",
    cardTitle: "Another World",
  },
  {
    id: 7,
    imageUrl: "/asli/scrollWrap_img7.webp",
    cardcounting: "07",
    cardTitle: "Heart of Fire",
  },
  {
    id: 8,
    imageUrl: "/asli/scrollWrap_img8.jpeg",
    cardcounting: "08",
    cardTitle: "Cozy House",
  },
  {
    id: 9,
    imageUrl: "/asli/scrollWrap_img9.webp",
    cardcounting: "09",
    cardTitle: "Sensations",
  },
  {
    id: 10,
    imageUrl: "/asli/scrollWrap_img10.webp",
    cardcounting: "10",
    cardTitle: "Knight Riders",
  },
  {
    id: 11,
    imageUrl: "/asli/scrollWrap_img11.jpeg",
    cardcounting: "11",
    cardTitle: "Bird’s Eye",
  },
  {
    id: 12,
    imageUrl: "/asli/scrollWrap_img12.jpeg",
    cardcounting: "12",
    cardTitle: "Bouqet",
  },
  {
    id: 13,
    imageUrl: "/asli/scrollWrap_img13.webp",
    cardcounting: "13",
    cardTitle: "Handmade Shop",
  },
];

export default function AnimatScrollSlider({ curvedSvgText, setIsHovered }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-382vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.8,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  const textWrapperRef = useRef(null);
  const [textWrapperWidth, setTextWrapperWidth] = useState("auto");
  const handleCurvedSvgTextClick = () => {
    console.log("Curved text clicked");
    textWrapperRef.current.style.minWidth = "0";
    textWrapperRef.current.style.overflow = "hidden";
    textWrapperRef.current.style.padding = "0";
  };
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
      } else {
        textWrapperRef.current.style.minWidth = "50%";
        textWrapperRef.current.style.overflow = "visible";
        textWrapperRef.current.style.padding = "100px";
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className={`animat_scroll_section relative w-full overflow-hidden pt-[150px] z-[20]`}
      >
        <div ref={triggerRef} className=" relative w-full z-10">
          <div
            ref={sectionRef}
            className="animat_scroll_section_inner relative w-full flex flex-row  "
          >
            <div
              ref={textWrapperRef}
              className={`text_wrapper min-w-[50%] flex flex-wrap items-center p-[100px]  z-[11] transition-all duration-500 ease-in-out `}
            >
              <h2
                className={` text-[#fdf9cf] text-[132px] font-nanumMyeongjo tracking-[-2px] leading-[1.2] w-full `}
              >
                Projects Details
              </h2>
              <div
                className={` ${Style.curvedSvgText} curvedSvgText relative w-fit mt-10 flex justify-center rounded-[50%] cursor-pointer `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleCurvedSvgTextClick}
              >
                <svg
                  id="curved1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="130"
                  height="130"
                  viewBox="-65 -65 130 130"
                  className={` ${Style.curvedSvg} `}
                >
                  <defs>
                    <path id="text-arc" d="M 0, 53 A 53 53 0 1 1 1,53" />
                  </defs>

                  <text fontSize="14" className=" uppercase tracking-[2.5px] ">
                    <textPath href="#text-arc">
                      <tspan dx="5">Scroll Down</tspan>{" "}
                      <tspan dx="5"> → </tspan>
                      <tspan dx="5">Scroll Down</tspan>
                      <tspan dx="5"> → </tspan>
                    </textPath>
                  </text>
                </svg>
                <div
                  className={`${Style.rotateSvg} absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon
                      transform="translate(10.000000, 9.160254) rotate(-330.000000) translate(-10.000000, -9.160254) "
                      points="9 -0.839745962 11 -0.839745962 11 19.160254 9 19.160254"
                    ></polygon>
                    <polygon
                      transform="translate(10.000000, 9.160254) rotate(-30.000000) translate(-10.000000, -9.160254) "
                      points="9 -0.839745962 11 -0.839745962 11 19.160254 9 19.160254"
                    ></polygon>
                    <polygon
                      transform="translate(10.000000, 9.160254) rotate(-90.000000) translate(-10.000000, -9.160254) "
                      points="9 -0.839745962 11 -0.839745962 11 19.160254 9 19.160254"
                    ></polygon>
                  </svg>{" "}
                </div>
              </div>
            </div>
            {scrollCardData.map((scrollCard) => (
              <div
                className="scroll_image_card group relative  min-w-[682px] h-[100vh] flex items-end overflow-hidden z-[1] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#06070780] before:opacity-[1] before:transition-opacity before:duration-300 before:ease-in-out before:z-[1] hover:before:opacity-0  "
                key={scrollCard.id}
                id={scrollCard.imageId}
              >
                <Link href="/" className={`${Style.redirect_link}`}>
                  .
                </Link>
                <div className="img_wrap  absolute top-0 left-0 w-full h-full  z-[-1] transition-all duration-300 ease-in-out group-hover:transform group-hover:scale-[1.03] ">
                  <Image
                    src={scrollCard.imageUrl}
                    width={800}
                    height={900}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
                <div className="hover_circle absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[86px] h-[86px] flex justify-center items-center transition-all duration-300 ease-in-out border-[#ffffff33] border-solid border-[1px] rounded-[50%] z-[3] group-hover:w-[174px] group-hover:h-[174px] group-hover:bg-[#fdf9cf] ">
                  <span className=" text-white text-[14px] font-nunitoSans font-bold transition duration-300 ease-in-out block  group-hover:hidden ">
                    {scrollCard.cardcounting}
                  </span>
                  <span className="  text-black text-[16px] font-nunitoSans font-bold transition duration-300 ease-in-out hidden group-hover:block ">
                    Explore Project
                  </span>
                </div>
                <div className="image_card_content relative w-full py-14 px-8 text-center transition duration-300 ease-in-out opacity-[1] transform translate-y-0 z-[3] group-hover:opacity-0 group-hover:translate-y-[30px] ">
                  <h3
                    className={` text-white text-[80px] font-nanumMyeongjo tracking-[-2px] leading-[1.2] w-full `}
                  >
                    {scrollCard.cardTitle}
                  </h3>
                  <ul className=" relative list-none flex flex-wrap justify-center mt-2 ">
                    <li className=" text-[#fdf9cf] text-[14px] font-nunitoSans font-bold uppercase ">
                      Experimental
                    </li>
                    <li
                      className={` text-[#fdf9cf] text-[14px] font-nunitoSans font-bold uppercase ${Style.scroll_imageCard_list} `}
                    >
                      Portraits
                    </li>
                    <li
                      className={` text-[#fdf9cf] text-[14px] font-nunitoSans font-bold uppercase ${Style.scroll_imageCard_list} `}
                    >
                      2024
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
