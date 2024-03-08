import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../styles/bright-code.module.scss";
import Globalcss from "../styles/global.module.scss";

export default function brightFooter() {
  return (
    <>
      <section className={Style.brightFooter}>
        <div className={Globalcss.brightContainer}>
          <div className={Style.footerWrap}>
            <div className={Style.logo_with_icon}>
              <div className={Style.logo_wrap}>
                <Link href="/">
                  <Image
                    src="/brightcode-logo.png"
                    alt="logo"
                    width={200}
                    height={45}
                  />
                </Link>
              </div>
            </div>
            <div className={Style.contact_wrap}>
              <h5>Contact</h5>
              <Link
                href="mailto:contact@bright-code.io"
                className={Style.contact_link}
              >
                contact@bright-code.io
              </Link>
              <Link href="tel:(925) 315-5061" className={Style.contact_link}>
                + ‪(925) 315-5061‬
              </Link>
            </div>
          </div>
          <div className={Style.footerBottomWrap}>
            <p>© 2023 Bright Code Solution</p>
          </div>
        </div>
      </section>
    </>
  );
}
