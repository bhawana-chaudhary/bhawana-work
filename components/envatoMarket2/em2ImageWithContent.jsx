import React from "react";
import Image from "next/image";
import Link from "next/link";
import EmStyle from "/styles/envato-market2.module.scss";

export default function Em2ImageWithContent() {
  return (
    <>
      <section className="imageWithContent  relative w-full bg-white pt-20 pb-24 z-[2] lg:py-16 ">
        <div className={` ${EmStyle.container} `}>
          <div className="img_with_content flex flex-wrap ">
            <div className="img_wrapper relative w-[50%] h-fit z-10 lg:mx-auto lg:w-full lg:max-w-[560px] ">
              <div className=" absolute bottom-0 left-0 h-[calc(100%-100px)] w-[calc(100%-78px)] rounded-[30px] bg-[#c0c0c0] shadow-em2imgContentShadow z-[-1] "></div>
              <div className="image_wrap w-full max-w-[560px] h-460px rounded-[30px] overflow-hidden ">
                <Image
                  src="/envato-market2/engineer.png"
                  width={600}
                  height={600}
                  alt="img"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
            <div className="content_wrap relative w-[50%] pl-[55px] lg:w-full lg:pl-0 lg:text-center lg:mt-6 ">
              <h2 className=" relative text-[48px] text-[#001d3d] font-extrabold font-mulish leading-[1.03] mb-5 md:mb-4  lg:text-[40px] md:!text-[35px] ">
                Manufacturing Tools Are Available Here
              </h2>
              <p className=" text-[16px] text-[#7a7a7a] mb-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className=" text-[16px] text-[#7a7a7a] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="quote relative w-full flex p-5 pr-11  border-b-[1px] border-b-[#e5e5e5] border-b-solid lg:justify-between lg:p-5 ">
                <div className=" relative top-[-2px] icon_img w-full max-w-[50px] h-[50px] mr-6 ">
                  <Image
                    src="/envato-market2/icon-quote.png"
                    width={60}
                    height={60}
                    alt="icon"
                    className=" w-full h-full object-contain "
                  />
                </div>
                <h6 className=" text-[20px] text-[#001d3d] font-extrabold font-mulish leading-[1.2] md:text-[18px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h6>
              </div>
              <div className="icon_with_btn mt-6 flex flex-wrap justify-between items-center ">
                <Link
                  href="/"
                  className={`${EmStyle.orange_button} ${EmStyle.dark_orange_borderBtn}`}
                >
                  <span>Learn More</span>
                </Link>
                <div className="icon_wrapper relative w-fit flex ml-5 ">
                  <div className="icon relative w-full max-w-[30px] h-[25px] ">
                    <Link href="/" className={`${EmStyle.redirect_link}`}>
                      .
                    </Link>
                    <svg
                      width="25"
                      height="20"
                      viewBox="0 0 25 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" w-full h-full object-contain "
                    >
                      <path
                        d="M24.9984 0C24.0235 0.578714 22.0674 1.36741 20.9174 1.5949C20.8837 1.60365 20.8562 1.6149 20.8237 1.62365C19.8075 0.621211 18.4151 0 16.8739 0C13.7679 0 11.2493 2.51859 11.2493 5.62465C11.2493 5.78839 11.2355 6.08962 11.2493 6.24961C7.05831 6.24961 3.86851 4.05475 1.58115 1.24992C1.33242 1.87488 1.22367 2.86232 1.22367 3.78976C1.22367 5.5409 2.59234 7.2608 4.72345 8.32698C4.33098 8.42822 3.89851 8.50072 3.44853 8.50072C2.72233 8.50072 1.95363 8.30948 1.24992 7.72952C1.24992 7.75077 1.24992 7.77076 1.24992 7.79326C1.24992 10.2406 3.84726 11.9068 6.15712 12.3705C5.6884 12.6467 4.74345 12.6742 4.28223 12.6742C3.95725 12.6742 2.80732 12.5255 2.49984 12.468C3.1423 14.4741 5.45966 15.6015 7.66827 15.6415C5.94088 16.9964 4.7422 17.4989 1.20492 17.4989H0C2.23486 18.9313 5.08093 20 7.93325 20C17.2202 20 22.4986 12.9217 22.4986 6.24961C22.4986 6.14212 22.4961 5.91713 22.4923 5.69089C22.4923 5.6684 22.4986 5.64715 22.4986 5.62465C22.4986 5.5909 22.4886 5.5584 22.4886 5.52465C22.4848 5.35466 22.4811 5.19593 22.4773 5.11343C23.4648 4.40098 24.321 3.51228 24.9984 2.49984C24.0922 2.90232 23.1198 3.1723 22.0986 3.29479C23.1411 2.66983 24.6222 1.17993 24.9984 0Z"
                        fill="#001d3d"
                      />
                    </svg>
                  </div>
                  <div className="icon relative w-full max-w-[30px] h-[25px] ml-4 ">
                    <Link href="/" className={`${EmStyle.redirect_link}`}>
                      .
                    </Link>
                    <svg
                      width="11"
                      height="20"
                      viewBox="0 0 11 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" w-full h-full object-contain "
                    >
                      <path
                        d="M3.19278 20C3.18929 19.9157 3.18278 19.8314 3.18276 19.7471C3.18223 16.8837 3.18232 14.0203 3.18232 11.1568C3.18232 11.0734 3.18232 10.99 3.18232 10.8821H0V7.3261H3.18232C3.18232 7.22629 3.18203 7.15046 3.18236 7.07463C3.18642 6.14407 3.1621 5.21238 3.20201 4.28325C3.25014 3.16297 3.59431 2.1355 4.41584 1.29883C5.04072 0.662424 5.82051 0.302023 6.70082 0.121075C7.41593 -0.025916 8.13961 -0.00881265 8.86218 0.0179247C9.4495 0.0396575 10.0358 0.0882498 10.6224 0.126162C10.6685 0.129139 10.7139 0.141786 10.7692 0.151656V3.32177C10.6991 3.32177 10.6279 3.32091 10.5568 3.3219C9.83376 3.33199 9.1096 3.32195 8.38793 3.358C7.53456 3.40062 7.052 3.85673 7.01669 4.68307C6.98005 5.54059 7.00402 6.40052 7.00218 7.2594C7.00215 7.27101 7.01124 7.28263 7.02531 7.31642H10.6493C10.4894 8.51203 10.3331 9.68156 10.1739 10.8719H7.01393C7.00699 10.9482 6.99753 11.0037 6.99752 11.0593C6.99681 13.9943 6.99685 16.9293 6.99735 19.8643C6.99736 19.9095 7.00401 19.9548 7.00757 20H3.19278Z"
                        fill="#001d3d"
                      />
                    </svg>
                  </div>
                  <div className="icon relative w-full max-w-[30px] h-[25px] ml-4 ">
                    <Link href="/" className={`${EmStyle.redirect_link}`}>
                      .
                    </Link>
                    <svg
                      width="25"
                      height="20"
                      viewBox="0 0 25 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" w-full h-full object-contain "
                    >
                      <path
                        d="M24.4775 2.7325C24.19 1.6575 23.3425 0.81 22.2675 0.5225C20.3175 2.6077e-07 12.5 0 12.5 0C12.5 0 4.6825 2.6077e-07 2.7325 0.5225C1.6575 0.81 0.81 1.6575 0.5225 2.7325C-3.72529e-08 4.6825 0 10 0 10C0 10 -3.72529e-08 15.3175 0.5225 17.2675C0.81 18.3425 1.6575 19.19 2.7325 19.4775C4.6825 20 12.5 20 12.5 20C12.5 20 20.3175 20 22.2675 19.4775C23.3437 19.19 24.19 18.3425 24.4775 17.2675C25 15.3175 25 10 25 10C25 10 25 4.6825 24.4775 2.7325ZM10 14.33V5.67L17.5 10L10 14.33Z"
                        fill="#001d3d"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
