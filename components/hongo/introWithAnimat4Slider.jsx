import React from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";

export default function IntroWithAnimat4Slider() {
  return (
    <>
      <section
        className={`${HongoStyle.introWith_animat4Slider} ${HongoStyle.lineOverlay} relative w-full py-[100px] `}
      >
        <div className={`${HongoStyle.container}`}>
          <div className="intro relative w-full z-10  flex flex-wrap ">
            <div className="text relative w-[50%] text-right pr-[30px] ">
              <h2 className=" text-[200px] text-white  font-JakartaSans font-extrabold tracking-[-2px] leading-[170px] ">
                <span className=" bg-clip-text text-transparent bg-hongoH1Gradient ">
                  110+
                </span>
              </h2>
            </div>
            <div className="content relative w-[50%] ">
              <h2 className=" text-[55px] text-[#141416]  font-JakartaSans font-bold tracking-[-2px] leading-[55px] mb-5 ">
                Outstanding features.
              </h2>
              <p className=" w-full max-w-[526px] text-[18px] leading-[30px] text-[#7F7F8A] font-figtree font-normal ">
                Hongo is evaluated as the most unique multi-purpose eCommerce
                Shopify theme for creating online store with a clean and
                advanced design.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${HongoStyle.animat_slider} relative w-full mt-[60px] z-10 `}
        >
          <div
            className={`${HongoStyle.animation_slider} ${HongoStyle.animation_4slider} relative bg-transparent overflow-hidden py-[14px] `}
          >
            <div className={`${HongoStyle.animation_wrap} relative flex `}>
              <ul className={` ${HongoStyle.animation_item}`}>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-paint-palette.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-paint-palette-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Cookie consent bar</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-subtract.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-subtract-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Newsletter popup</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-megaphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-megaphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Promotion popups</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-search.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-search-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Ajax product search</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-iphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-iphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Mobile first design</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-iphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-iphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Mobile bottom navigation</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-currency-exchange.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-currency-exchange-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple currencies</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-translate.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-translate-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple languages</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-share.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-share-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Social sharing</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-person.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-person-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Social profile icons</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-minimize-window.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-minimize-window-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Creative footer design</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-shop.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-shop-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Ready-made full store demos</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-award.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-award-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Premium inner pages</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-layout.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-layout-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Single product layouts</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-credit-card.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-credit-card-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Shop card styles</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-albums.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-albums-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Collection styles</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-download2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-download-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>One click demo import</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-bag.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-bag-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Shopify store 2.0</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-bootstrap.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-bootstrap-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>BootStrap 5</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-translate.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-translate-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Translation ready</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-rocket.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-rocket-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>SEO optimized</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-speedometer.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-speedometer-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Speed optimized</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-multiple-choice.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-multiple-choice-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple headers</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-image.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-image-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Parallax background</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-three-dots.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-three-dots-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Slider with animations</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-top-menu.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-top-menu-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Dropdown menu</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-truck.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-truck-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Free shipping goal</span>
                </li>
              </ul>
              <ul className={` ${HongoStyle.animation_item}`}>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-paint-palette.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-paint-palette-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Cookie consent bar</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-subtract.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-subtract-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Newsletter popup</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-megaphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-megaphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Promotion popups</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-search.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-search-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Ajax product search</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-iphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-iphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Mobile first design</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-iphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-iphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Mobile bottom navigation</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-currency-exchange.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-currency-exchange-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple currencies</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-translate.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-translate-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple languages</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-share.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-share-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Social sharing</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-person.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-person-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Social profile icons</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-minimize-window.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-minimize-window-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Creative footer design</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-shop.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-shop-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Ready-made full store demos</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-award.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-award-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Premium inner pages</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-layout.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-layout-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Single product layouts</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-credit-card.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-credit-card-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Shop card styles</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-albums.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-albums-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Collection styles</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-download2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-download-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>One click demo import</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-bag.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-bag-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Shopify store 2.0</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-bootstrap.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-bootstrap-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>BootStrap 5</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-translate.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-translate-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Translation ready</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-rocket.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-rocket-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>SEO optimized</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-speedometer.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-speedometer-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Speed optimized</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-multiple-choice.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-multiple-choice-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple headers</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-image.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-image-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Parallax background</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-three-dots.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-three-dots-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Slider with animations</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-top-menu.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-top-menu-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Dropdown menu</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-truck.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-truck-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Free shipping goal</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${HongoStyle.animation_slider} ${HongoStyle.animation_4slider} ${HongoStyle.animation_4slider_reverse} relative bg-transparent overflow-hidden py-[14px] opacity-[0.95] `}
          >
            <div className={`${HongoStyle.animation_wrap} relative flex `}>
              <ul className={` ${HongoStyle.animation_item}`}>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-paint-palette.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-paint-palette-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Cookie consent bar</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-subtract.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-subtract-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Newsletter popup</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-megaphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-megaphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Promotion popups</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-search.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-search-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Ajax product search</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-iphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-iphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Mobile first design</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-iphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-iphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Mobile bottom navigation</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-currency-exchange.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-currency-exchange-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple currencies</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-translate.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-translate-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple languages</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-share.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-share-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Social sharing</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-person.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-person-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Social profile icons</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-minimize-window.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-minimize-window-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Creative footer design</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-shop.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-shop-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Ready-made full store demos</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-award.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-award-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Premium inner pages</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-layout.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-layout-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Single product layouts</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-credit-card.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-credit-card-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Shop card styles</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-albums.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-albums-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Collection styles</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-download2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-download-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>One click demo import</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-bag.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-bag-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Shopify store 2.0</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-bootstrap.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-bootstrap-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>BootStrap 5</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-translate.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-translate-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Translation ready</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-rocket.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-rocket-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>SEO optimized</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-speedometer.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-speedometer-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Speed optimized</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-multiple-choice.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-multiple-choice-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple headers</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-image.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-image-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Parallax background</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-three-dots.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-three-dots-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Slider with animations</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-top-menu.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-top-menu-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Dropdown menu</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-truck.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-truck-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Free shipping goal</span>
                </li>
              </ul>
              <ul className={` ${HongoStyle.animation_item}`}>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-paint-palette.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-paint-palette-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Cookie consent bar</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-subtract.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-subtract-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Newsletter popup</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-megaphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-megaphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Promotion popups</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-search.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-search-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Ajax product search</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-iphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-iphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Mobile first design</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-iphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-iphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Mobile bottom navigation</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-currency-exchange.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-currency-exchange-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple currencies</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-translate.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-translate-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple languages</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-share.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-share-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Social sharing</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-person.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-person-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Social profile icons</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-minimize-window.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-minimize-window-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Creative footer design</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-shop.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-shop-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Ready-made full store demos</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-award.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-award-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Premium inner pages</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-layout.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-layout-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Single product layouts</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-credit-card.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-credit-card-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Shop card styles</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-albums.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-albums-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Collection styles</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-download2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-download-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>One click demo import</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-bag.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-bag-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Shopify store 2.0</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-bootstrap.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-bootstrap-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>BootStrap 5</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-translate.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-translate-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Translation ready</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-rocket.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-rocket-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>SEO optimized</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-speedometer.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-speedometer-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Speed optimized</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-multiple-choice.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-multiple-choice-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple headers</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-image.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-image-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Parallax background</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-three-dots.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-three-dots-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Slider with animations</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-top-menu.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-top-menu-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Dropdown menu</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-truck.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-truck-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Free shipping goal</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${HongoStyle.animation_slider} ${HongoStyle.animation_4slider} relative bg-transparent overflow-hidden py-[14px] opacity-[0.65] `}
          >
            <div className={`${HongoStyle.animation_wrap} relative flex `}>
              <ul className={` ${HongoStyle.animation_item}`}>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-paint-palette.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-paint-palette-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Cookie consent bar</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-subtract.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-subtract-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Newsletter popup</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-megaphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-megaphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Promotion popups</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-search.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-search-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Ajax product search</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-iphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-iphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Mobile first design</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-iphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-iphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Mobile bottom navigation</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-currency-exchange.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-currency-exchange-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple currencies</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-translate.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-translate-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple languages</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-share.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-share-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Social sharing</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-person.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-person-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Social profile icons</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-minimize-window.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-minimize-window-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Creative footer design</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-shop.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-shop-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Ready-made full store demos</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-award.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-award-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Premium inner pages</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-layout.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-layout-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Single product layouts</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-credit-card.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-credit-card-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Shop card styles</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-albums.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-albums-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Collection styles</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-download2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-download-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>One click demo import</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-bag.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-bag-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Shopify store 2.0</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-bootstrap.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-bootstrap-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>BootStrap 5</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-translate.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-translate-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Translation ready</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-rocket.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-rocket-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>SEO optimized</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-speedometer.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-speedometer-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Speed optimized</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-multiple-choice.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-multiple-choice-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple headers</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-image.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-image-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Parallax background</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-three-dots.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-three-dots-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Slider with animations</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-top-menu.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-top-menu-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Dropdown menu</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-truck.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-truck-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Free shipping goal</span>
                </li>
              </ul>
              <ul className={` ${HongoStyle.animation_item}`}>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-paint-palette.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-paint-palette-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Cookie consent bar</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-subtract.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-subtract-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Newsletter popup</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-megaphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-megaphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Promotion popups</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-search.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-search-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Ajax product search</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-iphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-iphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Mobile first design</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-iphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-iphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Mobile bottom navigation</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-currency-exchange.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-currency-exchange-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple currencies</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-translate.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-translate-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple languages</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-share.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-share-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Social sharing</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-person.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-person-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Social profile icons</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-minimize-window.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-minimize-window-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Creative footer design</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-shop.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-shop-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Ready-made full store demos</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-award.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-award-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Premium inner pages</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-layout.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-layout-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Single product layouts</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-credit-card.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-credit-card-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Shop card styles</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-albums.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-albums-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Collection styles</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-download2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-download-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>One click demo import</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-bag.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-bag-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Shopify store 2.0</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-bootstrap.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-bootstrap-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>BootStrap 5</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-translate.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-translate-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Translation ready</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-rocket.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-rocket-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>SEO optimized</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-speedometer.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-speedometer-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Speed optimized</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-multiple-choice.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-multiple-choice-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple headers</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-image.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-image-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Parallax background</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-three-dots.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-three-dots-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Slider with animations</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-top-menu.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-top-menu-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Dropdown menu</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-truck.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-truck-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Free shipping goal</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${HongoStyle.animation_slider} ${HongoStyle.animation_4slider} ${HongoStyle.animation_4slider_reverse} relative bg-transparent overflow-hidden py-[14px] opacity-[0.4] `}
          >
            <div className={`${HongoStyle.animation_wrap} relative flex `}>
              <ul className={` ${HongoStyle.animation_item}`}>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-paint-palette.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-paint-palette-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Cookie consent bar</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-subtract.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-subtract-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Newsletter popup</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-megaphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-megaphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Promotion popups</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-search.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-search-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Ajax product search</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-iphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-iphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Mobile first design</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-iphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-iphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Mobile bottom navigation</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-currency-exchange.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-currency-exchange-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple currencies</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-translate.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-translate-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple languages</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-share.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-share-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Social sharing</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-person.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-person-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Social profile icons</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-minimize-window.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-minimize-window-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Creative footer design</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-shop.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-shop-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Ready-made full store demos</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-award.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-award-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Premium inner pages</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-layout.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-layout-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Single product layouts</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-credit-card.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-credit-card-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Shop card styles</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-albums.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-albums-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Collection styles</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-download2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-download-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>One click demo import</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-bag.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-bag-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Shopify store 2.0</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-bootstrap.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-bootstrap-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>BootStrap 5</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-translate.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-translate-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Translation ready</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-rocket.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-rocket-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>SEO optimized</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-speedometer.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-speedometer-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Speed optimized</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-multiple-choice.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-multiple-choice-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple headers</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-image.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-image-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Parallax background</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-three-dots.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-three-dots-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Slider with animations</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-top-menu.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-top-menu-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Dropdown menu</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-truck.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-truck-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Free shipping goal</span>
                </li>
              </ul>
              <ul className={` ${HongoStyle.animation_item}`}>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-paint-palette.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-paint-palette-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Cookie consent bar</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-subtract.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-subtract-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Newsletter popup</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-megaphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-megaphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Promotion popups</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-search.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-search-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Ajax product search</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-iphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-iphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Mobile first design</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-iphone.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-iphone-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Mobile bottom navigation</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-currency-exchange.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-currency-exchange-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple currencies</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-translate.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-translate-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple languages</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-share.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-share-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Social sharing</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-person.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-person-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Social profile icons</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-minimize-window.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-minimize-window-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Creative footer design</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-shop.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-shop-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Ready-made full store demos</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-award.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-award-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Premium inner pages</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-layout.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-layout-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Single product layouts</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-credit-card.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-credit-card-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Shop card styles</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-albums.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-albums-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Collection styles</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-download2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-download-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>One click demo import</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-bag.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-bag-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Shopify store 2.0</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-bootstrap.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-bootstrap-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>BootStrap 5</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-translate.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-translate-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Translation ready</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-rocket.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-rocket-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>SEO optimized</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-speedometer.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-speedometer-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Speed optimized</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-multiple-choice.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-multiple-choice-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Multiple headers</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-image.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-image-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Parallax background</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-three-dots.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-three-dots-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Slider with animations</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-top-menu.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-top-menu-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Dropdown menu</span>
                </li>
                <li className={`${HongoStyle.header_animatList} `}>
                  <Link href="/" className={`${HongoStyle.redirect_link}`}>
                    .
                  </Link>
                  <div className={`${HongoStyle.icon} max-w-[20px] h-[26px] `}>
                    <Image
                      src="/hongo/icon-truck.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div
                    className={`${HongoStyle.icon_two} max-w-[20px] h-[26px] `}
                  >
                    <Image
                      src="/hongo/icon-truck-2.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <span>Free shipping goal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
