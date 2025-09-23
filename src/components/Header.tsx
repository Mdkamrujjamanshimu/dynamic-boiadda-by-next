"use client";
import React, { useEffect, useRef, useState } from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";

const Header = () => {
  //? STATE TO RESPONSIVE NAVBAR
  const [isOpen, setIsOpen] = useState(false);

  //? STATE TO STORE HEADER HEIGHT
  const [headerHeight, setHeaderHeight] = useState(0);

  //? REF TO GET HEADER ELEMENT (HTMLDivElement)
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setIsOpen(false);
      }

      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div ref={headerRef} className="fixed top-0 left-0 w-full z-[1000]">
        <TopHeader isOpen={isOpen} setIsOpen={setIsOpen} />
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* ✅ Spacer div automatically adjusts */}
      <div style={{ height: headerHeight }}></div>
    </>
  );
};

export default Header;
