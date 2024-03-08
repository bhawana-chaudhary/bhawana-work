import React from "react";
import Link from "next/link";
import Image from "next/image";
import EMStyle from "../styles/envato-market.module.scss";

const colTwoData = [
  {
    id: 1,
    imageUrl: "/video-img1.webp",
    top_content: "Tech",
    date: "March 29, 2021",
    title: "Top Ten Trends In Tech To Watch.",
  },
  {
    id: 2,
    imageUrl: "/video-img2.webp",
    top_content: "Tech",
    date: "March 29, 2021",
    title: "All You Need To Know About Food.",
  },
];

export default function EmColTwo({ onVideoItemClick }) {
  return (
    <>
      <section className={`${EMStyle.emColTwo} pb-20 pt-5`}>
        <div className={EMStyle.container}>
          <div
            className={`${EMStyle.col_two_wrap} relative w-mainRow ml-[-15px] flex flex-wrap  max-[768px]:w-full max-[768px]:ml-0`}
          >
            {colTwoData.map((colTwo) => (
              <div
                key={colTwo.id}
                className={`${EMStyle.col_two} group cursor-pointer relative w-halfWidth mx-[15px] min-h-[266px] rounded-lg overflow-hidden flex flex-wrap items-end p-5 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-linear2 before:z-10 hover:before:bg-gradient-linear2-hover before:transition-all duration-300  max-[768px]:w-full max-[768px]:mx-auto max-[768px]:max-w-[480px] max-[768px]:mb-[30px]`}
                onClick={() => onVideoItemClick(colTwo)}
              >
                <div
                  className={`${EMStyle.image_wrap} absolute top-0 left-0 w-full h-full`}
                >
                  <Image
                    src={colTwo.imageUrl}
                    alt="img"
                    width={500}
                    height={300}
                    className=" w-full h-full object-cover scale-[1] group-hover:scale-[1.05] transition-transform duration-700"
                  />
                </div>
                <div
                  className={`${EMStyle.play_icon} absolute top-[50%] left-[50%] w-[80px] h-[80px] transform translate-x-[-50%] translate-y-[-50%] bg-[rgba(255,190,0,.8)] flex justify-center items-center rounded-full z-10`}
                >
                  <div className={`${EMStyle.icon}`}>
                    <Image
                      src="/icon-play.png"
                      alt="icon"
                      width={20}
                      height={20}
                      className={`w-[20px] h-[20px] object-contain`}
                    />
                  </div>
                </div>
                <div className={`${EMStyle.card_content} relative z-10`}>
                  <div className="top-content w-full mb-3">
                    <span className="relative px-3 py-1.5 bg-blue-500 rounded-md text-white group-hover:bg-blue-600 transition-colors duration-500">
                      {colTwo.top_content}
                    </span>
                  </div>
                  <div className={`${EMStyle.time_wrap}  mb-2`}>
                    <span
                      className={`${EMStyle.time} text-white font-inter text-sm pl-5 relative before:content-[''] before:absolute before:top-0.5 before:left-0 before:bg-[url('/icon-time.svg')] before:w-[14px] before:h-[14px] before:bg-cover`}
                    >
                      {colTwo.date}
                    </span>
                  </div>
                  <h6 className="text-white font-rubik text-lg transition-colors duration-300">
                    {colTwo.title}
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
