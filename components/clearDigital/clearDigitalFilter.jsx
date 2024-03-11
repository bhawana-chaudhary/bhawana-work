import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";
import $ from "jquery";

const filtercardData = [
  {
    id: 1,
    imgUrl: "/clearDigital/filter_card_1.png",
    cardTitle: "Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
  },
  {
    id: 2,
    imgUrl: "/clearDigital/filter_card_2.png",
    cardTitle: "The Power of Femininity in Leadership",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
  },
  {
    id: 3,
    imgUrl: "/clearDigital/filter_card_3.png",
    cardTitle:
      "5 Strategies Your B2B Company Should Apply to Weather a Tough Economy",
    cardParagraph: "By Steve Ohanians on August 18, 2023",
  },
  {
    id: 4,
    imgUrl: "/clearDigital/card_grid_img.svg",
    cardTitle: "The Power of Femininity in Leadership",
  },
  {
    id: 5,
    imgUrl: "/clearDigital/filter_card_1.png",
    cardTitle: "Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
  },
  {
    id: 6,
    imgUrl: "/clearDigital/filter_card_2.png",
    cardTitle: "The Power of Femininity in Leadership",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
  },
  {
    id: 7,
    imgUrl: "/clearDigital/filter_card_3.png",
    cardTitle:
      "5 Strategies Your B2B Company Should Apply to Weather a Tough Economy",
    cardParagraph: "By Steve Ohanians on August 18, 2023",
  },
  {
    id: 8,
    imgUrl: "/clearDigital/filter_card_1.png",
    cardTitle: "Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
  },
];

