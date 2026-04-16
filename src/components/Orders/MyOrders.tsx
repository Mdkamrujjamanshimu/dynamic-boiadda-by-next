import React from 'react'

const MyOrders = ({ orders }: { orders: any[] }) => {
  return (
    <div>
      <div className="pb-[4rem] flex flex-col gap-[.5rem]">
        <h1 className="text-[#111827] text-[2rem] font-[600]">Orders</h1>
        <p className="text-[#374151] text-[1.4rem] font-[400]">Efficient order oversight: names, details, emails, roles—all in your comprehensive Order Dashboard</p>
      </div>
      <div className="">
        {/* Navigation */}
        <div className="overflow-x-auto w-full">
          <ul className='flex items-center justify-between text-[#374151] text-[1.4rem] font-[500] min-w-[800px] gap-[1rem]'>
            <li className='p-[1rem] hover:underline cursor-pointer'>All</li>
            <li className='p-[1rem] hover:underline cursor-pointer'>Pending</li>
            <li className='p-[1rem] hover:underline cursor-pointer'>Packing</li>
            <li className='p-[1rem] hover:underline cursor-pointer'>Shipment</li>
            <li className='p-[1rem] hover:underline cursor-pointer'>On the way</li>
            <li className='p-[1rem] hover:underline cursor-pointer'>Under Review</li>
            <li className='p-[1rem] hover:underline cursor-pointer'>Rejected</li>
            <li className='p-[1rem] hover:underline cursor-pointer'>Return</li>
            <li className='p-[1rem] hover:underline cursor-pointer'>Cancel</li>
            <li className='p-[1rem] hover:underline cursor-pointer'>Delivered</li>
            <li className='p-[1rem] hover:underline cursor-pointer'>Processing</li>
          </ul>
        </div>

        <div className="">
          <table className="w-full border-collapse border border-[#e5e7eb] p-[1rem] rounded-[1rem]">
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
                    <td className="text-center py-[1rem] flex flex-col gap-[.5rem]"><span className='text-[1.4rem] font-[400]'>{order.customerInfo.name}</span> <span className='text-[#6B7280] text-[1.2rem] font-[400]'>{order.customerInfo.phone}</span></td>
                    <td className="text-center py-[1rem]">
                      <button className="text-[#374151] bg-[#F9FAFB] hover:bg-[#E5E7EB] text-[1.4rem] font-[500] py-[.5rem] px-[1rem] rounded-[.5rem] border-[1px] border-[#E5E7EB] outline-none cursor-pointer">
                        Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="border border-[#e5e7eb] px-[1.6rem] py-[.8rem] text-center">No orders found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default MyOrders