import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/dist/Flip";
import Image from "next/image";
import Style from "../../styles/asliOne.module.scss";

const wheelCardsData = [
  {
    id: 1,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 2,
    imgUrl: "/asli/wheel_card_img_2.webp",
  },
  {
    id: 3,
    imgUrl: "/asli/wheel_card_img_3.webp",
  },
  {
    id: 4,
    imgUrl: "/asli/wheel_card_img_4.webp",
  },

  {
    id: 5,
    imgUrl: "/asli/wheel_card_img_5.webp",
  },
  {
    id: 6,
    imgUrl: "/asli/wheel_card_img_6.webp",
  },
  {
    id: 7,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 8,
    imgUrl: "/asli/wheel_card_img_2.webp",
  },
  {
    id: 9,
    imgUrl: "/asli/wheel_card_img_3.webp",
  },
  {
    id: 10,
    imgUrl: "/asli/wheel_card_img_4.webp",
  },
  {
    id: 11,
    imgUrl: "/asli/wheel_card_img_5.webp",
  },
  {
    id: 12,
    imgUrl: "/asli/wheel_card_img_6.webp",
  },
  {
    id: 13,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 14,
    imgUrl: "/asli/wheel_card_img_2.webp",
  },
  {
    id: 15,
    imgUrl: "/asli/wheel_card_img_3.webp",
  },
  {
    id: 16,
    imgUrl: "/asli/wheel_card_img_4.webp",
  },
  {
    id: 17,
    imgUrl: "/asli/wheel_card_img_5.webp",
  },
  {
    id: 18,
    imgUrl: "/asli/wheel_card_img_6.webp",
  },
  {
    id: 19,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 20,
    imgUrl: "/asli/wheel_card_img_2.webp",
  },
  {
    id: 21,
    imgUrl: "/asli/wheel_card_img_3.webp",
  },
  {
    id: 22,
    imgUrl: "/asli/wheel_card_img_4.webp",
  },
  {
    id: 23,
    imgUrl: "/asli/wheel_card_img_5.webp",
  },
  {
    id: 24,
    imgUrl: "/asli/wheel_card_img_6.webp",
  },
  {
    id: 25,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 26,
    imgUrl: "/asli/wheel_card_img_2.webp",
  },
  {
    id: 27,
    imgUrl: "/asli/wheel_card_img_3.webp",
  },
  {
    id: 28,
    imgUrl: "/asli/wheel_card_img_4.webp",
  },
  {
    id: 29,
    imgUrl: "/asli/wheel_card_img_5.webp",
  },
  {
    id: 30,
    imgUrl: "/asli/wheel_card_img_6.webp",
  },
  {
    id: 31,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 32,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 33,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 34,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 35,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 36,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 37,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 38,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 39,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 40,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 41,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 42,
    imgUrl: "/asli/wheel_card_img_1.webp",
  },
  {
    id: 43,
    imgUrl: "/asli/wheel_card_img_2.webp",
  },
  {
    id: 44,
    imgUrl: "/asli/wheel_card_img_3.webp",
  },
  {
    id: 45,
    imgUrl: "/asli/wheel_card_img_4.webp",
  },
  {
    id: 46,
    imgUrl: "/asli/wheel_card_img_5.webp",
  },
  {
    id: 47,
    imgUrl: "/asli/wheel_card_img_6.webp",
  },
];

export default function CircleScrollWrap() {
  const wheelRef = useRef(null);
  const imagesRef = useRef([]);
  const headerRef = useRef(null);
  let currentCardRef = useRef(null);
  let tl = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Flip);

    const wheel = wheelRef.current;
    const images = imagesRef.current;

    function setup() {
      if (tl.current) {
        tl.current.kill();
      }

      let radius = wheel.offsetWidth / 2,
        center = radius,
        slice = 360 / images.length,
        DEG2RAD = Math.PI / 180;

      gsap.set(images, {
        x: (i) => center + radius * Math.sin(i * slice * DEG2RAD),
        y: (i) => center - radius * Math.cos(i * slice * DEG2RAD),
        rotation: (i) => i * slice,
        xPercent: -50,
        yPercent: -50,
      });
    }

    setup();
    // window.addEventListener("resize", setup);

    const header = headerRef.current;
    if (header) {
      header.addEventListener("click", closeCurrentCard);
    }

    function closeCurrentCard() {
      if (currentCardRef.current) {
        let img = header.querySelector("img"),
          state = Flip.getState(img);
        currentCardRef.current.appendChild(img);
        Flip.from(state, {
          ease: "power1.inOut",
          scale: true,
        });
        currentCardRef.current = null;
      }
    }

    tl.current = gsap.to(wheel, {
      rotation: -90,
      ease: "none",
      duration: images.length,
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 1,
      },
    });

    return () => {
      // window.removeEventListener("resize", setup);
      if (header) {
        header.removeEventListener("click", closeCurrentCard);
      }
    };
  }, []);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger, Flip);

  //   const wheel = wheelRef.current;
  //   const images = imagesRef.current;
  //   const header = headerRef.current;

  //   gsap.to(".arrow", { y: 5, ease: "power1.inOut", repeat: -1, yoyo: true });

  //   function setup() {
  //     let radius = wheel.offsetWidth / 2,
  //       center = radius,
  //       slice = 360 / images.length,
  //       DEG2RAD = Math.PI / 180;
  //     gsap.set(images, {
  //       x: (i) => center + radius * Math.sin(i * slice * DEG2RAD),
  //       y: (i) => center - radius * Math.cos(i * slice * DEG2RAD),
  //       rotation: (i) => i * slice,
  //       xPercent: -50,
  //       yPercent: -50,
  //     });
  //   }

  //   setup();

  //   window.addEventListener("resize", setup);

  //   gsap.to(wheel, {
  //     rotation: -45,
  //     ease: "none",
  //     duration: images.length,
  //     scrollTrigger: {
  //       start: 0,
  //       end: "max",
  //       scrub: 1,
  //     },
  //   });

  //   // Check if headerRef.current exists before adding event listener
  //   header?.addEventListener("click", closeCurrentCard);

  //   function closeCurrentCard() {
  //     if (currentCardRef.current) {
  //       let img = header.querySelector("img"),
  //         state = Flip.getState(img);
  //       currentCardRef.current.appendChild(img);
  //       Flip.from(state, {
  //         ease: "power1.inOut",
  //         scale: true,
  //       });
  //       currentCardRef.current = null;
  //     }
  //   }

  //   return () => {
  //     window.removeEventListener("resize", setup);
  //     if (header) {
  //       header.removeEventListener("click", closeCurrentCard);
  //     }
  //   };
  // }, []);
  return (
    <>
      <section
        className={` ${Style.slider_sectionOuter} relative overflow-hidden w-full bg-[#777777] py-40 desktop:py-[100px] `}
      >
        <div className={` slider_section relative w-full h-[550px] `}>
          <div className={`${Style.wheel}`} ref={wheelRef}>
            {wheelCardsData.map((wheelCards, index) => (
              <div
                key={index}
                className={`${Style.wheel__card} absolute top-0 left-0 w-[15%]  max-w-[302px] h-full max-h-[482px] desktop:max-w-[254px] desktop:h-[374px] rounded-[3200px] overflow-hidden mx-5`}
                ref={(el) => imagesRef.current.push(el)}
              >
                <Image
                  width={500}
                  height={800}
                  src={wheelCards.imgUrl}
                  className=" w-full h-full object-cover "
                  alt="img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
