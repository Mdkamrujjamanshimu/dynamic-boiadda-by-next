"use client";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import React from "react";
import DiscountPrice from "@/Helpers/DiscountPrice";
import IncDec from "./IncDec";

const CartCard = ({ curElem, increment, decrement, removeItem }: any) => {
  // কত টাকা save হলো সেটা হিসাব
  const savedAmount = Math.round((curElem.price * curElem.discount) / 100);

  return (
    <div>
      <div className="gap-[1rem] p-[1rem] border-[.1rem] border-[#44d9db] rounded-[.5rem] bg-[#FAFAFA]">
        <div className="relative w-full flex gap-[1rem] min-h-[10rem] max-[640px]:pb-[4rem]">
          <div className="relative w-[20%] max-[400px]:w-[30%] aspect-square">
            <Image
              src={curElem.image}
              alt={curElem.name}
              fill
              sizes="100%"
              className="object-contain rounded-[.3rem]"
            />
          </div>
          <div className="w-[80%] max-[400px]:w-[70%]">
            <h2 className="text-[1.4rem] font-semibold">{curElem.name}</h2>
            <div className="flex flex-wrap items-center gap-[1rem] py-[1rem]">
              <span className="text-[2rem] text-[#EF4444] font-black">
                <DiscountPrice
                  price={curElem.price}
                  discountPrice={curElem.discount}
                />
              </span>
              <span className="text-[1.5rem] text-[#6B7280] font-bold">
                <del>৳{curElem.price}</del>
              </span>
              <span className="text-[1.5rem] text-[#EE741F] font-semibold">
                ({curElem.discount}% অফ)
              </span>
            </div>
            <p className="text-[1.3rem] text-[#17B31B]">
              আপনি সেইভ করেছেন ৳{savedAmount}
            </p>
            <div className="w-[10rem]">
              <IncDec
                amount={curElem.amount}
                setIncrease={() => increment(curElem.id)}
                setDecrease={() => decrement(curElem.id)}
              />
            </div>
          </div>
          <div className="absolute top-[0rem] right-[0rem] max-[640px]:top-auto max-[640px]:right-auto max-[640px]:bottom-[.5rem] max-[640px]:left-[.5rem] pr-[1.5rem]">
            <AiOutlineClose
              onClick={() => removeItem(curElem.id)}
              className="bg-[#FECACA] p-[.5rem] text-[2.5rem] text-[#DC2626] rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