export default function ClearDigitalFilter() {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    $("#fSearch").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $(".filter_card").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  }, []);

  return (
    <>
      <section className=" clearDigital_Filter relative w-full py-[100px] bg-[#090914] ">
        <div className={`${HongoStyle.container_big}`}>
          <div className=" clearDigital_FilterWrap relative w-full flex flex-wrap  ">
            <div className="filter_header relative w-full max-w-[407px] ">
              <div className="search_wrap relative w-full mb-[30px] after:content-[''] after:absolute after:top-[20px] after:right-[20px] after:w-[25px] after:h-[25px] after:bg-[url('/clearDigital/arrow_search.svg')] after:bg-no-repeat after:bg-contain ">
                <input
                  type="search"
                  id="fSearch"
                  className=" relative w-full bg-transparent border-white border-[2px] border-solid text-[16px] font-medium font-poppins py-[21px] pl-[15px] pr-[40px] text-white outline-none "
                />
                <label htmlFor="fSearch" className=" text-[0] hidden ">
                  .
                </label>
              </div>
              <h5 className=" text-white text-[20px] font-bold font-poppins leading-[24px] mb-8 ">
                Filter all insights
              </h5>
              <div className="filter_searchData flex flex-wrap justify-between mb-8 ">
                <h6 className=" text-white text-[16px] font-normal font-poppins leading-[24px] ">
                  200 results
                </h6>
                <span className=" text-[#fa198c] text-[16px] font-bold font-poppins leading-[24px] ">
                  Clear all
                </span>
              </div>
              {/* <ul className=" filter_list_item relative w-full list-none ">
                <li className=" relative w-full border-t-[1px] border-t-[#989898] border-solid pt-[30px] px-10 mb-[30px] ">
                  <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] relative w-full inline-block  after:content-[''] after:absolute after:top-[0] after:right-[0] after:w-[24px] after:h-[24px] after:bg-[url('/clearDigital/arrow-up.svg')] after:bg-no-repeat after:bg-contain after:rotate-180 ">
                    By Topic
                  </span>
                  <ul className=" relative w-full list-none mt-5 ">
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Brand Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Content Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Digital Marketing Process
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Digital Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Innovation & Trends
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Web Development
                      </span>
                    </li>
                  </ul>
                </li>
                <li className=" relative w-full border-t-[1px] border-t-[#989898] border-solid pt-[30px] px-10 mb-[30px] ">
                  <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] relative w-full inline-block  after:content-[''] after:absolute after:top-[0] after:right-[0] after:w-[24px] after:h-[24px] after:bg-[url('/clearDigital/arrow-up.svg')] after:bg-no-repeat after:bg-contain after:rotate-180 ">
                    By Solution
                  </span>
                  <ul className=" relative w-full list-none mt-5 ">
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Brand Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Content Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Digital Marketing Process
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Digital Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Innovation & Trends
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Web Development
                      </span>
                    </li>
                  </ul>
                </li>
                <li className=" relative w-full border-t-[1px] border-t-[#989898] border-solid pt-[30px] px-10 mb-[30px] ">
                  <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] relative w-full inline-block  after:content-[''] after:absolute after:top-[0] after:right-[0] after:w-[24px] after:h-[24px] after:bg-[url('/clearDigital/arrow-up.svg')] after:bg-no-repeat after:bg-contain after:rotate-180 ">
                    By Content Type
                  </span>
                  <ul className=" relative w-full list-none mt-5 ">
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Brand Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Content Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Digital Marketing Process
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Digital Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Innovation & Trends
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Web Development
                      </span>
                    </li>
                  </ul>
                </li>
              </ul> */}
              <ul className=" filter_list_item relative w-full list-none ">
                <li className=" relative w-full border-t-[1px] border-t-[#989898] border-solid pt-[30px] px-10 mb-[30px] ">
                  <span
                    className={`text-white text-[16px] font-bold font-poppins leading-[20px] relative w-full inline-block after:content-[''] after:absolute after:top-[0] after:right-[0] after:w-[24px] after:h-[24px] after:bg-[url('/clearDigital/arrow-up.svg')] after:bg-no-repeat after:bg-contain ${
                      openAccordionIndex === 0 ? "after:rotate-180" : ""
                    }`}
                    onClick={() => toggleAccordion(0)}
                  >
                    By Topic
                  </span>
                  <ul
                    className={`relative w-full list-none ${
                      openAccordionIndex === 0
                        ? "h-auto opacity-1  mt-5 overflow-y-hidden will-change-auto "
                        : "h-0 opacity-0  mt-0 overflow-y-hidden "
                    }`}
                  >
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Brand Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Content Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Digital Marketing Process
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Digital Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Innovation & Trends
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Web Development
                      </span>
                    </li>
                  </ul>
                </li>
                <li className=" relative w-full border-t-[1px] border-t-[#989898] border-solid pt-[30px] px-10 mb-[30px] ">
                  <span
                    className={`text-white text-[16px] font-bold font-poppins leading-[20px] relative w-full inline-block after:content-[''] after:absolute after:top-[0] after:right-[0] after:w-[24px] after:h-[24px] after:bg-[url('/clearDigital/arrow-up.svg')] after:bg-no-repeat after:bg-contain ${
                      openAccordionIndex === 1 ? "after:rotate-180" : ""
                    }`}
                    onClick={() => toggleAccordion(1)}
                  >
                    By Solution
                  </span>
                  <ul
                    className={`relative w-full list-none ${
                      openAccordionIndex === 1
                        ? "h-auto opacity-1  mt-5 overflow-y-hidden will-change-auto "
                        : "h-0 opacity-0  mt-0 overflow-y-hidden "
                    }`}
                  >
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        2 Brand Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Content Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Digital Marketing Process
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Digital Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Innovation & Trends
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Web Development
                      </span>
                    </li>
                  </ul>
                </li>
                <li className=" relative w-full border-t-[1px] border-t-[#989898] border-solid pt-[30px] px-10 mb-[30px] ">
                  <span
                    className={`text-white text-[16px] font-bold font-poppins leading-[20px] relative w-full inline-block after:content-[''] after:absolute after:top-[0] after:right-[0] after:w-[24px] after:h-[24px] after:bg-[url('/clearDigital/arrow-up.svg')] after:bg-no-repeat after:bg-contain ${
                      openAccordionIndex === 2 ? "after:rotate-180" : ""
                    }`}
                    onClick={() => toggleAccordion(2)}
                  >
                    By Content Type
                  </span>
                  <ul
                    className={`relative w-full list-none ${
                      openAccordionIndex === 2
                        ? "h-auto opacity-1  mt-5 overflow-y-hidden will-change-auto "
                        : "h-0 opacity-0  mt-0 overflow-y-hidden "
                    }`}
                  >
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        3 Brand Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Content Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Digital Marketing Process
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Digital Strategy
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Innovation & Trends
                      </span>
                    </li>
                    <li className=" relative w-full mb-4 ">
                      <span className=" text-white text-[16px] font-bold font-poppins leading-[20px] ">
                        Web Development
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="filter_card_wrapper relative w-[calc(100%-407px)] pl-24 ">
              <div className="text_wrap relative w-full mb-10 ">
                <h2 className=" text-white text-[55px] font-bold font-poppins leading-[61px] tracking-[-2%] ">
                  All Insights
                </h2>
              </div>
              <div className="card_wrapper relative w-mainRow ml-[-15px] flex flex-wrap ">
                {filtercardData.map((filterCard) => (
                  <div
                    className="filter_card group relative w-halfWidth mx-[15px] mb-[30px] min-h-[552px] flex flex-wrap items-end "
                    key={filterCard.id}
                  >
                    <Link
                      href="/"
                      className={`${HongoStyle.redirect_link} z-10`}
                    >
                      .
                    </Link>
                    <div className="img_wrap absolute top-0 left-0 w-full h-full ">
                      <Image
                        src={filterCard.imgUrl}
                        width={1000}
                        height={1000}
                        alt="card_img"
                        className=" w-full h-full object-cover "
                      />
                    </div>
                    <div className="card_content relative p-[50px] bg-[#00000080] z-[1] ">
                      <h3 className=" text-white text-[30px] font-bold font-poppins leading-[39px] overflow-ellipsis line-clamp-3 transition-all duration-500 ease-in-out group-hover:overflow-visible group-hover:line-clamp-none ">
                        {filterCard.cardTitle}
                      </h3>
                      <div className="text relative w-full mt-5 h-full max-h-0 transition-all duration-500 ease-in-out  overflow-hidden group-hover:max-h-[1000px] group-hover:will-change-auto ">
                        <p className=" text-white text-[16px] font-normal font-poppins leading-[24px] opacity-0 group-hover:opacity-[1] transition-opacity duration-500 ease-in-out ">
                          {filterCard.cardParagraph}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
