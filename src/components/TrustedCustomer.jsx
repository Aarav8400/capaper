import React from "react";
import { trusteDData } from "../constants/data";
import CustomerCard from "./CustomerCard";

const TrustedCustomer = () => {
  return (
    <div className="bg-[#212529] text-white min-h-screen">
      <h1 className="font-400 text-center text-5xl mt-5 p-7">
        TRUSTED BY <span className="text-red-500">CELEBRITIES</span>
      </h1>
      <hr className="border-red-500 w-32 mx-auto h-1 mt-2 border-2 " />
      <div className="flex justify-center gap-5 py-8">
        {trusteDData.map((customer, index) => (
          <CustomerCard
            key={index}
            name={customer.name}
            imgUrl={customer.imgUrl}
            youtubeLink={customer.youtubeLink}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedCustomer;
