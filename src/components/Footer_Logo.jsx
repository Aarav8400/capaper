import React from "react";

const Footer_Logo = () => {
  return (
    <div className="p-0 w-auto flex flex-col items-center justify-center">
      <img src="/logo.png" alt="" width={200} />
      <p className="text-gray-400 mt-10 w-[400px]">
        CA Online Test Series exclusively for Chartered Accountancy course. We
        are providing Test Series from last 8 years in collaboration with
        ex-examiners of ICAI
      </p>
      <div className="py-10 gap-10 flex ">
        <img src="/download.png"  alt="" width={30}  />
        <img src="/download.png"  alt="" width={30}  />
        <img src="/download.png"  alt="" width={30}  />
        <img src="/download.png"  alt="" width={30}  />
        <img src="/download.png"  alt="" width={30}  />
      </div>
    </div>
  );
};

export default Footer_Logo;
