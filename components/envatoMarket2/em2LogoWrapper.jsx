import React from "react";
import Image from "next/image";
import Link from "next/link";
import EmStyle from "/styles/envato-market2.module.scss";

export default function Em2LogoWrapper() {
  return (
    <>
      <section className=" logo_wrapper relative w-full pb-24 bg-white z-[2] lg:pb-16 md:!pb-10 ">
        <div className={` ${EmStyle.container} `}>
          <div className=" relative w-mainRow ml-[-15px] flex flex-wrap lg:w-mainRowWith20px lg:ml-[-10px] ">
            <div className=" relative w-fourCard mx-[15px] lg:w-halfWidthWith20px lg:mx-[10px] lg:mb-7 ">
              <div className="logo w-full max-w-[176px] h-[50px] mx-auto filter contrast-0 hover:scale-[1.15] hover:contrast-[100%] transition duration-1000 ease-in-out ">
                <Link href="/" className={`${EmStyle.redirect_link}`}>
                  .
                </Link>
                <Image
                  src="/envato-market2/logo-1-blue.png"
                  width={200}
                  height={100}
                  alt="logo"
                />
              </div>
            </div>
            <div className=" relative w-fourCard mx-[15px] lg:w-halfWidthWith20px lg:mx-[10px] lg:mb-7 ">
              <div className="logo w-full max-w-[176px] h-[50px] mx-auto filter contrast-0 hover:scale-[1.15] hover:contrast-[100%] transition duration-1000 ease-in-out ">
                <Link href="/" className={`${EmStyle.redirect_link}`}>
                  .
                </Link>
                <Image
                  src="/envato-market2/logo-2-blue.png"
                  width={200}
                  height={100}
                  alt="logo"
                />
              </div>
            </div>
            <div className=" relative w-fourCard mx-[15px] lg:w-halfWidthWith20px lg:mx-[10px] lg:mb-7 ">
              <div className="logo w-full max-w-[176px] h-[50px] mx-auto filter contrast-0 hover:scale-[1.15] hover:contrast-[100%] transition duration-1000 ease-in-out ">
                <Link href="/" className={`${EmStyle.redirect_link}`}>
                  .
                </Link>
                <Image
                  src="/envato-market2/logo-3-blue.png"
                  width={200}
                  height={100}
                  alt="logo"
                />
              </div>
            </div>
            <div className=" relative w-fourCard mx-[15px] lg:w-halfWidthWith20px lg:mx-[10px] lg:mb-7 ">
              <div className="logo w-full max-w-[176px] h-[50px] mx-auto filter contrast-0 hover:scale-[1.15] hover:contrast-[100%] transition duration-1000 ease-in-out ">
                <Link href="/" className={`${EmStyle.redirect_link}`}>
                  .
                </Link>
                <Image
                  src="/envato-market2/logo-4-blue.png"
                  width={200}
                  height={100}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
