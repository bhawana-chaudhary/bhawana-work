import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Style from "../../styles/asliOne.module.scss";

const animationImagedata = [
  {
    id: 1,
    imgURL: "/asli/banner_img3_1.webp",
  },
  {
    id: 2,
    imgURL: "/asli/banner_img3_2.webp",
  },
  {
    id: 3,
    imgURL: "/asli/banner_img3_3.webp",
  },
  {
    id: 4,
    imgURL: "/asli/banner_img3_4.webp",
  },
  {
    id: 5,
    imgURL: "/asli/banner_img3_5.webp",
  },
  {
    id: 6,
    imgURL: "/asli/banner_img3_6.webp",
  },
];

const animationImage2data = [
  {
    id: 1,
    imgURL: "/asli/banner_img4_1.webp",
  },
  {
    id: 2,
    imgURL: "/asli/banner_img4_2.webp",
  },
  {
    id: 3,
    imgURL: "/asli/banner_img4_3.webp",
  },
  {
    id: 4,
    imgURL: "/asli/banner_img4_4.webp",
  },
  {
    id: 5,
    imgURL: "/asli/banner_img4_5.webp",
  },
  {
    id: 6,
    imgURL: "/asli/banner_img4_6.webp",
  },
];

export default function AnimatScrollSlider2() {
  const bgImageWrapRef = useRef(null);
  const animationWrapRef = useRef(null);
  const animationWrap2Ref = useRef(null);

  const sliderRef = useRef(null);
  const [isFullScroll, setIsFullScroll] = useState(false);
  const circleRef = useRef(null);
  const [circleStroke, setCircleStroke] = useState(0);
  const circleSvgRef = useRef(null);
  const circleSvgOuter2Ref = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const animationWrap = animationWrapRef.current;
  //   const animationWrap2 = animationWrap2Ref.current;

  //   gsap.to(animationWrap, {
  //     // y: -2100,
  //     y: -2900,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: bgImageWrapRef.current,
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: 1,
  //       // animation: gsap.fromTo(animationWrap2, { y: 0 }, { y: -2100 }),
  //       animation: gsap.fromTo(animationWrap2, { y: 0 }, { y: -2900 }),
  //     },
  //     // onComplete: () => {
  //     //   sliderRef.current.style.position = "relative";
  //     //   sliderRef.current.style.top = "auto";
  //     //   sliderRef.current.style.left = "auto";
  //     //   sliderRef.current.style.zIndex = "auto";
  //     // },
  //   });

  //   gsap.to(animationWrap2, {
  //     y: 0,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: bgImageWrapRef.current,
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: 1,
  //       // animation: gsap.fromTo(animationWrap2, { y: -2100 }, { y: 0 }),
  //       animation: gsap.fromTo(animationWrap2, { y: -2900 }, { y: 0 }),
  //     },
  //   });

  //   const handleScroll = () => {
  //     const animationWrapHeight = animationWrap.offsetHeight;
  //     const animationWrap2Height = animationWrap2.offsetHeight;
  //     const scrollY = window.scrollY;
  //     const isAnimationWrapFullyScrolled = scrollY >= animationWrapHeight;
  //     const isAnimationWrap2FullyScrolled = scrollY >= animationWrap2Height;

  //     setIsFullScroll(
  //       isAnimationWrapFullyScrolled && isAnimationWrap2FullyScrolled
  //     );

  //     if (isAnimationWrapFullyScrolled && isAnimationWrap2FullyScrolled) {
  //       // sliderRef.current.classList.remove(Style["isFullScroll"]);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup function
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const matchMedia = gsap.matchMedia();

    matchMedia.add("(min-width: 992px)", () => {
      gsap.registerPlugin(ScrollTrigger);

      const animationWrap = animationWrapRef.current;
      const animationWrap2 = animationWrap2Ref.current;
      const circleSvg = circleSvgRef.current;
      const circleSvgOuter2 = circleSvgOuter2Ref.current;

      gsap.to(animationWrap, {
        y: -2900,
        ease: "none",
        scrollTrigger: {
          trigger: bgImageWrapRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          animation: gsap.fromTo(animationWrap2, { y: 0 }, { y: -2900 }),
          onUpdate: (self) => {
            const scrollDistance = self.start - window.scrollY;
            const progress = 1 - scrollDistance / (self.start - self.end);
            const offset = 520 * progress;
            circleSvg.style.strokeDashoffset = offset;

            const rotation = -180 * progress;
            circleSvgOuter2.style.transform = `rotate(${rotation}deg)`;
          },
        },
        onComplete: () => {
          setIsFullScroll(false);
        },
      });
      gsap.to(animationWrap2, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: bgImageWrapRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          // animation: gsap.fromTo(animationWrap2, { y: -2100 }, { y: 0 }),
          animation: gsap.fromTo(animationWrap2, { y: -2900 }, { y: 0 }),
        },
      });
    });

    return () => {
      matchMedia.revert();
    };
  }, []);

  // ---------

  return (
    <>
      <section
        ref={sliderRef}
        className={`${Style.animatscroll_slider2} animatscroll_slider2 relative w-full  bg-[#777777] h-[calc(100vh+1000px)] lg:h-auto desktop:h-[100vh] `}
      >
        <div className="sticky w-full top-0 left-0 h-[100vh] flex flex-wrap items-end overflow-hidden transition-all duration-300 ease-in-out z-10 lg:relative lg:top-auto lg:left-auto lg:h-auto ">
          <div
            ref={bgImageWrapRef}
            className={` ${Style.animation_slider2} bgImage_wrap relative w-[58%]  h-[100vh] flex overflow-hidden z-[1] lg:order-2 lg:w-full lg:h-auto lg:px-4 sm:flex sm:flex-wrap `}
          >
            <div
              ref={animationWrapRef}
              className={`${Style.animation_wrap} animation_wrap w-[50%] pr-2 sm:w-full sm:pr-0 `}
            >
              <div className={`relative w-full `}>
                {animationImagedata.map((imageWrap, index) => (
                  <div
                    className={` image w-full min-h-fit lg:mb-4 `}
                    key={index}
                  >
                    <Image
                      src={imageWrap.imgURL}
                      width={400}
                      height={800}
                      alt="img"
                      loading="lazy"
                      className=" w-full h-full object-cover "
                    />
                  </div>
                ))}
              </div>
              <div className={`relative w-full lg:hidden `}>
                {animationImagedata.map((imageWrap, index) => (
                  <div className={` image w-full min-h-fit `} key={index}>
                    <Image
                      src={imageWrap.imgURL}
                      width={400}
                      height={800}
                      alt="img"
                      loading="lazy"
                      className=" w-full h-full object-cover "
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              ref={animationWrap2Ref}
              className={` ${Style.animation_wrap}  ${Style.animation_wrap2} animation_wrap animation_wrap2 w-[50%] pl-2 sm:w-full sm:pl-0 `}
            >
              <div className={`relative w-full `}>
                {animationImage2data.map((imageWrap2, index) => (
                  <div
                    className={` image w-full min-h-fit lg:mb-4 `}
                    key={index}
                  >
                    <Image
                      src={imageWrap2.imgURL}
                      width={400}
                      height={800}
                      alt="img"
                      loading="lazy"
                      className=" w-full h-full object-cover "
                    />
                  </div>
                ))}
              </div>
              <div className={`relative w-full lg:hidden `}>
                {animationImage2data.map((imageWrap2, index) => (
                  <div className={` image w-full min-h-fit `} key={index}>
                    <Image
                      src={imageWrap2.imgURL}
                      width={400}
                      height={800}
                      alt="img"
                      loading="lazy"
                      className=" w-full h-full object-cover "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`text_wrapper w-[42%]  p-[100px]  z-[11] transition-all duration-500 ease-in-out xl:px-10 lg:order-1 lg:w-full tablet:py-20 phablet:py-16 sm:py-11 `}
          >
            <h6
              className={` text-[#fdf9cf] text-[22px] font-nunitoSans font-normal mb-3 desktop:text-[20px] tablet:text-[18px] md:text-[16px] `}
            >
              ( 13 templates in different styles )
            </h6>
            <h2
              className={` text-white text-[78px] font-nanumMyeongjo font-light tracking-[-2px] leading-[1.2] w-full mb-8  desktop:text-[66px] tablet:text-[56px] phablet:text-[46px] sm:text-[40px] sm:mb-5 `}
            >
              Inner & Blog Pages
            </h2>
            <div
              className={` ${Style.animat_svg2} circleSvgImg relative w-full max-w-[168px] h-full max-h-[168px] md:max-w-[130px] md:max-h-[100%] md:h-[130px] `}
            >
              <svg
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  r="46%"
                  cx="50%"
                  cy="50%"
                  stroke="#FFFFFF33"
                  strokeWidth="2"
                  fill="transparent"
                />
              </svg>
              <span className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full px-2 text-center text-white text-[15px] font-nunitoSans md:text-[13px] ">
                Explore Pages
              </span>
              <svg
                ref={circleSvgOuter2Ref}
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2001/svg"
                className={` ${Style.circleSvg} circleSvg absolute  top-0 left-0 `}
              >
                <circle
                  ref={circleSvgRef}
                  r="46%"
                  cx="50%"
                  cy="50%"
                  stroke="#fdf9cf"
                  strokeWidth="2.2"
                  fill="none"
                  strokeDasharray={520}
                  strokeDashoffset={520}
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
