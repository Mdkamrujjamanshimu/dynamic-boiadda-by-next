"use client";
import CheckoutLeftContent from "@/components/CheckoutLeftContent";
import { useAuth } from "@/context/AuthContext";
import { useCartContext } from "@/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  // TypeScript fix
  const { cart, total_item, discounted_price, total_price } =
    useCartContext() as any;
  const { authUser } = useAuth() as any;

  const [selectedArea, setSelectedArea] = useState("outside");
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [deliveryData, setDeliveryData] = useState({
    areaText: "ঢাকা সিটির বাহিরে ১০০/- টাকা",
    charge: 100,
  });
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    address: "",
  });

  const grandTotal = discounted_price + deliveryData.charge;
  const grandTotalWithoutDiscount = total_price + deliveryData.charge;

  const router = useRouter();

  const handleNext = () => {
    if (!authUser) {
      setErrorMessage("Please login first");
      return;
    }

    const orderData = {
      items: cart,
      total: discounted_price,
      deliveryCharge: deliveryData.charge,
      grandTotal,
      user: authUser,
      customerInfo: formData,
      date: new Date().toLocaleString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");

    const ordersArray = Array.isArray(existingOrders)
      ? existingOrders
      : [existingOrders];

    const updatedOrders = [...ordersArray, orderData];

    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    router.push("/success");
  };

  const handleNextStep1 = () => {
    const phone = (
      document.getElementById("phone") as HTMLInputElement
    )?.value.trim();
    const name = (
      document.getElementById("name") as HTMLInputElement
    )?.value.trim();
    const address = (
      document.getElementById("address") as HTMLInputElement
    )?.value.trim();

    if (!phone || !name || !address) {
      toast.error("Enter customer info", {
        position: "top-right",
      });
      return;
    }
    setStep(2);
  };

  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#16A34A",
            color: "#fff",
            fontSize: "2rem",
            padding: "1rem 3rem 1rem 1rem",
            borderRadius: "0.5rem",
            maxWidth: "400px",
            overflow: "visible",
            boxSizing: "border-box",
          },
          icon: "⚠️",
        }}
      />

      <div className="px-[2rem] pt-[2rem] pb-[10rem] cart-container">
        {step === 1 && (
          <>
            <div className="flex justify-between items-center text-[1.7rem] max-[400px]:text-[1.3rem] font-semibold mb-[3rem]">
              <p>শপিং ব্যাগ ({total_item} আইটেম)</p>
              <p>মোট ৳{discounted_price}</p>
            </div>
            <div className="flex max-[1023px]:grid gap-[3rem]">
              <div className="w-[65%] max-[1023px]:w-full">
                <CheckoutLeftContent
                  setDeliveryData={setDeliveryData}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
              <div className="w-[35%] max-[1023px]:w-full mt-[2rem]">
                <div className="border-[.1rem] border-[#44d9db] p-[1rem] rounded-[.5rem]">
                  {/* Summary */}
                  <div className="flex justify-between items-center text-[1.5rem] max-[400px]:text-[1.3rem] mb-[1rem]">
                    <span>মোট</span>
                    <div className="flex gap-[1rem]">
                      <span className="text-[#6B7280]">
                        <del>৳{total_price}</del>
                      </span>
                      <span>৳{discounted_price}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[1.5rem] max-[400px]:text-[1.3rem] mb-[1rem]">
                    <span>ডেলিভারি চার্জ</span>
                    <span className="text-[#17B31B]">
                      ৳{deliveryData.charge}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[1.3rem] gap-[1rem] mb-[1rem] text-[#6B7280]">
                    <span>ডেলিভারি এরিয়া</span>
                    <span>{deliveryData.areaText}</span>
                  </div>
                  <hr className="mb-[1rem]" />
                  <span className="text-[#6B7280] text-[1.3rem]">
                    এভারেজ ডেলিভারি টাইম: ---
                  </span>

                  {/* Buttons */}
                  <div className="flex gap-[1rem]">
                    <Link
                      href={"#"}
                      className="flex items-center justify-center bg-[#D1D5DB] w-full text-black text-[1.7rem] py-[1rem] mt-[6rem] rounded-l-[.5rem] cursor-pointer"
                    >
                      <button className="bg-transparent border-none cursor-pointer">
                        পিছনে যান
                      </button>
                    </Link>

                    <div
                      onClick={handleNextStep1}
                      className="flex items-center justify-center bg-[#86BC42] w-full text-[1.7rem] py-[1rem] mt-[6rem] rounded-r-[.5rem] cursor-pointer"
                    >
                      <button className="bg-transparent border-none text-[#fff] cursor-pointer">
                        এগিয়ে যান
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            {/* Step 2 summary */}
            <div className="flex justify-between items-center text-[1.7rem] max-[400px]:text-[1.3rem] font-semibold mb-[3rem]">
              <p>শপিং ব্যাগ ({total_item} আইটেম)</p>
              <p>মোট ৳{discounted_price}</p>
            </div>
            <div className="flex max-[1023px]:grid gap-[3rem]">
              <div className="w-[65%] max-[1023px]:w-full">
                <h2 className="text-[1.5rem] py-[1rem]">পে করুন</h2>
                <div
                  className={`flex gap-[1rem] border-[.1rem] p-[1rem] rounded-[.5rem] mb-[2rem] cursor-pointer transition ${
                    selectedArea === "outside"
                      ? "bg-[#D1D5DB] border-[#44d9db]"
                      : "border-[#44d9db]"
                  }`}
                  onClick={() => setSelectedArea("outside")}
                >
                  <input
                    type="radio"
                    name="area"
                    checked={selectedArea === "outside"}
                    onChange={() => setSelectedArea("outside")}
                    className="cursor-pointer"
                  />
                  <div>
                    <h3 className="text-[1.4rem] font-bold">
                      ক্যাশ অন ডেলিভারি
                    </h3>
                    <span className="text-[1.2rem]">
                      পেমেন্ট ফি 0% - ৳{grandTotal}
                    </span>
                  </div>
                </div>

                <div
                  className={`flex gap-[1rem] border-[.1rem] p-[1rem] rounded-[.5rem] mb-[2rem] cursor-pointer transition ${
                    selectedArea === "inside"
                      ? "bg-[#D1D5DB] border-pink-400"
                      : "border-[#44d9db]"
                  }`}
                  onClick={() => setSelectedArea("inside")}
                >
                  <input
                    type="radio"
                    name="area"
                    checked={selectedArea === "inside"}
                    onChange={() => setSelectedArea("inside")}
                    className="cursor-pointer"
                  />
                  <div>
                    <h3 className="text-[1.4rem] font-bold">বিকাশ</h3>
                    <span className="text-[1.2rem]">
                      পেমেন্ট ফি 0% - ৳{grandTotal}
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-[35%] max-[1023px]:w-full mt-[2rem]">
                <div className="border-[.1rem] border-[#44d9db] p-[1rem] rounded-[.5rem]">
                  <div className="flex justify-between items-center text-[1.5rem] max-[400px]:text-[1.3rem] mb-[1rem]">
                    <span>মোট</span>
                    <div className="flex gap-[1rem]">
                      <span className="text-[#6B7280]">
                        <del>৳{total_price}</del>
                      </span>
                      <span>৳{discounted_price}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[1.5rem] max-[400px]:text-[1.3rem] mb-[1rem]">
                    <span>ডেলিভারি চার্জ</span>
                    <span className="text-[#17B31B]">
                      ৳{deliveryData.charge}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[1.5rem] max-[400px]:text-[1.3rem] mb-[1rem]">
                    <span>সর্বমোট</span>
                    <div className="flex gap-[1rem]">
                      <span className="text-[#6B7280]">
                        <del>৳{grandTotalWithoutDiscount}</del>
                      </span>
                      <span>৳{grandTotal}</span>
                    </div>
                  </div>

                  <div className="flex gap-[1rem]">
                    <div
                      onClick={() => setStep(1)}
                      className="flex items-center justify-center bg-[#D1D5DB] w-full text-black text-[1.7rem] py-[1rem] mt-[6rem] rounded-l-[.5rem] cursor-pointer"
                    >
                      <button className="bg-transparent border-none cursor-pointer">
                        পিছনে যান
                      </button>
                    </div>

                    <div
                      onClick={handleNext}
                      className="flex items-center justify-center bg-[#86BC42] w-full text-[1.7rem] py-[1rem] mt-[6rem] rounded-r-[.5rem] cursor-pointer"
                    >
                      <button className="bg-transparent border-none text-[#fff] cursor-pointer">
                        এগিয়ে যান
                      </button>
                    </div>
                  </div>

                  {errorMessage && (
                    <p className="text-[#7F1D1D] text-[1.5rem] mt-[1rem] text-center font-[700]">
                      {errorMessage}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
