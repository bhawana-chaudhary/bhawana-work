import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";

const hongoScrollCardContent = [
  {
    id: 1,
    imageUrl: "/hongo/hongo-shopify-product-1.jpeg",
  },
  {
    id: 2,
    imageUrl: "/hongo/hongo-shopify-product-2.jpeg",
  },
  {
    id: 3,
    imageUrl: "/hongo/hongo-shopify-product-3.jpeg",
  },
  {
    id: 4,
    imageUrl: "/hongo/hongo-shopify-product-4.jpeg",
  },
  {
    id: 5,
    imageUrl: "/hongo/hongo-shopify-product-5.jpeg",
  },
  {
    id: 6,
    imageUrl: "/hongo/hongo-shopify-product-6.jpeg",
  },
  {
    id: 7,
    imageUrl: "/hongo/hongo-shopify-product-7.jpeg",
  },
];

export default function HongoScrollWrapper() {
  // const scrollRef = useRef(null);
  // const sectionRef = useRef(null);
  // const [isEndOfScroll, setIsEndOfScroll] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollTop } = document.documentElement || document.body;
  //     const { scrollHeight, clientHeight } =
  //       document.documentElement || document.body;
  //     const maxScrollTop = scrollHeight - clientHeight;
  //     const scrollFraction = scrollTop / maxScrollTop;
  //     const maxScrollLeft =
  //       scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
  //     const targetScrollLeft = scrollFraction * maxScrollLeft;
  //     scrollRef.current.scrollLeft = targetScrollLeft;

  //     setIsEndOfScroll(targetScrollLeft >= maxScrollLeft);
  //   };

  //   handleScroll();

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
        translateX: "-247.5vw",
        // translateX: "-198.5vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <>
      {/* <section
        ref={sectionRef}
        className={`hongo_scroll_wrap ${HongoStyle.lineOverlay} !sticky top-0 w-full bg-white py-[135px] h-[100vh] flex flex-wrap items-center z-[49]`}
      >
        <div className="text_wrapper absolute top-0 h-[100%] pr-[370px] flex items-center justify-center bg-hongoScrollWrapGradient z-[11] ">
          <h2
            className=" text-[45px] leading-[50px] tracking-[-2px] font-semibold font-JakartaSans text-[#141416] transform rotate-180 mx-[40px] "
            style={{ writingMode: "tb-rl" }}
          >
            Elegant product page styles.
          </h2>
        </div>
        <div className={` relative w-full  z-10`}>
          <div
            ref={scrollRef}
            className="scroll_wrapper relative w-full flex overflow-x-hidden scroll-behavior-smooth pl-[250px] z-10 "
            style={{ overflowY: "hidden" }}
          >
            {hongoScrollCardContent.map((scrollCard) => (
              <div
                className="img_wrap relative w-auto min-w-fit h-[745px] rounded-[10px] overflow-hidden mr-[35px] "
                key={scrollCard.id}
              >
                <Image
                  src={scrollCard.imageUrl}
                  width={800}
                  height={900}
                  alt="img"
                  className=" w-full h-full object-cover "
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section
        className={`scroll_section_outer ${HongoStyle.lineOverlay} relative w-full overflow-hidden bg-white z-[49]`}
      >
        <div ref={triggerRef} className=" relative w-full py-[135px] z-10">
          <div className="text_wrapper absolute top-0 h-[100%] pr-[370px] flex items-center justify-center bg-hongoScrollWrapGradient z-[11] ">
            <h2
              className=" text-[45px] leading-[50px] tracking-[-2px] font-semibold font-JakartaSans text-[#141416] transform rotate-180 mx-[40px] "
              style={{ writingMode: "tb-rl" }}
            >
              Elegant product page styles.
            </h2>
          </div>
          <div
            ref={sectionRef}
            className="scroll_section_inner relative w-full flex flex-row pl-[250px]  "
          >
            {hongoScrollCardContent.map((scrollCard) => (
              <div
                className="img_wrap relative w-auto min-w-fit h-[745px] rounded-[10px] overflow-hidden mr-[35px] "
                key={scrollCard.id}
              >
                <Image
                  src={scrollCard.imageUrl}
                  width={800}
                  height={900}
                  alt="img"
                  className=" w-full h-full object-cover "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
