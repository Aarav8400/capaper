import React from "react";

export default function Features_Card({icon, title, description}) {
  return (
    <>
      <div
        className="col-lg-4 col-md-6"
        style={{
          boxSizing: "border-box",
          maxWidth: "100%",
          paddingRight: "calc(1.5rem * .5)",
          paddingLeft: "calc(1.5rem * .5)",
          marginTop: "0",
          flex: "0 0 auto",
          flexShrink: 0,
          width: "370px",
          textAlign: "justify",
        }}
      >
        <div
          className="border shadow rounded px-3 mt-3"
          style={{
            boxSizing: "border-box",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem",
            border: "1px solid rgb(222, 226, 230)",
            marginTop: "1rem",
            paddingRight: "1rem",
            paddingLeft: "1rem",
            borderRadius: "0.25rem",
          }}
        >
          <div
            className="d-flex flex-row align-items-center mt-3"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <div
            >
              <img src={icon} alt="123"  width={30}/>
            </div>
            <h5
              className="mt-2 ms-3"
              style={{
                boxSizing: "border-box",
                marginBottom: "0.5rem",
                fontWeight: 500,
                lineHeight: 1.2,
                fontSize: "1.25rem",
                marginTop: "0.5rem",
                marginLeft: "1rem",
              }}
            >
              <strong style={{ boxSizing: "border-box", fontWeight: "bolder" }}>
                {title}
              </strong>
            </h5>
          </div>
          <p
            className="mt-3"
            style={{
              boxSizing: "border-box",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
