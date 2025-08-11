"use client";
import Image from "next/image";

const DiscountCoupon = ({
  title = "First Auction Offer",
  discount = "30% OFF up on first auction",
  conditions = [
    "Redeemable on your first auction order.",
    "Not exchangeable for cash.",
  ],
  validUntil = "03 Dec 2024",
}) => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-light p-5  text-sm text-text">
      <div className="absolute left-0 top-1/2 z-10 h-10 w-5 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-[#fff6a9b4] to-[#ecd8a2a4] shadow"></div>
      <div className="absolute right-0 top-1/2 z-10 h-10 w-5 -translate-y-1/2 rounded-l-full bg-gradient-to-b from-[#fff6a9b4] to-[#ecd8a2a4] shadow"></div>

      <div className="flex items-center gap-2 text-xl font-bold tracking-wide text-black">
        <Image height={50} width={50} alt="parcentage" src="/image/parcentage.svg"/>
        {title}
      </div>

      <p className="mt-2 text-[1rem] font-bold text-text">{discount}</p>

      <ul className="mt-2 list-disc pl-5 text-text text-[0.9rem] tracking-wide font-medium ">
        {conditions.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between text-xs text-text">
           <i className="ri-external-link-line text-2xl font-light cursor-pointer" />
          <span className="text-pink font-medium tracking-tight text-[0.8rem]">Valid until {validUntil}</span>
        <i className="ri-information-line text-2xl font-light cursor-pointer" />
      </div>
    </div>
  );
};

export default DiscountCoupon;

