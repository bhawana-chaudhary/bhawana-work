import React from "react";
import Link from "next/link";
import Image from "next/image";
import EmStyle from "/styles/envato-market2.module.scss";
export default function em2Header() {
  return (
    <>
      <header className=" absolute top-0 left-0 w-full bg-transparent z-50 ">
        <div className="top_header bg-orange py-2 sm:hidden ">
          <div className={` ${EmStyle.container} `}>
            <div className="iconWith_contactWrap flex flex-wrap justify-between ">
              <div className="contactWrap relative w-fit flex items-center mr-5 ">
                <Link href="/" className={`${EmStyle.redirect_link}`}>
                  .
                </Link>
                <div className="icon max-w-[16px] h-[16px] ">
                  <Image
                    src="/envato-market2/icon-telephone.png"
                    alt="icon"
                    width={40}
                    height={40}
                    className=" w-full h-full object-contain "
                  />
                </div>
                <span className=" text-white text-[16px] font-light ml-2 ">
                  Require Consultation? Contact Us Now
                </span>
              </div>
              <div className="icon-wrapper flex items-center ">
                <div className="icon_wrap relative w-[30px] h-[30px] flex justify-center items-center bg-darkBlue rounded-[3px] ml-2 ">
                  <Link href="/" className={`${EmStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className="icon max-w-[15px] h-[15px] ">
                    <Image
                      src="/envato-market2/header-icon-one.svg"
                      alt="icon"
                      width={30}
                      height={30}
                      className=" w-full h-full object-contain "
                    />
                  </div>
                </div>
                <div className="icon_wrap relative w-[30px] h-[30px] flex justify-center items-center bg-darkBlue rounded-[3px] ml-2 ">
                  <Link href="/" className={`${EmStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className="icon max-w-[15px] h-[15px] ">
                    <Image
                      src="/envato-market2/header-icon-two.svg"
                      alt="icon"
                      width={30}
                      height={30}
                      className=" w-full h-full object-contain "
                    />
                  </div>
                </div>
                <div className="icon_wrap relative w-[30px] h-[30px] flex justify-center items-center bg-darkBlue rounded-[3px] ml-2 ">
                  <Link href="/" className={`${EmStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className="icon max-w-[15px] h-[15px] ">
                    <Image
                      src="/envato-market2/header-icon-three.svg"
                      alt="icon"
                      width={30}
                      height={30}
                      className=" w-full h-full object-contain "
                    />
                  </div>
                </div>
                <div className="icon_wrap relative w-[30px] h-[30px] flex justify-center items-center bg-darkBlue rounded-[3px] ml-2 ">
                  <Link href="/" className={`${EmStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className="icon max-w-[15px] h-[15px] ">
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
          </div>
        </div>
        <div className={`${EmStyle.em2header_wrap} pt-4`}>
          <div className={` ${EmStyle.container} `}>
            <div className="header_menu_wrapper flex flex-wrap items-end ">
              <div className="logo_wrap relative max-w-[187px] h-[44px] mr-5 ">
                <Link href="/" className={`${EmStyle.redirect_link}`}>
                  .
                </Link>
                <Image
                  src="/envato-market2/logo-manufec.png"
                  alt="logo"
                  width={200}
                  height={80}
                  className=" w-full h-full object-contain "
                />
              </div>
              <div className="navbar w-[calc(100%-207px)] flex justify-end md:hidden ">
                <ul className=" w-full max-w-[700px] flex flex-wrap justify-between mr-0 ">
                  <li className=" pb-4 ml-4 ">
                    <Link
                      href="/"
                      className=" text-white text-[16px] font-light "
                    >
                      Home
                    </Link>
                  </li>
                  <li className={`${EmStyle.header_menu} relative pb-4 ml-4 `}>
                    <Link
                      href="/"
                      className=" text-white text-[16px] font-light "
                    >
                      About Us
                    </Link>
                    <div
                      className={`${EmStyle.sub_menu_wrapper} absolute top-[100%] left-[-30px] min-w-[220px] `}
                    >
                      <ul className=" relative bg-white list-none rounded-[30px] overflow-hidden ">
                        <li className=" relative bg-transparent w-full py-3 px-7 group hover:bg-[#001d3d] transition duration-300 ease-in-out ">
                          <Link
                            href="/"
                            className=" text-[#001d3d] text-[15px] font-medium group-hover:text-[#e85e06] transition duration-300 ease-in-out "
                          >
                            About Us
                          </Link>
                        </li>
                        <li className=" relative bg-transparent w-full py-3 px-7 group hover:bg-[#001d3d] transition duration-300 ease-in-out ">
                          <Link
                            href="/"
                            className=" text-[#001d3d] text-[15px] font-medium group-hover:text-[#e85e06] transition duration-300 ease-in-out "
                          >
                            Team
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className={`${EmStyle.header_menu} relative pb-4 ml-4 `}>
                    <Link
                      href="/"
                      className=" text-white text-[16px] font-light "
                    >
                      Services
                    </Link>
                    <div
                      className={`${EmStyle.sub_menu_wrapper} absolute top-[100%] left-[-30px] min-w-[220px] `}
                    >
                      <ul className=" relative bg-white list-none rounded-[30px] overflow-hidden ">
                        <li className=" relative bg-transparent w-full py-3 px-7 group hover:bg-[#001d3d] transition duration-300 ease-in-out ">
                          <Link
                            href="/"
                            className=" text-[#001d3d] text-[15px] font-medium group-hover:text-[#e85e06] transition duration-300 ease-in-out "
                          >
                            Services
                          </Link>
                        </li>
                        <li className=" relative bg-transparent w-full py-3 px-7 group hover:bg-[#001d3d] transition duration-300 ease-in-out ">
                          <Link
                            href="/"
                            className=" text-[#001d3d] text-[15px] font-medium group-hover:text-[#e85e06] transition duration-300 ease-in-out "
                          >
                            Services Detail
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className={`${EmStyle.header_menu} relative pb-4 ml-4 `}>
                    <Link
                      href="/"
                      className=" text-white text-[16px] font-light "
                    >
                      Pages
                    </Link>
                    <div
                      className={`${EmStyle.sub_menu_wrapper} absolute top-[100%] left-[-30px] min-w-[220px] `}
                    >
                      <ul className=" relative bg-white list-none rounded-[30px] overflow-hidden ">
                        <li className=" relative bg-transparent w-full py-3 px-7 group hover:bg-[#001d3d] transition duration-300 ease-in-out ">
                          <Link
                            href="/"
                            className=" text-[#001d3d] text-[15px] font-medium group-hover:text-[#e85e06] transition duration-300 ease-in-out "
                          >
                            Pages
                          </Link>
                        </li>
                        <li className=" relative bg-transparent w-full py-3 px-7 group hover:bg-[#001d3d] transition duration-300 ease-in-out ">
                          <Link
                            href="/"
                            className=" text-[#001d3d] text-[15px] font-medium group-hover:text-[#e85e06] transition duration-300 ease-in-out "
                          >
                            FAQs
                          </Link>
                        </li>
                        <li className=" relative bg-transparent w-full py-3 px-7 group hover:bg-[#001d3d] transition duration-300 ease-in-out ">
                          <Link
                            href="/"
                            className=" text-[#001d3d] text-[15px] font-medium group-hover:text-[#e85e06] transition duration-300 ease-in-out "
                          >
                            Blog
                          </Link>
                        </li>
                        <li className=" relative bg-transparent w-full py-3 px-7 group hover:bg-[#001d3d] transition duration-300 ease-in-out ">
                          <Link
                            href="/"
                            className=" text-[#001d3d] text-[15px] font-medium group-hover:text-[#e85e06] transition duration-300 ease-in-out "
                          >
                            404
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className=" pb-4 ml-4 ">
                    <Link
                      href="/"
                      className=" text-white text-[16px] font-light "
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
