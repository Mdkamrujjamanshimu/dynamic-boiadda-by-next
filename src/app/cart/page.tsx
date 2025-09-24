"use client";
import CartCard from "@/components/CartCard";
import { useCartContext } from "@/context/CartContext";
import Link from "next/link";
import React from "react";

const page = () => {
  const {
    cart,
    increment,
    decrement,
    removeItem,
    clearCart,
    total_item,
    total_price,
    discounted_price,
  } = useCartContext() as any; // <-- TypeScript error fix

  if (cart.length === 0) {
    return (
      <div className="p-5 text-center text-xl font-semibold">
        কার্ট খালি আছে 🛒
      </div>
    );
  }

  return (
    <div>
      <div className="p-[2rem] cart-container">
        <div className="flex justify-between items-center text-[1.7rem] max-[400px]:text-[1.3rem] font-semibold mb-[3rem]">
          <p>শপিং ব্যাগ ({total_item} আইটেম)</p>
          <p>মোট ৳{discounted_price}</p>
        </div>
        <div className="flex max-[1023px]:grid gap-[3rem]">
          <div className="w-[65%] max-[1023px]:w-full flex flex-col gap-[3rem]">
            {cart.map((curElem: any) => {
              return (
                <CartCard
                  key={curElem.id}
                  curElem={curElem}
                  increment={increment}
                  decrement={decrement}
                  removeItem={removeItem}
                />
              );
            })}
          </div>
          <div className="w-[35%] max-[1023px]:w-full">
            <div className="border-[.1rem] border-[#44d9db] p-[1rem] rounded-[.5rem]">
              <div className="flex justify-between items-center text-[1.7rem] max-[400px]:text-[1.3rem] mb-[1rem]">
                <span>মোট</span>
                <div className="flex gap-[1rem]">
                  <span className="text-[#6B7280]">
                    <del>৳{total_price}</del>
                  </span>
                  <span>৳{discounted_price}</span>
                </div>
              </div>
              <hr />
              <Link href={"/checkout"}>
                <button className="bg-[#86BC42] w-full text-white text-[1.7rem] text-[#fff] py-[1rem] rounded-[.5rem] border-none mt-[6rem] cursor-pointer">
                  এগিয়ে যান
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
