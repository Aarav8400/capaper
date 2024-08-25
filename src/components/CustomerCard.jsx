import React from "react";

const CustomerCard = ({ name, imgUrl, youtubeLink }) => {
  return (
    <div className="bg-white rounded-2xl text-black">
      <img src={imgUrl} alt="" className="rounded-t-lg" />
      <h1 className="p-4 text-center">{name}</h1>
    </div>
  );
};

export default CustomerCard;
