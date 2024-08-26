import React from "react";

const How_to_Card = ({ icon, title, classNameIcon }) => {
  return (
    <div className="p-10 border-gray-200 border-2 w-52 flex flex-col items-center justify-center rounded-lg shadow-xl">
      <img src={icon} alt="" className={classNameIcon} />
      <h1 className="text-center text-[20px] mt-[10px]">{title}</h1>
    </div>
  );
};

export default How_to_Card;
