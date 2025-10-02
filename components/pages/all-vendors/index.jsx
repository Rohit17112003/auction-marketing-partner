"use client";
import Image from "next/image";

const data = [
  {
    name: "Nitesh Nikhade",
    email: "nitesh@example.com",
    phone: "+91 9876543210",
    image: "/image/profile.png",
  },
  {
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "+91 9876501234",
    image: "/image/profile.png",
  },
  {
    name: "Priya Verma",
    email: "priya@example.com",
    phone: "+91 9823456789",
    image: "/image/profile.png",
  },
  {
    name: "Amit Kumar",
    email: "amit@example.com",
    phone: "+91 9812345678",
    image: "/image/profile.png",
  },
  {
    name: "Sneha Singh",
    email: "sneha@example.com",
    phone: "+91 9801234567",
    image: "/image/profile.png",
  },
];


const AllVendors = () => {

  return (
    <div className="relative w-full px-0 md:px-2">
      <div className="grid grid-cols-1 gap-10 px-0 py-8 sm:grid-cols-2 md:px-4 lg:grid-cols-3">
        {data.map(({image,name,phone,email},index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-xl bg-[#F3F3F3] p-2 text-center "
          >
            <Image
              src={image}
              alt={name}
              height={100}
              width={100}
              className="h-24 w-24 rounded-full object-cover p-2.5"
            />
            <h2 className="text-text font-bold  md:text-[1rem]">
              {name}
            </h2>
            <p className="text-xs text-grays py-2">{phone}</p>
            <p className="text-[0.9rem] text-yellow">{email}</p>
            <button className="mt-2 font-medium text-primary hover:underline text-sm">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVendors;
