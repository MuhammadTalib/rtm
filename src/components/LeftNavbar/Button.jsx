import React, { useState, useEffect } from "react";
const Button = props => {
  const [bgColor, setbgColor] = useState("#2d323e");
  const hoverIn = () => {
    if (!props.active) setbgColor("#20242c");
  };
  const hoverOut = () => {
    if (!props.active) setbgColor("#2d323e");
  };
  const clickHandler = () => {
    props.clickHandler();

    props.active ? setbgColor("#039be5") : setbgColor("#2d323e");
  };
  useEffect(() => {
    props.active ? setbgColor("#039be5") : setbgColor("#2d323e");
  }, [props.active]);
  return (
    <div
      style={{
        backgroundColor: bgColor,
        marginLeft: "-32px",
        marginTop: "-16px",
        width: "16.8rem",
        height: "2.7rem",
        borderRadius: "0px 30px 30px 0px",
        paddingLeft: "20px",
        paddingTop: "0.5rem",
        cursor: "pointer"
      }}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
      onClick={clickHandler}
    >
      <i
        className={props.icon}
        style={{
          color: "#f2f2f2",
          fontSize: "15px",
          marginRight: "15px"
        }}
      />
      <span
        style={{
          color: "#f2f2f2",
          fontSize: "15px",
          marginRight: "15px",
          fontFamily: "Muli"
        }}
      >
        {props.btnName}
      </span>
    </div>
  );
};

export default Button;
