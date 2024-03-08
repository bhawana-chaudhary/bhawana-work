import React from "react";
import Link from "next/link";
import Image from "next/image";
import EMStyle from "../styles/envato-market.module.scss";
// import Tailwind from "@/tailwind.config";

const cardData = [
  {
    id: 1,
    imageUrl: "/grid-img1.webp",
    top_content: "Fashion",
    date: "March 29, 2021",
    title: "Skills That You Can Learn From Fashion.",
  },
  {
    id: 2,
    imageUrl: "/grid-img2.webp",
    top_content: "Fashion",
    date: "March 29, 2021",
    title: "Skills That You Can Learn From Fashion.",
  },
  {
    id: 3,
    imageUrl: "/grid-img3.webp",
    top_content: "Food",
    date: "March 29, 2021",
    title: "Skills That You Can Learn From Fashion.",
  },
  {
    id: 4,
    imageUrl: "/grid-img4.webp",
    top_content: "Fashion",
    date: "March 29, 2021",
    title: "Skills That You Can Learn From Fashion.",
  },
  {
    id: 5,
    imageUrl: "/grid-img5.webp",
    top_content: "Fashion",
    date: "March 29, 2021",
    title: "Skills That You Can Learn From Fashion.",
  },
  {
    id: 6,
    imageUrl: "/grid-img6.webp",
    top_content: "Food",
    date: "March 29, 2021",
    title: "Skills That You Can Learn From Fashion.",
  },
];

export default function EmColThreeGrid() {
  return (
    <>
      <section className="emColThreeGrid relative w-full py-8">
        <div className={EMStyle.container}>
          <div
            className={`${EMStyle.col_three_grid} w-mainRow ml-[-15px] flex flex-wrap max-[768px]:w-full max-[768px]:ml-0`}
          >
            {cardData.map((card) => (
              <Link
                key={card.id}
                href="/"
                className="w-threeCard mx-[15px] mb-[30px]  max-[991px]:w-halfWidth  max-[768px]:w-full max-[768px]:mx-auto max-[768px]:max-w-[480px]"
              >
                <div
                  className={`${EMStyle.slider_card} group w-full flex flex-wrap items-end relative min-h-[250px] rounded-lg overflow-hidden p-5 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-linear before:z-10 hover:before:bg-gradient-linear-hover before:transition-all duration-300`}
                >
                  <div
                    className={`${EMStyle.image_wrap} absolute top-0 left-0 w-full h-full`}
                  >
                    <Image
                      src={card.imageUrl}
                      alt="img"
                      width={350}
                      height={250}
                      className=" w-full h-full object-cover scale-[1] group-hover:scale-[1.05] transition-transform duration-300"
                    />
                  </div>
                  <div className="top-content  z-10 absolute top-5 left-0 w-full pl-5">
                    <span className="relative px-3 py-1.5 bg-orange-600 rounded-md text-white group-hover:bg-orange-500 transition-colors duration-300">
                      {card.top_content}
                    </span>
                  </div>
                  <div className={`${EMStyle.card_content} relative z-10`}>
                    <div className={EMStyle.time_wrap}>
                      <span
                        className={`${EMStyle.time} text-white font-inter text-sm pl-5 relative before:content-[''] before:absolute before:top-0.5 before:left-0 before:bg-[url('/icon-time.svg')] before:w-[14px] before:h-[14px] before:bg-cover`}
                      >
                        {card.date}
                      </span>
                    </div>
                    <h6 className="text-white font-rubik text-lg group-hover:text-amber-600 transition-colors duration-300">
                      {card.title}
                    </h6>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
