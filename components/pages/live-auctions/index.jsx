import LiveAuctionCard from "@/components/molecules/LiveAuctionCard";
import BannerButton from "@/components/atoms/BannerButton";

const LiveAuctions = () => {
  return (
    <section className="space-y-8">
    <BannerButton route={"/"} label="All Live auction" />
      <div className="grid gap-10 lg:grid-cols-2">
        {auctions.map((auction, index) => (
          <LiveAuctionCard key={index} {...auction} />
        ))}
      </div>
    </section>
  );
};

export default LiveAuctions;

const auctions = [
  {
    img: "/image/car.jpg",
    name: "Mohit Sen",
    carName: "Ambassador Car",
    auctionNo: "845464",
    time: "14h : 49m : 33s",
    cost: "₹ 18,590",
    price:" ₹ 26,590",
    bids: "₹ 26,590",
  },
  {
    img: "/image/car.jpg",
    name: "Mohit Sen",
    carName: "Ambassador Car",
    auctionNo: "845464",
    time: "14h : 49m : 33s",
    cost: "₹ 18,590",
    price:" ₹ 26,590",
    bids: "₹ 26,590",
  },
];
