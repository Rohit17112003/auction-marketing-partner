"use client";
import { useState } from "react";
import Button from "@/components/atoms/Button";
import BannerButton from "@/components/atoms/BannerButton";
import Input from "@/components/atoms/Input";
import ImageUploader from "@/components/molecules/ImageUploader";

const AddAuction = () => {
  const [formData, setFormData] = useState({
    name: "",
    carName: "",
    auctionNo: "",
    time: "",
    cost: "",
    price: "",
    bids: "",
    img: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (imageUrl) => {
    setFormData((prev) => ({ ...prev, img: imageUrl }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // 🔗 Call your backend API here
  };

  return (
    <section className="space-y-6 pb-8">
      <BannerButton route="/" label="Add new auction" />
      <form
        className="grid gap-x-20 gap-y-6 lg:grid-cols-2"
        onSubmit={handleSubmit}
      >

        <Input
          type="text"
          name="name"
          placeholder="Title (Short Name)"
          icon="ri-price-tag-3-line"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="carName"
          placeholder="Full Name / Product Model"
          icon="ri-car-line"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="auctionNo"
          placeholder="Auction Number"
          icon="ri-hashtag"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="time"
          placeholder="Auction Duration (e.g., 2 days left)"
          icon="ri-timer-line"
          onChange={handleChange}
        />
        <Input
          type="number"
          name="cost"
          placeholder="Expected Price"
          icon="ri-money-dollar-circle-line"
          onChange={handleChange}
        />
        <Input
          type="number"
          name="price"
          placeholder="Market Price"
          icon="ri-bar-chart-line"
          onChange={handleChange}
        />
       <div>
         <Input
          type="number"
          name="bids"
          placeholder="Current Bid Price"
          icon="ri-auction-line"
          onChange={handleChange}
        />
       </div>
        <ImageUploader onImageUpload={handleImageUpload} />


        <Button
          style="md:w-56 w-full lg:col-span-2"
          type="submit"
          label="Add Auction"
        />
      </form>
    </section>
  );
};

export default AddAuction;
