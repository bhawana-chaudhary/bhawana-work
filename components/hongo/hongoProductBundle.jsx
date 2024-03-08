import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";
import HongoIntro from "../hongo/hongoIntro";

const hongoProductData = [
  {
    id: 1,
    features: "Product bundles",
    cost: "$180.00",
    rate: "0.3%",
    hongo: "Free",
  },
  {
    id: 2,
    features: "Pre-purchase upsell",
    cost: "$180.00",
    rate: "0.25%",
    hongo: "Free",
  },
  {
    id: 3,
    features: "In-cart recommendations",
    cost: "$144.00",
    rate: "0.5%",
    hongo: "Free",
  },
  {
    id: 4,
    features: "Free shipping goal",
    cost: "$140.00",
    rate: "0.22%",
    hongo: "Free",
  },
  {
    id: 5,
    features: "Countdown timer",
    cost: "$80.00",
    rate: "0.20%",
    hongo: "Free",
  },
  {
    id: 6,
    features: "Stock countdown",
    cost: "$40.00",
    rate: "0.20%",
    hongo: "Free",
  },
  {
    id: 7,
    features: "Size chart",
    cost: "$79.00",
    rate: "0.1%",
    hongo: "Free",
  },
  {
    id: 8,
    features: "Popup",
    cost: "$180.00",
    rate: "0.85%",
    hongo: "Free",
  },
  {
    id: 9,
    features: "Cart drawer",
    cost: "$108.00",
    rate: "0.4%",
    hongo: "Free",
  },
  {
    id: 10,
    features: "Smart search",
    cost: "$140.00",
    rate: "0.35%",
    hongo: "Free",
  },
  {
    id: 11,
    features: "Product filters",
    cost: "$360.00",
    rate: "0.8%",
    hongo: "Free",
  },
  {
    id: 12,
    features: "Color swatches",
    cost: "$240.00",
    rate: "0.2%",
    hongo: "Free",
  },
  {
    id: 13,
    features: "Advanced mega menu",
    cost: "$60.00",
    rate: "0.15%",
    hongo: "Free",
  },
  {
    id: 14,
    features: "Cookie consent bar",
    cost: "$36.00",
    rate: "0.08%",
    hongo: "Free",
  },
  {
    id: 15,
    features: "Product quick view",
    cost: "$79.00",
    rate: "0.25%",
    hongo: "Free",
  },
  {
    id: 16,
    features: "Sticky add-to-cart",
    cost: "$60.00",
    rate: "1.45%",
    hongo: "Free",
  },
  {
    id: 17,
    features: "Recently viewed products",
    cost: "$36.00",
    rate: "0.2%",
    hongo: "Free",
  },
  {
    id: 18,
    features: "Wishlist",
    cost: "$60.00",
    rate: "0.2%",
    hongo: "Free",
  },
  {
    id: 19,
    features: "Product compare",
    cost: "$60.00",
    rate: "0.15%",
    hongo: "Free",
  },
  {
    id: 20,
    features: "LookBook",
    cost: "$290.00",
    rate: "0.25%",
    hongo: "Free",
  },
];

