import React from "react";
import How_to_Card from "./How_to_Card";
import Slide2 from "./Slide2";

const How_to = () => {
  return (
    <div className="mt-10 flex">
      <div className="flex flex-wrap w-[60vw] gap-6 ml-10">
      <How_to_Card
        title="Free MCQs Test Series"
        icon={"/clipboard.png"}
        classNameIcon={"w-[40px]"}
      />
      <How_to_Card
        title="Free MCQs Test Series "
        icon={"/clipboard.png"}
        classNameIcon={"w-[40px]"}
      />
      <How_to_Card
        title="Free MCQs Test Series"
        icon={"/clipboard.png"}
        classNameIcon={"w-[40px]"}
      />
      <How_to_Card
        title="Free MCQs Test Series"
        icon={"/clipboard.png"}
        classNameIcon={"w-[40px]"}
      />
      <How_to_Card
        title="Free MCQs Test Series"
        icon={"/clipboard.png"}
        classNameIcon={"w-[40px]"}
      />
      <How_to_Card
        title="Free MCQs Test Series"
        icon={"/clipboard.png"}
        classNameIcon={"w-[40px]"}
      />
      <How_to_Card
        title="Free MCQs Test Series"
        icon={"/clipboard.png"}
        classNameIcon={"w-[40px]"}
      />
      <How_to_Card
        title="Free MCQs Test Series"
        icon={"/clipboard.png"}
        classNameIcon={"w-[40px]"}
      />
      <How_to_Card
        title="Free MCQs Test Series"
        icon={"/clipboard.png"}
        classNameIcon={"w-[40px]"}
      />
      </div>
      <div className="slider border-gray-200 border-2 rounded-2xl h-[580px]">
        <Slide2 />
      </div>
    </div>
  );
};

export default How_to;
