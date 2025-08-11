"use client";
import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";
import Button from "@/components/atoms/Button";

const VendorEnrollment = () => {
  const data = [
    {
      auctionId: "HDYE7484",
      vendorName: "Vedant Sharma",
      membershipType: "Gold",
      membershipAmount: 5000,
      vendorEnrollmentCommission: 450,
      gst: 90,
      cgst: 45,
      sgst: 45,
      invoiceAvailable: true,
    },
    {
      auctionId: "HJKL7821",
      vendorName: "Aarav Kumar",
      membershipType: "Silver",
      membershipAmount: 3000,
      vendorEnrollmentCommission: 270,
      gst: 180,
      cgst: 90,
      sgst: 90,
      invoiceAvailable: false,
    },
    {
      auctionId: "GHTY5689",
      vendorName: "Riya Patel",
      membershipType: "Platinum",
      membershipAmount: 8000,
      vendorEnrollmentCommission: 720,
      gst: 54,
      cgst: 27,
      sgst: 27,
      invoiceAvailable: true,
    },
    {
      auctionId: "POIU3456",
      vendorName: "Dev Verma",
      membershipType: "Gold",
      membershipAmount: 5000,
      vendorEnrollmentCommission: 450,
      gst: 162,
      cgst: 81,
      sgst: 81,
      invoiceAvailable: false,
    },
  ];

  return (
    <>
      <BannerButton route="/" label="Vendor enrollment commission" />
      <section className="mt-6 w-full rounded-xl bg-white shadow">
        <SearchBar placeholder="Search here..." />
        <div className="overflow-x-auto max-w-full mb-10">
          <table className="text-text  text-sm  w-[1000px]">
            <thead className="bg-gray-100 text-center font-semibold">
              <tr>
                <th className="px-4 py-2">Auction ID</th>
                <th className="px-4 py-2">Vendor Name</th>
                <th className="px-4 py-2">Membership Type</th>
                <th className="px-4 py-2">Membership Amount</th>
                <th className="px-4 py-2">Vendor Enrollment Commission </th>
                <th className="px-4 py-2">GST</th>
                <th className="px-4 py-2">CGST</th>
                <th className="px-4 py-2">SGST</th>
                <th className="px-4 py-2">Invoice</th>
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
                  <td className="px-4 py-6 font-medium">{item.auctionId}</td>
                  <td className="px-4 py-6 font-medium">{item.vendorName}</td>
                  <td className="px-4 py-6 font-medium capitalize">{item.membershipType}</td>
                  <td className="px-4 py-6 font-medium">₹{item.membershipAmount}</td>
                  <td className="px-4 py-6 font-medium">₹{item.vendorEnrollmentCommission}</td>
                  <td className="px-4 py-6 font-medium">₹{item.gst}</td>
                  <td className="px-4 py-6 font-medium">₹{item.cgst}</td>
                  <td className="px-4 py-6 font-medium">₹{item.sgst}</td>
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

export default VendorEnrollment;
