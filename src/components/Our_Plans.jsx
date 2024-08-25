import React from "react";
import Plan_Card from "./Plan_Card";

const Our_Plans = () => {
  return (
    <>
      <div className="mt-7">
        <h1 className="text-[45px] font-semibold mb-4 text-center ">
          <span className="text-red-500">Our </span>Plans
        </h1>
        <p className="text-center font-300 mb-7">
          Designed for adequate preparation of CA Exams
        </p>
      </div>
      <div className="flex justify-center gap-10 items-center ">
        <Plan_Card heading="Detailed Test Series" />
        <Plan_Card heading="Individual chapterwise Test Series"  />
        <Plan_Card heading="Full Syllabus Test Series"/>
      </div>
      <p className="text-center px-32 pt-20 pb-20">
      Even in the scheduled plans, if an exam is missed on the scheduled date, then the exam can be attempted later.Price is inclusive of all taxes, no hidden charges of any type.
      </p>
    </>
  );
};

export default Our_Plans;
