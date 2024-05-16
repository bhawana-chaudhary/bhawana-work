import { useEffect, useRef, useState } from "react";
import Style from "../../styles/asliOne.module.scss";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const [count, setCount] = useState(0);
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < 100) {
            return prevCount + 1;
          } else {
            setIsLoading(false);
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <div
      className={`${Style.loader_container}  ${
        isLoading ? " visible" : "hidden"
      }`}
    >
      <div className={`${Style.loader}`}>
        <div className="counter absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <h2
            className={`  text-[#fdf9cf] text-[190px] font-nanumMyeongjo tracking-[-2px] leading-[1.1]  `}
          >
            {count}
          </h2>
        </div>
        <svg
          xmlns="http://www.w3.org/2003/svg"
          className={` ${Style.circleSvg} circleSvg `}
        >
          <circle
            cx="300"
            cy="300"
            r="297"
            stroke="#fdf9cf"
            stroke-width="2.2"
            fill="none"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
            }}
          />
        </svg>
      </div>
    </div>
  );
}
