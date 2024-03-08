import React from "react";
import Link from "next/link";
import Image from "next/image";
import EmStyle from "/styles/envato-market2.module.scss";

export default function Em2counterColFour() {
  return (
    <>
      <section className=" counterColFour relative w-full pb-24 lg:pb-14 md:!pb-10 ">
        <div className={`${EmStyle.container}`}>
          <div className="col_four_wrapper relative w-mainRowWith20px ml-[-10px] flex flex-wrap ">
            <div className="col_four relative w-fourCardWith20px mx-[10px] text-center  px-6 border-r border-solid border-r-[#e5e5e5] md:px-2 md:w-halfWidthWith20px md:mb-8 ">
              <div className="icon_wrap w-full max-w-[48px] h-[48px] mx-auto mb-4 ">
                <Image
                  src="/envato-market2/col-four-icon1.png"
                  width={100}
                  height={100}
                  alt="icon"
                  className=" w-full h-full object-contain "
                />
              </div>
              <h2 className=" relative text-[48px] text-[#001d3d] font-extrabold font-mulish leading-[1.03] lg:text-[40px] md:!text-[35px] ">
                25
              </h2>
              <p className=" text-[16px] text-[#7a7a7a] ">Experience</p>
            </div>
            <div className="col_four relative w-fourCardWith20px mx-[10px] text-center  px-6 border-r border-solid border-r-[#e5e5e5] md:px-2 md:w-halfWidthWith20px md:mb-8 md:border-r-0 ">
              <div className="icon_wrap w-full max-w-[48px] h-[48px] mx-auto mb-4 ">
                <Image
                  src="/envato-market2/col-four-icon2.png"
                  width={100}
                  height={100}
                  alt="icon"
                  className=" w-full h-full object-contain "
                />
              </div>
              <h2 className=" relative text-[48px] text-[#001d3d] font-extrabold font-mulish leading-[1.03] lg:text-[40px] md:!text-[35px] ">
                100+
              </h2>
              <p className=" text-[16px] text-[#7a7a7a] ">Happy Client</p>
            </div>
            <div className="col_four relative w-fourCardWith20px mx-[10px] text-center  px-6 border-r border-solid border-r-[#e5e5e5] md:px-2 md:w-halfWidthWith20px md:mb-8 ">
              <div className="icon_wrap w-full max-w-[48px] h-[48px] mx-auto mb-4 ">
                <Image
                  src="/envato-market2/col-four-icon3.png"
                  width={100}
                  height={100}
                  alt="icon"
                  className=" w-full h-full object-contain "
                />
              </div>
              <h2 className=" relative text-[48px] text-[#001d3d] font-extrabold font-mulish leading-[1.03] lg:text-[40px] md:!text-[35px] ">
                34+
              </h2>
              <p className=" text-[16px] text-[#7a7a7a] ">Investment</p>
            </div>
            <div className="col_four relative w-fourCardWith20px mx-[10px] text-center  px-6 md:px-2 md:w-halfWidthWith20px md:mb-8 ">
              <div className="icon_wrap w-full max-w-[48px] h-[48px] mx-auto mb-4 ">
                <Image
                  src="/envato-market2/col-four-icon4.png"
                  width={100}
                  height={100}
                  alt="icon"
                  className=" w-full h-full object-contain "
                />
              </div>
              <h2 className=" relative text-[48px] text-[#001d3d] font-extrabold font-mulish leading-[1.03] lg:text-[40px] md:!text-[35px] ">
                100+
              </h2>
              <p className=" text-[16px] text-[#7a7a7a] ">Projet Done</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
