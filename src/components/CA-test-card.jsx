import React from "react";

export default function CA_Test_Card() {
  return (
    <>
      <div
        className="col-lg-7 md:ml-[120px]"
        style={{
          boxSizing: "border-box",
          maxWidth: "100%",
          paddingRight: "calc(1.5rem * .5)",
          paddingLeft: "calc(1.5rem * .5)",
          marginTop: "0",
          flex: "0 0 auto",
          flexShrink: 0,
          width: "45vw",
        }}
      >
        <h1
          className="section-title"
          style={{
            boxSizing: "border-box",
            marginTop: "0px",
            marginBottom: "0.5rem",
            lineHeight: 1.2,
            textAlign: "center",
            paddingTop: "30px",
            fontSize: "40px",
            color: "rgb(248, 51, 78)",
            fontWeight: 700,
          }}
        >
          CA Test Series
        </h1>
        <p
          className="section-intro"
          style={{

            boxSizing: "border-box",
            marginBottom: "1rem",
            marginTop: "0px",
            fontSize: "22px",
            textAlign: "center",
            color: "rgb(0, 0, 0)",
            fontWeight: 500,
          }}
        />
        <p
          className="line-height text-justify tracking-wide"
          style={{
            boxSizing: "border-box",
            marginTop: "0px",
            marginBottom: "1rem",
            lineHeight: "30px",
            textAlign: "justify",
          }}
        >
          We are the only platform to provide application based unseen questions
          in CA Final Online Mock Test Series, CA Inter Online Mock Test Series,
          and CA Foundation Online Mock Test Series as per the latest pattern of
          the ICAI Exam. The Quality of Questions and Evaluation makes CA Test
          Series the best online test series for CA Final Inter & Foundation.
        </p>
        <ul
          className="mt-1 ps-0"
          style={{
            boxSizing: "border-box",
            marginBottom: "1rem",
            marginTop: "0.25rem",
            paddingLeft: "0px",
          }}
        >
          <li
            style={{
              boxSizing: "border-box",
              listStyle: "none",
              fontWeight: 500,
              fontSize: "14px",
              display: 'flex',
              alignItems: 'center',
              paddingTop: '5px',
              paddingBottom: '5px',
            }}
          >
            <img src="/public/white-Arrow.png" className="w-[14px] h-[14px] mr-2"/>
            
            More than 17 top faculties provide our test series to their students
          </li>
          <li
            style={{
              boxSizing: "border-box",
              listStyle: "none",
              fontWeight: 500,
              fontSize: "14px",
              display: 'flex',
              alignItems: 'center',
              paddingTop: '5px',
              paddingBottom: '5px',
            }}
          >
            <img src="/public/white-Arrow.png" className="w-[14px] h-[14px] mr-2"/>
            
            All India Ranking out of 10k+
          </li>
          <li
            style={{
              boxSizing: "border-box",
              listStyle: "none",
              fontWeight: 500,
              fontSize: "14px",
              display: 'flex',
              alignItems: 'center',
              paddingTop: '5px',
              paddingBottom: '5px',
            }}
          >
            <img src="/public/white-Arrow.png" className="w-[14px] h-[14px] mr-2"/>
            
            Test Papers are conducted according to ICAI pattern only
          </li>
          <li
            style={{
              boxSizing: "border-box",
              listStyle: "none",
              fontWeight: 500,
              fontSize: "14px",
              display: 'flex',
              alignItems: 'center',
              paddingTop: '5px',
              paddingBottom: '5px',
            }}
          >
            <img src="/public/white-Arrow.png" className="w-[14px] h-[14px] mr-2"/>
            
            55% case study based questions
          </li>
          <li
            style={{
              boxSizing: "border-box",
              listStyle: "none",
              fontWeight: 500,
              fontSize: "14px",
              display: 'flex',
              alignItems: 'center',
              paddingTop: '5px',
              paddingBottom: '5px',
            }}
          >
            <img src="/public/white-Arrow.png" className="w-[14px] h-[14px] mr-2"/>
            
            Detailed performance evaluation
          </li>
          <li
            style={{
              boxSizing: "border-box",
              listStyle: "none",
              fontWeight: 500,
              fontSize: "14px",
              display: 'flex',
              alignItems: 'center',
              paddingTop: '5px',
              paddingBottom: '5px',
            }}
          >
            <img src="/public/white-Arrow.png" className="w-[14px] h-[14px] mr-2"/>
            
            4 types of notes will be provided
          </li>
        </ul>
        <p
          className="mt-5"
          style={{
            boxSizing: "border-box",
            marginBottom: "1rem",
            marginTop: "3rem",
            display: 'flex'
          }}
        >
          Download our Mobile App
        </p>
        <div
          className="mt-3 flex"
          style={{ boxSizing: "border-box", marginTop: "1rem" }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=org.catestseries.app&hl=en"
            target="_blank"
            style={{
              boxSizing: "border-box",
              color: "rgb(13, 110, 253)",
              textDecoration: "none",
            }}
          >
            <img
              className="img-fluid"
              alt="Google Play Store"
              src="https://www.catestseries.org/Images/icons/google-play-icon.png"
              style={{
                boxSizing: "border-box",
                verticalAlign: "middle",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </a>
          <a
            href="https://apps.apple.com/in/app/ca-test-series/id1580872774"
            target="_blank"
            style={{
              boxSizing: "border-box",
              color: "rgb(13, 110, 253)",
              textDecoration: "none",
            }}
          >
            <img
              className="img-fluid ms-3"
              alt="App Store Icon"
              src="https://www.catestseries.org/Images/icons/app-store-icon.png"
              style={{
                boxSizing: "border-box",
                verticalAlign: "middle",
                maxWidth: "100%",
                height: "auto",
                marginLeft: "1rem",
              }}
            />
          </a>
        </div>
      </div>
    </>
  );
}
