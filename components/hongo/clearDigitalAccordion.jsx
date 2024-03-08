import React, { useState } from "react";
import Image from "next/image";
import HongoStyle from "/styles/hongo.module.scss";

const AccordionItem = ({ id, heading, paragraph, isOpen, toggleAccordion }) => {
  return (
    <div
      className={` wrap relative w-full py-7 border-b-[1.5px] border-solid border-b-[#7f7f8a61] cursor-pointer over ${
        isOpen ? "open" : ""
      }`}
      onClick={() => toggleAccordion(id)}
    >
      <h4 className="text-[30px] text-white font-JakartaSans font-medium leading-[35px] ">
        {heading}
      </h4>
      <div
        className={`${
          isOpen
            ? "h-auto opacity-1  mt-7 overflow-y-hidden will-change-auto "
            : "h-0 opacity-0  mt-0 overflow-y-hidden "
        } text relative w-full pr-5  transition-all duration-500 ease-in-out`}
      >
        <p className="text-white text-[20px] font-JakartaSans font-normal tracking-[1px] leading-[1.4]">
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
  // const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  // const defaultContent =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <section
        className={` clearDigital_Accordion relative w-full py-[100px] bg-[#090914] `}
      >
        <div className={`${HongoStyle.container_big}`}>
          <div className=" relative w-full max-w-[1410px] mx-auto ">
            <div className="accordion_wrapper relative  w-[calc(100%+24px)] ml-[-12px] flex flex-wrap ">
              <div className="col_two w-[calc(50%-24px)] mx-3 ">
                <div className="accordion_wrap relative w-full max-w-[600px] ">
                  <h2 className=" text-[55px] text-white font-JakartaSans font-bold tracking-[-2px] leading-[60px] mb-5 desktop:text-[45px] desktop:leading-[50px] tablet:text-[40px] tablet:leading-[45px] lg:mb-10 md:text-[36px] md:leading-[40px] xs:text-[32px] xs:leading-[36px] ">
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
                  {/* <Accordion
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                  >
                    <AccordionItem
                      key="1"
                      aria-label="Accordion 1"
                      title="Accordion 1"
                      className="text-[30px] text-white "
                    >
                      {defaultContent}
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      aria-label="Accordion 2"
                      title="Accordion 2"
                      className="text-[30px] text-white "
                    >
                      {defaultContent}
                    </AccordionItem>
                    <AccordionItem
                      key="3"
                      aria-label="Accordion 3"
                      title="Accordion 3"
                      className="text-[30px] text-white "
                    >
                      {defaultContent}
                    </AccordionItem>
                  </Accordion> */}
                </div>
              </div>
              <div className="col_two w-[calc(50%-24px)] mx-3 ">
                <div className="image_wrap relative w-full max-w-[670px] h-full max-h-[641px] ">
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
