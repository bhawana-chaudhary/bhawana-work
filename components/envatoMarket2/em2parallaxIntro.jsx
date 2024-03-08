import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import EmStyle from "/styles/envato-market2.module.scss";

export default function Em2parallaxIntro() {
  const progressRef1 = useRef(null);
  const progressRef2 = useRef(null);
  const progressRef3 = useRef(null);

  useEffect(() => {
    const updateProgressBar = (progressRef) => {
      const progressBar = progressRef.current;
      const radius = progressBar.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;

      progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
      progressBar.style.strokeDashoffset = `${circumference}`;

      const progressValue = 40;
      const offset = circumference - (progressValue / 100) * circumference;

      progressBar.style.strokeDashoffset = offset;
    };

    updateProgressBar(progressRef1);
    updateProgressBar(progressRef2);
    updateProgressBar(progressRef3);
  }, [progressRef1, progressRef2, progressRef3]);
  return (
    <>
      <section
        className={`${EmStyle.parallaxIntro} ${EmStyle.banner_overlay} relative w-full  py-28 bg-white z-[1] lg:pt-16 `}
      >
        <div className={` ${EmStyle.top_image} bg-transparent `}>
          <div className={`${EmStyle.clip_image} bg-white `}></div>
          <div
            className={`${EmStyle.clip_image} ${EmStyle.clip_image2} bg-white `}
          ></div>
        </div>
        <div className={`${EmStyle.bottom_image} bg-transparent `}>
          <div className={`${EmStyle.clip_image} bg-white `}></div>
          <div
            className={`${EmStyle.clip_image} ${EmStyle.clip_image2} bg-white `}
          ></div>
        </div>
        <div className={`${EmStyle.para_bg_image}`}></div>
        <div className={` ${EmStyle.container} `}>
          <div className="parallax_content relative flex flex-wrap items-center z-10 ">
            <div className="intro relative w-full max-w-[465px] pt-20 xl:max-w-full xl:w-[calc(100%-545px)] xl:pt-16 lg:!w-full lg:text-center lg:!pt-10  ">
              <span className=" absolute top-0 text-[128px] left-0 uppercase font-extrabold font-mulish text-[#ffffff3b] leading-[1] xl:text-[100px] lg:!text-[60px] lg:left-[calc(50%-86px)] ">
                GOAL
              </span>
              <h2 className=" relative text-[48px] text-white font-extrabold font-mulish leading-[1.03] mb-5 md:mb-4 lg:text-[40px] md:!text-[35px] ">
                Quality Comes First
              </h2>
              <p className=" text-[16px] text-white mb-6 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <Link href="/" className={`${EmStyle.orange_button}`}>
                <span>Learn More</span>
              </Link>
            </div>
            <div className="counter_wrap w-[calc(100%-465px)] pl-10 xl:w-full xl:max-w-[545px] lg:pl-0 lg:mt-5 lg:!max-w-full ">
              <div className="wrap relative w-mainRowWith20px ml-[-10px] flex flex-wrap sm:block  sm:w-full sm:ml-0 ">
                <div className="counter relative w-threeCardWith20px mx-[10px] text-center sm:mx-auto sm:w-full sm:mb-5 ">
                  <div
                    id="progress_bar_container"
                    className={`${EmStyle.progressContainer} mx-auto `}
                  >
                    <svg height="100%" width="100%" viewBox="0 0 100 100">
                      <circle
                        ref={progressRef1}
                        className={`${EmStyle.progressBar}`}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#e85d04"
                        strokeWidth="4"
                      />
                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dy="0.3em"
                        className={`${EmStyle.progressText}`}
                      >
                        40%
                      </text>
                    </svg>
                  </div>
                  <div className="text relative mt-4 sm:mt-3 ">
                    <h3 className=" text-[24px] text-white font-extrabold font-mulish leading-[1.03] lg:text-[21px] md:!text-[18px] ">
                      Build Quality
                    </h3>
                  </div>
                </div>
                <div className="counter relative w-threeCardWith20px mx-[10px] text-center sm:mx-auto sm:w-full sm:mb-5 ">
                  <div
                    id="progress_bar_container"
                    className={`${EmStyle.progressContainer} mx-auto `}
                  >
                    <svg height="100%" width="100%" viewBox="0 0 100 100">
                      <circle
                        ref={progressRef2}
                        className={`${EmStyle.progressBar}`}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#e85d04"
                        strokeWidth="4"
                      />
                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dy="0.3em"
                        className={`${EmStyle.progressText}`}
                      >
                        40%
                      </text>
                    </svg>
                  </div>
                  <div className="text relative mt-4 sm:mt-3 ">
                    <h3 className=" text-[24px] text-white font-extrabold font-mulish leading-[1.03] lg:text-[21px] md:!text-[18px] ">
                      Technology
                    </h3>
                  </div>
                </div>
                <div className="counter relative w-threeCardWith20px mx-[10px] text-center sm:mx-auto sm:w-full ">
                  <div
                    id="progress_bar_container"
                    className={`${EmStyle.progressContainer} mx-auto `}
                  >
                    <svg height="100%" width="100%" viewBox="0 0 100 100">
                      <circle
                        ref={progressRef3}
                        className={`${EmStyle.progressBar}`}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#e85d04"
                        strokeWidth="4"
                      />
                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dy="0.3em"
                        className={`${EmStyle.progressText}`}
                      >
                        40%
                      </text>
                    </svg>
                  </div>
                  <div className="text relative mt-4 sm:mt-3 ">
                    <h3 className=" text-[24px] text-white font-extrabold font-mulish leading-[1.03] lg:text-[21px] md:!text-[18px] ">
                      Sustainability
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
