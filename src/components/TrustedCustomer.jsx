import React from "react";
import { trusteDData } from "../constants/data";
import CustomerCard from "./CustomerCard";

const TrustedCustomer = () => {
  return (
    <div className="bg-[#212529] text-white min-h-screen">
      <h1 className=" text-center text-3xl mt-5 p-2 pt-16 font-bold">
        TRUSTED BY <span className="text-red-500">CELEBRITIES</span>
      </h1>
      <hr className="border-red-500 w-44 mx-auto h-1 mt-2 border-2 " />
      <div className="flex justify-center gap-16 py-8 ">
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
