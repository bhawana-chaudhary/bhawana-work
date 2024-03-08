import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import EMStyle from "../styles/envato-market.module.scss";

export default function emIntroWithColFour() {
  return (
    <>
      <section className={EMStyle.emIntroWithColFour}>
        <div className={EMStyle.container}>
          <div className={EMStyle.intro_with_content}>
            <div className={EMStyle.imageWrap}>
              <div className={EMStyle.img_wrap}>
                <Image
                  src="/image-one.webp"
                  alt="img"
                  width={610}
                  height={440}
                />
              </div>
            </div>
            <div className={EMStyle.contentWrap}>
              <div className={EMStyle.button_wrapper}>
                <Link href="/" className={EMStyle.lightBlue_btn}>
                  Lifestyle
                </Link>
                <span className={EMStyle.time}>29.03.21</span>
              </div>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation
              </p>
              <Link href="/" className={EMStyle.gray_button}>
                <span>Read More</span>
              </Link>
            </div>
          </div>
          <div className={EMStyle.col_four_card}>
            <div className={EMStyle.card}>
              <Link href="/">
                <div className={EMStyle.img_wrap}>
                  <Image
                    src="/card-img-one.webp"
                    alt="img"
                    width={300}
                    height={250}
                  />
                </div>
                <div className={EMStyle.top_content}>
                  <span>Tech</span>
                </div>
                <div className={EMStyle.card_content}>
                  <h5>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </h5>
                  <div className={EMStyle.time_wrap}>
                    <span className={EMStyle.time}>29.03.21</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className={EMStyle.card}>
              <Link href="/">
                <div className={EMStyle.img_wrap}>
                  <Image
                    src="/card-img-two.webp"
                    alt="img"
                    width={300}
                    height={250}
                  />
                </div>
                <div className={EMStyle.top_content}>
                  <span className={EMStyle.orange_bg}>Food</span>
                </div>
                <div className={EMStyle.card_content}>
                  <h5>Lorem ipsum dolor, sit amet consectetur</h5>
                  <div className={EMStyle.time_wrap}>
                    <span className={EMStyle.time}>29.03.21</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className={EMStyle.card}>
              <Link href="/">
                <div className={EMStyle.img_wrap}>
                  <Image
                    src="/card-img-three.webp"
                    alt="img"
                    width={300}
                    height={250}
                  />
                </div>
                <div className={EMStyle.top_content}>
                  <span className={EMStyle.orange_bg}>food</span>
                </div>
                <div className={EMStyle.card_content}>
                  <h5>Lorem ipsum dolor, sit amet consectetur</h5>
                  <div className={EMStyle.time_wrap}>
                    <span className={EMStyle.time}>29.03.21</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className={EMStyle.card}>
              <Link href="/">
                <div className={EMStyle.img_wrap}>
                  <Image
                    src="/card-img-four.webp"
                    alt="img"
                    width={300}
                    height={250}
                  />
                </div>
                <div className={EMStyle.top_content}>
                  <span>Tech</span>
                </div>
                <div className={EMStyle.card_content}>
                  <h5>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </h5>
                  <div className={EMStyle.time_wrap}>
                    <span className={EMStyle.time}>29.03.21</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
