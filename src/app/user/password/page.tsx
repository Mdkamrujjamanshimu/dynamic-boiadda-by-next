"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Link from "next/link";
import Navigation from "@/components/Orders/Navigation";

const page = () => {
  const { authUser, loading } = useAuth() as any;
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!authUser) {
      router.push("/login");
      return;
    }
  }, [authUser, loading, router]);

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
            <h1 className="text-[#111827] text-[2rem] font-[600]">Password</h1>
            <p className="text-[#374151] text-[1.4rem] font-[400]">Manage Your Password Settings Here</p>
          </div>
          <div className="">
            <form action="">
              <div className="grid grid-cols-2 max-[640px]:grid-cols-1 gap-[1rem]">
                <div className="flex flex-col gap-[.5rem]">
                  <label htmlFor="current-password" className="text-[#374151] text-[1.4rem] font-[500]">Current password</label>
                  <input type="password" id="current-password" className="border border-[#e5e7eb] rounded-[.5rem] px-[1rem] py-[1.5rem] text-[1.4rem] font-[400] outline-none" placeholder="Enter your current password" />
                </div>
                <div className="flex flex-col gap-[.5rem]">
                  <label htmlFor="new-password" className="text-[#374151] text-[1.4rem] font-[500]">New password</label>
                  <input type="password" id="new-password" className="border border-[#e5e7eb] rounded-[.5rem] px-[1rem] py-[1.5rem] text-[1.4rem] font-[400] outline-none" placeholder="Enter your new password" />
                </div>
                <div className="flex flex-col gap-[.5rem]">
                  <label htmlFor="confirm-password" className="text-[#374151] text-[1.4rem] font-[500]">Confirm password</label>
                  <input type="password" id="confirm-password" className="border border-[#e5e7eb] rounded-[.5rem] px-[1rem] py-[1.5rem] text-[1.4rem] font-[400] outline-none" placeholder="Confirm your new password" />
                </div>
              </div>
              <div className="flex items-center justify-end gap-[2rem] mt-[5rem]">
                <button type="button" className=" text-[#000] hover:bg-[#f3f4f6] transition-colors duration-300 text-[1.4rem] font-[500] border-[1px] border-[#e5e7eb] outline-none px-[1.5rem] py-[1rem] rounded-[0.5rem] cursor-pointer">Cancel</button>
                <button type="submit" className="bg-[#86BC42] text-[#fff] text-[1.4rem] font-[500] border-none outline-none px-[1.5rem] py-[1rem] rounded-[0.5rem] cursor-pointer">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;