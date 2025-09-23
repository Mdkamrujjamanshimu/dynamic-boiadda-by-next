import { AiFillStar } from "react-icons/ai"; 

import React from "react";

const CommentBox = () => {
  return (
    <div>
      <div className="">
        <div className="flex gap-[1rem] text-[2rem] text-[#FACC15] mb-[1rem]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="border-[.1rem] border-[#44d9db] p-[1rem] rounded-[.5rem]">
          <input
            className="w-full outline-none border-none text-[1.5rem] pb-[4rem]"
            type="text"
            name=""
            id=""
            placeholder="Add your comment..."
          />
          <button className="bg-[#86BC42] text-[#fff] text-[1.5rem] px-[2rem] py-[1rem] rounded-[.5rem] border-none">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
