import React from "react";
import User from "./user";
const RightNavbar = props => {
  return (
    <nav
      style={{
        position: "fixed",
        height: "100%",
        width: "5rem",
        backgroundColor: "#fff",
        //left: "100%",
        zIndex: "1",
        marginTop: "-4rem",
        marginLeft: "80rem",
        MozBoxShadow: "2px 2px 2px 5px rgb(1,1,1,0.2)",
        boxShadow: "2px 2px 2px 1px rgb(1,1,1,0.2)"
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
          onClick={props.onClick}
        />
      </div>
      <div style={{ overflowY: "auto", height: "35rem" }}>
        {props.data.Users.map((u, index) => (
          <User data={u} key={index} />
        ))}
      </div>
    </nav>
  );
};

export default RightNavbar;
