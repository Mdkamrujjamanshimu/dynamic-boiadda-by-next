import React from "react";
import Image from "next/image";
import banner1 from "@/images/banner1.png";
import banner2 from "@/images/banner2.jpg";
import hero1 from "@/images/hero1.png";
import hero2 from "@/images/hero2.jpg";
import hero3 from "@/images/hero3.jpg";

const Hero = () => {
  return (
    <div>
      <div className="flex w-full gap-[2rem] mb-[2rem]">
        <div>
          <Image
            src={banner1}
            alt="banner1"
            className="max-[1023px]:w-[100vw] max-[1023px]:h-auto"
          />
        </div>
        <div className="max-[1023px]:hidden">
          <Image src={banner2} alt="banner2" className="" />
        </div>
      </div>
      <div className="grid grid-cols-3 max-[767px]:grid-cols-2 max-[640px]:grid-cols-1">
        <Image src={hero1} alt="hero" className="w-full h-auto" />
        <Image src={hero2} alt="hero" className="w-full h-auto" />
        <Image src={hero3} alt="hero" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;

// grid grid-cols-3 max-[767px]:grid-cols-2 max-[640px]:grid-cols-1
