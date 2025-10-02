import BannerContainer from "@/components/molecules/BannerContainer";
import LiveAuctionCard from "@/components/molecules/LiveAuctionCard";

const LiveAuctions = () => {
  return (
    <section className="space-y-8">
      <BannerContainer
        style="bg-lightyellow "
        title="Live Auctions"
        description="Add, edit and view product information"
        image="/image/doctor.svg"
        url="/live-auctions/add"
      />
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
