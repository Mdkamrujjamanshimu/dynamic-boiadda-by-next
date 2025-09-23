import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const IncDec = ({ amount, setDecrease, setIncrease }:any) => {
  return (
    <div className="w-full flex justify-evenly items-center text-[#374151] gap-[2rem] border-[.1rem] border-[#44d9db] font-bold rounded-[.5rem]">
      <span onClick={setDecrease} className="cursor-pointer bg-transparent">
        <AiOutlineMinus className="text-[1.8rem]" />
      </span>
      <div>
        <h1>{amount}</h1>
      </div>
      <span
        onClick={setIncrease}
        className="cursor-pointer border-none bg-transparent"
      >
        <AiOutlinePlus className="text-[1.8rem]" />
      </span>
    </div>
  );
};

export default IncDec;
