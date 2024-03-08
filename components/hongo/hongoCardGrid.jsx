import React from "react";
import Image from "next/image";
import Link from "next/link";
import HongoStyle from "/styles/hongo.module.scss";

export default function HongoCardGrid() {
  return (
    <>
      <section
        className={` hongoCardGrid ${HongoStyle.lineOverlay} relative w-full pb-[100px] pt-10 `}
      >
        <div className={`${HongoStyle.container_big}`}>
          <div className="grid_wrapper relative h-[1700px] grid grid-rows-[repeat(18,minmax(0,1fr))] grid-cols-[repeat(30,minmax(0,1fr))] gap-[40px] z-10 ">
            <div className="grid_item relative rounded-[8px] bg-[#f6f7fb] overflow-hidden row-span-6 col-span-9  ">
              <div className="card-img w-full h-full max-h-[392px] ">
                <Image
                  src="/hongo/hongo-gridCard-img-1.jpeg"
                  width={900}
                  height={700}
                  alt="card-img"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className="card_content relative w-full px-[44px] pb-[20px] text-center ">
                <h6 className=" text-[18px] leading-[30px] text-[#141416] font-semibold font-JakartaSans mb-[5px] ">
                  Lorem, ipsum
                </h6>
                <p className=" text-[17px] leading-[26px] text-[#7f7f8a] font-normal font-figtree ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi exercitationem aliquam!
                </p>
              </div>
            </div>
            <div className="grid_item relative rounded-[8px] bg-[#fceee5] overflow-hidden row-span-6 col-span-10  ">
              <div className="card-img w-full  h-full max-h-[386px] ">
                <Image
                  src="/hongo/hongo-gridCard-img-2.webp"
                  width={900}
                  height={700}
                  alt="card-img"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className="card_content relative w-full px-[44px] pb-[20px] text-center ">
                <h6 className=" text-[18px] leading-[30px] text-[#141416] font-semibold font-JakartaSans mb-[5px] ">
                  Lorem, ipsum
                </h6>
                <p className=" text-[17px] leading-[26px] text-[#7f7f8a] font-normal font-figtree ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi exercitationem aliquam labore architecto eligendi!
                </p>
              </div>
            </div>
            <div className="grid_item relative rounded-[8px] bg-[#f6f7fb] overflow-hidden row-span-3 col-span-11 flex flex-wrap items-center   ">
              <div className="card-img w-full max-w-[256px] h-full ">
                <Image
                  src="/hongo/hongo-gridCard-img-3.webp"
                  width={900}
                  height={700}
                  alt="card-img"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className="card_content relative w-[calc(100%-256px)] py-5 pr-10 ">
                <h6 className=" text-[18px] leading-[30px] text-[#141416] font-semibold font-JakartaSans mb-[5px] ">
                  Lorem, ipsum
                </h6>
                <p className=" text-[17px] leading-[26px] text-[#7f7f8a] font-normal font-figtree ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi exercitationem aliquam labore architecto eligendi!
                </p>
              </div>
            </div>
            <div className="grid_item relative rounded-[8px] bg-[#f6f7fb] overflow-hidden row-span-3 col-span-11 flex flex-wrap items-center flex-row-reverse ">
              <div className="card-img w-full max-w-[256px] h-full ">
                <Image
                  src="/hongo/hongo-gridCard-img-4.webp"
                  width={900}
                  height={700}
                  alt="card-img"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className="card_content relative w-[calc(100%-256px)] py-5 pl-10 ">
                <h6 className=" text-[18px] leading-[30px] text-[#141416] font-semibold font-JakartaSans mb-[5px] ">
                  Lorem, ipsum
                </h6>
                <p className=" text-[17px] leading-[26px] text-[#7f7f8a] font-normal font-figtree ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi exercitationem aliquam labore architecto eligendi!
                </p>
              </div>
            </div>
            <div className="grid_item relative rounded-[8px] bg-[#eef5f0] overflow-hidden row-span-6 col-span-11 ">
              <div className="card-img w-full h-full max-h-[380px] ">
                <Image
                  src="/hongo/hongo-gridCard-img-5.webp"
                  width={900}
                  height={700}
                  alt="card-img"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className="card_content relative w-full px-[44px] py-[20px] text-center ">
                <h6 className=" text-[18px] leading-[30px] text-[#141416] font-semibold font-JakartaSans mb-[5px] ">
                  Lorem, ipsum
                </h6>
                <p className=" w-full max-w-[304px] mx-auto text-[17px] leading-[26px] text-[#7f7f8a] font-normal font-figtree ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Excepturi!
                </p>
              </div>
            </div>
            <div className="grid_item relative rounded-[8px] bg-[#f6f7fb] overflow-hidden row-span-2 col-span-10 flex flex-wrap items-center ">
              <div className="card-img w-full max-w-[176px] h-full ">
                <Image
                  src="/hongo/hongo-gridCard-img-6.gif"
                  width={900}
                  height={700}
                  alt="card-img"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className="card_content relative w-[calc(100%-176px)] p-5 pl-0 ">
                <h6 className=" text-[18px] leading-[30px] text-[#141416] font-semibold font-JakartaSans mb-[5px] ">
                  Lorem, ipsum
                </h6>
                <p className=" text-[17px] leading-[26px] text-[#7f7f8a] font-normal font-figtree ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Excepturi!
                </p>
              </div>
            </div>
            <div className="grid_item relative rounded-[8px] bg-[#f6f7fb] overflow-hidden row-span-6 col-span-9 ">
              <div className="card-img w-full h-full max-h-[401px] ">
                <Image
                  src="/hongo/hongo-gridCard-img-9.jpeg"
                  width={900}
                  height={700}
                  alt="card-img"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className="card_content relative w-full px-[44px] pb-[20px] text-center ">
                <h6 className=" text-[18px] leading-[30px] text-[#141416] font-semibold font-JakartaSans mb-[5px] ">
                  Lorem, ipsum
                </h6>
                <p className=" w-full max-w-[304px] mx-auto text-[17px] leading-[26px] text-[#7f7f8a] font-normal font-figtree ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Excepturi!
                </p>
              </div>
            </div>
            <div className="grid_item relative rounded-[8px] bg-[#f6f7fb] overflow-hidden row-span-2 col-span-10 flex flex-wrap items-center ">
              <div className="card-img w-full max-w-[176px] h-full ">
                <Image
                  src="/hongo/hongo-gridCard-img-7.gif"
                  width={900}
                  height={700}
                  alt="card-img"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className="card_content relative w-[calc(100%-176px)] p-5 pl-0 ">
                <h6 className=" text-[18px] leading-[30px] text-[#141416] font-semibold font-JakartaSans mb-[5px] ">
                  Lorem, ipsum
                </h6>
                <p className=" text-[17px] leading-[26px] text-[#7f7f8a] font-normal font-figtree ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Excepturi!
                </p>
              </div>
            </div>
            <div className="grid_item relative rounded-[8px] bg-[#f6f7fb] overflow-hidden row-span-2 col-span-10 flex flex-wrap items-center ">
              <div className="card-img w-full max-w-[176px] h-full ">
                <Image
                  src="/hongo/hongo-gridCard-img-8.gif"
                  width={900}
                  height={700}
                  alt="card-img"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className="card_content relative w-[calc(100%-176px)] p-5 pl-0 ">
                <h6 className=" text-[18px] leading-[30px] text-[#141416] font-semibold font-JakartaSans mb-[5px] ">
                  Lorem, ipsum
                </h6>
                <p className=" text-[17px] leading-[26px] text-[#7f7f8a] font-normal font-figtree ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Excepturi!
                </p>
              </div>
            </div>
            <div className="grid_item relative rounded-[8px] bg-[#f6f7fb] overflow-hidden row-span-6 col-span-9 ">
              <div className="card-img w-full h-full max-h-[401px] ">
                <Image
                  src="/hongo/hongo-gridCard-img-10.jpeg"
                  width={900}
                  height={700}
                  alt="card-img"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className="card_content relative w-full px-[44px] pb-[20px] text-center ">
                <h6 className=" text-[18px] leading-[30px] text-[#141416] font-semibold font-JakartaSans mb-[5px] ">
                  Lorem, ipsum
                </h6>
                <p className=" w-full max-w-[304px] mx-auto text-[17px] leading-[26px] text-[#7f7f8a] font-normal font-figtree ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Excepturi!
                </p>
              </div>
            </div>
            <div className="grid_item relative rounded-[8px] bg-[#f6f7fb] overflow-hidden row-span-3 col-span-9 ">
              <div
                className={`${HongoStyle.animation_slider} ${HongoStyle.animation_card_slider} relative h-[48px] !overflow-visible `}
              >
                <div
                  className={`${HongoStyle.animation_wrap} relative flex bg-[#141416] py-[11px] rotate-[351deg] `}
                >
                  <ul className={` ${HongoStyle.animation_item}`}>
                    <li className={`${HongoStyle.header_animatList} `}>
                      <span>
                        New season for this week texture striped sweatshirt
                      </span>
                    </li>
                    <li className={`${HongoStyle.header_animatList} `}>
                      <span>
                        New season for this week texture striped sweatshirt
                      </span>
                    </li>
                    <li className={`${HongoStyle.header_animatList} `}>
                      <span>
                        New season for this week texture striped sweatshirt
                      </span>
                    </li>
                    <li className={`${HongoStyle.header_animatList} `}>
                      <span>
                        New season for this week texture striped sweatshirt
                      </span>
                    </li>
                    <li className={`${HongoStyle.header_animatList} `}>
                      <span>
                        New season for this week texture striped sweatshirt
                      </span>
                    </li>
                    <li className={`${HongoStyle.header_animatList} `}>
                      <span>
                        New season for this week texture striped sweatshirt
                      </span>
                    </li>
                    <li className={`${HongoStyle.header_animatList} `}>
                      <span>
                        New season for this week texture striped sweatshirt
                      </span>
                    </li>
                  </ul>
                  <ul className={` ${HongoStyle.animation_item}`}>
                    <li className={`${HongoStyle.header_animatList} `}>
                      <span>
                        New season for this week texture striped sweatshirt
                      </span>
                    </li>
                    <li className={`${HongoStyle.header_animatList} `}>
                      <span>
                        New season for this week texture striped sweatshirt
                      </span>
                    </li>
                    <li className={`${HongoStyle.header_animatList} `}>
                      <span>
                        New season for this week texture striped sweatshirt
                      </span>
                    </li>
                    <li className={`${HongoStyle.header_animatList} `}>
                      <span>
                        New season for this week texture striped sweatshirt
                      </span>
                    </li>
                    <li className={`${HongoStyle.header_animatList} `}>
                      <span>
                        New season for this week texture striped sweatshirt
                      </span>
                    </li>
                    <li className={`${HongoStyle.header_animatList} `}>
                      <span>
                        New season for this week texture striped sweatshirt
                      </span>
                    </li>
                    <li className={`${HongoStyle.header_animatList} `}>
                      <span>
                        New season for this week texture striped sweatshirt
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card_content relative w-full px-[44px] pb-[20px] text-center ">
                <h6 className=" text-[18px] leading-[30px] text-[#141416] font-semibold font-JakartaSans mb-[5px] ">
                  Lorem, ipsum
                </h6>
                <p className=" w-full max-w-[304px] mx-auto text-[17px] leading-[26px] text-[#7f7f8a] font-normal font-figtree ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Excepturi!
                </p>
              </div>
            </div>
            <div className="grid_item relative rounded-[8px] bg-[#fff1f0] overflow-hidden row-span-6 col-span-12 ">
              <div className="card-img w-full h-full max-h-[405px] ">
                <Image
                  src="/hongo/hongo-gridCard-img-13.jpeg"
                  width={900}
                  height={700}
                  alt="card-img"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className="card_content relative w-full px-[44px] pb-[20px] text-center ">
                <h6 className=" text-[18px] leading-[30px] text-[#141416] font-semibold font-JakartaSans mb-[5px] ">
                  Lorem, ipsum
                </h6>
                <p className=" w-full max-w-[404px] mx-auto text-[17px] leading-[26px] text-[#7f7f8a] font-normal font-figtree ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio aspernatur illo officiis!
                </p>
              </div>
            </div>
            <div className="grid_item relative rounded-[8px] bg-[#f6f7fb] overflow-hidden row-span-3 col-span-9 ">
              <div className="card-img w-full h-full max-h-[135px] ">
                <Image
                  src="/hongo/hongo-gridCard-img-12.jpeg"
                  width={900}
                  height={700}
                  alt="card-img"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className="card_content relative w-full px-[44px] pb-[20px] text-center ">
                <h6 className=" text-[18px] leading-[30px] text-[#141416] font-semibold font-JakartaSans mb-[5px] ">
                  Lorem, ipsum
                </h6>
                <p className=" w-full max-w-[304px] mx-auto text-[17px] leading-[26px] text-[#7f7f8a] font-normal font-figtree ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Excepturi!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
