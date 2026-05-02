"use client";
import React from "react";
import Hero from "./Hero";
import BestCategory from "./BestCategory";
import { Toaster } from "react-hot-toast";

const HomeSection = () => {
  return (
    <div className="container pt-[2rem] px-[2rem] pb-[8rem] overflow-visible">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1000,
          style: {
            background: "#16A34A",
            color: "#fff",
            fontSize: "1.5rem",
            padding: "1rem 3rem 1rem 1rem", // right padding বেশি দিলাম cross icon জন্য
            borderRadius: "0.5rem",
            maxWidth: "400px", // crop এড়াতে
            overflow: "visible", // icon visible রাখার জন্য
            boxSizing: "border-box",
          },
          icon: "✅",
        }}
      />
      <Hero />
      <BestCategory />
    </div>
  );
};

export default HomeSection;
