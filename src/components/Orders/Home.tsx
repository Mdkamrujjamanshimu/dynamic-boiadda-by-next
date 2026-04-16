import React from "react";

const Home = ({ orders, authUser }: { orders: any[]; authUser: any }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-[.5rem]">
        <h1 className="text-[2rem] text-[#111827] font-[600]">
          {/* {order?.customerInfo.name} */}
          {authUser?.name}
        </h1>
        <span className="text-[#374151] text-[1.4rem] font-[600]">
          {/* {order?.customerInfo.phone} */}
          {authUser?.phone}
        </span>
      </div>
      <div className="w-full grid grid-cols-4 max-[768px]:grid-cols-2 bg-[#fff] p-[1rem] rounded-[0.5rem] mt-[2rem] divide-x divide-y divide-[#e5e7eb] text-[1.6rem]">
        <div className="flex flex-col gap-[.5rem] p-[1rem]">
          <span className="text-[#111827] font-[400]">Purchase</span>
          <span className="text-[#4F46E5] font-[600]">৳0</span>
        </div>
        <div className="flex flex-col gap-[.5rem] p-[1rem]">
          <span className="text-[#111827] font-[400]">Balance</span>
          <span className="text-[#4F46E5] font-[600]">৳0</span>
        </div>
        <div className="flex flex-col gap-[.5rem] p-[1rem]">
          <span className="text-[#111827] font-[400]">Cashback</span>
          <span className="text-[#4F46E5] font-[600]">৳0</span>
        </div>
        <div className="flex flex-col gap-[.5rem] p-[1rem]">
          <span className="text-[#111827] font-[400]">Gift Card</span>
          <span className="text-[#4F46E5] font-[600]">৳0</span>
        </div>
        <div className="flex flex-col gap-[.5rem] p-[1rem]">
          <span className="text-[#111827] font-[400]">Reward Point</span>
          <span className="text-[#4F46E5] font-[600]">৳0</span>
        </div>
        <div className="flex flex-col gap-[.5rem] p-[1rem]">
          <span className="text-[#111827] font-[400]">Order pending</span>
          <span className="text-[#4F46E5] font-[600]">0</span>
        </div>
        <div className="flex flex-col gap-[.5rem] p-[1rem]">
          <span className="text-[#111827] font-[400]">Processing</span>
          <span className="text-[#4F46E5] font-[600]">{orders?.length}</span>
        </div>
        <div className="flex flex-col gap-[.5rem] p-[1rem]">
          <span className="text-[#111827] font-[400]">Cancel</span>
          <span className="text-[#4F46E5] font-[600]">0</span>
        </div>
        <div className="flex flex-col gap-[.5rem] p-[1rem]">
          <span className="text-[#111827] font-[400]">Returned</span>
          <span className="text-[#4F46E5] font-[600]">0</span>
        </div>
        <div className="flex flex-col gap-[.5rem] p-[1rem]">
          <span className="text-[#111827] font-[400]">Delivered</span>
          <span className="text-[#4F46E5] font-[600]">0</span>
        </div>
      </div>
      <div className="py-[4rem]">
        <h1 className="text-[#111827] text-[2rem] font-[600]">User Details</h1>
        <p className="text-[#374151] text-[1.4rem] font-[400]">A list of all the company in your account including their name, title, net cash and available balance.</p>
      </div>
      <div className="flex items-center justify-end">
        <button className="bg-[#86BC42] text-[#fff] text-[1.4rem] font-[500] border-none outline-none px-[1.5rem] py-[1rem] rounded-[0.5rem] cursor-pointer">Update</button>
      </div>
    </div>
  );
};

export default Home;
