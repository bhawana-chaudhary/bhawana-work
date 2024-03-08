import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../styles/bright-code.module.scss";
import Globalcss from "../styles/global.module.scss";

export default function brightIntro() {
  return (
    <>
      <section className={Style.brightIntro}>
        <div className={Globalcss.brightContainer}>
          <div className={Style.introContent}>
            <h2>Why Choose us?</h2>
            <p>
              Our agency-to-agency model is built on collaboration and
              expertise. As a specialized development agency, our core purpose
              is to empower design agencies to deliver exceptional web solutions
              to their clients. Here&#39;s a description of our agency-to-agency
              model and what we do for you:
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
