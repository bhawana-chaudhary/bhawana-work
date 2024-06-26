import React from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";

export default function hongoFooter() {
  return (
    <>
      <footer className=" hongo_Footer relative w-full py-[100px] bg-[url('/hongo/hongo-shopify-footer-bg.jpeg')] bg-no-repeat bg-cover desktop:py-[80px] tablet:py-[70px] phablet:py-[60px] sm:py-[50px] ">
        <div className={`${HongoStyle.container}`}>
          <div className="footer_content relative w-full max-w-[820px] mx-auto text-center ">
            <h6 className=" text-[13px] text-white font-normal leading-[26px] font-JakartaSans uppercase py-1 px-[25px] rounded-[70px] border-[1px] border-solid border-[#ffffff26] w-fit mx-auto mb-[25px] phablet:text-[12px] phablet:leading-[24px] sm:text-[11px] sm:leading-[22px] sm:px-[20px] sm:mb-[20px] ">
              ONE-TIME PAYMENT, NO MONTHLY FEES.
            </h6>
            <h2 className=" text-[90px] leading-[90px] font-JakartaSans font-semibold text-white mb-[30px] desktop:text-[70px] desktop:leading-[70px] tablet:text-[60px] tablet:leading-[60px] phablet:text-[45px] phablet:leading-[45px] sm:text-[40px] sm:leading-[40px] sm:mb-5 ">
              Skyrocket your sales to{" "}
              <em className=" font-playfairDisplay font-bold ">new levels!</em>
            </h2>
            <p className=" w-full max-w-[553px] text-[20px] leading-[32px] text-[#7f7f8a] font-figtree font-normal mx-auto mb-10 phablet:text-[18px] phablet:leading-[30px] phablet:mb-8 sm:text-[16px] sm:leading-[28px] sm:mb-6 ">
              A single license includes 6 months of free support, free lifetime
              updates and all the features listed above.
            </p>
            <div
              className={`${HongoStyle.hongo_button} ${HongoStyle.hongo_footer_button} mx-auto `}
            >
              <Link href="/" className={`${HongoStyle.redirect_link}`}>
                .
              </Link>
              <div className={`${HongoStyle.text}`}>
                <span className={`${HongoStyle.top_text}`}>Purchase now</span>
                <span className={`${HongoStyle.bottom_text}`}>
                  Purchase now
                </span>
              </div>
              <div className={`${HongoStyle.icon}`}>
                <Image
                  src="/hongo/icon-shopping-cart.png"
                  width={50}
                  height={50}
                  alt="icon"
                  className=" w-full h-full object-contain "
                />
              </div>
            </div>
            <div className="bottom_content relative w-full flex justify-center items-center mt-[80px] tablet:mt-[65px] phablet:mt-[50px] sm:mt-[35px] ">
              <p className="text-[17px] leading-[26px] text-[#7f7f8a] font-figtree font-normal mx-[5px] md:text-[15px] md:leading-[22px] ">
                Powered by
              </p>
              <div className="footer_logo w-full max-w-[163px] h-[36px] mx-[5px] md:max-w-[140px] md:h-[31px] ">
                <Image
                  src="/hongo/hongo-shopify-footer-logo.webp"
                  width={200}
                  height={50}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
