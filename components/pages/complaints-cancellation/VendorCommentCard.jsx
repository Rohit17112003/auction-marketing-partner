"use client";
import { useState } from "react";
import { User } from "lucide-react";
import BannerButton from "@/components/atoms/BannerButton";

const VendorCommentCard = () => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vendor Comment:", comment);
  };

  return (
    <>
      <BannerButton
        route="/complaints-cancellation"
        label="Complaints/Cancellation"
      />

      <div className="bg-light mt-6 w-full rounded-lg px-8 py-6 shadow">
        <div className="mb-4 flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
            <User className="h-6 w-6 text-gray-400" />
          </div>
          <div className="font-poppins ml-3 flex items-center gap-2">
            <p className="text-[1.2rem] font-semibold text-black">
              Michelle Rivera
            </p>
            <p className="text-sm text-[#4D525F]">
              &lt;michelle.rivera@example.com&gt;
            </p>
          </div>
        </div>

        {/* Message */}
        <p className="font-poppins mb-4 text-[1.05rem] leading-relaxed text-[#4D525F] mt-8 pl-1">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
          aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis
          id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore
          cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt
          sint deserunt ut voluptate aute id deserunt nisi.
        </p>

        {/* Comment Box */}
        <form onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comments from vendor"
            className="h-30 w-full rounded-lg bg-[#F3F3F3] p-3 text-[0.95rem] focus:outline-none text-[#333333]  placeholder:text-[#333333] mt-8 font-medium"
          />

          {/* Submit Button */}
         <div className="flex justify-center py-2">
             <button
            type="submit"
            className="mt-4 w-fit rounded bg-[#2CB24B] px-8 py-2.5  text-white transition hover:bg-green-700 font-poppins font-medium text-[1.25rem] cursor-pointer"
          >
            Submit
          </button>
         </div>
        </form>
      </div>
    </>
  );
};

export default VendorCommentCard;
