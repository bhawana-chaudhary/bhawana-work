import React from "react";
import Link from "next/link";
import Image from "next/image";
import EMStyle from "../styles/envato-market.module.scss";

export default function EmIntro() {
  return (
    <>
      <section className={`pt-20 ${EMStyle.em_intro} max-[595px]:pt-10`}>
        <div className={EMStyle.container}>
          <div className={EMStyle.intro_content}>
            <h2>Lorem ipsum dolor sit</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              beatae!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
