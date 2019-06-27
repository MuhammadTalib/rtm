import React from "react";
const NavbarTop = props => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      id="custom-nav"
      role="navigation"
      style={{
        marginLeft: props.marginLeft,
        backgroundColor: "#f6f6f6",
        height: "4.0rem"
      }}
    >
      <h4
        style={{
          fontSize: "20px",
          marginTop: "7px",
          marginLeft: "0.3rem",
          fontFamily: "Muli",
          fontStyle: "bold",
          color: "#0d0d0d"
        }}
      >
        The Indus Hospital Blood Center (Korangi)
      </h4>
    </nav>
  );
};

export default NavbarTop;
