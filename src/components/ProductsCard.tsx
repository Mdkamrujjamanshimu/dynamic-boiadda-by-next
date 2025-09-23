import React from "react";
import Image from "next/image";
import Link from "next/link";
import DiscountPrice from "@/Helpers/DiscountPrice";

const ProductsCard = ({ curElem }:any) => {
  return (
    <div>
      <Link href={`/product/${curElem.id}`} className="block">
        <div className="">
          <div className="relative w-full aspect-square">
            <Image
              src={curElem.image}
              alt="product img"
              fill
              sizes="100%"
              className="object-cover rounded-[.5rem]"
            />
          </div>
          <div className="pt-[2rem] text-[1.4rem]">
            <div className="text-[#000] text-center max-w-9/10 overflow-hidden text-ellipsis whitespace-nowrap truncate">
              <span className="">{curElem.name}</span>
            </div>
            <div className="flex justify-center gap-[1rem] font-[600] mt-[3rem] text-[1.8rem] max-[400px]:text-[1.5rem]">
              <span className="text-[#7DB13D]">
                <DiscountPrice
                  price={curElem.regularPrice}
                  discountPrice={curElem.discountPercent}
                />
              </span>
              <span className="text-[#5E605C]">
                <del>৳{curElem.regularPrice}</del>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductsCard;
