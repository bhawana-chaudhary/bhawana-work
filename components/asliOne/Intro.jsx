import React, { useEffect } from "react";
import Style from "../../styles/asliOne.module.scss";

export default function Intro() {
  // const section = document.querySelector(".intro");

  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       const animation = document.querySelector("ellipse");
  //       animation.classList.add("slide-animation");
  //       observer.disconnect();
  //     }
  //   });
  // });

  // observer.observe(section);

  useEffect(() => {
    const section = document.querySelector(".intro");

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animation = document.querySelector("ellipse");
            if (animation) animation.classList.add(Style["slide-animation"]);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <section
        className=" intro relative w-full pt-[150px] px-[100px] bg-[#777777] "
        id="asliIntro"
      >
        <div className="intro_content relative w-full max-w-[1320px] mx-auto text-center ">
          <h2
            className={` text-white text-[80px] font-thin font-nanumMyeongjo tracking-[-2px] leading-[1.1] `}
          >
            A unique{" "}
            <span className={` ${Style.animat_svg} text-[#fdf9cf] relative `}>
              AJAX & WebGL{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="100%"
                height="100%"
              >
                <ellipse
                  cx="50%"
                  cy="50%"
                  rx="48%"
                  ry="48%"
                  fill="none"
                  style={{}}
                ></ellipse>
              </svg>
            </span>{" "}
            driven WordPress theme suitable for creative minds – designers,
            photographers, creative agencies and production studios.
          </h2>
        </div>
      </section>
    </>
  );
}
