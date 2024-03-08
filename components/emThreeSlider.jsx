import React from "react";
import Link from "next/link";
import Image from "next/image";
import EMStyle from "../styles/envato-market.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";

const DynamicSlider = dynamic(() => import("react-slick"), { ssr: false });

const PrevArrow = ({ onClick }) => (
  <div
    className={`${EMStyle.customSlickArrow} ${EMStyle.customSlickPrev}`}
    onClick={onClick}
  >
    Previous
  </div>
);
const NextArrow = ({ onClick }) => (
  <div
    className={`${EMStyle.customSlickArrow} ${EMStyle.customSlickNext}`}
    onClick={onClick}
  >
    Next
  </div>
);

export default function EmThreeSlider() {
  const slider_wrap1 = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    };
    return (
      <DynamicSlider {...settings}>
        <div className={EMStyle.slide}>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-img-1.webp"
                  alt="img"
                  width={350}
                  height={150}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>Skills That You Can Learn From Fashion.</h6>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-img-2.webp"
                  alt="img"
                  width={350}
                  height={150}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>15 Questions To Ask At Fashion Skills</h6>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-img-3.webp"
                  alt="img"
                  width={350}
                  height={150}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>All You Need To Know About Food.</h6>
              </div>
            </div>
          </Link>
        </div>
        <div className={EMStyle.slide}>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-img-4.webp"
                  alt="img"
                  width={350}
                  height={150}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>Skills That You Can Learn From Fashion.</h6>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-img-5.webp"
                  alt="img"
                  width={350}
                  height={150}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>Here’s What No One Tells You About Fashion.</h6>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-img-6.webp"
                  alt="img"
                  width={350}
                  height={150}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>TikTok will sue the US over threatened ban</h6>
              </div>
            </div>
          </Link>
        </div>
      </DynamicSlider>
    );
  };

  const slider_wrap2 = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    };
    return (
      <DynamicSlider {...settings}>
        <div className={EMStyle.slide}>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-card2-img-1.webp"
                  alt="img"
                  width={100}
                  height={100}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>Skills That You Can Learn From Fashion.</h6>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-card2-img-2.webp"
                  alt="img"
                  width={100}
                  height={100}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>15 Questions To Ask At Fashion Skills</h6>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-card2-img-3.webp"
                  alt="img"
                  width={100}
                  height={100}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>Top Ten Trends In Tech To Watch.</h6>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-card2-img-4.webp"
                  alt="img"
                  width={100}
                  height={100}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>Skills That You Can Learn From Fashion.</h6>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-card2-img-5.webp"
                  alt="img"
                  width={100}
                  height={100}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>Here’s What No One Tells You About Fashion.</h6>
              </div>
            </div>
          </Link>
        </div>
        <div className={EMStyle.slide}>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-card2-img-6.webp"
                  alt="img"
                  width={100}
                  height={100}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>Ford recalls 50,000 EV charging cables</h6>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-card2-img-7.webp"
                  alt="img"
                  width={100}
                  height={100}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>Google Drive flaw may attackers fool you into</h6>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-card2-img-8.webp"
                  alt="img"
                  width={100}
                  height={100}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>15 Questions To Ask At Fashion Skills.</h6>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-card2-img-9.webp"
                  alt="img"
                  width={100}
                  height={100}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>The Top Eleven Modern Rules Of Tech</h6>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-card2-img-10.webp"
                  alt="img"
                  width={100}
                  height={100}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>Top Ten Trends In Tech To Watch.</h6>
              </div>
            </div>
          </Link>
        </div>
      </DynamicSlider>
    );
  };

  const slider_wrap3 = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    };
    return (
      <DynamicSlider {...settings}>
        <div className={EMStyle.slide}>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-card3-img-1.webp"
                  alt="img"
                  width={400}
                  height={250}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.orange_bg}>Food</span>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>The FAA will test drone detecting in airports</h6>
                <p>
                  Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation…
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className={EMStyle.slide}>
          <Link href="/">
            <div className={EMStyle.slider_card}>
              <div className={EMStyle.image_wrap}>
                <Image
                  src="/news-card3-img-1.webp"
                  alt="img"
                  width={400}
                  height={250}
                />
              </div>
              <div className={EMStyle.card_content}>
                <div className={EMStyle.time_wrap}>
                  <span className={EMStyle.orange_bg}>Food</span>
                  <span className={EMStyle.time}>March 29, 2021</span>
                </div>
                <h6>The FAA will test drone detecting in airports</h6>
                <p>
                  Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation…
                </p>
              </div>
            </div>
          </Link>
        </div>
      </DynamicSlider>
    );
  };

  return (
    <section className={EMStyle.threeSliderWrapper}>
      <div className={EMStyle.container}>
        <div className={EMStyle.col_three_slider}>
          <div className={EMStyle.col_three}>
            <h5>Trending News</h5>
            <div className={`${EMStyle.slider_wrap} ${EMStyle.slider_wrap1}`}>
              {slider_wrap1()}
            </div>
          </div>
          <div className={EMStyle.col_three}>
            <h5>Latest News</h5>
            <div className={`${EMStyle.slider_wrap} ${EMStyle.slider_wrap2}`}>
              {slider_wrap2()}
            </div>
          </div>
          <div className={EMStyle.col_three}>
            <h5>What’s new</h5>
            <div className={`${EMStyle.slider_wrap} ${EMStyle.slider_wrap3}`}>
              {slider_wrap3()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
