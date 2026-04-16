"use client";
import { useAuth } from "@/context/AuthContext";
import { useProductContext } from "@/context/ProductContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Home from "@/components/Orders/Home";
import MyOrders from "@/components/Orders/MyOrders";
import Password from "@/components/Orders/Password";
import Settings from "@/components/Orders/Settings";

const page = () => {
  const { authUser, loading } = useAuth() as any;
  const [orders, setOrders] = useState<any[]>([]);
  const [active, setActive] = useState("home");
  const router = useRouter();

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

    // ? FILTER CURRENT USER ORDERS
    // const userOrders = ordersArray.filter(
    //   (order: any) => order.user && order.user.phone === authUser.phone
    // );

    setOrders(ordersArray);
  }, [authUser, router]);

  return (
    <>
      <div className="w-full container flex max-[1024px]:flex-col gap-[1rem] py-[4rem] px-[1rem]">
        {/* Navigation */}
        <div className="w-[20%] max-[1024px]:w-full overflow-x-auto border-r-[1px] border-r-[#f0f0f0] max-[1024px]:border-r-[0px] max-[1024px]:border-b max-[1024px]:border-b-[#f0f0f0] max-[1024px]:max-w-screen rounded-[0.5rem]">
          <ul className="flex flex-col justify-between gap-[1rem] max-[1024px]:flex-row max-[1024px]:min-w-[600px] min-w-[200px] p-[.5rem] text-[1.8rem]">
            <li
              className="whitespace-nowrap hover:bg-[#f0f0f0] transition duration-300 p-[1rem] rounded-[0.5rem] cursor-pointer"
              onClick={() => setActive("home")}
            >
              Home
            </li>
            <li
              className="whitespace-nowrap hover:bg-[#f0f0f0] transition duration-300 p-[1rem] rounded-[0.5rem] cursor-pointer"
              onClick={() => setActive("my-orders")}
            >
              My Orders
            </li>
            <li
              className="whitespace-nowrap hover:bg-[#f0f0f0] transition duration-300 p-[1rem] rounded-[0.5rem] cursor-pointer"
              onClick={() => setActive("settings")}
            >
              Settings
            </li>
            <li
              className="whitespace-nowrap hover:bg-[#f0f0f0] transition duration-300 p-[1rem] rounded-[0.5rem] cursor-pointer"
              onClick={() => setActive("password")}
            >
              Password
            </li>
            <li className="whitespace-nowrap hover:bg-[#f0f0f0] transition duration-300 p-[1rem] rounded-[0.5rem] cursor-pointer">
              Log Out
            </li>
          </ul>
        </div>
        {/* Content */}
        <div className="w-[80%] max-[1024px]:w-full flex flex-col gap-[1rem] pl-[2rem]">
          {active === "home" && <Home orders={orders} authUser={authUser} />}
          {active === "my-orders" && <MyOrders orders={orders} />}
          {active === "settings" && <Settings />}
          {active === "password" && <Password />}
        </div>
      </div>
    </>
  );
};

export default page;
