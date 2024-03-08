import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../styles/bright-code.module.scss";
import Globalcss from "../styles/global.module.scss";

export default function brightColTwoTextCard() {
  return (
    <>
      <section className={Style.brightColTwoTextCard}>
        <div className={Globalcss.brightContainer}>
          <div className={Style.colTwoTextCard}>
            <div className={Style.textCard}>
              <div className={Style.iconWrap}></div>
              <h3>Expertise</h3>
              <p>
                We will add Pro Version with tons of great features and multiple
                category demos which is ready to use...
              </p>
            </div>
            <div className={Style.textCard}>
              <div className={Style.iconWrap}>
                <div className="icon"></div>
              </div>
              <h3>Collaborative approach</h3>
              <p>
                We will add Pro Version with tons of great features and multiple
                category demos which is ready to use...
              </p>
            </div>
            <div className={Style.textCard}>
              <div className={Style.iconWrap}>
                <div className="icon"></div>
              </div>
              <h3>Commitment to excellence</h3>
              <p>
                We will add Pro Version with tons of great features and multiple
                category demos which is ready to use...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
