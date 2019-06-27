import React from "react";
const Targetcontent = props => {
  return (
    <div className="text-center">
      <div>{props.targetName}</div>
      <div style={{ fontSize: "40px", color: "#607d8b" }}>
        <span>{props.achieved}</span>
        <span>/{props.assigned}</span>
        <span style={{ fontSize: "16px" }}>{props.unit}</span>
      </div>
    </div>
  );
};

export default Targetcontent;
