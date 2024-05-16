import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Style from "../../styles/asliOne.module.scss";

const scrollCardData = [
  {
    id: 1,
    imageUrl: "/asli/horizontal-scroll1-img1.webp",
  },
  {
    id: 2,
    imageUrl: "/asli/horizontal-scroll1-img2.webp",
  },
  {
    id: 3,
    imageUrl: "/asli/horizontal-scroll1-img3.webp",
  },
];

const scrollCard2Data = [
  {
    id: 1,
    imageUrl: "/asli/horizontal-scroll2-img1.webp",
  },
  {
    id: 2,
    imageUrl: "/asli/horizontal-scroll2-img2.webp",
  },
  {
    id: 3,
    imageUrl: "/asli/horizontal-scroll2-img3.webp",
  },
];

export default function AnimatScrollSlider3() {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  const section2Ref = useRef(null);
  const [isFullScroll, setIsFullScroll] = useState(false);

  const slider2Ref = useRef(null);
  const circleSvg2Ref = useRef(null);
  const circleSvgOuterRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animationSection = sectionRef.current;
    const animationSection2 = section2Ref.current;
    const circleSvg2 = circleSvg2Ref.current;
    const circleSvgOuter = circleSvgOuterRef.current;

    gsap.to(
      animationSection,
      ({
        translateX: 0,
      },
      {
        translateX: "-1700px",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.8,
          pin: true,
          // onUpdate: (self) => {
          //   const progress = 1 - self.progress; // Reverse the progress
          //   const offset = 1270 * progress; // Calculate stroke dash offset based on scroll progress
          //   circleSvg2.style.strokeDashoffset = offset;
          // },
          onUpdate: (self) => {
            const scrollDistance = self.start - window.scrollY;
            const progress = 1 - scrollDistance / (self.start - self.end);
            const offset = 520 * progress;
            circleSvg2.style.strokeDashoffset = offset;
            // if (offset === 0) {
            //   slider2Ref.current.classList.remove(Style["isFullScroll"]);
            // }
            const rotation = -180 * progress;
            circleSvgOuter.style.transform = `rotate(${rotation}deg)`;
          },
        },
      })
    );

    gsap.to(animationSection2, {
      translateX: 0,
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "2000 top",
        scrub: 0.8,
        animation: gsap.fromTo(
          animationSection2,
          { translateX: "-1700px" },
          { translateX: 0 }
        ),
      },
    });

    const handleScroll = () => {
      const animationSectionHeight = animationSection.offsetHeight;
      const animationSection2Height = animationSection2.offsetHeight;
      const scrollY = window.scrollY;
      const isAnimationSectionFullyScrolled = scrollY >= animationSectionHeight;
      const isAnimationSection2FullyScrolled =
        scrollY >= animationSection2Height;

      setIsFullScroll(
        isAnimationSectionFullyScrolled && isAnimationSection2FullyScrolled
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // -----------intro---

  return (
    <>
      <section
        className={`animat_scroll_section relative w-full bg-[#777777] overflow-hidden flex flex-wrap z-[10]`}
      >
        <div className="scroll_wrap relative overflow-hidden ">
          <div
            ref={triggerRef}
            className=" relative w-full overflow-hidden flex flex-wrap items-end  z-10"
          >
            <div
              className={`text_wrapper w-[42%]  p-[100px]  z-[11] transition-all duration-500 ease-in-out `}
            >
              <h6
                className={` text-[#fdf9cf] text-[22px] font-nunitoSans font-normal mb-3 `}
              >
                ( 13 templates in different styles )
              </h6>
              <h2
                className={` text-white text-[78px] font-nanumMyeongjo font-light tracking-[-2px] leading-[1.2] w-full mb-8 `}
              >
                Inner & Blog Pages
              </h2>
              <div
                className={` relative w-full max-w-[168px] h-full max-h-[168px] `}
              >
                <svg
                  height="168"
                  width="168"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    r="82"
                    cx="84"
                    cy="84"
                    stroke="#FFFFFF33"
                    strokeWidth="2"
                    fill="transparent"
                  />
                </svg>
                <span className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full px-2 text-center text-white text-[15px] font-nunitoSans ">
                  Explore Pages
                </span>
                <svg
                  ref={circleSvgOuterRef}
                  height="168"
                  width="168"
                  xmlns="http://www.w3.org/2001/svg"
                  className={` ${Style.circleSvg} circleSvg absolute  top-0 left-0  `}
                >
                  <circle
                    ref={circleSvg2Ref}
                    r="82"
                    cx="84"
                    cy="84"
                    stroke="#fdf9cf"
                    strokeWidth="2.2"
                    fill="none"
                    strokeDasharray={520}
                    strokeDashoffset={520}
                  />
                </svg>
              </div>
            </div>
            <div className=" relative w-[58%] overflow-hidden ">
              <div
                ref={sectionRef}
                className="animat_scroll_section_inner  mb-6 relative w-full flex flex-row "
              >
                {scrollCardData.map((scrollCard) => (
                  <div
                    className="scroll_image_card relative w-auto min-w-fit  h-[50vh] mr-6 flex items-end overflow-hidden z-[1] "
                    key={scrollCard.id}
                  >
                    <div className="img_wrap w-full h-full  z-[-1] ">
                      <Image
                        src={scrollCard.imageUrl}
                        width={800}
                        height={900}
                        alt="img"
                        className=" w-full h-full object-cover "
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div
                ref={section2Ref}
                className="animat_scroll_section_inner relative  w-full flex flex-row  "
              >
                {scrollCard2Data.map((scrollCard2) => (
                  <div
                    className="scroll_image_card relative w-auto min-w-fit  h-[50vh] mr-6 flex items-end overflow-hidden z-[1] "
                    key={scrollCard2.id}
                  >
                    <div className="img_wrap w-full h-full  z-[-1] ">
                      <Image
                        src={scrollCard2.imageUrl}
                        width={800}
                        height={900}
                        alt="img"
                        className=" w-full h-full object-cover "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
