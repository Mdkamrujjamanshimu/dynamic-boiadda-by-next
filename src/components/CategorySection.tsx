"use client";
import { useProductContext } from "@/context/ProductContext";
import React from "react";
import ProductsCard from "./ProductsCard";
import Link from "next/link";

const CategorySection = ({ categoryName }: any) => {
  const { products } = useProductContext() as any;

  const categoryProduct = products.filter(
    (curElem: any) => curElem.category === categoryName
  );

  if (categoryProduct.length === 0) return null;

  return (
    <div>
      <div className="relative pt-[3rem]">
        <span className="absolute top-[1.7rem] left-[1.5rem] z-50 text-[1.7rem] bg-[#fff]">
          <Link href={`/category/${categoryName}`} className="text-[#86bc42]">
            <p className="font-[900] truncate max-[639px]:w-[20rem] overflow-hidden text-ellipsis whitespace-nowrap">
              ▪️{categoryName}
            </p>
          </Link>
        </span>
        <div className="border-[.2rem] border-[#7DB13D] border-dashed rounded-[1rem]">
          <div className="grid grid-cols-5 max-[1023px]:grid-cols-4 max-[767px]:grid-cols-3 max-[639px]:grid-cols-2 gap-[2rem] m-[2rem]">
            {categoryProduct.map((curElem: any) => (
              <ProductsCard key={curElem.id} curElem={curElem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
