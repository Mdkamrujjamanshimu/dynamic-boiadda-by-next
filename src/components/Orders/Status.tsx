import React from 'react';
import { IoIosCheckmark } from "react-icons/io";

const Status = ({ order }: { order: any }) => {
    const userName = order?.customerInfo?.name || "";

    return (
        <div className="">
            <div className="grid grid-cols-2 max-[1024px]:grid-cols-1 gap-[1rem]">
                <div className="bg-[#fff] p-[1rem] rounded-[0.5rem]">
                    <h3 className="text-[1.6rem] font-[600] text-[#111827] mb-[2rem]">Order Progress</h3>
                    <div className="flex  gap-[.5rem] w-full">
                        <div className="flex items-center flex-col gap-[0.1rem] px-[1rem] w-[10%] max-[380px]:w-[15%]">
                            <div className="">
                                <IoIosCheckmark className="text-[#fff] bg-[#15803D] rounded-full text-[1.4rem] w-[2.5rem] h-[2.5rem]" />
                            </div>
                            <div className="w-[1px] h-[60%] bg-[#15803D]"></div>
                        </div>
                        <div className="flex flex-col gap-[0.5rem] bg-[#F3F4F6] p-[1rem] rounded-[0.5rem] w-[90%] max-[380px]:w-[85%]">
                            <div className="flex items-center justify-between gap-[0.5rem] text-[#374151] mb-[1rem]">
                                <span className='text-[#111827] text-[1.5rem] font-[600]'>Processing</span>
                                <span className='text-[#6B7280] text-[1.2rem] font-[400] max-[640px]:hidden'>{order.date}</span>
                            </div>
                            <p className='text-[1.5rem]'>Placed this order successfully 🎉 - {userName}</p>
                            <span className='text-[#6B7280] text-[1.2rem] font-[400] min-[640px]:hidden'>{order.date}</span>
                        </div>
                    </div>
                </div>
                <div className="bg-[#fff] p-[1rem] rounded-[0.5rem]">
                    <h3 className="text-[1.6rem] font-[600] text-[#111827] mb-[2rem]">Tracking Details</h3>
                    <div className="flex flex-col gap-[1rem] text-[1.4rem]">
                        <div className="flex flex-col gap-[.5rem]">
                            <div className="">
                                <span className='text-[#6B7280] font-[500]'>Tracking ID</span>
                            </div>

                            <div className="py-[1rem] font-[700]">
                                <span className='bg-[#F3F4F6] px-[1rem] py-[.7rem] rounded-[0.5rem]'>N/A</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[.5rem] text-[#6B7280] text-[1.4rem]">
                            <div className="">
                                <span className='font-[500]'>Logistics URL</span>
                            </div>

                            <div className="py-[1rem] font-[400]">
                                <span className=''>N/A</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#fff] p-[1rem] rounded-[0.5rem]">
                <h3 className="text-[1.6rem] font-[600] text-[#111827] mb-[2rem]">Add a note</h3>
                <div className="w-full">
                    <textarea name="" id="" rows={3} className="border border-[#D1D5DB] rounded-[0.5rem] p-[1rem] outline-[#4F46E5] w-full text-[1.6rem] font-[400] mb-[1rem]"></textarea>
                    <div className="flex justify-end">
                    <button className="bg-[#4F46E5] text-[#fff] py-[1rem] px-[1.5rem] rounded-[0.5rem] hover:bg-[#4338CA] transition-color duration-300 text-[1.5rem] font-[500] cursor-pointer outline-none border-none">Post Comment</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Status;