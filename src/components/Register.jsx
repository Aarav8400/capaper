import React from "react";

export default function Register() {
  return (
    <>
      <div
        className="col-lg-5"
        style={{
          boxSizing: "border-box",
          maxWidth: "100%",
          paddingRight: "calc(1.5rem * .5)",
          paddingLeft: "calc(1.5rem * .5)",
          marginTop: "0",
          flex: "0 0 auto",
          flexShrink: 0,
          width: "35vw",
        }}
      >
        <div
          className="card shadow border-0"
          style={{
            boxSizing: "border-box",
            borderRadius: "0.25rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            minWidth: "0px",
            overflowWrap: "break-word",
            backgroundColor: "rgb(255, 255, 255)",
            backgroundClip: "border-box",
            marginTop: "60px",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem",
            border: "0px",
          }}
        >
          <div
            className="card-body"
            style={{
              boxSizing: "border-box",
              flex: "1 1 auto",
              padding: "1rem",
            }}
          >
            <h4
              className="register-section-title_new"
              style={{
                boxSizing: "border-box",
                marginTop: "0px",
                marginBottom: "0.5rem",
                fontWeight: 500,
                lineHeight: 1.2,
                fontSize: "1.5rem",
                paddingTop: "10px",
                textAlign: "center",
                color: "rgb(248, 51, 78)",
              }}
            >
              Register
            </h4>
            <p
              className="text-center"
              style={{
                boxSizing: "border-box",
                marginTop: "0px",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              for CA Test Series
            </p>
            <form
              id="RegisterForm"
              method="post"
              style={{ boxSizing: "border-box" }}
            >
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
                  className="col-lg-12 col-md-6 col-12"
                  style={{
                    boxSizing: "border-box",
                    maxWidth: "100%",
                    paddingRight: "calc(1.5rem * .5)",
                    paddingLeft: "calc(1.5rem * .5)",
                    marginTop: "0",
                    flex: "0 0 auto",
                    flexShrink: 0,
                    width: "100%",
                  }}
                >
                  <div
                    className="input-group mb-4"
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "stretch",
                      width: "100%",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div
                      className="input-group-prepend"
                      style={{
                        boxSizing: "border-box",
                        borderTopRightRadius: "0px",
                        borderBottomRightRadius: "0px",
                      }}
                    >
                      <span
                        className="input-group-text bg-light"
                        style={{
                          boxSizing: "border-box",
                          padding: "0.375rem 0.75rem",
                          whiteSpace: "nowrap",
                          border: "1px solid rgb(206, 212, 218)",
                          borderRadius: "0.25rem",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "1rem",
                          fontWeight: 400,
                          lineHeight: 1.5,
                          color: "rgb(33, 37, 41)",
                          textAlign: "center",
                          backgroundColor: "rgba(248,249,250,1)",
                        }}
                      >
                        Name
                      </span>
                    </div>
                    <input
                      className="form-control"
                      name="name"
                      type="text"
                      pattern="[A-Za-z ]+"
                      required
                      aria-label="Name"
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        fontFamily: "inherit",
                        padding: "0.375rem 0.75rem",
                        border: "1px solid rgb(206, 212, 218)",
                        borderRadius: "0.25rem",
                        transition:
                          "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                        display: "block",
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        color: "rgb(33, 37, 41)",
                        backgroundColor: "rgb(255, 255, 255)",
                        backgroundClip: "padding-box",
                        appearance: "none",
                        flex: "1 1 auto",
                        position: "relative",
                        width: "1%",
                        minWidth: "0px",
                        marginLeft: "-1px",
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="col-lg-12 col-md-6 col-12"
                  style={{
                    boxSizing: "border-box",
                    maxWidth: "100%",
                    paddingRight: "calc(1.5rem * .5)",
                    paddingLeft: "calc(1.5rem * .5)",
                    marginTop: "0",
                    flex: "0 0 auto",
                    flexShrink: 0,
                    width: "100%",
                  }}
                >
                  <div
                    className="input-group mb-4"
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "stretch",
                      width: "100%",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div
                      className="input-group-prepend"
                      style={{
                        boxSizing: "border-box",
                        borderTopRightRadius: "0px",
                        borderBottomRightRadius: "0px",
                      }}
                    >
                      <span
                        className="input-group-text bg-light"
                        style={{
                          boxSizing: "border-box",
                          padding: "0.375rem 0.75rem",
                          whiteSpace: "nowrap",
                          border: "1px solid rgb(206, 212, 218)",
                          borderRadius: "0.25rem",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "1rem",
                          fontWeight: 400,
                          lineHeight: 1.5,
                          color: "rgb(33, 37, 41)",
                          textAlign: "center",
                          backgroundColor: "rgba(248,249,250,1)",
                        }}
                      >
                        Mobile
                      </span>
                    </div>
                    <input
                      className="form-control"
                      name="mobile"
                      type="tel"
                      pattern="[0-9]{10}"
                      required
                      aria-label="Mobile Number"
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        fontFamily: "inherit",
                        padding: "0.375rem 0.75rem",
                        border: "1px solid rgb(206, 212, 218)",
                        borderRadius: "0.25rem",
                        transition:
                          "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                        display: "block",
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        color: "rgb(33, 37, 41)",
                        backgroundColor: "rgb(255, 255, 255)",
                        backgroundClip: "padding-box",
                        appearance: "none",
                        flex: "1 1 auto",
                        position: "relative",
                        width: "1%",
                        minWidth: "0px",
                        marginLeft: "-1px",
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="col-lg-12 col-md-6 col-12"
                  style={{
                    boxSizing: "border-box",
                    maxWidth: "100%",
                    paddingRight: "calc(1.5rem * .5)",
                    paddingLeft: "calc(1.5rem * .5)",
                    marginTop: "0",
                    flex: "0 0 auto",
                    flexShrink: 0,
                    width: "100%",
                  }}
                >
                  <div
                    className="input-group mb-4"
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "stretch",
                      width: "100%",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div
                      className="input-group-prepend"
                      style={{
                        boxSizing: "border-box",
                        borderTopRightRadius: "0px",
                        borderBottomRightRadius: "0px",
                      }}
                    >
                      <span
                        className="input-group-text bg-light"
                        style={{
                          boxSizing: "border-box",
                          padding: "0.375rem 0.75rem",
                          whiteSpace: "nowrap",
                          border: "1px solid rgb(206, 212, 218)",
                          borderRadius: "0.25rem",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "1rem",
                          fontWeight: 400,
                          lineHeight: 1.5,
                          color: "rgb(33, 37, 41)",
                          textAlign: "center",
                          backgroundColor: "rgba(248,249,250,1)",
                        }}
                      >
                        Email
                      </span>
                    </div>
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      required
                      aria-label="Email"
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        fontFamily: "inherit",
                        padding: "0.375rem 0.75rem",
                        border: "1px solid rgb(206, 212, 218)",
                        borderRadius: "0.25rem",
                        transition:
                          "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                        display: "block",
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        color: "rgb(33, 37, 41)",
                        backgroundColor: "rgb(255, 255, 255)",
                        backgroundClip: "padding-box",
                        appearance: "none",
                        flex: "1 1 auto",
                        position: "relative",
                        width: "1%",
                        minWidth: "0px",
                        marginLeft: "-1px",
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="col-lg-12 col-md-6 col-12"
                  style={{
                    boxSizing: "border-box",
                    maxWidth: "100%",
                    paddingRight: "calc(1.5rem * .5)",
                    paddingLeft: "calc(1.5rem * .5)",
                    marginTop: "0",
                    flex: "0 0 auto",
                    flexShrink: 0,
                    width: "100%",
                  }}
                >
                  <div
                    className="input-group mb-4"
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "stretch",
                      width: "100%",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div
                      className="input-group-prepend bg-light"
                      style={{
                        boxSizing: "border-box",
                        borderTopRightRadius: "0px",
                        borderBottomRightRadius: "0px",
                        backgroundColor: "rgba(248,249,250,1)",
                      }}
                    >
                      <span
                        className="input-group-text bg-light"
                        style={{
                          boxSizing: "border-box",
                          padding: "0.375rem 0.75rem",
                          whiteSpace: "nowrap",
                          border: "1px solid rgb(206, 212, 218)",
                          borderRadius: "0.25rem",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "1rem",
                          fontWeight: 400,
                          lineHeight: 1.5,
                          color: "rgb(33, 37, 41)",
                          textAlign: "center",
                          backgroundColor: "rgba(248,249,250,1)",
                        }}
                      >
                        Password
                      </span>
                    </div>
                    <input
                      className="form-control"
                      name="password"
                      type="password"
                      required
                      aria-label="Password"
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        fontFamily: "inherit",
                        padding: "0.375rem 0.75rem",
                        border: "1px solid rgb(206, 212, 218)",
                        borderRadius: "0.25rem",
                        transition:
                          "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                        display: "block",
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        color: "rgb(33, 37, 41)",
                        backgroundColor: "rgb(255, 255, 255)",
                        backgroundClip: "padding-box",
                        appearance: "none",
                        flex: "1 1 auto",
                        position: "relative",
                        width: "1%",
                        minWidth: "0px",
                        marginLeft: "-1px",
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="col-lg-12"
                  style={{
                    boxSizing: "border-box",
                    maxWidth: "100%",
                    paddingRight: "calc(1.5rem * .5)",
                    paddingLeft: "calc(1.5rem * .5)",
                    marginTop: "0",
                    flex: "0 0 auto",
                    flexShrink: 0,
                    width: "100%",
                  }}
                >
                  <div
                    className="input-group mb-4"
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "stretch",
                      width: "100%",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div
                      className="input-group-prepend"
                      style={{
                        boxSizing: "border-box",
                        borderTopRightRadius: "0px",
                        borderBottomRightRadius: "0px",
                      }}
                    >
                      <span
                        className="input-group-text bg-light"
                        style={{
                          boxSizing: "border-box",
                          padding: "0.375rem 0.75rem",
                          whiteSpace: "nowrap",
                          border: "1px solid rgb(206, 212, 218)",
                          borderRadius: "0.25rem",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "1rem",
                          fontWeight: 400,
                          lineHeight: 1.5,
                          color: "rgb(33, 37, 41)",
                          textAlign: "center",
                          backgroundColor: "rgba(248,249,250,1)",
                        }}
                      >
                        Course
                      </span>
                    </div>
                    <select
                      className="form-control"
                      name="course"
                      required
                      aria-label="Course"
                      style={{
                        boxSizing: "border-box",
                        margin: "0px",
                        fontFamily: "inherit",
                        textTransform: "none",
                        overflowWrap: "normal",
                        padding: "0.375rem 0.75rem",
                        border: "1px solid rgb(206, 212, 218)",
                        borderRadius: "0.25rem",
                        transition:
                          "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                        display: "block",
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        color: "rgb(33, 37, 41)",
                        backgroundColor: "rgb(255, 255, 255)",
                        backgroundClip: "padding-box",
                        appearance: "none",
                        flex: "1 1 auto",
                        position: "relative",
                        width: "1%",
                        minWidth: "0px",
                        marginLeft: "-1px",
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px",
                      }}
                    >
                      <option value="2" style={{ boxSizing: "border-box" }}>
                        CA Final (New)
                      </option>
                      <option value="4" style={{ boxSizing: "border-box" }}>
                        CA Inter
                      </option>
                      <option value="5" style={{ boxSizing: "border-box" }}>
                        CA Foundation
                      </option>
                    </select>
                  </div>
                </div>
                <div
                  className="col-lg-12"
                  style={{
                    boxSizing: "border-box",
                    maxWidth: "100%",
                    paddingRight: "calc(1.5rem * .5)",
                    paddingLeft: "calc(1.5rem * .5)",
                    marginTop: "0",
                    flex: "0 0 auto",
                    flexShrink: 0,
                    width: "100%",
                  }}
                >
                  <p
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "1rem",
                    }}
                  >
                    I agree to Terms & Conditions
                  </p>
                  <input
                    className="btn form-control"
                    name="registersubmit"
                    type="submit"
                    defaultValue="Register Now"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      fontFamily: "inherit",
                      width: "100%",
                      backgroundClip: "padding-box",
                      appearance: "none",
                      textDecoration: "none",
                      border: "1px solid transparent",
                      padding: "0.375rem 0.75rem",
                      borderRadius: "0.25rem",
                      transition:
                        "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                      display: "inline-block",
                      lineHeight: 1.5,
                      textAlign: "center",
                      verticalAlign: "middle",
                      userSelect: "none",
                      fontSize: "1rem",
                      cursor: "pointer",
                      backgroundColor: "rgb(248, 51, 78)",
                      color: "rgb(255, 255, 255)",
                      fontWeight: 700,
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
