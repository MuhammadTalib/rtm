import React from "react";
import profile from "../profile.jpg";
import logo from "../logo.PNG";
const ShrinkedLeftNavTop = () => {
  return (
    <div
      className="fixed-top"
      style={{
        backgroundColor: "#1e2129",
        height: "8rem",
        width: "4rem"
      }}
    >
      <img
        alt=""
        src={logo}
        style={{
          width: "3.1rem",
          height: "2.5rem",
          marginLeft: "0.45rem",
          marginTop: "0.73rem"
        }}
      />
      <img
        alt=""
        src={profile}
        style={{
          width: "2.5rem",
          height: "2.5rem",
          marginLeft: "0.75rem",
          marginTop: "1.5rem",
          borderRadius: "30px"
        }}
      />
    </div>
  );
};

export default ShrinkedLeftNavTop;