export default function HongoProductBundle() {
  // const [isExpanded, setIsExpanded] = useState(false);

  // const handleButtonClick = () => {
  //   setIsExpanded(!isExpanded);
  // };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleTable = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <HongoIntro
        padding="100px 0 60px"
        introClassName={HongoStyle.lineOverlay}
        title="Save $2550+ per year with our in-built ,"
        subtitle="Hongo features."
      />
      <section
        className={` productBundle_wrapper ${HongoStyle.lineOverlay} pb-[100px] `}
      >
        <div className={`${HongoStyle.container}`}>
          <div className="table_wrap relative w-full bg-white shadow-hongoCol3CardHoverShadow rounded-[10px] p-[15px] z-10 ">
            <div
              className={`productTable relative w-full overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? "h-auto" : "h-[700px]"
              }`}
            >
              <table className=" relative w-full text-center ">
                <thead className=" relative w-full bg-[#eeeeef] ">
                  <tr
                    className=" relative w-full rounded-[5px] "
                    style={{ borderRadius: "10px" }}
                  >
                    <th className=" relative w-[25%] p-[15px] text-[#141416]  font-JakartaSans font-semibold text-[17px] leading-[26px] ">
                      Features
                    </th>
                    <th className=" relative w-[25%] p-[15px] text-[#141416]  font-JakartaSans font-semibold text-[17px] leading-[26px] border-l-[1px] border-solid border-l-[#e4e4e4] ">
                      Shopify app cost
                    </th>
                    <th className=" relative w-[25%] p-[15px] text-[#141416]  font-JakartaSans font-semibold text-[17px] leading-[26px] border-l-[1px] border-solid border-l-[#e4e4e4] ">
                      Conversion rate
                    </th>
                    <th className=" relative w-[25%] p-[15px] text-[#141416]  font-JakartaSans font-semibold text-[17px] leading-[26px] border-l-[1px] border-solid border-l-[#e4e4e4] ">
                      Hongo
                    </th>
                  </tr>
                </thead>
                <tbody className=" relative w-full ">
                  {hongoProductData.map((hongoTableData, index) => (
                    <tr
                      className={` relative w-full rounded-[5px] ${
                        index % 2 === 0 ? "bg-transparent" : "bg-[#f8f8f8]"
                      } `}
                      key={hongoTableData.id}
                    >
                      <td className=" relative w-[25%] text-[#7f7f8a] text-[17px] font-normal leading-[26px] font-figtree p-[15px] ">
                        {hongoTableData.features}
                      </td>
                      <td className=" relative w-[25%] text-[#7f7f8a] text-[17px] font-normal leading-[26px] font-figtree p-[15px] border-l-[1px] border-solid border-l-[#e4e4e4] ">
                        {hongoTableData.cost}
                      </td>
                      <td className=" relative w-[25%] text-[#7f7f8a] text-[17px] font-normal leading-[26px] font-figtree p-[15px] border-l-[1px] border-solid border-l-[#e4e4e4] ">
                        {hongoTableData.rate}
                      </td>
                      <td className=" relative w-[25%] text-[#329f5c] text-[17px] font-normal leading-[26px] font-figtree p-[15px] border-l-[1px] border-solid border-l-[#e4e4e4] ">
                        <span className=" relative pl-[24px] before:absolute before:top-[2px] before:left-0 before:w-[17px] before:h-[17px] before:rounded-[50%] before:bg-[url('/hongo/icon-check-mark.svg')] before:bg-no-repeat before:bg-contain ">
                          {hongoTableData.hongo}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div
                className={`table_button_wrapper absolute bottom-0 left-0 w-full py-[50px] flex justify-center bg-hongoTableFootGradient ${
                  isExpanded ? "hidden" : ""
                }`}
              >
                <div
                  className={`${HongoStyle.hongo_leftIcon_button} bg-white border-[2px] border-solid border-white cursor-pointer  shadow-hongoCol3CardHoverShadow `}
                  onClick={toggleTable}
                >
                  <div className={`${HongoStyle.icon}`}>
                    <Image
                      src="/hongo/icon-download.png"
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                  <div className={`${HongoStyle.text}`}>
                    <span className={`${HongoStyle.top_text} text-[#141419] `}>
                      View more
                    </span>
                    <span
                      className={`${HongoStyle.bottom_text} text-[#141419] `}
                    >
                      View more
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ul className=" relative w-full flex bg-[#141416] rounded-[5px] overflow-hidden ">
              <li className=" relative w-[25%] text-white pt-[18px] pb-5 px-[18px] text-center flex flex-wrap items-center justify-center ">
                <p className=" w-full text-center text-[22px] font-semibold font-figtree ">
                  Total
                </p>
              </li>
              <li className=" relative w-[25%] text-white pt-[18px] pb-5 px-[18px] text-center flex flex-wrap items-center justify-center  border-l-[1px] border-solid border-l-[#e4e4e433] ">
                <p className=" w-full text-center text-[22px] font-semibold font-figtree ">
                  <strike>+$2,552.00/year</strike>
                </p>
                <span className=" relative block text-[15px] font-normal  font-figtree text-[#7f7f8a] ">
                  Standalone cost
                </span>
              </li>
              <li className=" relative w-[25%] text-white pt-[18px] pb-5 px-[18px] text-center flex flex-wrap items-center justify-center  border-l-[1px] border-solid border-l-[#e4e4e433] ">
                <p className=" w-full text-center text-[22px] font-semibold font-figtree ">
                  +7.1%*{" "}
                </p>
                <span className=" relative block text-[15px] font-normal  font-figtree text-[#7f7f8a] ">
                  Expected CR increase
                </span>
              </li>
              <li className=" relative w-[25%] text-white pt-[18px] pb-5 px-[18px] text-center flex flex-wrap items-center justify-center bg-hongoTableLiGradient ">
                <p className=" w-full text-center text-[28px] font-semibold font-figtree ">
                  Only $79*
                </p>
                <span className=" relative block text-[15px] font-normal  font-figtree text-white ">
                  No monthly fee
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
