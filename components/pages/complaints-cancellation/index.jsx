"use client";

import { useState } from "react";
import Textarea from "@/components/atoms/TextArea";
import Button from "@/components/atoms/Button";
import SimpleImageUploader from "@/components/molecules/ImageUploader";
import Select from "@/components/atoms/Select";

const ComplaintsCancellation = () => {
  const [activeTab, setActiveTab] = useState("complaints");

  return (
    <section className="max-w-lg mx-auto my-2 rounded-lg md:shadow md:p-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Complaints & Cancellations
      </h2>

      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-full font-medium ${
            activeTab === "complaints"
              ? "bg-dark text-light"
              : "bg-light text-dark"
          }`}
          onClick={() => setActiveTab("complaints")}
        >
          Complaints
        </button>
        <button
          className={`px-4 py-2 rounded-full font-medium ${
            activeTab === "cancellations"
              ? "bg-dark text-light"
              : "bg-light text-dark"
          }`}
          onClick={() => setActiveTab("cancellations")}
        >
          Cancellations
        </button>
      </div>

      {activeTab === "complaints" && (
        <form className="grid gap-4">
          <Select
            name="issueType"
            icon="ri-error-warning-line"
            placeholder="Select Issue Type"
            options={[
              "Damaged Product",
              "Late Delivery",
              "Item Missing",
              "Others",
            ]}
          />

          <Textarea
            name="description"
            placeholder="Describe your issue"
            rows={4}
          />

          <SimpleImageUploader />

          <Button label="Submit Complaint" style="w-full md:w-56 bg-green hover:bg-darkgreen" />
        </form>
      )}

      {activeTab === "cancellations" && (
        <form className="grid gap-4">
          <Select
            name="orderSelect"
            icon="ri-truck-line"
            placeholder="Select Order to Cancel"
            options={["Order #123", "Order #456", "Order #789"]}
          />

          <Textarea
            name="cancelReason"
            placeholder="Reason for cancellation"
            rows={4}
          />

          <Button
            label="Cancel Order"
            style="w-full md:w-48 bg-red text-white hover:bg-darkred"
          />
        </form>
      )}
    </section>
  );
};

export default ComplaintsCancellation;
