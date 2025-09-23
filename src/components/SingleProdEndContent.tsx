import React from "react";
import Image from "next/image";
import product1 from "@/images/product1.jpg";

const SingleProdEndContent = () => {
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
          <div className="flex gap-[1rem] border-[.1rem] border-[#44d9db] p-[.5rem] rounded-[.5rem]">
            <div className="w-[30%]">
              <Image
                src={product1}
                alt="product img"
                className="w-full h-[10rem]"
              />
            </div>
            <div className="w-full">
              <p className="text-[1.3rem] mb-[1rem]">
                মাওলানা নিজামী বেস্টসেলার ২টি বই
              </p>
              <div className="flex items-center gap-[1rem]">
                <h4 className="text-[1.5rem] font-bold">৳425</h4>
                <p className="text-[1.3rem] font-medium text-[ #6B7280]">
                  <del>৳535</del>
                </p>
                <p className="text-[1.3rem] font-medium text-[#EE741F]">
                  (20.6%)
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-[1rem] border-[.1rem] border-[#44d9db] p-[.5rem] rounded-[.5rem]">
            <div className="w-[30%]">
              <Image
                src={product1}
                alt="product img"
                className="w-full h-[10rem]"
              />
            </div>
            <div className="w-full">
              <p className="text-[1.3rem] mb-[1rem]">
                বাংলাদেশে ২০২৪ সালের জুলাই-আগস্ট আন্দোলনে সংঘটিত মানবাধিকার
                লঙ্ঘন ও নিপীড়ন
              </p>
              <div className="flex items-center gap-[1rem]">
                <h4 className="text-[1.5rem] font-bold">৳370</h4>
                <p className="text-[1.3rem] font-medium text-[ #6B7280]">
                  <del>৳500</del>
                </p>
                <p className="text-[1.3rem] font-medium text-[#EE741F]">
                  (26.0%)
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-[1rem] border-[.1rem] border-[#44d9db] p-[.5rem] rounded-[.5rem]">
            <div className="w-[30%]">
              <Image
                src={product1}
                alt="product img"
                className="w-full h-[10rem]"
              />
            </div>
            <div className="w-full">
              <p className="text-[1.3rem] mb-[1rem]">এই ২টি বই একেকটি দলিল</p>
              <div className="flex items-center gap-[1rem]">
                <h4 className="text-[1.5rem] font-bold">৳599</h4>
                <p className="text-[1.3rem] font-medium text-[ #6B7280]">
                  <del>৳800</del>
                </p>
                <p className="text-[1.3rem] font-medium text-[#EE741F]">
                  (25.1%)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProdEndContent;
