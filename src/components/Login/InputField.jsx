import React from "react";
const InputField = props => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          zIndex: "9999",
          marginLeft: "30px",
          width: "fit-content",
          marginBottom: "-30px",
          backgroundColor: "#fff",
          padding: "0 6px",
          color: "#737373"
        }}
      >
        {props.title}
      </div>

      <input
        className="align-middle"
        style={{
          position: "relative",
          borderColor: "#c7c7c7",
          borderRadius: "6px",
          height: "60px",
          padding: "10px",
          width: "330px",
          margin: "20px"
        }}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputField;
