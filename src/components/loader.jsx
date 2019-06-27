import React from "react";

import logo from "./loader.gif";
const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        height: "100%",
        marginTop: "-88px",
        width: "100%",
        backgroundColor: "rgb(1, 1, 1,0.8)",
        zIndex: "9999999"
      }}
    >
      <img
        alt=""
        style={{
          height: "6rem",
          width: "6rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
        src={logo}
      />
    </div>
  );
};

export default Loader;
