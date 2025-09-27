"use client";
import { useAuth } from "@/context/AuthContext";
import { useProductContext } from "@/context/ProductContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { authUser, loading } = useAuth() as any;
  const [orders, setOrders] = useState<any[]>([]);
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
    <div className="container py-[2rem] p-[2rem]">
      <h1 className="text-[2rem] text-[#1F2937] font-bold mb-[.5rem]">
        My Orders
      </h1>
      <hr className="mb-[2rem]" />
      {orders.length === 0 ? (
        <p className="text-[1.5rem] text-gray-600">No orders found!</p>
      ) : (
        <div className="flex flex-col gap-[2.4rem]">
          {orders.map((order, index) => (
            <div
              key={index}
              className="border-[.1rem] border-[#c3c9d6] p-[1.6rem] rounded-[.5rem] shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-[1.6rem] mb-[.8rem]">
                  Order <span className="text-[#86BC42]">#{index + 1}</span>
                </h2>
                <h2 className="text-[#1F2937]">
                  Date: <span className="text-[#6B7280]">{order.date}</span>
                </h2>
              </div>
              <div className="flex items-center text-[#1F2937] gap-[.5rem] max-[430px]:gap-[.3rem]">
                <h2 className="text-[2rem] max-[430px]:text-[1.7rem]">
                  Total:
                </h2>
                <span className="text-[1.6rem] max-[430px]:text-[1.3rem] text-[#EF4444] font-[600]">
                  ৳{order.total}
                </span>
                <span className="text-[1.7rem] max-[430px]:text-[1.3rem] font-[900]">
                  +
                </span>
                <h2 className="text-[2rem] max-[430px]:text-[1.7rem]">
                  Delivery:
                </h2>
                <span className="text-[1.6rem] max-[430px]:text-[1.3rem] text-[#EF4444] font-[600]">
                  ৳{order.deliveryCharge}
                </span>
                <span className="text-[1.7rem] max-[430px]:text-[1.3rem] font-[900]">
                  =
                </span>
                <span className="text-[1.6rem] max-[430px]:text-[1.3rem] text-[#EF4444] font-[600]">
                  ৳{order.grandTotal}
                </span>
              </div>
              <div className="flex items-center gap-[.5rem] text-[#1F2937] my-[.5rem]">
                <h2 className="text-[2rem] max-[430px]:text-[1.7rem]">
                  Phone:
                </h2>
                <span className="text-[1.6rem] max-[430px]:text-[1.3rem] font-[600]">
                  {order.customerInfo.phone}
                </span>
              </div>
              <div className="flex items-center gap-[.5rem] text-[#1F2937] my-[.5rem]">
                <h2 className="text-[2rem] max-[430px]:text-[1.7rem]">
                  Address:
                </h2>
                <span className="text-[1.6rem] max-[430px]:text-[1.3rem] font-[600]">
                  {order.customerInfo.address}
                </span>
              </div>

              <div className="mt-3">
                <h2 className="text-[2rem] text-[#1F2937] mb-[1rem]">Items:</h2>
                <ul className="grid grid-cols-5 max-[768px]:grid-cols-4 max-[600px]:grid-cols-3 text-center gap-[1rem] w-full text-[2rem] text-[#1F2937] font-[700] pb-[.5rem]">
                  <li>Name</li>
                  <li>Amount</li>
                  <li>Price</li>
                  <li className="max-[600px]:hidden">Subtotal</li>
                  <li className="max-[768px]:hidden">Discount</li>
                </ul>
                <hr className="mb-[1rem]" />
                <div className="">
                  {order.items.map((item: any, index: number) => (
                    <ul key={index} className="grid grid-cols-5 max-[768px]:grid-cols-4 max-[600px]:grid-cols-3 text-center">
                      <li className="text-[1.4rem] my-[.5rem] p-[.5rem] bg-[#F1F1F7]">
                        {item.name}
                      </li>
                      <li className="text-[1.4rem] my-[.5rem] p-[.5rem] bg-[#F1F1F7]">
                        {item.amount}
                      </li>
                      <li className="text-[1.4rem] my-[.5rem] p-[.5rem] bg-[#F1F1F7]">
                        ৳{item.price}
                      </li>
                      <li className="text-[1.4rem] my-[.5rem] p-[.5rem] bg-[#F1F1F7] max-[600px]:hidden">
                        ৳{item.price * item.amount}
                      </li>
                      <li className="text-[1.4rem] my-[.5rem] p-[.5rem] bg-[#F1F1F7] max-[768px]:hidden">
                        {item.discount}% off
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
