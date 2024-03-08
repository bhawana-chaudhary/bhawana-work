import React from "react";
import Link from "next/link";
import Image from "next/image";
import Globalcss from "../styles/global.module.scss";
import Style from "../styles/bright-code.module.scss";

export default function brightHeader() {
  return (
    <>
      <header className={Style.brightHeader}>
        <div className={Globalcss.brightContainer}>
          <div className={Style.headerWrap}>
            <div className={Style.logo}>
              <Link href="/">
                <Image
                  src="/brightcode-logo.png"
                  alt="logo"
                  width={200}
                  height={45}
                />
              </Link>
            </div>
            <nav className={Style.navbar}>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="https://master.d2ex0xpyl1a0p4.amplifyapp.com/whychooseus">
                    Why Choose us
                  </Link>
                </li>
                <li>
                  <Link href="https://master.d2ex0xpyl1a0p4.amplifyapp.com/whatwedo">
                    What we do
                  </Link>
                </li>
                <li>
                  <Link href="https://master.d2ex0xpyl1a0p4.amplifyapp.com/ourclient">
                    Our clients
                  </Link>
                </li>
              </ul>
              <Link
                href="http://localhost:3000/envatoMarket"
                className={Globalcss.blueBtn}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
