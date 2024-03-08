import React from "react";
import Link from "next/link";
import Image from "next/image";
import EMStyle from "../styles/envato-market.module.scss";

const videoData = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/Wimkqo8gDZ0",
  },
  // {
  //   id: 2,
  //   url: "https://www.youtube.com/embed/Wimkqo8gDZ0",
  // },
];

export default function EmVideoOverlay({ video, onClose }) {
  return (
    <>
      <section
        className={`${EMStyle.emVideoOverlay_wrap} fixed top-0 left-0 w-[100vw] h-[100vh] flex items-center z-[9999] bg-overlayBGColor`}
        onClick={onClose}
      >
        <div className={EMStyle.container}>
          {videoData.map((video) => (
            <div
              key={video.id}
              className={`${EMStyle.video_wrapper} relative w-full max-w-[900px] h-[507px] mx-auto shadow-videoBoxShadow rounded-md overflow-hidden  max-[991px]:h-[450px] max-[768px]:h-[400px] max-[595px]:h-[320px] max-[480px]:h-[250px]`}
            >
              <iframe
                title="Video Overlay"
                className="mfp-iframe relative w-full h-full object-cover"
                src={video.url}
                frameborder="0"
                allowfullscreen=""
              ></iframe>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
