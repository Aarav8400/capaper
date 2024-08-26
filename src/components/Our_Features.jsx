import React from "react";
import Features_Card from "./Features_Card";

export default function Our_Features() {
  return (
    <>
      <h2
        className="text-center pt-5 fw-bold"
        style={{
          boxSizing: "border-box",
          marginTop: "0px",
          marginBottom: "0.5rem",
          lineHeight: 1.2,
          fontSize: "2rem",
          paddingTop: "3rem",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        <span
          className="text-theme"
          style={{ boxSizing: "border-box", color: "rgb(248, 51, 78)" }}
        >
          Our{" "}
        </span>
        Features
      </h2>
      <p
        className="text-center"
        style={{
          boxSizing: "border-box",
          marginTop: "0px",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Why We are Most Trusted Test Series
      </p>
      <div className="cards flex flex-wrap gap-3 items-center justify-center">
        <Features_Card title={"Experienced Faculty"} description={"Chartered Accountants having Min 5 years of experience design Papers and Evaluate. Content Quality is our upmost priority"} icon={"/people.png"}/>
        <Features_Card title={"Experienced Faculty"} description={"Chartered Accountants having Min 5 years of experience design Papers and Evaluate. Content Quality is our upmost priority"} icon={"/people.png"}/>
        <Features_Card title={"Experienced Faculty"} description={"Chartered Accountants having Min 5 years of experience design Papers and Evaluate. Content Quality is our upmost priority"} icon={"/people.png"}/>
        <Features_Card title={"Experienced Faculty"} description={"Chartered Accountants having Min 5 years of experience design Papers and Evaluate. Content Quality is our upmost priority"} icon={"/people.png"}/>
        <Features_Card title={"Experienced Faculty"} description={"Chartered Accountants having Min 5 years of experience design Papers and Evaluate. Content Quality is our upmost priority"} icon={"/people.png"}/>
        <Features_Card title={"Experienced Faculty"} description={"Chartered Accountants having Min 5 years of experience design Papers and Evaluate. Content Quality is our upmost priority"} icon={"/people.png"}/>
      </div>
    </>
  );
}