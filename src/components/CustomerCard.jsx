import React from "react";

const CustomerCard = ({ name, imgUrl, youtubeLink }) => {
  return (
    <div className=" rounded-2xl text-black w-52 h-[550px]  z-20 ">
      <div className="z-10 relative">
        <img src={imgUrl} alt="" className="rounded-3xl" />
        <div className="bg-red-500 absolute -bottom-10 w-full -z-10 rounded-3xl">
          <h1 className=" pt-[90px] pb-2 text-center font-[600] text-white">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
