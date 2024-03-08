import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../styles/bright-code.module.scss";
import Globalcss from "../styles/global.module.scss";

export default function brightIntro() {
  return (
    <>
      <section className={Style.brightColThreeCard}>
        <div className={Globalcss.brightContainer}>
          <div className={Style.colThreeCard}>
            <div className={Style.card}>
              <div className={Style.imageWrap}>
                <Link href="/">
                  <Image
                    src="/bright-card-img1.jpeg"
                    alt="cardImg"
                    width={356}
                    height={260}
                  />
                </Link>
              </div>
              <div className={Style.cardContent}>
                <h5>Agency-to-Agency Collaboration</h5>
                <p>
                  Our agency thrives on the synergy of collaboration. We step
                  into the role of your dedicated development partner, filling a
                  crucial gap in their service offerings. We understand that for
                  design agencies to deliver the complete package to their
                  clients, a reliable development team is essential.
                </p>
              </div>
            </div>
            <div className={Style.card}>
              <div className={Style.imageWrap}>
                <Link href="/">
                  <Image
                    src="/bright-card-img2.jpeg"
                    alt="cardImg"
                    width={356}
                    height={260}
                  />
                </Link>
              </div>
              <div className={Style.cardContent}>
                <h5>Button Designs Free</h5>
                <p>Search Engine</p>
              </div>
            </div>
            <div className={Style.card}>
              <div className={Style.imageWrap}>
                <Link href="/">
                  <Image
                    src="/bright-card-img3.jpeg"
                    alt="cardImg"
                    width={356}
                    height={260}
                  />
                </Link>
              </div>
              <div className={Style.cardContent}>
                <h5>Branding & Co Agency</h5>
                <p>Admin templates</p>
              </div>
            </div>
            <div className={Style.card}>
              <div className={Style.imageWrap}>
                <Link href="/">
                  <Image
                    src="/bright-card-img4.jpeg"
                    alt="cardImg"
                    width={356}
                    height={260}
                  />
                </Link>
              </div>
              <div className={Style.cardContent}>
                <h5>Zukandre Phoniex</h5>
                <p>Branding</p>
              </div>
            </div>
            <div className={Style.card}>
              <div className={Style.imageWrap}>
                <Link href="/">
                  <Image
                    src="/bright-card-img5.jpeg"
                    alt="cardImg"
                    width={356}
                    height={260}
                  />
                </Link>
              </div>
              <div className={Style.cardContent}>
                <h5>Sionage Mokcup</h5>
                <p>Wll Mockup</p>
              </div>
            </div>
            <div className={Style.card}>
              <div className={Style.imageWrap}>
                <Link href="/">
                  <Image
                    src="/bright-card-img6.jpeg"
                    alt="cardImg"
                    width={356}
                    height={260}
                  />
                </Link>
              </div>
              <div className={Style.cardContent}>
                <h5>Hard Cover Book Mock</h5>
                <p>Book Covers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
