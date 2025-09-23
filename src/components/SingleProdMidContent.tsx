import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import DiscountPrice from "@/Helpers/DiscountPrice";
import IncDec from "./IncDec";
import { useCartContext } from "@/context/CartContext";
import toast, { Toaster } from "react-hot-toast";

const SingleProdMidContent = ({ product }:any) => {
  const { addToCart } = useCartContext() as any;
  const [showFull, setShowFull] = useState(false);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < product.stock ? setAmount(amount + 1) : setAmount(product.stock);
  };

  //? BUTTON CLICK HANDLER
  const handleAddToCart = () => {
    addToCart(product.id, product, amount);

    toast.success("Added to the cart", {
      position: "top-right",
    });
  };

  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#16A34A",
            color: "#fff",
            fontSize: "2rem",
            padding: "1rem 3rem 1rem 1rem", // right padding বেশি দিলাম cross icon জন্য
            borderRadius: "0.5rem",
            maxWidth: "400px", // crop এড়াতে
            overflow: "visible", // icon visible রাখার জন্য
            boxSizing: "border-box",
          },
          icon: "✅",
        }}
      />
      <div className="">
        <h2 className="text-[2.2rem] text-[#1F2937] font-medium">
          {product.name}
        </h2>
        <div className="">
          <div className="text-[1.5rem] my-[2rem] flex flex-col gap-[1rem] border-l-[.3rem] border-[#e8483c] p-[1rem]">
            <div className="">
              <span className="text-[#1F2937]">বিষয় :</span>
              <span className="text-[#86b642]">
                <Link
                  href={`/category/${product.category}`}
                  className="text-[#86b642]"
                >
                  {product.category}
                </Link>
                |
              </span>
            </div>

            <div className="">
              <span className="text-[#1F2937]">প্রকাশনী :</span>
              <span className="text-[#86b642]">{product.publisher}</span>
            </div>

            <div className="">
              <span className="text-[#1F2937]">পৃষ্ঠা :</span>
              <span className="text-[#86b642]">{product.page}</span>
            </div>
            <div className="">
              <span className="text-[#1F2937]">কভার :</span>
              <span className="text-[#86b642]">{product.cover}</span>
            </div>
          </div>
          <div className="flex items-end gap-[1rem]">
            <h3 className="text-[2.2rem] text-[#86b642] font-bold">
              <DiscountPrice
                price={product.regularPrice}
                discountPrice={product.discountPercent}
              />
            </h3>
            <div className="flex text-[1.5rem] gap-[1rem]">
              <span className="text-[#9CA3AF]">
                <del>৳{product.regularPrice}</del>
              </span>
              <span className="text-[#86b642]">
                ({product.discountPercent}% ছাড়ে)
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <span
              className={`text-[#4B5563] text-[1.4rem] ${
                showFull ? "" : "line-clamp-3"
              }`}
            >
              {product.description}
            </span>
            {!showFull && (
              <span
                className="text-[#86b642] text-[1.4rem] cursor-pointer pb-[1rem]"
                onClick={() => setShowFull(true)}
              >
                ...আরও পড়ুন
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-[1rem] my-[2rem]">
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#0034FF] border-none flex items-center justify-center py-[2rem] text-[1.5rem] text-[#fff] rounded-[.5rem] gap-[.5rem] cursor-pointer"
            >
              <AiOutlineShoppingCart />
              <span>কার্টে যুক্ত করুন</span>
            </button>
            {/* INCREMENT & DECREMENT BUTTON */}
            <IncDec
              amount={amount}
              setDecrease={setDecrease}
              setIncrease={setIncrease}
            />
          </div>
          <div className="text-[#6B7280] text-[1.4rem]">
            <div className="flex items-center gap-[1rem] mb-[1rem]">
              <AiOutlineHeart />
              <span>পছন্দের তালিকায় যুক্ত করুন</span>
            </div>
            <div className="flex items-center gap-[1rem] mb-[1rem]">
              <BsShare />
              <span>শেয়ার করুন:</span>
              <div className="flex items-center gap-[1rem] text-[2rem]">
                <BsFacebook />
                <AiOutlineTwitter />
                <BsWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProdMidContent;
