import React from "react";
import { Card } from "reactstrap";
const HoverToast = props => {
  return (
    <Card
      style={{
        backgroundColor: "#2d323e",
        color: "#FFF"
      }}
    >
      <div
        style={{
          fontSize: "9px",
          margin: "5px"
        }}
      >
        {props.text}
      </div>
    </Card>
  );
};

export default HoverToast;
