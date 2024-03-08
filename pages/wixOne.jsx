import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "../styles/global.module.scss";
import WixOneHeader from "../components/wixOneHeader";
import WixBanner from "../components/wixBanner";
import WImageWithContent from "../components/wImageWithContent";
import WixService from "../components/wixService";
import WixPlansWrap from "../components/wixPlansWrap";
import WixoneFooter from "../components/wixoneFooter";
import WixOneThankUOverlay from "../components/wixOneThankUOverlay";

export default function WixOne() {
  const [thankUOverlayVisible, setThankUOverlayVisible] = useState(false);
  // const [showThankYou, setShowThankYou] = useState(false);

  // const handleShowThankYou = () => {
  //   setShowThankYou(true);
  // };
  const showThankYou = () => {
    setThankUOverlayVisible(true);
  };

  const handleCloseThankUOverlay = () => {
    setThankUOverlayVisible(false);
  };

  // var num = 0;
  // // while (num <= 100) {
  // //   console.log(num);
  // //   num++;
  // // }

  // do {
  //   console.log(num);
  //   num++;
  // } while (num <= 10);

  // for (let num = 1; num <= 10; num++) {
  //   var tableOf = 8;
  //   console.log(tableOf * num);
  // }

  return (
    <>
      <WixOneHeader />
      <WixBanner />
      <WImageWithContent />
      <WixService />
      <WixPlansWrap />
      <WixoneFooter
        handleFormSubmit={showThankYou}
        handleShowThankYou={showThankYou}
      />
      {/* <WixOneThankUOverlay
      // showThankYou={showThankYou}
      // setShowThankYou={setShowThankYou}
      /> */}
      {thankUOverlayVisible && (
        <WixOneThankUOverlay
          showThankYou={showThankYou}
          onClose={handleCloseThankUOverlay}
        />
      )}

      {/* <div className={`${Styles.side_wrapper} fixed bottom-3 right-3 z-[1000]`}>
        <iframe
          class="nKphmK"
          title="Wix Chat"
          aria-label="Wix Chat"
          scrolling="no"
          src="https://engage.wixapps.net/chat-widget-server/renderChatWidget/index?pageId=masterPage&amp;compId=comp-k8h1dn06&amp;viewerCompId=comp-k8h1dn06&amp;siteRevision=764&amp;viewMode=site&amp;deviceType=desktop&amp;locale=en&amp;tz=America%2FLos_Angeles&amp;regionalLanguage=en&amp;width=230&amp;height=66&amp;instance=VV8miOCcimVAee2nzfFeIYnKytvY_XDeWbsczfop7u0.eyJpbnN0YW5jZUlkIjoiZjRmOGM0MTMtM2M2My00ZDEyLWExYmYtZDFiYThmZjI1MjFjIiwiYXBwRGVmSWQiOiIxNDUxN2UxYS0zZmYwLWFmOTgtNDA4ZS0yYmQ2OTUzYzM2YTIiLCJtZXRhU2l0ZUlkIjoiYTgyZTkxNmEtNWY4My00YzYyLWFkMDctNTNjOThhNDVhOWU2Iiwic2lnbkRhdGUiOiIyMDI0LTAxLTA4VDA2OjU5OjE0LjA4MFoiLCJkZW1vTW9kZSI6dHJ1ZSwib3JpZ2luSW5zdGFuY2VJZCI6IjhmM2UyMGVmLTMxOGEtNDkzMi04ZDlmLTUwMDU5OGVhNDY5ZiIsImFpZCI6IjAzNDQ3Y2YzLTZlYmUtNDJkNy1hNTQzLWQ5MWIwMTJlYzRhOSIsImJpVG9rZW4iOiI1Y2Q2NTU3OS02M2UwLTAxNzAtMGNiOC04MjczMDViN2ZiZmEiLCJzaXRlT3duZXJJZCI6Ijg0NzcwZjY3LWVjYmQtNDRiNi1iMzVhLTU4NGYyZGMxNWFmMSIsInNpdGVJc1RlbXBsYXRlIjp0cnVlfQ&amp;currency=USD&amp;currentCurrency=USD&amp;commonConfig=%7B%22brand%22%3A%22wix%22%2C%22host%22%3A%22VIEWER%22%2C%22bsi%22%3A%2271756236-380a-4831-b60e-536c8d389d56%7C1%22%2C%22BSI%22%3A%2271756236-380a-4831-b60e-536c8d389d56%7C1%22%7D&amp;currentRoute=.%2F&amp;consent-policy=%7B%22func%22%3A1%2C%22anl%22%3A1%2C%22adv%22%3A0%2C%22dt3%22%3A0%2C%22ess%22%3A1%7D&amp;vsi=1aa8538a-a6d2-497d-864b-bc83411575d3"
          allowfullscreen=""
          allowtransparency="true"
          allowvr="true"
          frameborder="0"
          allow="autoplay;camera;microphone;geolocation;vr"
        ></iframe>
      </div> */}
    </>
  );
}
