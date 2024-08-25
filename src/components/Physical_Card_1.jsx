import React from "react";

export default function Physical_Card_1({ imageURL, book_name, Price }) {
  return (
    <div className="w-[250px] p-5 h-auto border-gray-100 border-2 shadow-2xl">
      <div className="top">
        <img src={imageURL} alt={book_name} />
      </div>
      <div
        className="product-text"
        style={{ boxSizing: "border-box", marginTop: "10px" }}
      >
        <div
          className="product-title-head headline ul-li"
          style={{
            boxSizing: "border-box",
            borderBottom: "2px solid rgb(240, 240, 240)",
            marginBottom: "10px",
            paddingBottom: "10px",
          }}
        >
          <h6
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              marginBottom: "0.5rem",
              transition: "all 0.3s ease-in-out 0s",
              overflow: "hidden",
              color: "rgb(0, 0, 0)",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: 1.556,
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            <a
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                color: "rgb(0, 0, 0)",
              }}
            >
              {book_name}
            </a>
          </h6>
          <h6
            className="product-price"
            style={{
              boxSizing: "border-box",
              marginBottom: "0.5rem",
              transition: "all 0.3s ease-in-out 0s",
              overflow: "hidden",
              lineHeight: 1.556,
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              color: "rgb(248, 51, 78)",
              fontSize: "1.15rem",
              fontWeight: 600,
              marginTop: "15px",
            }}
          >
            <span
              className="me-1"
              style={{
                boxSizing: "border-box",
                fontWeight: 400,
                fontSize: "0.9rem",
                marginRight: "0.25rem",
                color: "rgb(108, 117, 125)",
              }}
            >
              from
            </span>{" "}
            ₹{Price}
          </h6>
        </div>
        <div
          className="row"
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexWrap: "wrap",
            marginTop: "calc(-1 * 0)",
            marginRight: "calc(-.5 * 1.5rem)",
            marginLeft: "calc(-.5 * 1.5rem)",
          }}
        >
          <div
            className="col-6"
            style={{
              boxSizing: "border-box",
              maxWidth: "100%",
              paddingRight: "calc(1.5rem * .5)",
              paddingLeft: "calc(1.5rem * .5)",
              marginTop: "0",
              flex: "0 0 auto",
              flexShrink: 0,
              width: "50%",
            }}
          >
            <a
              className="btn btn-buy w-100"
              tabIndex="0"
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                border: "1px solid transparent",
                padding: "0.375rem 0.75rem",
                borderRadius: "0.25rem",
                transition:
                  "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                display: "inline-block",
                fontWeight: 400,
                lineHeight: 1.5,
                textAlign: "center",
                verticalAlign: "middle",
                cursor: "pointer",
                userSelect: "none",
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgb(248, 51, 78)",
                fontSize: "14px",
                width: "100%",
              }}
            >
              <i
                className="far fa-shopping-basket"
                style={{
                  boxSizing: "border-box",
                  fontVariant: "normal",
                  WebkitFontSmoothing: "antialiased",
                  display: "inline-block",
                  fontStyle: "normal",
                  textRendering: "auto",
                  lineHeight: 1,
                  fontFamily: '"Font Awesome 5 Pro"',
                  fontWeight: 400,
                }}
              />{" "}
              Buy
            </a>
          </div>
          <div
            className="col-6"
            style={{
              boxSizing: "border-box",
              maxWidth: "100%",
              paddingRight: "calc(1.5rem * .5)",
              paddingLeft: "calc(1.5rem * .5)",
              marginTop: "0",
              flex: "0 0 auto",
              flexShrink: 0,
              width: "50%",
            }}
          >
            <a
              className="btn btn-call w-100"
              tabIndex="0"
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                border: "1px solid transparent",
                padding: "0.375rem 0.75rem",
                borderRadius: "0.25rem",
                transition:
                  "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                display: "inline-block",
                fontWeight: 400,
                lineHeight: 1.5,
                textAlign: "center",
                verticalAlign: "middle",
                cursor: "pointer",
                userSelect: "none",
                borderColor: "rgb(248, 51, 78)",
                color: "rgb(248, 51, 78)",
                backgroundColor: "rgb(255, 255, 255)",
                fontSize: "14px",
                width: "100%",
              }}
            >
              <i
                className="far fa-phone-alt"
                style={{
                  boxSizing: "border-box",
                  fontVariant: "normal",
                  WebkitFontSmoothing: "antialiased",
                  display: "inline-block",
                  fontStyle: "normal",
                  textRendering: "auto",
                  lineHeight: 1,
                  fontFamily: '"Font Awesome 5 Pro"',
                  fontWeight: 400,
                }}
              />{" "}
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
