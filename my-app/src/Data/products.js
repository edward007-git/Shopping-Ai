import React from "react";
import Airpods from "../assets/airpods.jpeg";
import JBL from "../assets/jbl.jpg";
import SamsungBuds from "../assets/samsungbuds.jpg";
import sony from "../assets/sony.jpg";
import BoseQc from "../assets/BoseQc.jpg";
import Anker from "../assets/Anker.jpg";
import NothingEar2 from "../assets/Nothing.jpg";
import MarshallMajor4 from "../assets/Marshall.jpg";   
import BeatsStudioPro from "../assets/Beats.jpg";
import Sennheiser from "../assets/Sennheiser.jpg";

export const products = [
  {
    id: 1,
    title: "Apple AirPod Max",
    image: Airpods,
    rating: 4,
    reviews: 389,
    price: "₹52,250",
    originalPrice: "₹59,900",
    description:
      "Official store for Apple products. available for pick-up and delivery within 5 days. and 2 years of warranty",
  },

  {
    id: 2,
    title: "JBL Wireless Headphones",
    image: JBL,
    rating: 4,
    reviews: 23,
    price: "₹4,950",
    originalPrice: "₹5,500",
    description:
      "Get this product with additional wirecord for wired use. discount available until Feb 2026. Use promo code: CKOJA",
  },

  {
    id: 3,
    title: "Samsung Galaxy Buds 2",
    image: SamsungBuds,
    rating: 5,
    reviews: 412,
    price: "₹9,625",
    originalPrice: "₹11,500",
    description:
      "Noise-cancellation with immersive bass. comes with 1-year Samsung warranty. free replacement for defects.",
    badge: "Premium",
  },

  {
    id: 4,
    title: "Sony WH-CH720N Headphones",
    image: sony,
    rating: 4,
    reviews: 155,
    price: "₹12,375",
    originalPrice: "₹16,500",
    description:
      "Lightweight and long battery life up to 35 hours. ideal for travel and music lovers with deep bass support.",
  },

  {
    id: 5,
    title: "Bose QuietComfort 45",
    image: BoseQc,
    rating: 5,
    reviews: 298,
    price: "₹33,000",
    originalPrice: "₹42,500",
    description:
      "Premium active noise cancelation for studio-quality sound. Includes travel case and fast charging option.",
    badge: "Top Discount",
  },

  {
    id: 6,
    title: "Beats Studio Pro",
    image: BeatsStudioPro,
    rating: 4,
    reviews: 210,
    price: "₹33,000",
    originalPrice: "₹35,580",
    description:
      "Enhanced clarity with Active Noise Cancellation and Spatial Audio support. Compatible with iOS & Android. 1-year warranty.",
    badge: "New Arrival",
  },

  {
    id: 7,
    title: "Anker Soundcore Life Q30",
    image: Anker,
    rating: 4,
    reviews: 180,
    price: "₹6,050",
    originalPrice: "₹7,975",
    description:
      "Hybrid ANC, long 40-hour battery life, and comfort fit. Ideal for travel and daily use. Offer valid till March 2026.",
    badge: "Best Value",
  },

  {
    id: 8,
    title: "Sennheiser HD 450BT",
    image: Sennheiser,
    rating: 4,
    reviews: 97,
    price: "₹15,125",
    originalPrice: "₹18,250",
    description:
      "Bluetooth 5.0, deep bass boost, and Active Noise Cancellation. German engineering sound quality guarantee.",
  },

  {
    id: 9,
    title: "Nothing Ear (2)",
    image: NothingEar2,
    rating: 5,
    reviews: 520,
    price: "₹13,200",
    originalPrice: "₹15,500",
    description:
      "High-res audio with transparent design, adaptive ANC, and dual-connection support. Includes 1-year warranty.",
    badge: "Trending",
  },

  {
    id: 10,
    title: "Marshall Major IV",
    image: MarshallMajor4,
    rating: 4,
    reviews: 143,
    price: "₹16,500",
    originalPrice: "₹18,450",
    description:
      "Iconic retro design with 80+ hours battery life. Rich bass & classic Marshall sound profile. Quick charge supported.",
    badge: "Premium",
  }
];
