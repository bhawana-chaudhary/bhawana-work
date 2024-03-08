import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ClearDigitalFilter from "../components/clearDigital/clearDigitalFilter";
import ScrollDownColTwo from "../components/hongo/scrollDownColTwo";
import FooterLogoSlider from "../components/hongo/footerLogoSlider";
import ClearDigitalAccordion from "../components/hongo/clearDigitalAccordion";

const FontStyles = () => (
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
      rel="stylesheet"
    />
  </Head>
);

export default function ClearDigital() {
  return (
    <>
      <ClearDigitalAccordion />
      <FooterLogoSlider />
      <ScrollDownColTwo />
      <ClearDigitalFilter />
    </>
  );
}
