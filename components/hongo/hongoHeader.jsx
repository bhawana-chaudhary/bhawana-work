import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";

export default function HongoHeader() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsScrollingUp(currentScrollPos > 0 && currentScrollPos < prevScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <header
        id="hongo-header"
        className={`${
          HongoStyle.hongo_header
        } absolute top-0 left-0 w-full overflow-hidden z-50 ${
          isScrollingUp ? HongoStyle.hongo_header_active : ""
        }`}
      >
        <div
          className={`${HongoStyle.animation_slider} relative bg-[#fbe523] overflow-hidden py-[14px] `}
        >
          <div className={`${HongoStyle.animation_wrap} relative flex `}>
            <ul className={` ${HongoStyle.animation_item}`}>
              <li className={`${HongoStyle.header_animatList} `}>
                <span>
                  Trusted by <strong>45000</strong> happy customers
                </span>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <span>
                  5 star rating based on <strong>1250 reviews</strong>
                </span>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <span>
                  <strong>Limited time offer </strong> - price will increase
                  soon
                </span>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <span>
                  <strong>150+</strong> Powerful ready to use sections
                </span>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <span>
                  Build your powerful store with <strong>Shopify 2.0</strong>
                </span>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <span>
                  The premium Shopify theme from{" "}
                  <strong>Envato power elite author</strong>
                </span>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <span>
                  Truly multipurpose <strong>premium Shopify theme</strong>
                </span>
              </li>
            </ul>
            <ul className={` ${HongoStyle.animation_item}`}>
              <li className={`${HongoStyle.header_animatList} `}>
                <span>
                  Trusted by <strong>45000</strong> happy customers
                </span>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <span>
                  5 star rating based on <strong>1250 reviews</strong>
                </span>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <span>
                  <strong>Limited time offer </strong> - price will increase
                  soon
                </span>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <span>
                  <strong>150+</strong> Powerful ready to use sections
                </span>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <span>
                  Build your powerful store with <strong>Shopify 2.0</strong>
                </span>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <span>
                  The premium Shopify theme from{" "}
                  <strong>Envato power elite author</strong>
                </span>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <span>
                  Truly multipurpose <strong>premium Shopify theme</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="main_header relative w-full py-5 px-[60px] ">
          <div className="header_wrap relative w-full flex  justify-between items-center  ">
            <div className="logo relative w-full max-w-[147px] h-[34px] ">
              <Link href="/" className={`${HongoStyle.redirect_link}`}>
                .
              </Link>
              <Image
                src="/hongo/hongo-logo-white.webp"
                width={200}
                height={100}
                alt="img"
              />
            </div>
            <div className={`${HongoStyle.navbar_menu}`}>
              {/* <ul className=" relative w-fit flex list-none ">
                  <li className=" relative mx-[18px]  ">
                    <Link
                      href="/"
                      className=" relative text-[16px] font-medium text-white decoration-transparent font-JakartaSans pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-500 after:ease-in-out hover:after:w-full "
                    >
                      Demos
                    </Link>
                  </li>
                  <li className=" relative mx-[18px]  ">
                    <Link
                      href="/"
                      className=" relative text-[16px] font-medium text-white decoration-transparent font-JakartaSans pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-500 after:ease-in-out hover:after:w-full "
                    >
                      Features
                    </Link>
                  </li>
                  <li className=" relative mx-[18px]  ">
                    <Link
                      href="/"
                      className=" relative text-[16px] font-medium text-white decoration-transparent font-JakartaSans pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-500 after:ease-in-out hover:after:w-full "
                    >
                      Exclusive
                    </Link>
                  </li>
                  <li className=" relative mx-[18px]  ">
                    <Link
                      href="/"
                      className=" relative text-[16px] font-medium text-white decoration-transparent font-JakartaSans pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-500 after:ease-in-out hover:after:w-full "
                    >
                      Performance
                    </Link>
                  </li>
                  <li className=" relative mx-[18px]  ">
                    <Link
                      href="/"
                      className=" relative text-[16px] font-medium text-white decoration-transparent font-JakartaSans pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-500 after:ease-in-out hover:after:w-full "
                    >
                      Documentation
                    </Link>
                  </li>
                  <li className=" relative mx-[18px]  ">
                    <Link
                      href="/"
                      className=" relative text-[16px] font-medium text-white decoration-transparent font-JakartaSans pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-500 after:ease-in-out hover:after:w-full "
                    >
                      Support
                    </Link>
                  </li>
                </ul> */}
              <ul className="relative w-fit flex list-none">
                {[
                  "Demos",
                  "Features",
                  "Exclusive",
                  "Performance",
                  "Documentation",
                  "Support",
                ].map((item, index) => (
                  <li key={index} className={`relative mx-[18px] `}>
                    <Link
                      href="/"
                      className=" relative text-[16px] font-medium text-white decoration-transparent font-JakartaSans pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-500 after:ease-in-out hover:after:w-full "
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${HongoStyle.hongo_button}`}>
              <Link href="/" className={`${HongoStyle.redirect_link}`}>
                .
              </Link>
              <div className={`${HongoStyle.text}`}>
                <span className={`${HongoStyle.top_text}`}>Shop now</span>
                <span className={`${HongoStyle.bottom_text}`}>Shop now</span>
              </div>
              <div className={`${HongoStyle.icon}`}>
                <Image
                  src="/hongo/icon-shopping-cart.png"
                  width={50}
                  height={50}
                  alt="icon"
                  className=" w-full h-full object-contain "
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
