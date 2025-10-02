"use client";
import Image from "next/image";
import { Clock } from "lucide-react";

const prices = [
  { label: "Market price", value: "₹5,000" },
  { label: "Start Price", value: "₹24,500" },
  { label: "Current Bid Price", value: "₹24,500" },
  { label: "Match the offer", value: "5 Bidders" },
];

const socialCauses = [
  { src: "/image/farmer.svg", label: "Farmer" },
  { src: "/image/couple.svg", label: "Old age People" },
  { src: "/image/army.svg", label: "Army People" },
  { src: "/image/climate.png", label: "Climate Change" },
];

const AuctionCard = () => {
  return (
    <div className="bg-light mx-auto max-w-sm rounded-lg p-3 shadow-sm">
      {/* Timer */}
      <div className="mb-3 flex items-center gap-2 border-b border-gray-200 pb-2 font-medium text-gray-900">
       <Clock className="w-5 h-5 text-[#E7AF0E]" /> <span>01: 23s remaining</span>
      </div>

      {/* Prices */}
      <div className="mb-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-800">
        {prices.map((item, i) => (
          <div key={i}>
            <p className="font-bold">{item.label}</p>
            <p className="font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Social Causes */}
      <div className="rounded-lg border border-dashed border-[#E7B010] p-3 pb-4">
        <h3 className="mb-3 text-center text-sm font-medium text-gray-900 underline text-[0.8rem]">
          Social Causes Supported
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm font-medium">
          {socialCauses.map((cause, i) => (
            <div key={i} className="flex items-sart gap-2">
              <Image src={cause.src} alt={cause.label} width={28} height={28} />
              <span className="text-[0.65rem]">{cause.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
