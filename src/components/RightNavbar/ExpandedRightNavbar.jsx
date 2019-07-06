import React from "react";
import UserDetailed from "./userDetailed";
const ExpandedRightNavbar = props => {
  return (
    <div
      style={{
        position: "fixed",
        width: "22rem",
        backgroundColor: "#fff",
        marginLeft: "63rem",
        height: "100%",
        marginTop: "-4rem",
        zIndex: props.z
      }}
    >
      <div
        style={{
          height: "4rem",
          backgroundColor: "#1e2129"
        }}
      >
        <i
          className="fas fa-user-friends"
          style={{ color: "#fff", fontSize: "1.3rem", margin: "1.4rem" }}
        />
        <i
          className="fas fa-times"
          style={{ color: "#fff", fontSize: "1rem", margin: "1.4rem" }}
          onClick={props.cancel}
        />
      </div>
      <div style={{ overflowY: "auto", height: "35rem" }}>
        {props.data.Users.map((a, index) => (
          <UserDetailed data={a} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ExpandedRightNavbar;
