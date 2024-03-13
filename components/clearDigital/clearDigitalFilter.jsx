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
    btn: "Read more",
  },
  {
    id: 2,
    imgUrl: "/clearDigital/filter_card_2.png",
    cardTitle: "The Power of Femininity in Leadership",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 3,
    imgUrl: "/clearDigital/filter_card_3.png",
    cardTitle:
      "5 Strategies Your B2B Company Should Apply to Weather a Tough Economy",
    cardParagraph: "By Steve Ohanians on August 18, 2023",
    btn: "Read more",
  },
  {
    id: 4,
    imgUrl: "/clearDigital/card_grid_img.svg",
    filterCard4: true,
    card4title: "Get our latest Insights in your inbox",
  },
  {
    id: 5,
    imgUrl: "/clearDigital/filter_card_1.png",
    cardTitle: "Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 6,
    imgUrl: "/clearDigital/filter_card_2.png",
    cardTitle: "The Power of Femininity in Leadership",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
  {
    id: 7,
    imgUrl: "/clearDigital/filter_card_3.png",
    cardTitle:
      "5 Strategies Your B2B Company Should Apply to Weather a Tough Economy",
    cardParagraph: "By Steve Ohanians on August 18, 2023",
    btn: "Read more",
  },
  {
    id: 8,
    imgUrl: "/clearDigital/filter_card_1.png",
    cardTitle: "Ensure Your Brand’s Direction by Auditing These 5 Key Areas...",
    cardParagraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, officiis? Dignissimos neque delectus veniam vitae voluptas? Reiciendis voluptate laborum maiores!",
    btn: "Read more",
  },
];

export default function ClearDigitalFilter() {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const toggleAccordion = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // useEffect(() => {
  //   // Event handler for filtering search
  //   $("#fSearch").on("keyup", function () {
  //     var value = $(this).val().toLowerCase();
  //     $(".filter_card").filter(function () {
  //       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  //     });
  //   });
  // }, []);

  useEffect(() => {
    const searchInput = document.getElementById("fSearch");
    const filterCards = document.querySelectorAll(".filter_card");

    if (searchInput) {
      searchInput.addEventListener("keyup", function (event) {
        const value = event.target.value.toLowerCase();
        filterCards.forEach((card) => {
          const cardText = card.innerText.toLowerCase();
          if (cardText.includes(value) || value === "") {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
        // filterCards.forEach((card) => {
        //   const cardText = card.innerText.toLowerCase();
        //   if (cardText.includes(value) || value === "") {
        //     card.style.display = "block";
        //     $(this).closest(".search_icon").hide;
        //   } else {
        //     card.style.display = "none";
        //     $(this).closest(".search_icon").show;
        //   }
        // });
      });
    }

    return () => {
      if (searchInput) {
        searchInput.removeEventListener("keyup");
      }
    };
  }, []);
  const showAllCards = () => {
    const filterCards = document.querySelectorAll(".filter_card");
    filterCards.forEach((card) => {
      card.style.display = "block";
    });
  };

  return (
    <>
      <section className=" clearDigital_Filter relative w-full py-[100px] bg-[#090914] ">
        <div className={`${HongoStyle.clearDigital_container}`}>
          <div className=" clearDigital_FilterWrap relative w-full flex flex-wrap  ">
            <div className="filter_header relative w-full max-w-[407px] ">
              <div className="search_wrap relative w-full mb-[30px] ">
                <input
                  type="search"
                  id="fSearch"
                  className={`${HongoStyle.clearDigital_Filter_search} relative w-full bg-transparent border-white border-[2px] border-solid text-[16px] font-medium font-poppins py-[21px] pl-[15px] pr-[40px] text-white outline-none `}
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    if (e.target.value === "") {
                      showAllCards();
                    }
                  }}
                />
                <label htmlFor="fSearch" className=" text-[0] hidden ">
                  .
                </label>
                <div className="search_icon absolute top-[22px] right-[22px] w-[25px] h-[25px] ">
                  <Image
                    src="/clearDigital/arrow_search.svg"
                    width={50}
                    height={50}
                    alt="search"
                  />
                </div>
                {/* <div className="close_icon absolute top-[23px] right-[22px] w-[20px] h-[20px] hidden ">
                  <Image
                    src="/clearDigital/icon-close-white.svg"
                    width={50}
                    height={50}
                    alt="close"
                  />
                </div> */}
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
                    className={`filter_card group ${
                      filterCard.filterCard4 === true
                        ? " before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-[5px] before:border-solid before:border-[#fa198c] "
                        : ""
                    } relative w-halfWidth mx-[15px] mb-[30px] `}
                    key={filterCard.id}
                  >
                    <div className="wrapper relative w-full min-h-[450px] flex flex-wrap items-end ">
                      <Link
                        href="/"
                        className={`${HongoStyle.redirect_link} ${
                          filterCard.filterCard4 === true ? " hidden " : ""
                        } z-10`}
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
                      <div
                        className={` ${
                          filterCard.filterCard4 === true ? " hidden " : ""
                        } card_content relative p-[50px] z-[1] group-hover:static transition duration-500 ease-in-out before:[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000080] before:transition before:duration-500 before:ease-in-out before:z-[-1]  `}
                      >
                        <h3 className=" text-white text-[30px] font-bold font-poppins leading-[39px] overflow-ellipsis line-clamp-3 transition-all duration-500 ease-in-out group-hover:overflow-visible group-hover:line-clamp-none ">
                          {filterCard.cardTitle}
                        </h3>
                        <div className="text relative w-full  h-full max-h-0 transition-all duration-500 ease-in-out  overflow-hidden group-hover:mt-5 group-hover:max-h-[1000px] ">
                          <p className=" text-white text-[16px] font-normal font-poppins leading-[24px] opacity-0 group-hover:opacity-[1] transition-opacity duration-500 ease-in-out mb-5 ">
                            {filterCard.cardParagraph}
                          </p>
                          <span
                            className={`${HongoStyle.clearDigital_textButton}`}
                          >
                            {filterCard.btn}
                          </span>
                        </div>
                      </div>
                      <div
                        className={` ${
                          filterCard.filterCard4 === true
                            ? " block "
                            : " hidden "
                        } ${
                          HongoStyle.clearDigital_card4title
                        } filter4card_content relative w-full px-[45px] py-[35px] `}
                      >
                        <h2
                          className={` w-full max-w-[349px] text-white text-[55px] leading-[61px] font-poppins font-bold mb-[50px] `}
                        >
                          {filterCard.card4title}
                        </h2>
                        <span
                          className={`${HongoStyle.clearDigital_pinkButton} inline-block w-full cursor-pointer`}
                        >
                          Sign up
                        </span>
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
