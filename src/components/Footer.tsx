import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import logo from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div>
        <div className="bg-[url('https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/quykov1jj0hdkgu.webp')] bg-cover bg-center">
          <div className="container grid grid-cols-5 max-[1023px]:grid-cols-2 gap-[2rem] text-[#fff] py-[3rem] p-[2rem]">
            <div className="flex flex-col text-[1.3rem]">
              <Link href={"#"}>
                <Image src={logo} alt="logo" width={130} height={70} />
              </Link>
              <span className="py-[2rem]">
                বই আড্ডা.কম দিচ্ছে ঘরে বসে যে কোন বই কেনার সুযোগ। হাতে পেয়ে
                মূল্য পরিশোধ করুন বইয়ের আড্ডা জমুক বই আড্ডা.কম এ
              </span>
              <div className="flex gap-[2rem] text-[2rem] max-[370px]:gap-[1rem]">
                <Link href={"#"} className="cursor-pointer text-[#fff]">
                  <BsFacebook />
                </Link>
                <Link href={"#"} className="cursor-pointer text-[#fff]">
                  <AiOutlineInstagram />
                </Link>
                <Link href={"#"} className="cursor-pointer text-[#fff]">
                  <AiOutlineTwitter />
                </Link>
                <Link href={"#"} className="cursor-pointer text-[#fff]">
                  <AiFillYoutube />
                </Link>
              </div>
            </div>
            <div>
              <span className="text-[1.8rem] font-[550]">
                জনপ্রিয় ক্যাটাগরি
              </span>
              <ul className="flex flex-col text-[1.3rem] pt-[1rem] gap-[1rem]">
                <li>
                  <Link href={"#"} className="text-[#fff]">
                    আত্মউন্নয়ন মোটিভেশন
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="text-[#fff]">
                    হালাল -হারাম
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="text-[#fff]">
                    বাংলাদেশের রাজনৈতিক
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="text-[#fff]">
                    ব্যবসা ও অর্থনীতি
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="text-[#fff]">
                    ইতিহাস
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-[1.8rem] font-[550]">নীতিমালা</span>
              <ul className="flex flex-col text-[1.3rem] pt-[1rem] gap-[1rem]">
                <li>
                  <Link href={"#"} className="text-[#fff]">
                    পরিষেবার শর্তাবলী
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="text-[#fff]">
                    ফেরত নীতিমালা
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="text-[#fff]">
                    গোপনীয়তা নীতিমালা
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-[1.8rem] font-[550]">তথ্য</span>
              <ul className="flex flex-col text-[1.3rem] pt-[1rem] gap-[1rem]">
                <li>
                  <Link href={"#"} className="text-[#fff]">
                    আমাদের সম্পর্কে
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="text-[#fff]">
                    যোগাযোগ করুন
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="text-[#fff]">
                    অর্ডার ট্র্যাকিং
                  </Link>
                </li>
              </ul>
            </div>
            <div className="max-[500px]:col-span-2">
              <span className="text-[1.8rem] font-[550]">যোগাযোগ</span>
              <ul className="flex flex-col text-[1.5rem] pt-[1rem] gap-[1rem]">
                <li>
                  <Link href={"#"} className="text-[#fff]">
                    +8801737114925
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="text-[#fff]">
                    kamrujjamanshimu@gmail.com
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="text-[#fff]">
                    Dharirampur, Trishal, Mymensingh
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center bg-[#86bc42] py-[2rem] text-[#fff] text-[1.4rem]">
          <span>@2025 Boiadda.com -বই আড্ডা সমস্ত অধিকার সংরক্ষিত</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
