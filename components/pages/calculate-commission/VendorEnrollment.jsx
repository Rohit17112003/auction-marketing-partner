"use client";
import BannerButton from "@/components/atoms/BannerButton";
import SearchBar from "@/components/molecules/Search";

const VendorEnrollment = () => {
  return (
    <>
      <BannerButton route="/" label="Vendor enrollment commission" />
      <section className="mt-6 w-full rounded-xl bg-white shadow px-4">
        <SearchBar placeholder="Search here..." />
        <div className="mb-10 max-w-full overflow-x-auto">
          <table className="text-text w-full min-w-[800px] text-sm">
            <thead className="bg-gray-100 text-center font-semibold">
              <tr>
                <th className="px-4 py-2 rounded-l-xl">Vendor ID</th>
                <th className="px-1 text-nowrap py-2">Vendor Name</th>
                <th className="px-4 py-2">Membership Type</th>
                <th className="px-4 py-2">Membership Amount</th>
                <th className="px-4 py-2">Vendor Enrollment Commission</th>
                <th className="px-4 py-2">GST</th>
                <th className="px-4 py-2">CGST</th>
                <th className="px-4 py-2">SGST</th>
                <th className="px-4 py-2 rounded-r-xl">Invoice</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index !== data.length - 1 ? "border-lightgray border-b" : ""
                  } text-center`}
                >
                  <td className="px-4 py-6 font-medium">{item.vendorId}</td>
                  <td className="px-1 text-nowrap  py-6 font-medium">{item.vendorName}</td>
                  <td className="px-4 py-6 font-medium capitalize">
                    {item.membershipType}
                  </td>
                  <td className="px-4 py-6 font-medium">
                    {item.membershipAmount}
                  </td>
                  <td className="px-4 py-6 font-medium">
                    {item.vendorEnrollmentCommission}
                  </td>
                  <td className="px-1 py-6 font-medium text-nowrap">{item.gst}</td>
                  <td className="px-1 py-6 font-medium">{item.cgst}</td>
                  <td className="px-1 py-6 font-medium">{item.sgst}</td>
                  <td className="px-1 py-6">
                    <i className="ri-download-2-fill cursor-pointer text-xl font-light"></i>
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

const data = [
  {
    vendorId: "HDYE7484",
    vendorName: "Vedant",
    membershipType: "Gold",
    membershipAmount: "500 INR",
    vendorEnrollmentCommission: "500 INR",
    gst: "500 INR",
    cgst: "500 INR",
    sgst: "500 INR",
  },
  {
    vendorId: "HDYE7484",
    vendorName: "Vedant",
    membershipType: "Silver",
    membershipAmount: "500 INR",
    vendorEnrollmentCommission: "500 INR",
    gst: "500 INR",
    cgst: "500 INR",
    sgst: "500 INR",
  },
  {
    vendorId: "HDYE7484",
    vendorName: "Vedant",
    membershipType: "Gold",
    membershipAmount: "500 INR",
    vendorEnrollmentCommission: "500 INR",
    gst: "500 INR",
    cgst: "500 INR",
    sgst: "500 INR",
  },
  {
    vendorId: "HDYE7484",
    vendorName: "Vedant",
    membershipType: "Gold",
    membershipAmount: "500 INR",
    vendorEnrollmentCommission: "500 INR",
    gst: "500 INR",
    cgst: "500 INR",
    sgst: "500 INR",
  },
];
