import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/brightHeader";
import Style from "../styles/bright-code.module.scss";
import Globalcss from "../styles/global.module.scss";
import BrightIntro from "../components/brightIntro";
import BrightColThreeCard from "../components/brightColThreeCard";
import BrightImgWithContent from "../components/brightImgWithContent";
import BrightColTwoTextCard from "../components/brightColTwoTextCard";
import BrightContactForm from "../components/brightContactForm";
import BrightMap from "../components/brightMap";
import BrightFooter from "../components/brightFooter";

export default function page() {
  return (
    <>
      <Header />
      <section className={Style.brightBanner}>
        <div className={Globalcss.brightContainer}>
          <div className={Style.bannerContent}>
            <div className={Style.content}>
              <h1>Empowering Your Digital Success</h1>
              <Link href="/" className={Globalcss.blueBtn}>
                Contact us
              </Link>
            </div>
            <div className={Style.bannerImg}>
              <div className="image">
                <Image
                  src="/bright-banner-img.png"
                  alt="img"
                  width={545}
                  height={510}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrightIntro />
      <BrightColThreeCard />
      <section className={`${Style.brightIntro} ${Style.brightIntroBgGray}`}>
        <div className={Globalcss.brightContainer}>
          <div className={Style.introContent}>
            <h2>What we do</h2>
          </div>
        </div>
      </section>
      <BrightImgWithContent />
      <section className={Style.brightIntro}>
        <div className={Globalcss.brightContainer}>
          <div className={Style.introContent}>
            <h2>Our values</h2>
          </div>
        </div>
      </section>
      <BrightColTwoTextCard />
      <BrightContactForm />
      <BrightMap />
      <BrightFooter />
    </>
  );
}
