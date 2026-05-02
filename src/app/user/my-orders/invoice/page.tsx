"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navigation from "@/components/Orders/Navigation";
import Status from "@/components/Orders/Status";
import Invoice from "@/components/Orders/Invoice";
import Resell from "@/components/Orders/Resell";

const page = () => {
  const searchParams = useSearchParams();
  const [order, setOrder] = useState<any>(null);
  const [active, setActive] = useState("status");
  const orderIndex = searchParams.get("index");

  useEffect(() => {
    const data = searchParams.get("data");
    if (data) {
      try {
        setOrder(JSON.parse(decodeURIComponent(data)));
      } catch (e) {
        console.error("Failed to parse order data", e);
      }
    }
  }, [searchParams]);

  if (!order) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-[1.4rem] text-[#6B7280]">No order data found</p>
      </div>
    );
  }

  return (
    <div className="flex container items-center justify-center">
      {/* Navigation Sidebar - Same as main order page */}
      <div className="w-full flex max-[1024px]:flex-col gap-[1rem] py-[4rem] px-[1rem]">
        {/* Navigation */}
        <div className="w-[20%] max-[1024px]:w-full overflow-x-auto border-r-[1px] border-r-[#f0f0f0] max-[1024px]:border-r-[0px] max-[1024px]:border-b max-[1024px]:border-b-[#f0f0f0] max-[1024px]:max-w-screen rounded-[0.5rem]">
          <div className="max-[1024px]:min-w-[600px] min-w-[150px]">
            <Navigation />
          </div>
        </div>

        {/* Content */}
        <div className="w-[80%] max-[1024px]:w-full flex flex-col gap-[1rem] pl-[2rem] bg-[#F3F4F6] rounded-[0.5rem]">
          <div className="py-[4rem] px-[2rem]">
            <div className="mb-[4rem]">
              <div className="flex max-[640px]:flex-col justify-between gap-[1rem] mb-[2rem]">
                <div className=" flex flex-col gap-[0.5rem]">
                  <h2 className="text-[3rem] font-[700] text-[#111827]">#ORD-{orderIndex ? parseInt(orderIndex) + 1 : "N/A"}</h2>
                  <div className="flex items-start justify-start gap-[1rem] text-[#374151] text-[1.4rem] font-[400]">
                    <p>Placed on {order.date} . Last updated: <span className="text-[#000] font-[600]">No updates</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-[1rem]">
                  <span className="text-[#15803D] text-[1.4rem] font-[600] border-[1px] border-[#15803D] px-[1rem] py-[.5rem] rounded-full">processing</span></div>
              </div>
              {/* Navigation Tabs */}
              <div className="">
                <ul className="flex items-center gap-[2rem] text-[1.4rem] font-[500]">
                  <li
                    className={`cursor-pointer px-[1rem] py-[0.5rem] rounded-[0.5rem] transition-all ${
                      active === "status"
                        ? "bg-[#4F46E5] text-[#fff]"
                        : "text-[#374151] hover:bg-[#E5E7EB]"
                    }`}
                    onClick={() => setActive("status")}
                  >
                    Status
                  </li>
                  <li
                    className={`cursor-pointer px-[1rem] py-[0.5rem] rounded-[0.5rem] transition-all ${
                      active === "invoice"
                        ? "bg-[#4F46E5] text-[#fff]"
                        : "text-[#374151] hover:bg-[#E5E7EB]"
                    }`}
                    onClick={() => setActive("invoice")}
                  >
                    Invoice
                  </li>
                  <li
                    className={`cursor-pointer px-[1rem] py-[0.5rem] rounded-[0.5rem] transition-all ${
                      active === "resell"
                        ? "bg-[#4F46E5] text-[#fff]"
                        : "text-[#374151] hover:bg-[#E5E7EB]"
                    }`}
                    onClick={() => setActive("resell")}
                  >
                    Resell
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              {active === "status" && <Status order={order} />}
              {active === "invoice" && orderIndex && (
                <Invoice order={order} orderIndex={orderIndex} />
              )}

              {active === "resell" && orderIndex && (
                <Resell order={order} orderIndex={orderIndex} />
              )}
              {/* {active === "invoice" && <Invoice order={order} orderIndex={orderIndex} />}
              {active === "resell" && <Resell order={order} orderIndex={orderIndex} />} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
