"use client";
import Link from "next/link";

const ComplaintsCancellation = () => {
  return (
    <>
       <div className="bg-lightyellow text-light flex items-center justify-between gap-2 rounded-xl px-3 py-3 font-poppins tracking-wide">
        <div className="flex w-full items-center gap-3">
          <Link href="/">
            <i className="ri-arrow-left-line ri-lg"></i>
          </Link>
          <span className="text-xl font-medium">
          Complaints/Cancellation
          </span>
        </div>
        <div className="flex gap-4">
         <Link href="/complaints-cancellation/add-complaints">
           <button className="flex cursor-pointer items-center justify-center text-nowrap gap-1 rounded bg-[#F13E3E] px-3 py-2 text-sm md:px-4 md:text-lg font-poppins font-medium">
             <i className="ri-add-fill font-semibold"></i> Add Complaint
          </button>
         </Link>
        </div>
      </div>
      <section className="bg-light mt-6 w-full rounded-xl shadow">
        <div className="mb-10 max-w-full overflow-x-auto px-4 pt-5">
          <table className="text-text font-nunito w-[1000px] border-collapse text-[1rem] md:w-full">
            <thead className="bg-[#F7DD90] font-semibold">
              <tr>
                <th className="px-4 py-4 text-start">Auction ID</th>
                <th className="px-4 py-4 text-start">Bidder/Vendor</th>
                <th className="px-4 py-4 text-start">Email ID</th>
                <th className="px-4 py-4 text-start">Date</th>
                <th className="px-4 py-4 text-start">Complaint</th>
                <th className="px-4 py-4 text-start">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  { auctionId, bidderVendor, emailId, date, complaint, status },
                  index,
                ) => (
                  <tr
                    key={index}
                    className={`${
                      index !== data.length - 1
                        ? "border-lightgray border-b"
                        : ""
                    } cursor-pointer text-start hover:bg-amber-50`}
                    onClick={() =>
                      (window.location.href =
                        "/complaints-cancellation/vendor-comment")
                    }
                  >
                    <td className="px-4 py-2 font-medium">{auctionId}</td>
                    <td className="px-4 py-2 font-medium">{bidderVendor}</td>
                    <td className="px-4 py-2 font-medium">{emailId}</td>
                    <td className="px-4 py-2 font-medium text-nowrap">
                      {date}
                    </td>
                    <td className="px-4 py-2 text-[0.85rem] font-medium">
                      {complaint}
                    </td>
                    <td className="px-4 py-2 font-medium">
                      {" "}
                      <span
                        className={`i w-[90%] rounded px-4 flex justify-center items-center py-1 text-sm font-medium capitalize ${
                          status === "Resolved"
                            ? "bg-[#00B69B]/15 text-[#00B69B]"
                            : "bg-[#E7B010]/15 text-[#E7B010]"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ComplaintsCancellation;

const data = [
  {
    auctionId: "HDYE7484",
    bidderVendor: "Hemant",
    emailId: "abc@gmail.com",
    date: "04 Sep 2019",
    complaint:
      "Email link covering the following details Name, Id, Collection date, Code, Feedback, Discount Coupons, Match the offer",
    status: "Resolved",
  },
  {
    auctionId: "HDYE7484",
    bidderVendor: "Hemant",
    emailId: "abc@gmail.com",
    date: "28 May 2019",
    complaint:
      "Email link covering the following details Name, Id, Collection date, Code, Feedback, Discount Coupons, Match the offer",
    status: "Resolved",
  },
  {
    auctionId: "HDYE7484",
    bidderVendor: "Hemant",
    emailId: "abc@gmail.com",
    date: "28 May 2019",
    complaint:
      "Email link covering the following details Name, Id, Collection date, Code, Feedback, Discount Coupons, Match the offer",
    status: "Pending",
  },
];
