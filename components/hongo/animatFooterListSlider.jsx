import React from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";

export default function AnimatFooterListSlider() {
  return (
    <>
      <section
        className={`${HongoStyle.animatFooter_ListSlider} relative w-full bg-[#f6f7fb] py-[100px] `}
      >
        <div className={`${HongoStyle.container}`}>
          <div className="intro relative w-full z-10  flex flex-wrap mb-12 ">
            <div className="text relative w-[50%] pr-[30px] ">
              <h2 className=" text-[55px] text-[#141416]  font-JakartaSans font-bold tracking-[-2px] leading-[55px] ">
                The biggest exclusive sections collection.
              </h2>
            </div>
            <div className="content relative w-[50%] ">
              <p className=" w-full max-w-[526px] text-[18px] leading-[30px] text-[#7F7F8A] font-figtree font-normal ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, esse aut. Accusamus nobis fugit vero quaerat
                laboriosam molestiae, porro excepturi quibusdam odit eligendi!
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${HongoStyle.animation_slider} ${HongoStyle.animation_listSlider} relative bg-transparent overflow-hidden py-[14px] `}
        >
          <div className={`${HongoStyle.animation_wrap} relative flex `}>
            <ul className={` ${HongoStyle.animation_item}`}>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img1.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img2.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img3.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img4.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img5.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img6.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img7.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img8.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img9.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img10.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img11.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img12.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img13.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img14.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
            </ul>
            <ul className={` ${HongoStyle.animation_item}`}>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img1.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img2.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img3.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img4.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img5.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img6.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img7.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img8.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img9.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img10.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img11.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img12.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img13.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </li>
              <li className={`${HongoStyle.header_animatList} `}>
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] ">
                  <Image
                    src="/hongo/hongo-list-slide-img14.jpeg"
                    width={600}
                    height={2000}
                    alt="img"
                    className=" w-full h-full object-cover "
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
