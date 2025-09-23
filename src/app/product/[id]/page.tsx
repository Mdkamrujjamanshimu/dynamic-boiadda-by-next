"use client";
import { useProductContext } from "@/context/ProductContext";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import SingleProdMidContent from "@/components/SingleProdMidContent";
import CommentBox from "@/components/CommentBox";
import SingleProdEndContent from "@/components/SingleProdEndContent";
import SingleProdBottomSec from "@/components/SingleProdBottomSec";

const page = () => {
  const { id } = useParams();

  // TypeScript safe fix
  const { products, isLoading } = useProductContext() as any;

  if (isLoading) {
    return (
      <div className="p-[2rem] text-center text-[1.6rem]">লোড হচ্ছে...</div>
    );
  }

  const product = products.find((curElem: any) => curElem.id === id);

  if (!product) {
    return (
      <div className="p-[2rem] text-center text-[1.6rem] text-red-500">
        পণ্য খুঁজে পাওয়া যায়নি 😢
      </div>
    );
  }

  return (
    <div>
      <div className="p-[2rem] container">
        <div className="grid grid-cols-3 max-[767px]:grid-cols-1 gap-[2rem]">
          <div className="relative w-full aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="100%"
              className="w-full h-auto rounded-[.5rem]"
            />
          </div>
          <div>
            <SingleProdMidContent product={product} />
          </div>
          <div className="hidden max-[767px]:block col-span-2 p-[2rem] max-[767px]:col-span-1">
            <CommentBox />
          </div>
          <div>
            <SingleProdEndContent />
          </div>
          <div className="max-[767px]:hidden col-span-2 p-[2rem] max-[767px]:col-span-1">
            <CommentBox />
          </div>
        </div>
        <div className="">
          <SingleProdBottomSec />
        </div>
      </div>
    </div>
  );
};

export default page;
