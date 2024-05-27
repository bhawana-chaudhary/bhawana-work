import React, { useEffect } from "react";
import Style from "../../styles/asliOne.module.scss";

export default function Intro({
  className,
  subtitle,
  mainTitle1,
  mainTitleSpan,
  mainTitle2,
  rxValue,
  ryValue,
}) {
  // useEffect(() => {
  //   const section = document.querySelector(".intro");

  //   if (!section) return;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const animation = document.querySelector("ellipse");
  //           if (animation) animation.classList.add(Style["slide-animation"]);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   observer.observe(section);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".intro");

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animation = entry.target.querySelector("ellipse");
            if (animation) animation.classList.add(Style["slide-animation"]);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <section
        className={`intro relative w-full  bg-[#777777] ${className}  px-[50px] md:px-5 `}
        id="asliIntro"
      >
        <div className="intro_content relative w-full max-w-[1320px] mx-auto text-center ">
          <h6
            className={` text-[#fdf9cf] text-[22px] font-nunitoSans font-normal mb-3 desktop:text-[20px] tablet:text-[18px] md:text-[16px] `}
          >
            {subtitle}
          </h6>
          <h2
            className={` text-white text-[80px] font-thin font-nanumMyeongjo tracking-[-2px] leading-[1.1]  desktop:text-[65px] tablet:text-[50px] phablet:text-[42px] sm:text-[32px] `}
          >
            {mainTitle1}
            <span
              className={` ${Style.introAnimat_svg} text-[#fdf9cf] relative inline-block `}
            >
              {mainTitleSpan}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="100%"
                height="100%"
              >
                <ellipse
                  cx="50%"
                  cy="50%"
                  rx={rxValue}
                  ry={ryValue}
                  fill="none"
                  style={{}}
                ></ellipse>
              </svg>
            </span>
            {mainTitle2}
          </h2>
        </div>
      </section>
    </>
  );
}
