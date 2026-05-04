import React from 'react'
// import Image from "next/image";
import Link from "next/link";
import DiscountPrice from '@/Helpers/DiscountPrice';

const RecentProdcard = ({ curElem }: any) => {
  return (
    <div>
        <Link href={`/product/${curElem.id}`}>
          <div className="flex gap-[1rem] border-[.1rem] border-[#44d9db] p-[.5rem] rounded-[.5rem]">
            <div className="w-[30%]">
              <img
                src={curElem.image}
                alt="product img"
                className="w-full h-[10rem]"
              />
            </div>
            <div className="w-full">
              <p className="text-[1.3rem] mb-[1rem]">{curElem.title}</p>
              <div className="flex items-center gap-[1rem]">
                <h4 className="text-[1.5rem] font-bold"><DiscountPrice price={curElem.regularPrice} discountPrice={curElem.discountPercent} /></h4>
                <p className="text-[1.3rem] font-medium text-[ #6B7280]">
                  <del>৳{curElem.regularPrice}</del>
                </p>
                <p className="text-[1.3rem] font-medium text-[#EE741F]">
                  {curElem.discountPercent}% off
                </p>
              </div>
            </div>
          </div>
        </Link>
    </div>
  )
}

export default RecentProdcard