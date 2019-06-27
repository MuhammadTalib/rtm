import React from "react";
const Paginator = props => {
  return (
    <div className="text-center" style={{ fontSize: "15px" }}>
      <span>Items per page: {props.dataLength}</span>
      <span style={{ marginLeft: "40px" }} className="text-center">
        {props.skip + 1} - {props.skip + props.dataLength} of{" "}
        {props.totalLength}
      </span>
      <i
        className="fas fa-angle-left align-middle"
        style={{
          fontSize: "20px",
          marginLeft: "10px",
          color: props.skip !== 0 ? "#000" : "#c7c7c7"
        }}
        onClick={() => props.skipBackward(props.Tag)}
      />
      <i
        className="fas fa-angle-right  align-middle"
        style={{
          fontSize: "22px",
          marginLeft: "10px",
          color:
            props.skip + props.dataLength < props.totalLength
              ? "#000"
              : "#c7c7c7"
        }}
        onClick={() => props.skipForward(props.Tag)}
      />
    </div>
  );
};

export default Paginator;
