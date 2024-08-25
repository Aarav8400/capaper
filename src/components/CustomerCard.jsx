import React, { useState } from "react";

const CustomerCard = ({ name, imgUrl, youtubeLink }) => {
  const [iframe, setIframe] = useState(false);
  const iframeInitializer = () => {
    iframe ? renderVideo() : null;
  };
  const renderVideo=()=>{
    <iframe width="498" height="500" src="https://www.youtube.com/embed/PM725ahRbXM" title="Rajiv Kumar | Celebrity About CA Test Series | Appreciate &amp; Support Work Quality of CA Test Series" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  }
  return (
    <div className=" rounded-2xl text-black w-52 h-[550px]  z-20 relative" onClick={iframeInitializer}>
      <div className="z-10 relative ">
        <img
          src={imgUrl}
          alt=""
          className="rounded-3xl"
        />
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
