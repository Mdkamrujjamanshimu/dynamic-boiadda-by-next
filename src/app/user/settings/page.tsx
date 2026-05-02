"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Orders/Navigation";

const page = () => {
  const { authUser, loading } = useAuth() as any;
  const router = useRouter();
  const [orders, setOrders] = useState<any[]>([]);
  const [shopName, setShopName] = useState("");

  useEffect(() => {
    if (loading) return;
    if (!authUser) {
      router.push("/login");
      return;
    }

    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const ordersArray = Array.isArray(storedOrders) ? storedOrders : [storedOrders];
    setOrders(ordersArray);

    if (ordersArray.length > 0) {
      setShopName(ordersArray[0]?.customerInfo?.name || "");
    }
  }, []);

  return (
    <>
      {/* Navigation Sidebar - Same as main order page */}
      <div className="w-full container flex max-[1024px]:flex-col gap-[1rem] py-[4rem] px-[1rem]">
        {/* Navigation */}
        <div className="w-[20%] max-[1024px]:w-full overflow-x-auto border-r-[1px] border-r-[#f0f0f0] max-[1024px]:border-r-[0px] max-[1024px]:border-b max-[1024px]:border-b-[#f0f0f0] max-[1024px]:max-w-screen rounded-[0.5rem]">
          <div className="max-[1024px]:min-w-[600px] min-w-[200px]">
            <Navigation />
          </div>
        </div>

        {/* Content */}
        <div className="w-[80%] max-[1024px]:w-full flex flex-col gap-[1rem] pl-[2rem]">
          <div className="pb-[4rem] flex flex-col gap-[.5rem]">
            <h1 className="text-[#111827] text-[2rem] font-[600]">Settings</h1>
            <p className="text-[#374151] text-[1.4rem] font-[400]">Manage payments: receiveable, received, processing in your Reseller Dashboard.</p>
          </div>
          <div className="">
            <form action="">
              <div className="grid grid-cols-3 max-[640px]:grid-cols-1 gap-[1rem]">
                <div className="flex flex-col gap-[.5rem]">
                  <label htmlFor="name" className="text-[#374151] text-[1.4rem] font-[500]">Shop Name</label>
                  <input type="text" id="name" value={shopName} onChange={(e) => setShopName(e.target.value)} className="border border-[#e5e7eb] rounded-[.5rem] px-[1rem] py-[1.5rem] text-[1.4rem] font-[400] outline-none" placeholder="Enter your shop name" />
                </div>
                <div className="flex flex-col gap-[.5rem]">
                  <label htmlFor="payment-title" className="text-[#374151] text-[1.4rem] font-[500]">Payment Title</label>
                  <input type="text" id="payment-title" className="border border-[#e5e7eb] rounded-[.5rem] px-[1rem] py-[1.5rem] text-[1.4rem] font-[400] outline-none" placeholder="Enter your payment title" />
                </div>
                <div className="flex flex-col gap-[.5rem]">
                  <label htmlFor="payment-no" className="text-[#374151] text-[1.4rem] font-[500]">Payment NO.</label>
                  <input type="text" id="payment-no" className="border border-[#e5e7eb] rounded-[.5rem] px-[1rem] py-[1.5rem] text-[1.4rem] font-[400] outline-none" placeholder="Enter your payment NO." />
                </div>
                <div className="flex flex-col gap-[.5rem]">
                  <label htmlFor="refer-code" className="text-[#374151] text-[1.4rem] font-[500]">Refer Code</label>
                  <input type="text" id="refer-code" className="border border-[#e5e7eb] rounded-[.5rem] px-[1rem] py-[1.5rem] text-[1.4rem] font-[400] outline-none" placeholder="Enter your refer code" />
                </div>
              </div>
              <div className="flex items-center justify-end mt-[5rem]">
                <button className="bg-[#86BC42] text-[#fff] text-[1.4rem] font-[500] border-none outline-none px-[1.5rem] py-[1rem] rounded-[0.5rem] cursor-pointer">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;