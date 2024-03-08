import React from "react";
import Link from "next/link";
import Image from "next/image";
import EmStyle from "/styles/envato-market2.module.scss";

export default function Em2ColThreeCard() {
  return (
    <>
      <section className=" col_three_card relative w-full bg-white py-16 z-[2] lg:pb-0 md:pt-12 ">
        <div className={` ${EmStyle.container} `}>
          <div className=" relative w-mainRow ml-[-15px] flex flex-wrap md:w-full md:ml-0  ">
            <div className=" group relative w-threeCard mx-[15px] bg-white flex flex-wrap items-center rounded-[30px] min-h-[170px] p-[22px] hover:shadow-em2ThreeCardShadow transition duration-300 ease-in-out border-[1px] border-[#e5e5e5] border-solid lg:w-halfWidth lg:mb-7 md:!w-full md:max-w-[400px] md:mx-auto ">
              <Link href="/" className={`${EmStyle.redirect_link}`}>
                .
              </Link>
              <div className=" relative w-full max-w-[80px] md:max-w-[56px]  ">
                <div className=" relative max-w-[56px] h-[56px] group-hover:scale-[1.1] transition duration-300 ease-in-out ">
                  <Image
                    src="/envato-market2/power-line.png"
                    alt="icon"
                    width={80}
                    height={80}
                    className=" w-full h-full object-contain "
                  />
                </div>
              </div>
              <div className="card_content relative w-[calc(100%-80px)] pl-4 pb-7 md:w-[calc(100%-56px)] ">
                <h4 className=" relative text-[24px] text-[#001d3d] font-extrabold font-mulish mb-3 pb-3  border-b-[1px] border-b-[#e5e5e5] border-b-solid ">
                  Renewable Energy
                </h4>
                <p className=" text-[16px] text-[#7a7a7a] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="icon_arrow absolute bottom-[-26px] right-[20px] max-w-[70px] h-[70px] rounded-[50%] overflow-hidden group-hover:scale-[1.08] transition duration-300 ease-in-out ">
                <Image
                  src="/envato-market2/right-arrow-orange.png"
                  alt="icon"
                  width={80}
                  height={80}
                  className=" w-full h-full object-contain "
                />
              </div>
            </div>
            <div className=" group relative w-threeCard mx-[15px] bg-white flex flex-wrap items-center rounded-[30px] min-h-[170px] p-[22px] hover:shadow-em2ThreeCardShadow transition duration-300 ease-in-out border-[1px] border-[#e5e5e5] border-solid lg:w-halfWidth lg:mb-7 md:!w-full md:max-w-[400px] md:mx-auto ">
              <Link href="/" className={`${EmStyle.redirect_link}`}>
                .
              </Link>
              <div className=" relative w-full max-w-[80px] md:max-w-[56px]  ">
                <div className=" relative max-w-[56px] h-[56px] group-hover:scale-[1.1] transition duration-300 ease-in-out ">
                  <Image
                    src="/envato-market2/time.png"
                    alt="icon"
                    width={80}
                    height={80}
                    className=" w-full h-full object-contain "
                  />
                </div>
              </div>
              <div className="card_content relative w-[calc(100%-80px)] pl-4 pb-7 md:w-[calc(100%-56px)] ">
                <h4 className=" relative text-[24px] text-[#001d3d] font-extrabold font-mulish mb-3 pb-3  border-b-[1px] border-b-[#e5e5e5] border-b-solid ">
                  Latest Technology
                </h4>
                <p className=" text-[16px] text-[#7a7a7a] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="icon_arrow absolute bottom-[-26px] right-[20px] max-w-[70px] h-[70px] rounded-[50%] overflow-hidden group-hover:scale-[1.08] transition duration-300 ease-in-out ">
                <Image
                  src="/envato-market2/right-arrow-orange.png"
                  alt="icon"
                  width={80}
                  height={80}
                  className=" w-full h-full object-contain "
                />
              </div>
            </div>
            <div className=" group relative w-threeCard mx-[15px] bg-white flex flex-wrap items-center rounded-[30px] min-h-[170px] p-[22px] hover:shadow-em2ThreeCardShadow transition duration-300 ease-in-out border-[1px] border-[#e5e5e5] border-solid lg:w-halfWidth lg:mb-7 md:!w-full md:max-w-[400px] md:mx-auto ">
              <Link href="/" className={`${EmStyle.redirect_link}`}>
                .
              </Link>
              <div className=" relative w-full max-w-[80px] md:max-w-[56px]  ">
                <div className=" relative max-w-[56px] h-[56px] group-hover:scale-[1.1] transition duration-300 ease-in-out ">
                  <Image
                    src="/envato-market2/industry.png"
                    alt="icon"
                    width={80}
                    height={80}
                    className=" w-full h-full object-contain "
                  />
                </div>
              </div>
              <div className="card_content relative w-[calc(100%-80px)] pl-4 pb-7 md:w-[calc(100%-56px)] ">
                <h4 className=" relative text-[24px] text-[#001d3d] font-extrabold font-mulish mb-3 pb-3  border-b-[1px] border-b-[#e5e5e5] border-b-solid ">
                  Industry Solution
                </h4>
                <p className=" text-[16px] text-[#7a7a7a] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="icon_arrow absolute bottom-[-26px] right-[20px] max-w-[70px] h-[70px] rounded-[50%] overflow-hidden group-hover:scale-[1.08] transition duration-300 ease-in-out ">
                <Image
                  src="/envato-market2/right-arrow-orange.png"
                  alt="icon"
                  width={80}
                  height={80}
                  className=" w-full h-full object-contain "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
