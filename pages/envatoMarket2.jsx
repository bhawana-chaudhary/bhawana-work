import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Styles from "../styles/global.module.scss";
import EmStyle from "../styles/envato-market2.module.scss";
import Header from "../components/envatoMarket2/em2Header";
import Em2Banner from "../components/envatoMarket2/em2Banner";
import Em2ColThreeCard from "../components/envatoMarket2/em2ColThreeCard";
import Em2ImageWithContent from "../components/envatoMarket2/em2ImageWithContent";
import Em2LogoWrapper from "../components/envatoMarket2/em2LogoWrapper";
import Em2ParallaxColThree from "../components/envatoMarket2/em2ParallaxColThree";
import Em2Intro from "../components/envatoMarket2/em2Intro";
import Em2sliderWrap from "../components/envatoMarket2/em2sliderWrap";
import Em2counterColFour from "../components/envatoMarket2/em2counterColFour";
import Em2parallaxIntro from "../components/envatoMarket2/em2parallaxIntro";
import Em2IntroWithColThree from "../components/envatoMarket2/em2IntroWithColThree";
import Em2footer from "../components/envatoMarket2/em2footer";

const FontStyles = () => (
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900;1000&display=swap"
      rel="stylesheet"
    />
  </Head>
);

export default function EnvatoMarket2() {
  return (
    <>
      <FontStyles />
      <Header />
      <Em2Banner />
      <Em2ColThreeCard />
      <Em2ImageWithContent />
      <Em2LogoWrapper />
      <Em2ParallaxColThree />
      <Em2Intro />
      <Em2sliderWrap />
      <Em2counterColFour />
      <Em2parallaxIntro />
      <Em2IntroWithColThree />
      <Em2footer />
    </>
  );
}
