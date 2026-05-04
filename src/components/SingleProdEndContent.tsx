import React from "react";
import { useProductContext } from "@/context/ProductContext";
import RecentProdcard from "./RecentProdcard";

const SingleProdEndContent = () => {
  const { products } = useProductContext();
  const productsToShow = products.slice(0, 3); // প্রথম ৩টি প্রোডাক্ট দেখানোর জন্য

  return (
    <div>
      <div className="">
        <div className="text-center">
          <h3 className="text-[1.5rem] font-bold mb-[1rem]">সম্প্রতি দেখেছেন</h3>
          <div className="flex gap-[1rem] w-full">
            <div className="bg-[#0034FF] p-[.2rem] rounded-full w-[40%]"></div>
            <div className="bg-[#0034FF] p-[.2rem] rounded-full w-[20%]"></div>
            <div className="bg-[#0034FF] p-[.2rem] rounded-full w-[40%]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] mt-[2rem]">
          {productsToShow.map((curElem: any) => (
            <RecentProdcard key={curElem.id} curElem={curElem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProdEndContent;
