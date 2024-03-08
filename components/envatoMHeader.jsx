import React, { useEffect, useState } from "react";
import Link from "next/link";
import EMStyle from "../styles/envato-market.module.scss";

export default function EnvatoHeader() {
  // const [scrollClass, setScrollClass] = useState("");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 300) {
  //       setScrollClass(EMStyle.scrollHeader);
  //     } else {
  //       setScrollClass("");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [scrollClass, setScrollClass] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1201) {
        if (window.scrollY > 300) {
          setScrollClass(EMStyle.scrollHeader);
        } else {
          setScrollClass("");
        }
      } else {
        setScrollClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleClick = () => {
    setMenuVisible(!menuVisible);

    if (window.innerWidth <= 1200) {
      setScrollClass(menuVisible ? "" : EMStyle.d_block);
    } else {
      setScrollClass("");
    }
  };

  // const handleSubMenuClick = (index) => {
  //   setActiveSubMenu(index === activeSubMenu ? null : index);
  // };
  const handleSubMenuClick = (index) => {
    setActiveSubMenu((prevActiveSubMenu) =>
      prevActiveSubMenu === index ? null : index
    );
  };

  return (
    <>
      <handleScroll />
      <header className={`${EMStyle.em_header} ${scrollClass}`}>
        <div className={`${EMStyle.top_headerWrap}`}>
          <div className={EMStyle.container}>
            <div
              className={`${EMStyle.top_header} flex justify-between items-center`}
            >
              <Link href="/" className={`mr-2`}>
                Lorem, ipsum
              </Link>
              <button
                className={`${EMStyle.toggle_btn}`}
                onClick={handleToggleClick}
              >
                <span className={`${EMStyle.icon_left}`}></span>
                <span className={`${EMStyle.icon_right}`}></span>
              </button>
            </div>
          </div>
        </div>
        <div className={EMStyle.mainHeaderWrap}>
          <div className={EMStyle.container}>
            <div className={EMStyle.headerWrap}>
              <ul className={EMStyle.header_menu}>
                <li>
                  <Link href="/">Lorem, ipsum</Link>
                </li>
                <li>
                  <Link href="/">Lorem, ipsum</Link>
                </li>
                <li>
                  <Link href="/">Lorem, ipsum</Link>
                </li>
                <li>
                  <Link href="/">Lorem, ipsum</Link>
                </li>
                <li>
                  <Link href="/">Lorem, ipsum</Link>
                </li>
                <li
                  className={`${EMStyle.em_subMenu}  ${
                    activeSubMenu === 1 ? EMStyle.active : ""
                  }`}
                  onClick={() => handleSubMenuClick(1)}
                >
                  <Link href="/" className={EMStyle.menu}>
                    Lorem, ipsum
                  </Link>
                  <div className={EMStyle.sub_menu_wrap}>
                    <ul>
                      <li>
                        <Link href="/">Lorem, ipsum</Link>
                      </li>
                      <li>
                        <Link href="/">Lorem, ipsum</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={`${EMStyle.em_subMenu} ${
                    activeSubMenu === 1 ? EMStyle.active : ""
                  }`}
                  onClick={() => handleSubMenuClick(1)}
                >
                  <Link href="/" className={EMStyle.menu}>
                    Lorem, ipsum
                  </Link>
                  <div className={EMStyle.sub_menu_wrap}>
                    <ul>
                      <li>
                        <Link href="/">Lorem, ipsum</Link>
                      </li>
                      <li>
                        <Link href="/">Lorem, ipsum</Link>
                      </li>
                      <li>
                        <Link href="/">Lorem, ipsum</Link>
                      </li>
                      <li>
                        <Link href="/">Lorem, ipsum</Link>
                      </li>
                      <li>
                        <Link href="/">Lorem, ipsum</Link>
                      </li>
                      <li>
                        <Link href="/">Lorem, ipsum</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={EMStyle.bottom_headerWrap}>
          <div className={EMStyle.container}>
            <div className={EMStyle.bottom_header}>
              <h4>Magazine</h4>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
