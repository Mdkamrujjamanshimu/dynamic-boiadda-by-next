"use client";
import React from "react";
import Hero from "./Hero";
import BestCategory from "./BestCategory";

const HomeSection = () => {

  return (
    <div className="container pt-[2rem] px-[2rem] pb-[8rem]">
      <Hero />
      <BestCategory />
    </div>
  );
};

export default HomeSection;
