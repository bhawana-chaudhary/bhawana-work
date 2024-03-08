import React from "react";
import Link from "next/link";
import Image from "next/image";
import EmStyle from "/styles/envato-market2.module.scss";

export default function Em2footer() {
  return (
    <>
      <footer
        className={` em2footer  ${EmStyle.footer_overlay} relative w-full pt-32 pb-20 bg-white z-[1] md:py-14 `}
      >
        <div className={` ${EmStyle.top_image} bg-transparent `}>
          <div className={`${EmStyle.clip_image} bg-white `}></div>
          <div
            className={`${EmStyle.clip_image} ${EmStyle.clip_image2} bg-white `}
          ></div>
        </div>
        <div className={`${EmStyle.footer_bg_image}`}></div>
        <div className={`${EmStyle.container}`}>
          <div className="footer_content relative w-full flex flex-wrap z-10 ">
            <div className="logo_with_text relativem w-full max-w-[368px] xl:max-w-[100%] xl:text-center xl:mb-10 ">
              <div className="logo relative w-full max-w-[276px] h-[64px] mb-5 xl:mx-auto ">
                <Link href="/" className={`${EmStyle.redirect_link}`}>
                  .
                </Link>
                <Image
                  src="/envato-market2/logo-manufec.png"
                  width={300}
                  height={200}
                  alt="logo"
                  className=" w-full h-full object-contain "
                />
              </div>
              <p className=" text-[16px] text-[#dfdfdf] mb-7 font-light ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="icon-wrapper relative flex items-center w-fit xl:mx-auto ">
                <div className="icon_wrap relative w-[38px] h-[38px] flex justify-center items-center bg-[#e85d04] rounded-[10px] hover:bg-[#c95002] transition-colors duration-500 ease-in-out mr-2 ">
                  <Link href="/" className={`${EmStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className="icon max-w-[19px] h-[19px] ">
                    <Image
                      src="/envato-market2/header-icon-one.svg"
                      alt="icon"
                      width={30}
                      height={30}
                      className=" w-full h-full object-contain "
                    />
                  </div>
                </div>
                <div className="icon_wrap relative w-[38px] h-[38px] flex justify-center items-center bg-[#e85d04] rounded-[10px] hover:bg-[#c95002] transition-colors duration-500 ease-in-out mr-2 ">
                  <Link href="/" className={`${EmStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className="icon max-w-[19px] h-[19px] ">
                    <Image
                      src="/envato-market2/header-icon-three.svg"
                      alt="icon"
                      width={30}
                      height={30}
                      className=" w-full h-full object-contain "
                    />
                  </div>
                </div>
                <div className="icon_wrap relative w-[38px] h-[38px] flex justify-center items-center bg-[#e85d04] rounded-[10px] hover:bg-[#c95002] transition-colors duration-500 ease-in-out mr-2 ">
                  <Link href="/" className={`${EmStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className="icon max-w-[19px] h-[19px] ">
                    <Image
                      src="/envato-market2/header-icon-four.svg"
                      alt="icon"
                      width={30}
                      height={30}
                      className=" w-full h-full object-contain "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_menu w-[calc(100%-368px)] pl-14 xl:w-full xl:pl-0 ">
              <div className="icon_with_text relative w-full flex justify-between border-b-[#ffffff1f] border-solid border-b-[1px] pb-5 mb-5 md:block ">
                <div className="col_three relative w-full max-w-[200px] mr-[20px] flex flex-wrap  md:block md:text-center md:mx-auto md:mb-6 ">
                  <div className="icon_wrap relative w-[42px] h-[42px] flex justify-center items-center bg-[#e85d04] rounded-[10px] mr-4  md:mx-auto md:mb-3 ">
                    <div className="icon max-w-[22px] h-[22px] ">
                      <Image
                        src="/envato-market2/icon-telephone-2.png"
                        alt="icon"
                        width={30}
                        height={30}
                        className=" w-full h-full object-contain "
                      />
                    </div>
                  </div>
                  <div className="text">
                    <h4 className=" relative text-[24px] text-white font-extrabold font-mulish leading-[1] mb-1 lg:text-[20px] ">
                      Phone
                    </h4>
                    <p className=" text-[16px] text-[#dfdfdf] font-light ">
                      (+653) 6543 865
                    </p>
                  </div>
                </div>
                <div className="col_three relative w-full max-w-[200px] mr-[20px] flex flex-wrap  md:block md:text-center md:mx-auto md:mb-6 ">
                  <div className="icon_wrap relative w-[42px] h-[42px] flex justify-center items-center bg-[#e85d04] rounded-[10px] mr-4  md:mx-auto md:mb-3 ">
                    <div className="icon max-w-[22px] h-[22px] ">
                      <Image
                        src="/envato-market2/icon-email.png"
                        alt="icon"
                        width={30}
                        height={30}
                        className=" w-full h-full object-contain "
                      />
                    </div>
                  </div>
                  <div className="text">
                    <h4 className=" relative text-[24px] text-white font-extrabold font-mulish leading-[1] mb-1 lg:text-[20px] ">
                      Email
                    </h4>
                    <p className=" text-[16px] text-[#dfdfdf] font-light ">
                      mail@mnfec.co
                    </p>
                  </div>
                </div>
                <div className="col_three relative w-full max-w-[200px] flex flex-wrap  md:block md:text-center md:mx-auto ">
                  <div className="icon_wrap relative w-[42px] h-[42px] flex justify-center items-center bg-[#e85d04] rounded-[10px] mr-4  md:mx-auto md:mb-3 ">
                    <div className="icon max-w-[22px] h-[22px] ">
                      <Image
                        src="/envato-market2/icon-location.png"
                        alt="icon"
                        width={30}
                        height={30}
                        className=" w-full h-full object-contain "
                      />
                    </div>
                  </div>
                  <div className="text">
                    <h4 className=" relative text-[24px] text-white font-extrabold font-mulish leading-[1] mb-1 lg:text-[20px] ">
                      Address
                    </h4>
                    <p className=" text-[16px] text-[#dfdfdf] font-light ">
                      London Eye, UK
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer_menu_withText relative w-mainRowWith20px ml-[-10px] flex flex-wrap md:block md:w-full md:ml-0 ">
                <div className="col_three relative w-threeCardWith20px mx-[10px] md:text-center md:mx-auto md:w-fit md:mb-9 ">
                  <h5 className=" relative text-[20px] text-white font-semibold font-mulish leading-[1] mb-6 lg:text-[18px] md:mb-4 ">
                    Navigation
                  </h5>
                  <ul>
                    <li className=" relative mb-[5px] ">
                      <Link
                        href="/"
                        className=" relative text-[16px] text-[#dfdfdf] font-light hover:text-[#e85d04] transition-colors duration-500 ease-in-out "
                      >
                        Home
                      </Link>
                    </li>
                    <li className=" relative mb-[5px] ">
                      <Link
                        href="/"
                        className=" relative text-[16px] text-[#dfdfdf] font-light hover:text-[#e85d04] transition-colors duration-500 ease-in-out "
                      >
                        Pages
                      </Link>
                    </li>
                    <li className=" relative mb-[5px] ">
                      <Link
                        href="/"
                        className=" relative text-[16px] text-[#dfdfdf] font-light hover:text-[#e85d04] transition-colors duration-500 ease-in-out "
                      >
                        About Us
                      </Link>
                    </li>
                    <li className=" relative mb-[5px] ">
                      <Link
                        href="/"
                        className=" relative text-[16px] text-[#dfdfdf] font-light hover:text-[#e85d04] transition-colors duration-500 ease-in-out "
                      >
                        Services
                      </Link>
                    </li>
                    <li className=" relative mb-[5px] ">
                      <Link
                        href="/"
                        className=" relative text-[16px] text-[#dfdfdf] font-light hover:text-[#e85d04] transition-colors duration-500 ease-in-out "
                      >
                        404
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col_three relative w-threeCardWith20px mx-[10px] md:text-center md:mx-auto md:w-fit md:mb-9 ">
                  <h5 className=" relative text-[20px] text-white font-semibold font-mulish leading-[1] mb-6 lg:text-[18px] md:mb-4 ">
                    Quick Link
                  </h5>
                  <ul>
                    <li className=" relative mb-[5px] ">
                      <Link
                        href="/"
                        className=" relative text-[16px] text-[#dfdfdf] font-light hover:text-[#e85d04] transition-colors duration-500 ease-in-out "
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li className=" relative mb-[5px] ">
                      <Link
                        href="/"
                        className=" relative text-[16px] text-[#dfdfdf] font-light hover:text-[#e85d04] transition-colors duration-500 ease-in-out "
                      >
                        FAQs
                      </Link>
                    </li>
                    <li className=" relative mb-[5px] ">
                      <Link
                        href="/"
                        className=" relative text-[16px] text-[#dfdfdf] font-light hover:text-[#e85d04] transition-colors duration-500 ease-in-out "
                      >
                        Blog
                      </Link>
                    </li>
                    <li className=" relative mb-[5px] ">
                      <Link
                        href="/"
                        className=" relative text-[16px] text-[#dfdfdf] font-light hover:text-[#e85d04] transition-colors duration-500 ease-in-out "
                      >
                        Gallery
                      </Link>
                    </li>
                    <li className=" relative mb-[5px] ">
                      <Link
                        href="/"
                        className=" relative text-[16px] text-[#dfdfdf] font-light hover:text-[#e85d04] transition-colors duration-500 ease-in-out "
                      >
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col_three relative w-threeCardWith20px mx-[10px] md:text-center md:mx-auto md:w-fit ">
                  <h5 className=" relative text-[20px] text-white font-semibold font-mulish leading-[1] mb-6 lg:text-[18px] md:mb-4 ">
                    Work Hours
                  </h5>
                  <div className="time_wrap relative  mb-6  md:mb-4 md:inline-grid ">
                    <span className=" relative inline-block text-[16px] text-[#dfdfdf] font-light pl-6 before:content-[''] before:absolute before:top-[4px] before:left-0 before:w-[16px] before:h-[16px] before:bg-[url('/envato-market2/icon-time.png')] before:bg-no-repeat before:bg-cover mb-2 ">
                      Mon - Fri : 7AM-5PM
                    </span>
                    <span className=" relative inline-block text-[16px] text-[#dfdfdf] font-light pl-6 before:content-[''] before:absolute before:top-[4px] before:left-0 before:w-[16px] before:h-[16px] before:bg-[url('/envato-market2/icon-time.png')] before:bg-no-repeat before:bg-cover ">
                      Saturday 9AM-3PM
                    </span>
                  </div>
                  <p className=" text-[16px] text-[#dfdfdf] font-light ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom_content relative w-full mt-10 pt-8 text-center border-t-[#ffffff1f] border-solid border-t-[1px] z-10 ">
            <p className=" text-[16px] text-[#dfdfdf] font-light ">
              © 2023 Manufec Template • All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
