"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Orders/Navigation";

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

    // Read orders from localStorage on mount and when authUser changes
    const fetchOrders = () => {
      const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
      const ordersArray = Array.isArray(storedOrders) ? storedOrders : [storedOrders];
      setOrders(ordersArray);
    };

    fetchOrders();
  }, [loading, authUser, router]);

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
            <h1 className="text-[#111827] text-[2rem] font-[600]">Orders</h1>
            <p className="text-[#374151] text-[1.4rem] font-[400]">Efficient order oversight: names, details, emails, roles—all in your comprehensive Order Dashboard</p>
          </div>
          <div className="">
            {/* Navigation */}
            <div className="overflow-x-auto w-full mb-[1rem]">
              <ul className='flex items-center justify-between text-[#374151] text-[1.4rem] font-[500] min-w-[850px] gap-[.5rem] whitespace-nowrap py-[.5rem]'>
                <li className='p-[.5rem] hover:underline cursor-pointer'>All</li>
                <li className='p-[.5rem] hover:underline cursor-pointer'>Pending</li>
                <li className='p-[.5rem] hover:underline cursor-pointer'>Packing</li>
                <li className='p-[.5rem] hover:underline cursor-pointer'>Shipment</li>
                <li className='p-[.5rem] hover:underline cursor-pointer'>On the way</li>
                <li className='p-[.5rem] hover:underline cursor-pointer'>Under Review</li>
                <li className='p-[.5rem] hover:underline cursor-pointer'>Rejected</li>
                <li className='p-[.5rem] hover:underline cursor-pointer'>Return</li>
                <li className='p-[.5rem] hover:underline cursor-pointer'>Cancel</li>
                <li className='p-[.5rem] hover:underline cursor-pointer'>Delivered</li>
                <li className='p-[.5rem] hover:underline cursor-pointer'>Processing</li>
              </ul>
            </div>

            <div className="overflow-x-auto rounded-[1rem] border border-[#e5e7eb]">
              <table className="w-full min-w-[800px] border-separate border-spacing-0">
                <thead className='border border-[#e5e7eb] bg-[#f9fafb]'>
                  <tr className="text-[1.4rem] font-[600]">
                    <th className="py-[1rem]">SL</th>
                    <th className="py-[1rem]">ID</th>
                    <th className="py-[1rem]">Status</th>
                    <th className="py-[1rem]">Update</th>
                    <th className="py-[1rem]">Name</th>
                    <th className="py-[1rem]">Action</th>
                  </tr>
                </thead>
                <tbody className=''>
                  {orders.length > 0 ? (
                    orders.map((order, index) => (
                      <tr key={index} className="hover:bg-gray-50 border border-[#e5e7eb] bg-[#ffffff]">
                        <td className="text-center text-[1.6rem] font-[400] py-[1rem]">{index + 1}</td>
                        <td className="text-center py-[1rem] flex flex-col gap-[.5rem]"><span className='text-[1.4rem] font-[500]'>#ORD-{index + 1}</span> <span className='text-[#6B7280] text-[1.2rem] font-[400]'>৳ {order.grandTotal}</span></td>
                        <td className="text-center py-[1rem]"><span className='bg-[#DCFCE7] text-[#166534] text-[1.3rem] font-[600] rounded-full px-[.5rem]'>Pending</span></td>
                        <td className="text-center py-[1rem] text-[1.4rem] font-[500]">{order.date}</td>
                        <td className="text-center py-[1rem] flex flex-col gap-[.5rem]"><span className='text-[1.4rem] font-[400]'>{order.customerInfo?.name}</span> <span className='text-[#6B7280] text-[1.2rem] font-[400]'>{order.customerInfo?.phone}</span></td>
                        <td className="text-center py-[1rem]">
                          <Link 
                            href={`/user/my-orders/invoice?data=${encodeURIComponent(JSON.stringify(order))}&index=${index}`}
                            className="bg-[#86BC42] text-[#fff] text-[1.2rem] font-[500] px-[1rem] py-[0.5rem] rounded-[0.5rem] cursor-pointer inline-block"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center py-[2rem] text-[1.4rem] text-[#6B7280]">No orders found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;