import React from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";

const hongoCol3cardData = [
  {
    id: 1,
    imageUrl: "/hongo/hongo-card-product-1.jpeg",
    h6content: "Fashion store",
    cardDetail: "Cloths, Cosmetic, Beauty, Bags",
    orangeBtn: "Popular",
    greenBtn: "Free",
  },
  {
    id: 2,
    imageUrl: "/hongo/hongo-card-product-2.jpeg",
    h6content: "Furniture store",
    cardDetail: "Interior, Handmade, Art & craft",
    orangeBtn: "Trending",
    greenBtn: "Free",
  },
  {
    id: 3,
    imageUrl: "/hongo/hongo-card-product-3.jpeg",
    h6content: "Jewellery store",
    cardDetail: "Boutique, Gift shop, Antique store",
    orangeBtn: "Trending",
    greenBtn: "Free",
  },
  {
    id: 4,
    imageUrl: "/hongo/hongo-card-product-4.jpeg",
    h6content: "Watch store",
    cardDetail: "Perfume, Statue, Apparel",
    orangeBtn: "Popular",
    greenBtn: "Free",
  },
  {
    id: 5,
    imageUrl: "/hongo/hongo-card-product-5.jpeg",
    h6content: "Lifestyle store",
    cardDetail: "Apparel, Wellness, Yoga, Travel",
    orangeBtn: "Popular",
    greenBtn: "Free",
  },
  {
    id: 6,
    imageUrl: "/hongo/hongo-card-product-6.jpeg",
    h6content: "Electronic store",
    cardDetail: "Handtool, Hardware, Equipment",
    orangeBtn: "Trending",
    greenBtn: "Free",
  },
  {
    id: 7,
    imageUrl: "/hongo/hongo-card-product-7.jpeg",
    h6content: "Shoes store",
    cardDetail: "Sportwear, Gym, Goggle, Fitness",
    orangeBtn: "Trending",
    greenBtn: "Free",
  },
  {
    id: 8,
    imageUrl: "/hongo/hongo-card-product-8.jpeg",
    h6content: "Leather store",
    cardDetail: "Handmade, Jeans, Purse, Jacket, Belt",
    orangeBtn: "Trending",
    greenBtn: "Free",
  },
  {
    id: 9,
    imageUrl: "/hongo/hongo-card-product-9.jpeg",
    h6content: "Decor store",
    cardDetail: "Handicrafts, Furniture, Chairs",
    orangeBtn: "Popular",
    greenBtn: "Free",
  },
  {
    id: 10,
    imageUrl: "/hongo/hongo-card-product-10.jpeg",
    h6content: "eBook single product store",
    cardDetail: "Book, Application, Product",
    orangeBtn: "New",
    greenBtn: "Free",
  },
  {
    id: 11,
    imageUrl: "/hongo/hongo-card-product-11.jpeg",
    h6content: "Cloth store",
    cardDetail: "Streetwear, Brand layout, Online store",
    orangeBtn: "Trending",
    greenBtn: "Free",
  },
  {
    id: 12,
    imageUrl: "/hongo/hongo-card-product-12.jpeg",
    h6content: "Grocery store",
    cardDetail: "Food, Veggie, Organic, Vegetable, dairy",
    orangeBtn: "Popular",
    greenBtn: "Free",
  },
];

export default function ColThreeCardWrapper() {
  return (
    <>
      <section
        className={` colThreeCard_wrapper  ${HongoStyle.lineOverlay} relative w-full py-[100px] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-hongoVideoImgGradient after:z-[2] `}
      >
        <div
          className={`${HongoStyle.side_animat_logo} absolute top-[-75px] right-[100px] w-[150px] h-[150px] rounded-[50%] overflow-hidden z-10 `}
        >
          <div className={`${HongoStyle.logo_bg_image} w-full h-full `}>
            <Image
              src="/hongo/animat-logo.webp"
              width={200}
              height={200}
              alt="logo"
              className=" w-full h-full object-cover "
            />
          </div>
          <div
            className={`${HongoStyle.logo_image} absolute top-0 left-0 w-full h-full z-[1] `}
          >
            <Image
              src="/hongo/animat-logo-2.webp"
              width={200}
              height={200}
              alt="logo"
              className=" w-full h-full object-contain "
            />
          </div>
        </div>
        <div className={`${HongoStyle.container_big}`}>
          <div className="intro relative w-full max-w-[675px] mx-auto z-10 mb-[60px] text-center ">
            <h2 className=" text-[55px] text-[#141416]  font-JakartaSans font-bold tracking-[-2px] leading-[55px] mb-5 ">
              Stunning designs, <br />
              <span className=" bg-clip-text text-transparent bg-hongoH1Gradient ">
                Countless possibilities.
              </span>
            </h2>
            <p className=" text-[18px] leading-[30px] text-[#7F7F8A] font-figtree font-normal ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates quae iure, labore qui dolorum corporis maiores, sequi
              totam laudantium impedit modi.
            </p>
          </div>
          <div className="col_four_wrap relative w-mainRowWith40px ml-[-20px] flex flex-wrap z-10 ">
            {hongoCol3cardData.map((hongoCol3card) => (
              <div
                className="col_four relative top-0 w-threeCardWith40px mx-5 mb-10 bg-white p-[15px] rounded-[12px] shadow-hongoCol3CardShadow hover:top-[-5px] hover:shadow-hongoCol3CardHoverShadow transition-all duration-300 ease-in-out "
                key={hongoCol3card.id}
              >
                <Link href="/" className={`${HongoStyle.redirect_link}`}>
                  .
                </Link>
                <div className="card_img relative w-full h-[386px] mb-[10px] rounded-[4px] overflow-hidden ">
                  <Image
                    src={hongoCol3card.imageUrl}
                    width={500}
                    height={500}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
                <div className="card_content relative py-[12px] px-[15px] flex flex-wrap items-center ">
                  <div className="text relative w-[calc(100%-148px)] ">
                    <h6 className=" text-[17px] leading-[26px] font-bold text-[#141416] font-JakartaSans ">
                      {hongoCol3card.h6content}
                    </h6>
                    <p className=" text-[15px] leading-[22px] text-[#7F7F8A] font-JakartaSans font-medium ">
                      {hongoCol3card.cardDetail}
                    </p>
                  </div>
                  <div className="button_wrap relative w-full max-w-[148px] flex justify-end ">
                    <Link
                      href="/"
                      className=" relative h-fit bg-[#ffe3e1] text-[#ec5b54] text-[11px] uppercase font-bold rounded-[40px] py-[7px] px-[15px] font-JakartaSans "
                    >
                      {hongoCol3card.orangeBtn}
                    </Link>
                    <Link
                      href="/"
                      className=" relative h-fit bg-[#daf3e4] text-[#329f5c] text-[11px] uppercase font-bold rounded-[40px] py-[7px] px-[15px] font-JakartaSans ml-2 "
                    >
                      {hongoCol3card.greenBtn}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className={` sign_up_banner   ${HongoStyle.lineOverlay} relative w-full pb-[100px] `}
      >
        <div className={`${HongoStyle.container}`}>
          <div className="signUp_wrap relative w-full h-full max-h-[160px] rounded-[8px] overflow-hidden z-10 ">
            <Link href="/" className={`${HongoStyle.redirect_link}`}>
              .
            </Link>
            <Image
              src="/hongo/hongo-trial-banner.jpeg"
              width={1600}
              height={300}
              alt="img"
              className=" w-full h-full object-cover "
            />
          </div>
        </div>
      </section>
    </>
  );
}
