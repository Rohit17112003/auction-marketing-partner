import BannerButton from "@/components/atoms/BannerButton";
import AuctionCard from "@/components/atoms/AuctionCard";
import Image from "next/image";

const LiveBidding = () => {
  return (
    <section className="space-y-10 overflow-x-hidden">
      <BannerButton route={"/live-auctions"} label="Live Bidding" />
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
        <div className="space-y-6 lg:col-span-1">
          <Image
            className="h-52 rounded-xl object-cover"
            src="/image/car.jpg"
            alt="car"
            width={400}
            height={400}
          />

          {/* <div className="space-y-6 rounded-xl bg-[#f9fafb] p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Expected Price</h3>
              <h4 className="text-base/2 font-semibold">₹5,000</h4>
              <div className="flex shrink-0 items-center gap-2">
                <div className="relative h-8 w-20">
                  <Image
                    className="absolute top-0 left-0 h-8 w-8 rounded-full object-cover"
                    src="/image/profile.png"
                    alt="bidder"
                    width={500}
                    height={500}
                  />
                  <Image
                    className="absolute top-0 left-4 h-8 w-8 rounded-full object-cover"
                    src="/image/profile.png"
                    alt="bidder"
                    width={500}
                    height={500}
                  />
                  <Image
                    className="absolute top-0 left-8 h-8 w-8 rounded-full object-cover"
                    src="/image/profile.png"
                    alt="bidder"
                    width={500}
                    height={500}
                  />
                  <Image
                    className="absolute top-0 left-12 h-8 w-8 rounded-full object-cover"
                    src="/image/profile.png"
                    alt="bidder"
                    width={500}
                    height={500}
                  />
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border text-sm">
                  +24
                </span>
                <span className="text-sm">are live</span>
              </div>
            </div>
            <hr className="text-gray-200" />
            <div className="space-y-2">
              <div className="mb-6">
                <h3 className="text-lg font-semibold">CurrentBid Price</h3>
                <h4 className="text-base/2 font-semibold">₹24,500</h4>
              </div>
              <span className="font-semibold">
                <i className="ri-timer-2-line ri-lg font-normal text-[#FC9905]"></i>{" "}
                01:23s remaining
              </span>
            </div>
          </div> */}

          <AuctionCard />
        </div>
        <div className="lg:col-span-2">
          <div className="space-y-4 lg:w-[75%]">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-2xl font-bold pb-2">
                <div className="h-3 w-3 animate-ping rounded-full bg-[#FC9905] "></div>
                Top 5 Bidder
              </h3>
              <span className="text-lg font-medium">14 Bids made</span>
            </div>
            {bidders.map((bidder, index) => (
              <div key={index} className="flex items-center justify-between space-y-4">
                <div className="flex items-center">
                  {/* <Image
                    className="h-12 w-12 rounded-full object-cover"
                    src={bidder.img}
                    alt="bidder"
                    width={100}
                    height={100}
                  /> */}
                  <div className="">
                    <h3 className="font-urbanist text-[1.12rem] font-extrabold">{bidder.name}</h3>
                    {/* <span className="text-sm font-medium text-gray-600">
                      20s
                    </span> */}
                  </div>
                </div>
                <span className="font-urbanist text-[1.1rem] font-bold">
                  ₹{bidder.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveBidding;

const bidders = [
  {
    img: "/image/profile.png",
    name: "Ronald Richards",
    amount: "24.5k",
  },
  {
    img: "/image/profile.png",
    name: "Cameron Williamson",
    amount: "20k",
  },
  {
    img: "/image/profile.png",
    name: "Guy Hawkins",
    amount: "15k",
  },
  {
    img: "/image/profile.png",
    name: "Darrell Steward",
    amount: "10.5k",
  },
  {
    img: "/image/profile.png",
    name: "Wade Warren",
    amount: "10k",
  },
];
