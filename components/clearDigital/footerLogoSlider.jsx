import React from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";

export default function FooterLogoSlider() {
  return (
    <>
      <section
        className={` footerLogo_Slider relative w-full pb-[100px] bg-[#090914] desktop:pb-[80px] tablet:pb-[70px] phablet:pb-[60px] sm:pb-[50px] `}
      >
        <div
          className={`${HongoStyle.animation_slider} ${HongoStyle.footerLogo_animatSlider} relative overflow-hidden py-[14px] `}
        >
          <div
            className={`${HongoStyle.animation_wrap} ${HongoStyle.mask_gradient3} relative flex `}
          >
            <ul className={` ${HongoStyle.animation_item}`}>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/McAfee_Logo_White.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/Stanford_Logo_Grey.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/Tenable_Logo_Grey.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/VMware_Logo_Grey.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/cisco_logo_white.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/McAfee_Logo_White.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/Stanford_Logo_Grey.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/Tenable_Logo_Grey.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/VMware_Logo_Grey.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/cisco_logo_white.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
            </ul>
            <ul className={` ${HongoStyle.animation_item}`}>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/McAfee_Logo_White.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/Stanford_Logo_Grey.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/Tenable_Logo_Grey.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/VMware_Logo_Grey.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/cisco_logo_white.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/McAfee_Logo_White.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/Stanford_Logo_Grey.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/Tenable_Logo_Grey.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/VMware_Logo_Grey.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="logo_wrap relative max-w-[210px] h-[84px] tablet:max-w-[188px] tablet:h-[76px] phablet:max-w-[166px] phablet:h-[70px] sm:max-w-[161px] sm:h-[65px] ">
                  <Image
                    src="/hongo/cisco_logo_white.svg"
                    width={300}
                    height={120}
                    alt="logo"
                    className=" w-full h-full object-contain "
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
