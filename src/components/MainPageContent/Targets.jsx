import React from "react";
import { Card } from "reactstrap";
import Targetcontent from "./targetItem";
const Targets = props => {
  return (
    <Card
      style={{
        height: "20rem",
        width: "21.5%",
        margin: "0.8rem",
        borderRadius: "10px"
      }}
    >
      <div style={{ height: "50%" }}>
        <div style={{ margin: "15px", fontSize: "16px" }}>{props.head}</div>
        <div style={{ height: "148px", overflowX: "auto", overflowY: "auto" }}>
          {props.targets.map((t, index) => (
            <Targetcontent
              key={index}
              targetName={t.Target}
              unit={t.Unit}
              achieved={t.AchievedTargets}
              assigned={t.AssignQuantity}
            />
          ))}
        </div>
      </div>
      <div style={{ marginTop: "27px" }}>
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

export default Targets;
