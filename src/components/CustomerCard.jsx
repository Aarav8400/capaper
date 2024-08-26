import React, { useState } from "react";

const CustomerCard = ({ name, imgUrl, youtubeLink, className }) => {
  const [iframe, setIframe] = useState(false);
  return (
    <div
      className=" rounded-2xl text-black w-52 h-[550px]   relative cursor-pointer"
      onClick={() => {
        setIframe(!iframe);
      }}
    >
      {iframe ? (
        <div className={`absolute z-50 ${className}`}>
          <button
            className=" w-[498px] bg-white text-black font-bold text-xl m-0 p-3 rounded-t-lg"
            onClick={() => setIframe(false)}
          ><img src="/close.png" width={20} alt="" /></button>
          <iframe
            width="498"
            height="500"
            src={youtubeLink}
            title="Rajiv Kumar | Celebrity About CA Test Series | Appreciate &amp; Support Work Quality of CA Test Series"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      ) : null}
      <div className="z-10 relative ">
        <img src={imgUrl} alt="" className="rounded-3xl" />
        <div className="bg-red-500 absolute -bottom-10 w-full -z-10 rounded-3xl">
          <h1 className=" pt-[90px] pb-2 text-center font-[600] text-white">
            {name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
