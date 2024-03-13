import React from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";

export default function AnimatFooterListSlider() {
  return (
    <>
      <section
        className={`${HongoStyle.animatFooter_ListSlider} relative w-full bg-[#f6f7fb] py-[100px] desktop:py-[80px] tablet:py-[70px] phablet:py-[60px] sm:py-[50px] `}
      >
        <div className={`${HongoStyle.container}`}>
          <div className="intro relative w-full z-10  flex flex-wrap mb-12 desktop:mb-10 tablet:mb-8 phablet:mb-6 sm:mb-5 ">
            <div className="text relative w-[50%] pr-[30px] lg:w-full lg:pr-0 lg:text-center lg:mb-5 ">
              <h2 className=" text-[55px] text-[#141416]  font-JakartaSans font-bold tracking-[-2px] leading-[55px] desktop:text-[50px] desktop:leading-[50px] tablet:text-[45px] tablet:leading-[45px] phablet:text-[40px] phablet:leading-[40px] sm:text-[35px] sm:leading-[35px] ">
                The biggest exclusive sections collection.
              </h2>
            </div>
            <div className="content relative w-[50%] lg:w-full lg:text-center ">
              <p className=" w-full max-w-[526px] text-[18px] leading-[30px] text-[#7F7F8A] font-figtree font-normal lg:max-w-full phablet:text-[17px] phablet:leading-[28px] sm:text-[16px] sm:leading-[25px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
                <div className="image_wrap min-w-[522px] h-full max-h-[1061px] tablet:min-w-[470px] tablet:max-h-[966px] md:min-w-[380px] md:max-h-[780px] sm:min-w-[320px] sm:max-h-[700px] ">
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
