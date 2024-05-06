import React from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "../../styles/asliOne.module.scss";

const colThreeData = [
  {
    id: 1,
    cardImgUrl: "/asli/card_img_1.webp",
    cardText: "Infinite List / Images Hover / WebGL",
  },
  {
    id: 2,
    cardImgUrl: "/asli/card_img_2.webp",
    cardText: "Click & Hold / WebGL",
  },
  {
    id: 3,
    cardImgUrl: "/asli/card_img_3.webp",
    cardText: "Fullscreen Slider / Rectangle Mask",
  },
  {
    id: 4,
    cardImgUrl: "/asli/card_img_4.webp",
    cardText: "Infinite List / Tripple Lanes / WebGL",
  },
  {
    id: 5,
    cardImgUrl: "/asli/card_img_5.webp",
    cardText: "Fullscreen Slider / Oval Mask",
  },
  {
    id: 6,
    cardImgUrl: "/asli/card_img_6.webp",
    cardText: "Infinite List / Linked Headings & Images / WebGL",
  },
];

export default function ColThreeCard({ card, setIsCardHovered }) {
  return (
    <>
      <section className="colThree_Card relative w-full bg-[#777777] px-5 ">
        <div className="col_three_card_wrap  relative w-full max-w-[1500px] mx-auto ">
          <div className="card_wrapper relative w-mainRowWith40px ml-[-20px] flex flex-wrap ">
            {colThreeData.map((colThree) => (
              <div
                className={` ${Style.card} card relative w-threeCardWith40px mx-[20px] mt-14 group cursor-none `}
                key={colThree}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
              >
                <Link href="/" className={`${Style.redirect_link} cursor-none`}>
                  .
                </Link>
                <div className=" group-hover:scale-[0.98] transition-transform duration-500 ease-in-out overflow-hidden ">
                  <div className="image_wrap w-full h-[266px] group-hover:scale-[1.02] transition-transform duration-500 ease-in-out ">
                    <Image
                      src={colThree.cardImgUrl}
                      width={500}
                      height={500}
                      alt="card_img"
                      className=" w-full h-full object-cover "
                    />
                  </div>
                </div>
                <div className="card_text mt-5 ">
                  <h6 className=" text-[16px] text-white font-nunitoSans font-semibold ">
                    {colThree.cardText}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
