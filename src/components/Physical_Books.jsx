import React from "react";
import Physical_Card_1 from "./Physical_Card_1";

export default function Physical_books() {
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
          Physical{" "}
        </span>
        Books
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
        Get Printed Books curated by a team of professional Chartered
        Accountants at CA Test Series
      </p>
      <div className="flex items-center justify-center gap-10 mt-5">
        <Physical_Card_1 imageURL={"https://www.catestseries.org/assets/images/lectures/ca-inter-fm-and-sm-mcq-question-bank-by-ca-test-series-book.webp"} Price={699} book_name={"CA Inter FM and SM MCQ Question Bank by CA Test Series - Book"}/>
        <Physical_Card_1 imageURL={"https://www.catestseries.org/assets/images/lectures/ca-inter-cost-and-management-accounting-mcq-question-bank-by-ca-test-series-book.webp"} Price={699} book_name={"CA Inter FM and SM MCQ Question Bank by CA Test Series - Book"}/>
        <Physical_Card_1 imageURL={"https://www.catestseries.org/assets/images/lectures/ca-inter-cost-and-fm-sm-mcq-question-bank-combo-by-ca-test-series.webp"} Price={699} book_name={"CA Inter FM and SM MCQ Question Bank by CA Test Series - Book"}/>
      </div>
    </>
  );
}
