"use client";
import Link from "next/link";
import { useState } from "react";
import BannerButton from "@/components/atoms/BannerButton";

const AddComplaints = () => {
  const [formData, setFormData] = useState({
    auctionId: "",
    bidderVendor: "",
    emailId: "",
    date: "",
    complaint: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Submitted:", formData);
    alert("Complaint submitted successfully!");
    setFormData({
      auctionId: "",
      bidderVendor: "",
      emailId: "",
      date: "",
      complaint: "",
    });
  };

  return (
    <>
      {/* Topbar with back button */}

      <BannerButton route="/complaints-cancellation" label="Add Complaint" />

      {/* Form Section */}
      <section className="bg-light mt-6 w-full rounded-xl p-6 shadow">
        <h2 className="text-dark mb-6 text- md:text-start text-2xl font-semibold">
          Complaint Form
        </h2>

        <form
          className="font-nunito  gap-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div>
              <label className="text-dark mb-1 block font-medium">
                Auction ID
              </label>
              <input
                type="text"
                name="auctionId"
                value={formData.auctionId}
                onChange={handleChange}
                placeholder="Enter Auction ID"
                className="focus:ring-primary w-full rounded-md border border-gray-300 px-3 py-2.5 focus:ring-2 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="text-dark mb-1 block font-medium">
                Bidder / Vendor
              </label>
              <input
                type="text"
                name="bidderVendor"
                value={formData.bidderVendor}
                onChange={handleChange}
                placeholder="Enter Name"
                className="focus:ring-primary w-full rounded-md border border-gray-300 px-3 py-2.5 focus:ring-2 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="text-dark mb-1 block font-medium">
                Email ID
              </label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                placeholder="Enter Email"
                className="focus:ring-primary w-full rounded-md border border-gray-300 px-3 py-2.5 focus:ring-2 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="text-dark mb-1 block font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="focus:ring-primary w-full rounded-md border border-gray-300 px-3 py-2.5 focus:ring-2 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-dark mb-1 block font-medium">
              Complaint Details
            </label>
            <textarea
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              rows={4}
              placeholder="Write your complaint here..."
              className="focus:ring-primary w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-[#F13E3E] py-3 font-medium text-[1rem] cursor-pointer text-white transition-all hover:bg-red-600 md:w-48 mt-4"
          >
            Submit Complaint
          </button>
        </form>
      </section>
    </>
  );
};

export default AddComplaints;
