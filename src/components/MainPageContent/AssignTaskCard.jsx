import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import HoverToast from "./HoverToast";
const AssignTask = props => {
  const ScheduleDate = useState(false);
  const AssignTask = useState(false);
  const AssignUser = useState(false);
  const GenerateTicketID = useState(false);
  const History = useState(false);
  const MouseEnterHandler = tag => {
    switch (tag) {
      case "ScheduleDate":
        ScheduleDate[1](true);
        break;
      case "Assign Task":
        AssignTask[1](true);
        break;
      case "Assign User":
        AssignUser[1](true);
        break;
      case "Generate Ticket ID":
        GenerateTicketID[1](true);
        break;
      case "History":
        History[1](true);
        break;
      default:
        break;
    }
  };
  const MouseLeaveHandler = tag => {
    switch (tag) {
      case "ScheduleDate":
        ScheduleDate[1](false);
        break;
      case "Assign Task":
        AssignTask[1](false);
        break;
      case "Assign User":
        AssignUser[1](false);
        break;
      case "Generate Ticket ID":
        GenerateTicketID[1](false);
        break;
      case "History":
        History[1](false);
        break;
      default:
        break;
    }
  };
  return (
    <Container style={{ width: "100%", height: "6rem" }}>
      <Row>
        <Col
          className="m-3"
          style={{
            fontFamily: "Muli"
          }}
        >
          <div style={{ width: "15rem" }}>
            <div
              style={{ width: "16.5rem", fontSize: "16px", fontWeight: "800" }}
            >
              {props.data.OrganizationName},{props.data.LocationName}
            </div>
            <div
              style={{ width: "16.5rem", fontSize: "14px", fontWeight: "800" }}
            >
              Due On : {props.data.DueOn.slice(8, 10)}/
              {props.data.DueOn.slice(5, 7)}/{props.data.DueOn.slice(0, 4)}
            </div>
          </div>
        </Col>

        <Col>
          <Row style={{ fontSize: "20px", marginTop: "20px" }}>
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => MouseEnterHandler("ScheduleDate")}
              onMouseLeave={() => MouseLeaveHandler("ScheduleDate")}
            >
              <i className="fas fa-calendar-day m-1" />
              {ScheduleDate[0] ? <HoverToast text="Schedule Date" /> : <div />}
            </div>
            <div
              className="text-center"
              style={{ position: "relative" }}
              onMouseEnter={() => MouseEnterHandler("Assign Task")}
              onMouseLeave={() => MouseLeaveHandler("Assign Task")}
            >
              <i className="fas fa-tasks m-1" />
              {AssignTask[0] ? <HoverToast text="Assign Task" /> : <div />}
            </div>
            <div
              className="text-center"
              style={{ position: "relative" }}
              onMouseEnter={() => MouseEnterHandler("Assign User")}
              onMouseLeave={() => MouseLeaveHandler("Assign User")}
            >
              <i className="fas fa-user-plus m-1" />
              {AssignUser[0] ? <HoverToast text="Assign User" /> : <div />}
            </div>
            <div
              className="text-center"
              style={{ position: "relative" }}
              onMouseEnter={() => MouseEnterHandler("Generate Ticket ID")}
              onMouseLeave={() => MouseLeaveHandler("Generate Ticket ID")}
            >
              <i className="fas fa-ticket-alt m-1" />
              {GenerateTicketID[0] ? (
                <HoverToast text="Generate Ticket ID" />
              ) : (
                <div />
              )}
            </div>
            <div
              className="text-center"
              style={{ position: "relative" }}
              onMouseEnter={() => MouseEnterHandler("History")}
              onMouseLeave={() => MouseLeaveHandler("History")}
            >
              <i className="fas fa-history m-1" />
              {History[0] ? <HoverToast text="History" /> : <div />}
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AssignTask;
