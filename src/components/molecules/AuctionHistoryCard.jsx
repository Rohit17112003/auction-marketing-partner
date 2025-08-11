import Image from "next/image";
import Link from "next/link";

const AuctionHistoryCard = ({ name, img, carName, auctionNo, time }) => {
  return (
    <Link href={`/auction-history/${name}`}>
      <div className="container-bg flex flex-col gap-6 p-3 lg:flex-row">
        <Image
          className="w-full rounded-lg lg:w-44"
          src={img}
          alt="car"
          width={200}
          height={300}
        />
        <div>
          <p className="text-tertiary text-[16px] font-semibold">{name}</p>
          <h4 className="text-[20px] font-semibold">{carName}</h4>
          <p className="mb-2 text-[#828282]">Auction no #{auctionNo}</p>
          <p className="mb-2 flex w-fit items-center gap-1 rounded-sm bg-[#6A686629] px-2 py-0.5 text-[#6A6866]">
            <i className="ri-timer-2-line ri-lg"></i> {time}
          </p>
          <p className="text-tertiary text-[20px] font-semibold">
            ₹ 18,590 - Sold
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AuctionHistoryCard;
