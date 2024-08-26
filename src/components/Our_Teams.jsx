import React from "react";
import Team_Card from "./Team_Card";

const Our_Teams = () => {
  return (
    <section className="bg-gray-100 my-10 p-10">
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
        Teams
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
        Meet our awesome and expert team members
      </p>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <Team_Card
          image={"https://www.catestseries.org/Images/landing_pages/team_1.png"}
        />
        <Team_Card
          image={"https://www.catestseries.org/Images/landing_pages/team_1.png"}
        />
        <Team_Card
          image={"https://www.catestseries.org/Images/landing_pages/team_1.png"}
        />
        <Team_Card
          image={"https://www.catestseries.org/Images/landing_pages/team_1.png"}
        />
        <Team_Card
          image={"https://www.catestseries.org/Images/landing_pages/team_1.png"}
        />
        <Team_Card
          image={"https://www.catestseries.org/Images/landing_pages/team_1.png"}
        />
        <Team_Card
          image={"https://www.catestseries.org/Images/landing_pages/team_1.png"}
        />
        <Team_Card
          image={"https://www.catestseries.org/Images/landing_pages/team_1.png"}
        />
      </div>
    </section>
  );
};

export default Our_Teams;
