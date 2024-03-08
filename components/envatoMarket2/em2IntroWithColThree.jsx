import React from "react";
import Link from "next/link";
import Image from "next/image";
import EmStyle from "/styles/envato-market2.module.scss";

export default function Em2IntroWithColThree() {
  return (
    <>
      <section className=" introWithColThree relative w-full py-20 bg-white lg:py-14 md:!pt-12 md:!pb-8 ">
        <div className={`${EmStyle.container}`}>
          <div className="paraColThree_content relative z-10 ">
            <div className="intro w-full max-w-[550px] text-center mx-auto ">
              <h2 className=" relative text-[48px] text-[#001d3d] font-extrabold font-mulish leading-[1.03] mb-5 md:mb-4 lg:text-[40px] md:!text-[35px] ">
                Blog & Article
              </h2>
              <p className=" text-[16px] text-[#7a7a7a] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="col_three_wrap relative w-mainRow flex flex-wrap ml-[-15px] mt-14 pb-8 lg:mt-10 md:!mt-7 md:w-full md:ml-0 ">
              <div className="col_three group relative w-threeCard mx-[15px] shadow-em2imgContentShadow2 bg-white rounded-[30px] overflow-hidden lg:w-halfWidth lg:mb-[30px] md:!w-full md:max-w-[400px] md:mx-auto ">
                <Link href="/" className={`${EmStyle.redirect_link}`}>
                  .
                </Link>
                <div className="img_wrap relative w-full h-[238px] overflow-hidden ">
                  <Image
                    src="/envato-market2/col-three-img1.jpeg"
                    width={400}
                    height={300}
                    alt="card-img"
                    className=" w-full h-full object-cover group-hover:rotate-3 group-hover:scale-[1.1] transition-transform duration-500 ease-in-out "
                  />
                </div>
                <div className="card_content relative w-full px-5 py-7 ">
                  <h4 className=" relative text-[24px] text-[#001d3d] font-extrabold font-mulish mb-3 ">
                    Arrival for the finest
                  </h4>
                  <p className=" text-[16px] text-[#7a7a7a] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod…
                  </p>
                  <Link
                    href="/"
                    className={`${EmStyle.orange_button} ${EmStyle.dark_orange_borderBtn} ${EmStyle.small_button} mt-4 group-hover:scale-[1.05]`}
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
              <div className="col_three group relative w-threeCard mx-[15px] shadow-em2imgContentShadow2 bg-white rounded-[30px] overflow-hidden lg:w-halfWidth lg:mb-[30px] md:!w-full md:max-w-[400px] md:mx-auto ">
                <Link href="/" className={`${EmStyle.redirect_link}`}>
                  .
                </Link>
                <div className="img_wrap relative w-full h-[238px] overflow-hidden ">
                  <Image
                    src="/envato-market2/col-three-img2.jpeg"
                    width={400}
                    height={300}
                    alt="card-img"
                    className=" w-full h-full object-cover group-hover:rotate-3 group-hover:scale-[1.1] transition-transform duration-500 ease-in-out "
                  />
                </div>
                <div className="card_content relative w-full px-5 py-7 ">
                  <h4 className=" relative text-[24px] text-[#001d3d] font-extrabold font-mulish mb-3 ">
                    Focus on excellence
                  </h4>
                  <p className=" text-[16px] text-[#7a7a7a] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod…
                  </p>
                  <Link
                    href="/"
                    className={`${EmStyle.orange_button} ${EmStyle.dark_orange_borderBtn} ${EmStyle.small_button} mt-4 group-hover:scale-[1.05]`}
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
              <div className="col_three group relative w-threeCard mx-[15px] shadow-em2imgContentShadow2 bg-white rounded-[30px] overflow-hidden lg:w-halfWidth lg:mb-[30px] md:!w-full md:max-w-[400px] md:mx-auto ">
                <Link href="/" className={`${EmStyle.redirect_link}`}>
                  .
                </Link>
                <div className="img_wrap relative w-full h-[238px] overflow-hidden ">
                  <Image
                    src="/envato-market2/col-three-img-3.jpeg"
                    width={400}
                    height={300}
                    alt="card-img"
                    className=" w-full h-full object-cover group-hover:rotate-3 group-hover:scale-[1.1] transition-transform duration-500 ease-in-out "
                  />
                </div>
                <div className="card_content relative w-full px-5 py-7 ">
                  <h4 className=" relative text-[24px] text-[#001d3d] font-extrabold font-mulish mb-3 ">
                    We work for quality
                  </h4>
                  <p className=" text-[16px] text-[#7a7a7a] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod…
                  </p>
                  <Link
                    href="/"
                    className={`${EmStyle.orange_button} ${EmStyle.dark_orange_borderBtn} ${EmStyle.small_button} mt-4 group-hover:scale-[1.05]`}
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
