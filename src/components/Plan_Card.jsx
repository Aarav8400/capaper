import React from "react";
import { card_1_data } from "../constants/data";
const Plan_Card = ({heading,image}) => {
  return (
    <div>
      <div className="border-slate-300 border-2 w-[350px] h-auto p-5 rounded-xl shadow-2xl">
        {/* <img src={image} alt="" className="bg-white" /> */}
        <h1 className="font-semibold text-center text-2xl">
          {heading}
        </h1>
        <ul className="mt-4 mb-4">
          {card_1_data.map((item) => (
            <li key={item.id} className="py-2">
              <p className="flex w-[300px] items-center">
                <img
                  height={"2px"}
                  width={"20px"}
                  src="/arrow.png"
                  alt=""
                  className="block"
                />
                {item.content}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-center w-full bg-slate-200 py-2 text-red-400 mb-2 mt-2">
          Starting at ₹ 450
        </p>
        <div className="flex gap-3 justify-center mt-3">
          <button className="flex bg-transparent border-2 border-red-400 py-3 px-2 gap-1 items-center rounded-lg w-[140px] justify-center">
            <img src="/download.png " width={20} alt="" />
            Syllabus
          </button>
          <button className="flex bg-transparent border-2 border-red-400 py-3 px-2 gap-1 items-center rounded-lg w-[140px] justify-center">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan_Card;
