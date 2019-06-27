import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
const ExpandedLeftNavBody = props => {
  const clickHandler = btnName => {
    const aa = props.buttons[0].map(btn => {
      return { ...btn, active: false };
    });
    props.buttons[1](aa);
  };
  return (
    <div
      style={{
        position: "absolute",
        height: "30.5rem",
        width: "17.6rem",
        marginTop: "15rem"
      }}
    >
      {props.buttons[0].map(btn => (
        <Link
          key={btn.btnName}
          className="nav-item nav-link"
          to={"/" + btn.btnName}
        >
          <Button
            clickHandler={clickHandler}
            btnName={btn.btnName}
            active={btn.active}
            icon={btn.icon}
          />
        </Link>
      ))}
    </div>
  );
};

export default ExpandedLeftNavBody;
