import React, { useState } from "react";
import Image from "next/image";
import HongoStyle from "/styles/hongo.module.scss";

const AccordionItem = ({ id, heading, paragraph, isOpen, toggleAccordion }) => {
  return (
    <div
      className={` wrap relative w-full py-7 border-b-[1.5px] border-solid border-b-[#7f7f8a61] cursor-pointer over desktop:py-6 tablet:py-[22px] phablet:py-5 md:py-4 ${
        isOpen ? "open" : ""
      }`}
      onClick={() => toggleAccordion(id)}
    >
      <h4 className="text-[30px] text-white font-JakartaSans font-medium leading-[35px] desktop:text-[26px] desktop:leading-[32px] tablet:text-[24px] tablet:leading-[30px] phablet:text-[22px] phablet:leading-[26px] md:text-[20px] md:leading-[24px] ">
        {heading}
      </h4>
      <div
        className={`${
          isOpen
            ? "h-auto opacity-1  mt-7 overflow-y-hidden will-change-auto "
            : "h-0 opacity-0  mt-0 overflow-y-hidden "
        } text relative w-full pr-5  transition-all duration-500 ease-in-out`}
      >
        <p className="text-white text-[20px] font-JakartaSans font-normal tracking-[1px] leading-[1.4] tablet:text-[18px] tablet:leading-[1.3] phablet:text-[17px] phablet:leading-[1.2] md:text-[16px] md:leading-[1.1] md:font-light ">
          {paragraph}
        </p>
      </div>
    </div>
  );
};
const accordionData = [
  {
    id: 1,
    heading: "Brand Research",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur.",
  },
  {
    id: 2,
    heading: "Brand Purpose",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur.",
  },
  {
    id: 3,
    heading: "Brand Positioning",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur.",
  },
  {
    id: 4,
    heading: "Brand Promise",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur.",
  },
  {
    id: 5,
    heading: "Brand Activation",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur. Pharetra dictum faucibus proin turpis sit. Tortor amet sit nunc libero non nec suscipit volutpat in. Viverra adipiscing dolor amet vitae. Malesuada vitae consectetur.",
  },
];

export default function ClearDigitalAccordion() {
  const [openItem, setOpenItem] = useState(accordionData[0].id);

  const toggleAccordion = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <>
      <section
        className={` clearDigital_Accordion relative w-full py-[100px] bg-[#090914] tablet:py-[80px] phablet:py-[60px] md:py-[45px] `}
      >
        <div className={`${HongoStyle.container_big}`}>
          <div className=" relative w-full max-w-[1410px] mx-auto ">
            <div className="accordion_wrapper relative  w-[calc(100%+24px)] ml-[-12px] flex flex-wrap lg:w-full lg:mx-0 ">
              <div className="col_two w-[calc(50%-24px)] mx-3 lg:w-full lg:mx-0 lg:mb-8 ">
                <div className="accordion_wrap relative w-full max-w-[600px] lg:max-w-full ">
                  <h2 className=" text-[55px] text-white font-JakartaSans font-bold tracking-[-2px] leading-[60px] mb-5 desktop:text-[45px] desktop:leading-[50px] tablet:text-[40px] tablet:leading-[45px] md:text-[36px] md:leading-[40px] xs:text-[32px] xs:leading-[36px] ">
                    A Full Suite of Brand Strategy Solutions
                  </h2>
                  {/* <div className="accordion relative w-full ">
                    {accordionData.map((accordionItem) => (
                      <div
                        className="wrap relative w-full py-7 border-b-[1.5px] border-solid border-b-[#7f7f8a61] "
                        key={accordionItem.id}
                      >
                        <h4 className=" text-[30px] text-white font-JakartaSans font-medium leading-[35px] ">
                          {accordionItem.heading}
                        </h4>
                        <div className="text relative w-full  mt-7 ">
                          <p className=" text-white text-[20px] font-JakartaSans font-normal tracking-[1px] leading-[1.4] pr-5 ">
                            {accordionItem.paragraph}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div> */}
                  <div className="accordion relative w-full">
                    {accordionData.map((accordionItem) => (
                      <AccordionItem
                        key={accordionItem.id}
                        id={accordionItem.id}
                        heading={accordionItem.heading}
                        paragraph={accordionItem.paragraph}
                        isOpen={openItem === accordionItem.id}
                        toggleAccordion={toggleAccordion}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col_two w-[calc(50%-24px)] mx-3 lg:w-full lg:mx-0 ">
                <div className="image_wrap relative w-full max-w-[670px] max-h-[641px] ">
                  <Image
                    src="/hongo/strategy-services.png"
                    width={900}
                    height={1000}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
