import React from "react";
import { Card } from "reactstrap";
const Toast = props => {
  return (
    <Card
      style={{
        marginTop: "80px",
        marginLeft: "15px",
        width: "23rem",
        height: "3.3rem",
        padding: "12px",
        fontSize: "16px",
        color: "#fff"
      }}
      className="bg-primary"
    >
      <div>{props.content}</div>
    </Card>
  );
};

export default Toast;
