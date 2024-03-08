import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "../styles/global.module.scss";

export default function WixOneThankUOverlay({ showThankYou, onClose }) {
  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      {showThankYou && (
        <section
          className=" thank_u_wrap fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#000000cf] flex items-center z-[999] "
          onClick={onClose}
        >
          <div
            className={` ${Styles.container} relative w-full py-0 px-[20px] mx-auto my-0 max-w-[1170px]`}
          >
            <div
              className="thank_u_box relative w-full max-w-[800px] mx-auto p-10 text-center bg-[#58bbbf] rounded-md z-10 "
              onClick={handleClick}
            >
              <h2 className=" text-[30px] ">Thank You!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestiae porro nam minima, est odio ipsam.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
