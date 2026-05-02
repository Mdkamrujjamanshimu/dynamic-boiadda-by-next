"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Home from "@/components/Orders/Home";
import Navigation from "@/components/Orders/Navigation";

const page = () => {
  const { authUser, loading } = useAuth() as any;
  const [orders, setOrders] = useState<any[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (loading) return;
    if (!authUser) {
      router.push("/login");
      return;
    }

    // ? GET ORDERS FROM LOCALSTORAGE
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");

    const ordersArray = Array.isArray(storedOrders)
      ? storedOrders
      : [storedOrders];

    setOrders(ordersArray);
  }, [authUser, router]);

  // ? Handle Log Out
  const handleLogOut = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <>
      <div className="w-full container flex max-[1024px]:flex-col gap-[1rem] py-[4rem] px-[1rem]">
        {/* Navigation */}
        <div className="w-[20%] max-[1024px]:w-full overflow-x-auto border-r-[1px] border-r-[#f0f0f0] max-[1024px]:border-r-[0px] max-[1024px]:border-b max-[1024px]:border-b-[#f0f0f0] max-[1024px]:max-w-screen rounded-[0.5rem]">
          <div className="max-[1024px]:min-w-[600px] min-w-[200px]">
            <Navigation />
          </div>
        </div>
        {/* Content */}
        <div className="w-[80%] max-[1024px]:w-full flex flex-col gap-[1rem] pl-[2rem]">
          <Home orders={orders} authUser={authUser} />
        </div>
      </div>
    </>
  );
};

export default page;
