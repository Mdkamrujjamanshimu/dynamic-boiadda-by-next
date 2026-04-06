"use client";
import { useAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const { register, message, clearMessage } = useAuth() as any;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    // পেজ লোড হলে message reset হবে
    clearMessage();
  }, []);

  // ? TO CLEAR MESSAGE AFTER 2 SECONDS
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        clearMessage();
      }, 2000); // 2 seconds

      return () => clearTimeout(timer); // cleanup
    }
  }, [message]);

  useEffect(() => {
    if (message === "Registration successful!") {
      setTimeout(() => {
        router.push("/login");
      }, 2000); // 2 sec পরে redirect
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register({ name, phone, password });

    // Input fields reset
    setName("");
    setPhone("");
    setPassword("");
  };

  return (
    <>
      {message === "Registration successful!" ? (
        <div className="flex flex-col items-center justify-center h-[200px]">
          <h2 className="text-[2rem] font-[900] text-[#006400]">
            Registration Successful 🎉
          </h2>
          <p className="text-[1.4rem] mt-2 text-[#4B5563]">Login now...</p>
        </div>
      ) : (
        <div className="max-[700px]:w-[350px] max-[450px]:w-[300px] max-w-[400px] my-[10rem] mx-auto border-[.1rem] border-[#D1D5DB] rounded-[.5rem] py-[2rem] shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white w-full max-w-md rounded-xl shadow-md p-6">
              <h2 className="text-center text-[1.8rem] text-[#1F2937] font-semibold mb-[2rem]">
                Sign up with Us
              </h2>
              <hr className="border-[#D1D5DB] border-[.1rem]" />

              <div className="px-[1rem]">
                {/* Logo + Description */}
                <div className="flex items-center justify-start gap-[1rem] my-[1rem]">
                  <div className="relative w-[5.6rem] h-[5.6rem] rounded-full overflow-hidden bg-[#006400] flex items-center justify-center">
                    <Image
                      src={logo}
                      alt="logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center py-[1rem] text-[1.4rem]">
                    <h3 className="text-[#374151] mt-2 font-semibold">
                      Boiadda.com - বই আড্ডা
                    </h3>
                    <p className="text-[#6B7280] text-sm text-center">
                      এ প্রবেশ করুন ফোন নাম্বার এর মাধ্যমে
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  autoComplete="off"
                  className="flex flex-col gap-[2rem]"
                >
                  <div>
                    <label className="block text-[1.7rem] font-[600] pb-[.5rem]">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      autoComplete="off"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-[1rem] text-[1.6rem] outline-none border-[.1rem] rounded-[.5rem] border-[#D1D5DB]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[1.7rem] font-[600] pb-[.5rem]">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="off"
                      placeholder="Enter phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-[1rem] text-[1.6rem] outline-none border-[.1rem] rounded-[.5rem] border-[#D1D5DB]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[1.7rem] font-[600] pb-[.5rem]">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      autoComplete="new-password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-[1rem] text-[1.6rem] outline-none border-[.1rem] rounded-[.5rem] border-[#D1D5DB]"
                      required
                    />
                  </div>

                  <span className="text-right text-[#3B82F6] text-[1.2rem] cursor-pointer hover:underline">
                    Have refer code?
                  </span>

                  <hr className="border-[#D1D5DB] border-[.1rem]" />

                  <button
                    type="submit"
                    className="w-full bg-[#008800] border-none outline-none text-[#fff] text-[1.8rem] py-[1rem] rounded-[.5rem] cursor-pointer"
                  >
                    Join
                  </button>
                </form>

                {message && (
                  <p className="mb-[3rem] mt-[1rem] text-[1.7rem] text-[#7C2D12] text-center font-[900]">
                    {message}
                  </p>
                )}

                <div className="flex items-center justify-center my-[1rem]">
                  <span className="text-[1.8rem] font-[700]">Or</span>
                </div>

                <hr className="border-[#D1D5DB] border-[.1rem]" />

                <div className="grid grid-cols-2 gap-[1rem] mt-[2rem]">
                  <button className="py-[1rem] rounded-[.5rem] border-none outline-none text-[#4338CA] text-[1.6rem] cursor-pointer bg-[#F3F4F6] hover:bg-[#E5E7EB] transition">
                    Forgot Password?
                  </button>
                  <Link href={"/login"} className="text-center rounded-[.5rem]">
                    <button className="w-full text-[#4338CA] text-[1.6rem] py-[1rem] border-none outline-none cursor-pointer bg-[#F3F4F6] hover:bg-[#E5E7EB] transition">
                      Log In
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
