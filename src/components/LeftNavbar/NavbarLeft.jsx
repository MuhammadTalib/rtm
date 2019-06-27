import React from "react";
import NavbarLeftContent from "./NavbarLeftContent";
const NavbarLeft = props => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light navbar-default fixed-top"
      tabIndex="-1"
      id="custom-nav"
      role="navigation"
      style={{
        position: "fixed",
        backgroundColor: "#2d323e",
        height: "100%",
        width: props.navwidth
      }}
      onMouseEnter={props.hoverHandler}
      onMouseLeave={props.hoverHandler}
    >
      <NavbarLeftContent
        user={props.user}
        hover={props.hover}
        barHandler={props.barHandler}
      />
      {/* <NavbarLeftBody hover={hover} /> */}
    </nav>
  );
};

export default NavbarLeft;
