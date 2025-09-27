"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import profile from "@/images/profile.png";
import Image from "next/image";

const Page = () => {
  const { authUser, logout, loading } = useAuth() as any;
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!authUser) {
      router.push("/login");
    }
  }, [authUser, loading, router]);

  if (!authUser) {
    return null;
  }

  return (
    <div className="w-[35%] max-[1100px]:w-[40%] max-[900px]:w-[45%] max-[770px]:w-[50%] max-[620px]:w-[70%] max-[515px]:w-[90%] my-[10rem] mx-auto border-[.1rem] border-[#c3c9d6] rounded-[.5rem] py-[2rem]">
      <div className="flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white w-full max-w-md rounded-xl shadow-md p-6">
          {/* Title */}
          <h2 className="text-center text-[1.8rem] text-[#1F2937] font-semibold mb-[2rem]">
            Profile
          </h2>
          <hr />

          <div className="px-[1rem]">
            {/* Logo + Description */}
            <div className="flex flex-col items-center justify-center gap-[1rem] my-[1rem]">
              <div className="relative w-[5.6rem] h-[5.6rem] rounded-full overflow-hidden bg-[#006400] flex items-center justify-center cursor-pointer">
                <Image
                  src={profile}
                  alt="profile"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center py-[1rem] text-[1.4rem]">
                <h3 className="text-[#374151] mt-[.8rem] font-semibold">
                  Boiadda.com - বই আড্ডা
                </h3>
                <p className="text-[#6B7280] text-[2rem] mt-[.8rem] text-center">
                  welcome {authUser.name}!
                </p>
              </div>
            </div>

            <hr />

            {/* Profile Info */}

            <div className="flex flex-col items-center justify-center gap-[1rem] py-[2rem]">
              <div className="flex items-center gap-[.8rem]">
                <h2 className="text-[2rem] font-[600]">Name:</h2>
                <p className="text-[1.7rem] font-[600]">{authUser?.name}</p>
              </div>
              <div className="flex items-center gap-[.8rem]">
                <h2 className="text-[2rem] font-[600]">Phone:</h2>
                <p className="text-[1.7rem] font-[600]">{authUser?.phone}</p>
              </div>
            </div>

            <hr className="my-4" />

            {/* LOGOUT */}
            <div className="mt-[2rem]">
              <button
                onClick={logout}
                className="w-full bg-[#DC2626] border-none outline-none text-[#fff] text-[1.8rem] py-[1rem] rounded-[.5rem] cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
