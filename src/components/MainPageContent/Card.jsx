import React, { useEffect } from "react";
import { Card } from "reactstrap";
const MyCard = props => {
  useEffect(() => {});

  return (
    <Card
      style={{
        height: "20rem",
        width: "21.5%",
        margin: "0.8rem",
        borderRadius: "10px"
      }}
    >
      <div style={{ margin: "15px", height: "50%" }}>
        <div style={{ fontSize: "16px" }}>{props.head}</div>
        <div
          className="text-center"
          style={{
            fontSize: "70px",
            marginTop: "10px",
            color: props.val_color
          }}
        >
          {props.value}
        </div>
        <div
          className="text-center"
          style={{
            marginTop: "-10px",
            color: "rgba(0,0,0,.54)"
          }}
        >
          {props.name}
        </div>
      </div>
      <div>
        {props.bottomContent.map(c => (
          <div key={c.title} style={{ cursor: "pointer" }}>
            <hr />
            <span
              style={{
                marginTop: "-5px",
                fontSize: "16px",
                marginLeft: "20px",
                color: "rgba(0,0,0,.54)"
              }}
            >
              {c.title + ":"}
            </span>
            <span style={{ marginLeft: "10px" }}>{c.value}</span>
            {c.down === "true" ? (
              <i
                style={{ fontSize: "18px", marginLeft: "10px" }}
                className="fas fa-caret-down"
                onClick={props.clickHandler}
              />
            ) : (
              <div />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MyCard;
