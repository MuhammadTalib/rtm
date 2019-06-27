import React from "react";

import profile from "../profile.jpg";
import logo from "../logo.PNG";
const ExpandedLeftNavTop = props => {
  return (
    <div
      className="fixed-top"
      style={{
        backgroundColor: "#1e2129",
        height: "12.5rem",
        width: "17.6rem"
      }}
    >
      <img
        alt=""
        src={logo}
        style={{
          width: "3.1rem",
          height: "2.5rem",
          marginTop: "0.73rem",
          marginLeft: "1.2rem"
        }}
      />
      <span
        className="align-middle"
        style={{
          color: "#b3b3b3",
          marginLeft: "12px",
          paddingTop: "10px",
          fontSize: "16px",
          fontFamily: "Muli"
        }}
      >
        RTM
      </span>
      <i
        className="fas fa-bars align-middle"
        style={{
          color: "#b3b3b3",
          marginLeft: "135px",
          marginTop: "10px",
          fontSize: "20px",
          zIndex: "9999"
        }}
        onClick={() => props.barHandler()}
      />
      <div
        className="mx-auto"
        style={{
          width: "180px",
          textAlign: "center",

          fontSize: "17px",
          fontWeight: "500",
          color: "#f2f2f2",
          fontFamily: "Muli",
          marginTop: "2.5rem"
        }}
      >
        {props.user.FirstName +
          " " +
          props.user.MiddleName +
          " " +
          props.user.LastName}
      </div>
      <div
        className="mx-auto"
        style={{
          width: "240px",
          textAlign: "center",
          color: "#b3b3b3",
          fontSize: "13.5px",
          fontWeight: "500",
          fontFamily: "Muli",
          marginTop: "0.3rem"
        }}
      >
        {props.user.EmailIDs[0]}
      </div>
      <div
        className="mx-auto"
        style={{
          width: "240px",
          textAlign: "center",
          color: "#b3b3b3",
          fontSize: "13.5px",
          fontWeight: "500",
          fontFamily: "Muli",
          marginTop: "0.3rem"
        }}
      >
        Dashboard Rights
      </div>
      <div
        style={{
          width: "5.2rem",
          height: "5.2rem",
          marginLeft: "6.5rem",
          borderRadius: "100%",
          backgroundColor: "#2d323e",
          paddingBottom: "50px"
        }}
      >
        {" "}
        <img
          alt=""
          src={profile}
          style={{
            width: "4.1rem",
            height: "4.1rem",
            margin: "0.55rem",
            borderRadius: "40px"
          }}
        />
      </div>
    </div>
  );
};

export default ExpandedLeftNavTop;
