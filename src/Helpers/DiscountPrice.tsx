"use client";

import React from "react";

const DiscountPrice = ({ price, discountPrice }:any) => {
  // Discount price হিসাব
  const discountedPrice = Math.round(price - (price * discountPrice) / 100);

  return <span>৳{discountedPrice}</span>;
};

export default DiscountPrice;
