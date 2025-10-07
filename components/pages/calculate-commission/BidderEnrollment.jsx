"use client";
import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";

const BidderEnrollment = () => {
  const data = [
    {
      bidderId: "HDYE7484",
      bidderName: "Vedant",
      bidderEnrollmentCommission: "500 INR",
      gst: "500 INR",
      cgst: "500 INR",
      sgst: "500 INR",
      ccess: "500 INR",
      cgess: "500 INR",
    },
    {
      bidderId: "HDYE7484",
      bidderName: "Vedant",
      bidderEnrollmentCommission: "500 INR",
      gst: "500 INR",
      cgst: "500 INR",
      sgst: "500 INR",
      ccess: "500 INR",
      cgess: "500 INR",
    },
    {
      bidderId: "HDYE7484",
      bidderName: "Vedant",
      bidderEnrollmentCommission: "500 INR",
      gst: "500 INR",
      cgst: "500 INR",
      sgst: "500 INR",
      ccess: "500 INR",
      cgess: "500 INR",
    },
    {
      bidderId: "HDYE7484",
      bidderName: "Vedant",
      bidderEnrollmentCommission: "500 INR",
      gst: "500 INR",
      cgst: "500 INR",
      sgst: "500 INR",
      ccess: "500 INR",
      cgess: "500 INR",
    },
  ];

  return (
    <>
      <BannerButton route="/" label="Bidder enrollment commission" />
      <section className="mt-6 w-full rounded-xl bg-white shadow px-4">
        <SearchBar placeholder="Search here..." />
        <div className="overflow-x-auto max-w-full mb-10">
          <table className="text-text text-sm w-full min-w-[800px]">
            <thead className="bg-gray-100 text-center font-semibold">
              <tr>
                <th className="px-1 py-4 rounded-l-xl">Bidder ID</th>
                <th className="px-1 py-4">Bidder Name</th>
                <th className="px-1 py-4 text-wrap">Bidder Enrollment Commission</th>
                <th className="px-1 py-4">GST</th>
                <th className="px-1 py-4">CGST</th>
                <th className="px-1 py-4">SGST</th>
                <th className="px-1 py-4">CCESS</th>
                <th className="px-1 py-4">CGESS</th>
                <th className="px-1 py-4 rounded-r-xl">Invoice</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index !== data.length - 1 ? "border-b border-lightgray" : ""
                  } text-center`}
                >
                  <td className="px-4 py-6 font-medium">{item.bidderId}</td>
                  <td className="px-4 py-6 font-medium">{item.bidderName}</td>
                  <td className="px-4 py-6 font-medium">
                    {item.bidderEnrollmentCommission}
                  </td>
                  <td className="px-4 py-6 font-medium">{item.gst}</td>
                  <td className="px-4 py-6 font-medium">{item.cgst}</td>
                  <td className="px-4 py-6 font-medium">{item.sgst}</td>
                  <td className="px-4 py-6 font-medium">{item.ccess}</td>
                  <td className="px-4 py-6 font-medium">{item.cgess}</td>
                  <td className="px-4 py-6">
                    <i className="ri-download-2-fill text-xl font-light cursor-pointer"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default BidderEnrollment;
