import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "../styles/global.module.scss";

export default function WImageWithContent() {
  return (
    <>
      <section
        className={`${Styles.imageWithContentWrap} relative w-full bg-white z-20`}
        id="about"
      >
        <div
          className={`${Styles.container} relative w-full py-0 px-[20px] mx-auto my-0 max-w-[1170px]`}
        >
          <div
            className={`${Styles.imageWithContent} relative w-full flex min-h-[716px]`}
          >
            <div
              className={`${Styles.content} relative w-full max-w-[470px] pr-[80px] py-[80px]`}
            >
              <h2
                className={`text-[44px] relative text-black  font-sans font-extrabold leading-[1.05] mb-[50px] pt-[25px] tracking-[3px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[45px] before:h-[2px] before:bg-black `}
              >
                ABOUT
                <br /> ME
              </h2>
              <p
                className={`text-[15px] text-black font-light font-sans tracking-[1.95px] mb-[25px]`}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                corrupti maxime eum alias modi nostrum reiciendis accusantium,
                ducimus et pariatur tempora laudantium ut cumque minus
                assumenda. A asperiores cum temporibus!
              </p>
              <p
                className={`text-[15px] text-black font-light font-sans tracking-[1.95px] mb-[40px]`}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                earum veritatis eligendi cumque dicta. Itaque odio ut quaerat id
                consequatur qui magnam voluptates nihil.
              </p>
              <Link
                href="/"
                className={`relative capitalize bg-black border-2 border-black px-[15px] py-[10px] text-[16px] text-white font-extralight inline-block tracking-[1px] hover:bg-white hover:text-black transition-colors duration-500`}
              >
                Read More
              </Link>
            </div>
            <div
              className={`${Styles.image_wrapper}  relative w-wImgWithContent`}
            >
              <div
                className={`${Styles.image} absolute top-0 left-0 w-[899px] h-full`}
              >
                <Image
                  src="/wix/wix-man-img.webp"
                  width={900}
                  height={750}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
