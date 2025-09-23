"use client";
import React, { useEffect, useState } from "react";

const CheckoutLeftContent = ({ setDeliveryData }:any) => {
  const [selectedArea, setSelectedArea] = useState("outside");

  const getDeliveryInfo = (area: string) => {
    if (area === "outside") {
      return { areaText: "ঢাকা সিটির বাহিরে ১০০/- টাকা", charge: 100 };
    } else {
      return { areaText: "ঢাকা সিটির ভিতরে ৬০/- টাকা", charge: 60 };
    }
  };

  useEffect(() => {
    const info = getDeliveryInfo(selectedArea);
    setDeliveryData(info);
  }, [selectedArea, setDeliveryData]);

  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="relative pt-[2rem]">
        <span className="absolute top-[1.2rem] left-[1rem] text-[1.4rem] text-[#111827] bg-[#fff] px-[.5rem]">
          ফোন নম্বর
        </span>
        <div className="border-[.1rem] border-[#44d9db] rounded-[.5rem] text-[1.5rem]">
          <input
            type="text"
            id="phone"
            placeholder="Enter Phone"
            required
            className="w-full mt-[1rem] outline-none border-none p-[1rem]"
          />
        </div>
      </div>

      <div className="relative pt-[2rem]">
        <span className="absolute top-[1.2rem] left-[1rem] text-[1.4rem] text-[#111827] bg-[#fff] px-[.5rem]">
          নাম
        </span>
        <div className="border-[.1rem] border-[#44d9db] rounded-[.5rem] text-[1.5rem]">
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            required
            className="w-full mt-[1rem] outline-none border-none p-[1rem]"
          />
        </div>
      </div>

      <div className="relative pt-[2rem]">
        <span className="absolute top-[1.2rem] left-[1rem] text-[1.4rem] text-[#111827] bg-[#fff] px-[.5rem]">
          ঠিকানা
        </span>
        <div className="border-[.1rem] border-[#44d9db] rounded-[.5rem] text-[1.5rem]">
          <textarea
            id="address"
            placeholder="Enter Address"
            required
            className="w-full outline-none border-none p-[1rem]"
          ></textarea>
        </div>
      </div>

      <div className="mt-[2rem]">
        <h2 className="text-[1.5rem] py-[1rem]">এরিয়া সিলেক্ট করুন</h2>

        {/* Outside */}
        <div
          className={`flex gap-[1rem] border-[.1rem] p-[1rem] rounded-[.5rem] mb-[2rem] cursor-pointer transition ${
            selectedArea === "outside"
              ? "bg-[#D1D5DB] border-[#44d9db]"
              : "border-[#44d9db]"
          }`}
          onClick={() => setSelectedArea("outside")}
        >
          <input
            type="radio"
            name="area"
            checked={selectedArea === "outside"}
            onChange={() => setSelectedArea("outside")}
            className="cursor-pointer"
          />
          <div>
            <h3 className="text-[1.4rem] font-bold">
              ঢাকা সিটির বাহিরে ১০০/- টাকা
            </h3>
            <span className="text-[1.2rem]">ডেলিভারি চার্জ ৳100</span>
          </div>
        </div>

        {/* Inside */}
        <div
          className={`flex gap-[1rem] border-[.1rem] p-[1rem] rounded-[.5rem] mb-[2rem] cursor-pointer transition ${
            selectedArea === "inside"
              ? "bg-[#D1D5DB] border-pink-400"
              : "border-[#44d9db]"
          }`}
          onClick={() => setSelectedArea("inside")}
        >
          <input
            type="radio"
            name="area"
            checked={selectedArea === "inside"}
            onChange={() => setSelectedArea("inside")}
            className="cursor-pointer"
          />
          <div>
            <h3 className="text-[1.4rem] font-bold">
              ঢাকা সিটির ভিতরে ৬০/- টাকা
            </h3>
            <span className="text-[1.2rem]">ডেলিভারি চার্জ ৳60</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLeftContent;
