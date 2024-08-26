import React from "react";

const VideoLectures = () => {
  return (
    <div className="mt-7">
      <h1 className="text-[30px] font-bold mb-2 text-center ">
        <span className="text-red-500">Video</span> Lectures
      </h1>
      <p className="text-center">
        Get Video Lectures of all reknowned Faculties at One platform at
        affordable prices
      </p>
      <div className="flex items-center justify-center">
        <img
          src="https://www.catestseries.org/Images/Lectures-by-Revision-Cube.webp"
          alt=""
          className="m-4 p-4"
          width={1100}
        />
      </div>
      <div className="text-center">
        <button className="bg-red-500 rounded-lg text-white">Buy Now</button>
      </div>
    </div>
  );
};

export default VideoLectures;
