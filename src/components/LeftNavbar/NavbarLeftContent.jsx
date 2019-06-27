import React, { useState } from "react";
import ShrinkedLeftNav from "./ShrinkedLeftNav";
import ExpandedLeftNav from "./ExpandedLeftNav";
const NavbarLeftContent = props => {
  const buttons = useState([
    { btnName: "Dashboard", active: true, icon: "fas fa-th-large" },
    { btnName: "Users", active: false, icon: "fas fa-user" }
  ]);
  if (props.hover === false) {
    return <ShrinkedLeftNav />;
  } else {
    return (
      <ExpandedLeftNav
        user={props.user}
        barHandler={props.barHandler}
        buttons={buttons}
      />
    );
  }
};

export default NavbarLeftContent;
