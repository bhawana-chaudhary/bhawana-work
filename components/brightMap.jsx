import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../styles/bright-code.module.scss";
import Globalcss from "../styles/global.module.scss";

export default function brightMap() {
  return (
    <>
      <section className={Style.brightMap}>
        <iframe
          src="https://maps.google.com/maps?q=CENTRL%20Office%20Downtown%20Portland%2C%201155%20SW%20Morrison%20St%2C%20Portland%2C%20OR%2097205%2C%20United%20States&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
          width="600"
          height="450"
          loading="lazy"
          class="w-full h-[320px]"
        ></iframe>
      </section>
    </>
  );
}
