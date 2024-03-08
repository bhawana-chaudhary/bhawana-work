import React from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";

export default function HongoTextSlider() {
  return (
    <>
      <section
        className={`hongoTextSlider ${HongoStyle.lineOverlay} relative w-full py-20 `}
      >
        <div
          className={`${HongoStyle.animation_slider} ${HongoStyle.animation_text_slider} relative bg-transparent overflow-hidden py-[14px] `}
        >
          <div className={`${HongoStyle.animation_wrap} relative flex `}>
            <ul className={` ${HongoStyle.animation_item}`}>
              <li className={`${HongoStyle.header_animatList} `}>
                The premium Shopify theme from Envato power elite author
              </li>
              <li
                className={`${HongoStyle.header_animatList} ${HongoStyle.animatListPoint} `}
              >
                •
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                Truly multipurpose premium Shopify theme
              </li>
              <li
                className={`${HongoStyle.header_animatList} ${HongoStyle.animatListPoint} `}
              >
                •
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                Build your amazing store with Shopify 2.0
              </li>
              <li
                className={`${HongoStyle.header_animatList} ${HongoStyle.animatListPoint} `}
              >
                •
              </li>
            </ul>
            <ul className={` ${HongoStyle.animation_item}`}>
              <li className={`${HongoStyle.header_animatList} `}>
                The premium Shopify theme from Envato power elite author
              </li>
              <li
                className={`${HongoStyle.header_animatList} ${HongoStyle.animatListPoint} `}
              >
                •
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                Truly multipurpose premium Shopify theme
              </li>
              <li
                className={`${HongoStyle.header_animatList} ${HongoStyle.animatListPoint} `}
              >
                •
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                Build your amazing store with Shopify 2.0
              </li>
              <li
                className={`${HongoStyle.header_animatList} ${HongoStyle.animatListPoint} `}
              >
                •
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
