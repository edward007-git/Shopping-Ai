import React from "react";
import Airpods from "../assets/airpods.jpeg";
import JBL from "../assets/jbl.jpg";
import SamsungBuds from "../assets/samsungbuds.jpg";
import sony from "../assets/sony.jpg";
import BoseQc from "../assets/BoseQc.jpg";

export const products = [
  {
    id: 1,
    title: "Apple AirPod Max for 190 KD",
    image: Airpods,
    rating: 4,
    reviews: 389,
    description:
      "Official store for Apple products. available for pick-up and delivery within 5 days. and 2 years of waranty",
          badge: "Discount",
  },
  {
    id: 2,
    title: "JBL Wireless Headphones for 20KD (10% discount)",
    image: JBL,
    rating: 4,
    reviews: 23,
    description:
      "Get this product with additional wirecord for wired use. dicount available until Feb 2026. Use promo code: CKOJA",

  },
  {
    id: 3,
    title: "Samsung Galaxy Buds 2 for 35 KD",
    image: SamsungBuds,
    rating: 5,
    reviews: 412,
    description:
      "Noise-cancellation with immersive bass. comes with 1-year Samsung warranty. free replacement for defects.",
       badge: "Premium",
  },
  {
    id: 4,
    title: "Sony WH-CH720N Headphones for 45 KD",
    image: sony,
    rating: 4,
    reviews: 155,
    description:
      "Lightweight and long battery life up to 35 hours. ideal for travel and music lovers with deep bass support.",
  },
  {
    id: 5,
    title: "Bose QuietComfort 45 for 135 KD",
    image: BoseQc,
    rating: 5,
    reviews: 298,
    description:
      "Premium active noise cancelation for studio-quality sound. Includes travel case and fast charging option.",
   
  },
];
