import React from "react";
import ExpandedLeftNavTop from "./ExpandedLeftNavTop";
import ExpandedLeftNavBody from "./ExpandedLeftNavBody";

const ExpandedLeftNav = props => {
  return (
    <React.Fragment>
      <ExpandedLeftNavTop user={props.user} barHandler={props.barHandler} />
      <ExpandedLeftNavBody buttons={props.buttons} />
    </React.Fragment>
  );
};

export default ExpandedLeftNav;
