import React from "react";
import Image from "next/image";
import Link from "next/link";
import DiscountPrice from "@/Helpers/DiscountPrice";
import { useCartContext } from "@/context/CartContext";
import toast from "react-hot-toast";

const ProductsCard = ({ curElem }: any) => {
  const { addToCart } = useCartContext() as any;

  const handleAddToCart = () => {
    addToCart(curElem.id, curElem, 1);
    toast.success("Added to the cart", {
      position: "top-right",
    });
  };

  return (
    <div className="group relative rounded-[.5rem] overflow-hidden transition cursor-pointer">
      {/* Card Wrapper */}
      <div className="relative">
        {/* ===== Product Image ===== */}
        <Link href={`/product/${curElem.id}`} className="block">
          <div className="relative w-full aspect-square">
            <Image
              src={curElem.image}
              alt="product img"
              fill
              sizes="100%"
              className="object-cover rounded-[.5rem]"
            />
          </div>
          <div className="pt-[2rem] text-[1.4rem] relative z-30">
            <div className="text-[#000] text-center max-w-9/10 overflow-hidden text-ellipsis whitespace-nowrap truncate">
              <span>{curElem.name}</span>
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
        </Link>

        {/* ===== Product Details ===== */}
      </div>

      {/* ===== Add to Cart Button ===== */}
      <div
        onClick={handleAddToCart}
        className="mt-[1.5rem] opacity-0 group-hover:opacity-100 transition duration-300 "
      >
        <button className="w-full bg-[#7DB13D] text-[#fff] py-[.8rem] text-[1.4rem] font-semibold rounded-[.3rem] border-none outline-none cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
