import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../styles/header.module.scss";
import Globalcss from "../styles/global.module.scss";
export default function header() {
  return (
    <header className={Style.header}>
      <div className={Globalcss.container}>
        <div className={Style.headerWrap}>
          <div className={Style.logo}>
            <Link href="/">
              <Image src="/next.svg" alt="logo" width={150} height={40} />
            </Link>
          </div>
          <nav className={Style.navbar}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
