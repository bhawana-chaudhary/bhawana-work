import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HongoHeader from "../components/hongo/hongoHeader";
import HongoBanner from "../components/hongo/hongoBanner";
import IntroWithGrid from "../components/hongo/introWithGrid";
import HongoVideoOverlay from "../components/hongo/hongoVideoOverlay";
import ColFourCardWrapper from "../components/hongo/colThreeCardWrapper";
import HongoIntro from "../components/hongo/hongoIntro";
import HongoProductBundle from "../components/hongo/hongoProductBundle";
import HongoCardGrid from "../components/hongo/hongoCardGrid";
import HongoCardSlider from "../components/hongo/hongoCardSlider";
import HongoScrollWrapper from "../components/hongo/hongoScrollWrapper";
import HongoContentWithImg from "../components/hongo/hongoContentWithImg";
import HongoTextSlider from "../components/hongo/hongoTextSlider";
import HongoCardSlider2 from "../components/hongo/hongoCardSlider2";
import IntroWithAnimat4Slider from "../components/hongo/introWithAnimat4Slider";
import AnimatFooterListSlider from "../components/hongo/animatFooterListSlider";
import HongoFooter from "../components/hongo/hongoFooter";
import ScrollDownColTwo from "../components/hongo/scrollDownColTwo";

const FontStyles = () => (
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
      rel="stylesheet"
    />
  </Head>
);

export default function Hongo() {
  return (
    <>
      <FontStyles />
      <HongoHeader />
      <HongoBanner />
      <IntroWithGrid />
      <HongoVideoOverlay />
      <ColFourCardWrapper />
      <HongoProductBundle />
      <HongoCardGrid />
      <HongoCardSlider />
      <HongoScrollWrapper />
      <HongoContentWithImg />
      <HongoTextSlider />
      <HongoCardSlider2 />
      <IntroWithAnimat4Slider />
      <ScrollDownColTwo />
      <AnimatFooterListSlider />
      <HongoFooter />
    </>
  );
}
