import React from "react";
import Link from "next/link";

export default function FooterCTA() {
  return (
    <>
      <section className=" footerCta relative w-full py-[100px] bg-[#212121] ">
        <div className="container w-full max-w-[1293px] px-5 mx-auto ">
          <div className="footerCta_content relative w-full text-center ">
            <h2 className=" text-[120px] leading-[111px] text-white font-light mb-5 desktop:text-[100px] desktop:leading-[92px] tablet:text-[80px] tablet:leading-[72px] phablet:text-[60px] phablet:leading-[50px] sm:text-[40px] sm:leading-[36px] ">
              Get AI that brings out the best in your teams.
            </h2>
            <p className=" text-[25px] leading-[33px] text-white font-normal tablet:text-[22px] tablet:leading-[30px] phablet:text-[20px] phablet:leading-[26px] sm:text-[18px] sm:leading-[22px] ">
              Ready for proven, trusted enterprise AI solutions that turn
              possibilities into profits, deliver better results, and make your
              people better than ever before? Let’s talk.
            </p>
            <div className="button_wrapper relative w-full flex justify-center items-center mt-10 sm:flex-col ">
              <Link
                href="/"
                className=" relative w-fit text-[20px] text-[#212121] leading-[22px] font-normal py-[16px] px-[26px] rounded-[94px] text-center border-solid border-[2px] border-[#E3F730] bg-[#E3F730] mx-[13px] mb-[26px] md:text-[18px] md:leading-[20px] sm:w-full "
              >
                Let’s join forces
              </Link>
              <Link
                href="/"
                className=" relative w-fit text-[20px] text-white leading-[22px] font-normal py-[16px] px-[26px] rounded-[94px] text-center border-solid border-[2px] border-white bg-transparent mx-[13px] mb-[26px] md:text-[18px] md:leading-[20px] sm:w-full "
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
