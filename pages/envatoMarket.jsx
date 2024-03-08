import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/envatoMHeader";
import Globalcss from "../styles/global.module.scss";
import EMStyle from "../styles/envato-market.module.scss";
import IntroWithColFour from "../components/emIntroWithColFour";
import EmThreeSlider from "../components/emThreeSlider";
import EmIntro from "../components/emIntro";
import EmColThreeGrid from "../components/emColThreeGrid";
import EmColTwo from "../components/emColTwo";
import EmVideoOverlay from "../components/emVideoOverlay";

const FontStyles = () => (
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
  </Head>
);

export default function EnvatoMarket() {
  // const [backToTopVisible, setBackToTopVisible] = useState(false);

  // const handleBackToTopClick = (e) => {
  //   e.preventDefault();
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setBackToTopVisible(window.scrollY > 400);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [backToTopVisible, setBackToTopVisible] = useState(false);
  const [videoOverlayVisible, setVideoOverlayVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleBackToTopClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleVideoItemClick = (video) => {
    setSelectedVideo(video);
    setVideoOverlayVisible(true);
  };

  const handleCloseVideoOverlay = () => {
    setVideoOverlayVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setBackToTopVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <FontStyles />
      <Header />
      <section
        className={`${EMStyle.nextjsBanner} py-[100px] max-[991px]:py-[80px] max-[768px]:py-[60px] max-[480px]:py-[40px]`}
      >
        <div className={Globalcss.container}>
          <div className={EMStyle.bannerContent}>
            <h1
              className={`text-[40px] max-[991px]:text-[35px] max-[595px]:text-[30px] mb-[20px] max-[768px]:mb-[12px]`}
            >
              Lorem ipsum dolor sit
            </h1>
            <p
              className={`text-[18px] max-[768px]:text-[16px]  mb-[20px] max-[768px]:mb-[12px]`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              molestiae exercitationem atque dolor molestias ipsa libero
              similique aliquid ipsam repellat?
            </p>
            <Link href="/" className={Globalcss.transparentsBtn}>
              Lorem, ipsum
            </Link>
          </div>
        </div>
      </section>
      <IntroWithColFour />
      <EmIntro />
      <EmThreeSlider />
      <section className={`pt-10 ${EMStyle.em_intro}`}>
        <div className={EMStyle.container}>
          <div className={EMStyle.intro_content}>
            <h2>Lorem ipsum dolor</h2>
          </div>
        </div>
      </section>
      <EmColThreeGrid />
      <section className={`pt-10 ${EMStyle.em_intro}  max-[595px]:pt-0`}>
        <div className={EMStyle.container}>
          <div className={EMStyle.intro_content}>
            <h2>Video Grid Style Two</h2>
          </div>
        </div>
      </section>
      <EmColTwo onVideoItemClick={handleVideoItemClick} />
      {backToTopVisible && (
        <div
          className={`${EMStyle.em_backToTop_btn} fixed bottom-8 right-8 w-[48px] h-[48px] bg-blue-500 z-[9999] rounded-[5px] transition-opacity duration-500 before:content-[''] before:absolute before:top-5 before:left-5 before:w-2 before:h-2  before:border-l-2 before:border-t-2 before:border-white before:rotate-45 animate-backToTop cursor-pointer`}
          onClick={handleBackToTopClick}
        ></div>
      )}
      {videoOverlayVisible && selectedVideo && (
        <EmVideoOverlay
          video={selectedVideo}
          onClose={handleCloseVideoOverlay}
        />
      )}
      {/* <EmVideoOverlay /> */}
    </>
  );
}
