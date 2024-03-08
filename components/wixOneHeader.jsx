import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "../styles/global.module.scss";

const menuItemsData = [
  {
    id: 1,
    text: "About",
    href: "#about",
    className:
      "text-[14px] text-black font-light font-sans tracking-[1.95px] hover:text-[#308081] transition-colors duration-300",
  },
  {
    id: 2,
    text: "Services",
    href: "#services",
    className:
      "text-[14px] text-black font-light font-sans tracking-[1.95px] hover:text-[#308081] transition-colors duration-300",
  },
  {
    id: 3,
    text: "Plans",
    href: "#plans",
    className:
      "text-[14px] text-black font-light font-sans tracking-[1.95px] hover:text-[#308081] transition-colors duration-300",
  },
  {
    id: 4,
    text: "Blog",
    href: "#",
    className:
      "text-[14px] text-black font-light font-sans tracking-[1.95px] hover:text-[#308081] transition-colors duration-300",
  },
  {
    id: 5,
    text: "Guides",
    href: "#",
    className:
      "text-[14px] text-black font-light font-sans tracking-[1.95px] hover:text-[#308081] transition-colors duration-300",
  },
  {
    id: 6,
    text: "Contact",
    href: "#",
    className:
      "text-[14px] text-black font-light font-sans tracking-[1.95px] hover:text-[#308081] transition-colors duration-300",
  },
];

export default function WixOneHeader() {
  return (
    <>
      <header
        className={`${Styles.wixOneHeader} fixed top-0 left-0 w-full bg-white py-[26px] z-[999]`}
      >
        <div
          className={`${Styles.container} relative w-full py-0 px-[20px] mx-auto my-0 max-w-[1170px]`}
        >
          <div
            className={`${Styles.header_wrap} relative flex flex-wrap items-center`}
          >
            <div
              className={`${Styles.logo_wrapper} relative w-full max-w-[300px] text-center`}
            >
              <Link
                href="/"
                className={`absolute top-0 left-0 w-full h-full decoration-0 text-[0] z-10`}
              >
                .
              </Link>
              <h4
                className={`text-[17px] uppercase text-black font-extrabold font-sans tracking-[3px] mb-[17px]`}
              >
                ALLAN JOHNSON
              </h4>
              <p>Lorem, ipsum dolor</p>
            </div>
            <nav
              className={`relative w-wixOneHeader pl-[30px] flex flex-wrap justify-end items-center`}
            >
              <ul className={`${Styles.menu_wrapper} relative w-fit flex`}>
                {menuItemsData.map((menuItem) => (
                  <li
                    className={`relative ml-[25px] first-of-type:ml-0`}
                    key={menuItem.id}
                  >
                    <Link href={menuItem.href} className={menuItem.className}>
                      {menuItem.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <div
                className={`${Styles.login_btn} relative flex items-center ml-[40px]`}
              >
                <Link
                  href="/"
                  className={`absolute top-0 left-0 w-full h-full decoration-0 text-[0] z-10`}
                >
                  .
                </Link>
                <div
                  className={`${Styles.icon} relative max-w-[26px] h-[26px] mr-[15px]`}
                >
                  <Image
                    src="/wix/icon-person.png"
                    width={40}
                    height={40}
                    alt="icon"
                    className={`object-contain w-full h-full`}
                  />
                </div>
                <span className={``}>Log In</span>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
