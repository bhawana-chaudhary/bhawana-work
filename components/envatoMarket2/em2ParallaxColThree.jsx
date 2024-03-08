import React from "react";
import Image from "next/image";
import Link from "next/link";
import EmStyle from "/styles/envato-market2.module.scss";

export default function Em2ParallaxColThree() {
  return (
    <>
      <section
        className={`${EmStyle.parallaxColThree} ${EmStyle.banner_overlay} relative w-full py-24 bg-white z-[1] md:py-16 `}
      >
        <div className={` ${EmStyle.top_image} bg-transparent `}>
          <div className={`${EmStyle.clip_image} bg-white `}></div>
          <div
            className={`${EmStyle.clip_image} ${EmStyle.clip_image2} bg-white `}
          ></div>
        </div>
        <div className={`${EmStyle.bottom_image} bg-transparent `}>
          <div className={`${EmStyle.clip_image} bg-[#e5e5e5] `}></div>
          <div
            className={`${EmStyle.clip_image} ${EmStyle.clip_image2} bg-[#e5e5e5] `}
          ></div>
        </div>
        <div className={`${EmStyle.para_bg_image}`}></div>
        <div className={`${EmStyle.container}`}>
          <div className="paraColThree_content relative z-10 ">
            <div className="intro relative w-full max-w-[740px] mx-auto text-center pt-20 xl:pt-16  lg:!pt-10  ">
              <span className=" absolute top-0 text-[128px]  left-1/2 transform -translate-x-1/2 uppercase font-extrabold font-mulish text-[#ffffff3b] leading-[1] xl:text-[100px] lg:!text-[60px] ">
                SERVICES
              </span>
              <h2 className=" relative text-[48px] text-white font-extrabold font-mulish leading-[1.03] lg:text-[40px] md:!text-[35px] ">
                Providing Unmatchable Facilities & Services
              </h2>
            </div>
            <div className="col_three_wrap relative w-mainRowWith20px flex flex-wrap ml-[-10px] mt-14 pb-8 lg:pb-0 lg:mt-8 md:w-full md:ml-0 ">
              <div className="col_three relative w-threeCardWith20px mx-[10px] bg-[#e5e5e5] rounded-[30px] p-[30px] pb-12 lg:w-halfWidthWith20px lg:mb-10 md:!w-full md:max-w-[400px] md:mx-auto  ">
                <span className=" absolute top-[5px] right-[10px] text-[76px] uppercase font-extrabold font-mulish text-[#001d3d1c] leading-[1] ">
                  01.
                </span>
                <div className="icon_wrap w-full max-w-[62px] h-[62px] mb-3 ">
                  <Image
                    src="/envato-market2/puzzle.png"
                    width={200}
                    height={200}
                    alt="icon"
                    className="  "
                  />
                </div>
                <h4 className=" relative text-[24px] text-[#001d3d] font-extrabold font-mulish mb-3 ">
                  Industrial Chemicals
                </h4>
                <p className=" text-[16px] text-[#7a7a7a] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
                </p>
                <div className="linkIcon absolute bottom-[-32px] right-[40px] w-[66px] h-[66px] rounded-[50%] z-10 hover:scale-[1.1]  transition duration-300 ease-in-out before:content-[''] before:absolute before:top-[5px] before:left-[5px] before:w-[56px] before:h-[56px] before:bg-[#e85e06] before:rounded-[50%] before:z-[-1] ">
                  <Link href="/" className={`${EmStyle.redirect_link}`}>
                    .
                  </Link>
                  <Image
                    src="/envato-market2/icon-right-arrow-bgwhite.png"
                    width={60}
                    height={60}
                    alt="img"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </div>
              <div className="col_three relative w-threeCardWith20px mx-[10px] bg-[#e85e06] rounded-[30px] p-[30px] pb-12 lg:w-halfWidthWith20px lg:mb-10 md:!w-full md:max-w-[400px] md:mx-auto  ">
                <span className=" absolute top-[5px] right-[10px] text-[76px] uppercase font-extrabold font-mulish text-[#001d3d1c] leading-[1] ">
                  02.
                </span>
                <div className="icon_wrap w-full max-w-[62px] h-[62px] mb-3 ">
                  <Image
                    src="/envato-market2/mechanism.png"
                    width={200}
                    height={200}
                    alt="icon"
                    className="  "
                  />
                </div>
                <h4 className=" relative text-[24px] text-white font-extrabold font-mulish mb-3 ">
                  Renewable Energy
                </h4>
                <p className=" text-[16px] text-white ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
                </p>
                <div className="linkIcon absolute bottom-[-32px] right-[40px] w-[66px] h-[66px] rounded-[50%] z-10 hover:scale-[1.1]  transition duration-300 ease-in-out before:content-[''] before:absolute before:top-[5px] before:left-[5px] before:w-[56px] before:h-[56px] before:bg-[#e85e06] before:rounded-[50%] before:z-[-1] ">
                  <Link href="/" className={`${EmStyle.redirect_link}`}>
                    .
                  </Link>
                  <Image
                    src="/envato-market2/icon-right-arrow-bgwhite.png"
                    width={60}
                    height={60}
                    alt="img"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </div>
              <div className="col_three relative w-threeCardWith20px mx-[10px] bg-[#e5e5e5] rounded-[30px] p-[30px] pb-12 lg:w-halfWidthWith20px lg:mb-10 md:!w-full md:max-w-[400px] md:mx-auto  ">
                <span className=" absolute top-[5px] right-[10px] text-[76px] uppercase font-extrabold font-mulish text-[#001d3d1c] leading-[1] ">
                  03.
                </span>
                <div className="icon_wrap w-full max-w-[62px] h-[62px] mb-3 ">
                  <Image
                    src="/envato-market2/chemical.png"
                    width={200}
                    height={200}
                    alt="icon"
                    className="  "
                  />
                </div>
                <h4 className=" relative text-[24px] text-[#001d3d] font-extrabold font-mulish mb-3 ">
                  Petroleum & Gas
                </h4>
                <p className=" text-[16px] text-[#7a7a7a] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
                </p>
                <div className="linkIcon absolute bottom-[-32px] right-[40px] w-[66px] h-[66px] rounded-[50%] z-10 hover:scale-[1.1]  transition duration-300 ease-in-out before:content-[''] before:absolute before:top-[5px] before:left-[5px] before:w-[56px] before:h-[56px] before:bg-[#e85e06] before:rounded-[50%] before:z-[-1] ">
                  <Link href="/" className={`${EmStyle.redirect_link}`}>
                    .
                  </Link>
                  <Image
                    src="/envato-market2/icon-right-arrow-bgwhite.png"
                    width={60}
                    height={60}
                    alt="img"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
