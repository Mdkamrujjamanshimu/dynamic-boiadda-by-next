import React from 'react'
import DiscountPrice from "@/Helpers/DiscountPrice";

const Invoice = ({ order, orderIndex }: { order: any; orderIndex: string }) => {


  return (
    <div className='bg-[#fff] p-[1rem] rounded-[0.5rem]'>
      <div className="flex justify-between">
        <div className="flex flex-col gap-[.5rem]">
          <h1 className="text-[2.5rem] max-[330px]:text-[2rem] font-[800] text-[#111827] mb-[.5rem]">Invoice (Resell)</h1>
          <div className="flex flex-col gap-[.5rem] text-[1.4rem] text-[#374151]">
            <p>Invoice: #ORD-{orderIndex}</p>
            <p>{order.date}</p>
          </div>
        </div>
        <div className="flex flex-col text-right gap-[.5rem]">
          <h2>{order?.customerInfo?.name}</h2>
          <div className="flex flex-col gap-[.5rem] text-[1.4rem] text-[#374151]">
            <p>store.bponi.com</p>
            <p>{order?.customerInfo?.phone}</p>
          </div>
        </div>
      </div>
      <hr className="my-[2rem] border-[#E5E7EB]" />

      {/* <div className="grid grid-cols-2 max-[768px]:grid-cols-1 gap-[1rem]">
        <div className="">
          <h4 className="text-[1.2rem] font-[600] text-[#6B7280] mb-[1rem]">Bill To:</h4>
          <div className="flex flex-col gap-[.5rem] text-[#111827]">
            <p className='text-[1.6rem] font-[500]'>{order?.customerInfo?.name}</p>
            <p className='text-[1.4rem] font-[400]'>{order?.customerInfo?.phone}</p>
            <p className='text-[1.4rem] font-[400]'>{order?.customerInfo?.address}</p>
          </div>
        </div>
        <div className="">
          <h4 className="text-[1.2rem] font-[600] text-[#6B7280] mb-[1rem]">Ship To:</h4>
          <div className="flex flex-col gap-[.5rem] text-[#111827]">
            <p className='text-[1.6rem] font-[500]'>{order?.customerInfo?.name}</p>
            <p className='text-[1.4rem] font-[400]'>{order?.customerInfo?.address}</p>
          </div>
        </div>
      </div> */}
      {/* Table */}
      <div className="overflow-x-auto rounded-[1rem] border border-[#e5e7eb] my-[4rem]">
        <table className="w-full min-w-[300px] border-separate border-spacing-0">
          <thead className='border border-[#e5e7eb] bg-[#f9fafb]'>
            <tr className="text-[1.4rem] font-[600] px-[1rem]">
              <th className="py-[1rem] text-start pl-[.5rem]">Item</th>
              <th className="py-[1rem] text-center">Img</th>
              <th className="py-[1rem] text-center">Quantity</th>
              <th className="py-[1rem] text-center">Price</th>
              <th className="py-[1rem] text-center">Amount</th>
            </tr>
          </thead>
          <tbody className=''>
            {order.items.length > 0 ? (
              order.items.map((item: any, index: number) => (
                <tr key={index} className="hover:bg-gray-50 border border-[#e5e7eb] bg-[#ffffff]">
                  <td className="text-start text-[1.6rem] font-[400] pl-[.5rem] py-[1rem]">{item.name}</td>
                  <td className="text-center py-[1rem] flex flex-col gap-[.5rem]">
                    <img src={item.image} alt={item.name} className="mx-auto w-[4rem] h-[4rem] object-contain rounded-[.5rem]" />
                  </td>
                  <td className="text-center py-[1rem] text-[#6B7280] text-[1.4rem] font-[500]">{item.amount}</td>
                  <td className="text-center py-[1rem] text-[#6B7280] text-[1.4rem] font-[500]">
                    <DiscountPrice
                      price={item.price}
                      discountPrice={item.discount}
                    />
                  </td>
                  <td className="text-center py-[1rem] text-[1.4rem] font-[500]">
                    {(() => {
                      const discountedPrice = Math.round(item.price - (item.price * item.discount) / 100);
                      const totalAmount = discountedPrice * item.amount;
                      return `৳${totalAmount}`;
                    })()}
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
      {/* Summary */}
      <div className="flex justify-end mt-[2rem]">
        <div className="w-full max-w-[300px]">
          <div className="flex justify-between mb-[1rem]">
            <p className="text-[1.4rem] text-[#4B5563] font-[400]">Subtotal:</p>
            <p className="text-[1.4rem] font-[600] text-[#111827]">৳{order?.total}</p>
          </div>
          <div className="flex justify-between mb-[1rem]">
            <p className="text-[1.4rem] text-[#4B5563] font-[400]">Delivery Charge:</p>
            <p className="text-[1.4rem] font-[600] text-[#111827]">৳{order?.deliveryCharge}</p>
          </div>
          <hr className="my-[1rem] border-[#E5E7EB]" />
          <div className="flex justify-between mb-[1rem]">
            <p className="text-[1.4rem] font-[700] text-[#111827]">Total:</p>
            <p className="text-[1.4rem] font-[700] text-[#4F46E5]">৳{order?.grandTotal}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invoice