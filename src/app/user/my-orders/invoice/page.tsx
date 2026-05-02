"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navigation from "@/components/Orders/Navigation";
import Status from "@/components/Orders/Status";
import Invoice from "@/components/Orders/Invoice";
import Resell from "@/components/Orders/Resell";

/* ------------------ MAIN CONTENT ------------------ */
const PageContent = () => {
  const searchParams = useSearchParams();

  const [order, setOrder] = useState<any>(null);
  const [active, setActive] = useState<"status" | "invoice" | "resell">("status");

  const orderIndex = searchParams.get("index"); // string | null

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
        <p className="text-[1.4rem] text-[#6B7280]">
          No order data found
        </p>
      </div>
    );
  }

  return (
    <div className="flex container items-center justify-center">
      <div className="w-full flex max-[1024px]:flex-col gap-[1rem] py-[4rem] px-[1rem]">

        {/* Sidebar */}
        <div className="w-[20%] max-[1024px]:w-full overflow-x-auto border-r border-[#f0f0f0] max-[1024px]:border-r-0 max-[1024px]:border-b">
          <div className="max-[1024px]:min-w-[600px] min-w-[150px]">
            <Navigation />
          </div>
        </div>

        {/* Content */}
        <div className="w-[80%] max-[1024px]:w-full flex flex-col gap-[1rem] pl-[2rem] bg-[#F3F4F6] rounded-[0.5rem]">
          <div className="py-[4rem] px-[2rem]">

            {/* Header */}
            <div className="mb-[4rem]">
              <div className="flex max-[640px]:flex-col justify-between gap-[1rem] mb-[2rem]">

                <div className="flex flex-col gap-[0.5rem]">
                  <h2 className="text-[3rem] font-[700] text-[#111827]">
                    #ORD-{orderIndex ? parseInt(orderIndex) + 1 : "N/A"}
                  </h2>

                  <p className="text-[#374151] text-[1.4rem]">
                    Placed on {order.date} . Last updated:{" "}
                    <span className="text-[#000] font-[600]">
                      No updates
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-[1rem]">
                  <span className="text-[#15803D] text-[1.4rem] font-[600] border border-[#15803D] px-[1rem] py-[.5rem] rounded-full">
                    processing
                  </span>
                </div>
              </div>

              {/* Tabs */}
              <ul className="flex gap-[2rem] text-[1.4rem] font-[500]">
                {["status", "invoice", "resell"].map((tab) => (
                  <li
                    key={tab}
                    onClick={() => setActive(tab as typeof active)}
                    className={`cursor-pointer px-[1rem] py-[0.5rem] rounded-[.5rem] transition ${
                      active === tab
                        ? "bg-[#4338CA] text-[#fff]"
                        : "text-[#374151] hover:bg-[#E5E7EB]"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Area */}
            <div>
              {active === "status" && <Status order={order} />}

              {active === "invoice" && orderIndex && (
                <Invoice order={order} orderIndex={orderIndex} />
              )}

              {active === "resell" && orderIndex && (
                <Resell order={order} orderIndex={orderIndex} />
              )}

              {!orderIndex && active !== "status" && (
                <p className="text-red-500 mt-4">
                  Invalid order index
                </p>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

/* ------------------ SUSPENSE WRAPPER ------------------ */
export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}