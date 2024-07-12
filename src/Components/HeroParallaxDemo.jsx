"use client";
import React from "react";
import { HeroParallax } from "../Components/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhouse%2F&psig=AOvVaw2cG2XsBKBaahsfDv1dsz9k&ust=1720864887298000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJic7rafoYcDFQAAAAAdAAAAABAE",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "https://res.cloudinary.com/bazeercloud/image/upload/v1720778049/Assets/house4_ndnn7m.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:"https://res.cloudinary.com/bazeercloud/image/upload/v1720778034/Assets/blog7_xytp4e.avif",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:"https://res.cloudinary.com/bazeercloud/image/upload/v1720778028/Assets/blog4_fo8hrp.avif",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:"https://res.cloudinary.com/bazeercloud/image/upload/v1720778029/Assets/Background-Mobile3_sithpd.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:'https://res.cloudinary.com/bazeercloud/image/upload/v1720778021/Assets/home.carousal-1_jja3sr.avif',
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: 'https://res.cloudinary.com/bazeercloud/image/upload/v1720778044/Assets/3dHouse2_pimnaz.jpg',
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:'https://res.cloudinary.com/bazeercloud/image/upload/v1720778037/Assets/3dhouse_uzuxbj.jpg',
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: 'https://res.cloudinary.com/bazeercloud/image/upload/v1720778025/Assets/house_cp4a7u.jpg',
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: 'https://res.cloudinary.com/bazeercloud/image/upload/v1720778024/Assets/Background-Computer_tl1wgt.webp',
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:'https://res.cloudinary.com/bazeercloud/image/upload/v1720778026/Assets/blog2_olggx4.avif',
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: 'https://res.cloudinary.com/bazeercloud/image/upload/v1720778033/Assets/blog8_xxx5cx.avif',
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: 'https://res.cloudinary.com/bazeercloud/image/upload/v1720778031/Assets/blog6_wuieah.avif',
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
