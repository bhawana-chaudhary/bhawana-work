import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../styles/bright-code.module.scss";
import Globalcss from "../styles/global.module.scss";

export default function brightImgWithContent() {
  return (
    <>
      <section className={Style.brightImgWithContent}>
        <div className={Globalcss.brightContainer}>
          <div className={Style.imgWithContent}>
            <div className={Style.colTwo}>
              <div className={Style.content}>
                <h3>White Label Development</h3>
                <p>
                  We will add Pro Version with tons of great features and
                  multiple category demos which is ready to use...
                </p>
                <Link
                  href="/"
                  className={`${Globalcss.blueBtn} ${Style.blackbtn}`}
                >
                  Coming Soon
                </Link>
              </div>
            </div>
            <div className={Style.colTwo}>
              <div className={Style.imgWrap}>
                <Image
                  src="/bright-card-girl-img.jpeg"
                  alt="img"
                  width={545}
                  height={350}
                />
              </div>
            </div>
          </div>
          <div
            className={`${Style.imgWithContent} ${Style.imgWithContentReverse}`}
          >
            <div className={Style.colTwo}>
              <div className={Style.content}>
                <h3>Dedicated Development Teams</h3>
                <p>
                  We will add Pro Version with tons of great features and
                  multiple category demos which is ready to use...
                </p>
                <Link
                  href="/"
                  className={`${Globalcss.blueBtn} ${Style.blackbtn}`}
                >
                  Coming Soon
                </Link>
              </div>
            </div>
            <div className={Style.colTwo}>
              <div className={Style.imgWrap}>
                <Image
                  src="/bright-card-girl-img.jpeg"
                  alt="img"
                  width={545}
                  height={350}
                />
              </div>
            </div>
          </div>
          <div className={Style.imgWithContent}>
            <div className={Style.colTwo}>
              <div className={Style.content}>
                <h3>CMS Implementation</h3>
                <p>
                  We will add Pro Version with tons of great features and
                  multiple category demos which is ready to use...
                </p>
                <Link
                  href="/"
                  className={`${Globalcss.blueBtn} ${Style.blackbtn}`}
                >
                  Coming Soon
                </Link>
              </div>
            </div>
            <div className={Style.colTwo}>
              <div className={Style.imgWrap}>
                <Image
                  src="/bright-card-girl-img.jpeg"
                  alt="img"
                  width={545}
                  height={350}
                />
              </div>
            </div>
          </div>
          <div
            className={`${Style.imgWithContent} ${Style.imgWithContentReverse}`}
          >
            <div className={Style.colTwo}>
              <div className={Style.content}>
                <h3>CMS Support & maintenance</h3>
                <p>
                  We will add Pro Version with tons of great features and
                  multiple category demos which is ready to use...
                </p>
                <Link
                  href="/"
                  className={`${Globalcss.blueBtn} ${Style.blackbtn}`}
                >
                  Coming Soon
                </Link>
              </div>
            </div>
            <div className={Style.colTwo}>
              <div className={Style.imgWrap}>
                <Image
                  src="/bright-card-girl-img.jpeg"
                  alt="img"
                  width={545}
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
