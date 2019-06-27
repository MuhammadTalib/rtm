import React from "react";
import { Card } from "reactstrap";
import AssignTask from "./AssignTaskCard";
import TaskTable from "./TaskTable/TaskTable";
import Paginator from "./Paginator";
const ScheduleCard = props => {
  return (
    <Card
      style={{
        height: "36rem",
        width: "35.5rem",
        borderRadius: "10px",
        marginLeft: "9px",
        marginRight: "1rem",
        fontFamily: "Muli",
        paddingBottom: "30px"
      }}
    >
      <div
        style={{
          marginTop: "1rem",
          marginLeft: "1rem",
          fontSize: "16px",
          fontWeight: "600"
        }}
      >
        Task Distribution
      </div>
      <hr />

      <div style={{ overflow: "auto" }}>
        <div
          className="text-center"
          style={{ position: "relative", fontSize: "20px", marginTop: "-10px" }}
        >
          Assign Tasks
        </div>
        {props.data.client.map((c, index) => (
          <React.Fragment key={index}>
            <AssignTask data={c} />
          </React.Fragment>
        ))}
        <Paginator
          skip={props.skip}
          totalLength={props.data.ClientsCount}
          dataLength={props.data.client.length}
          skipBackward={props.skipBackward}
          skipForward={props.skipForward}
          Tag="Client"
        />

        {props.data.status ? (
          <TaskTable
            taskCount={props.data.taskCount}
            data={props.data.task}
            skip={props.skipTask}
            skipBackward={props.skipBackward}
            skipForward={props.skipForward}
          />
        ) : (
          <div />
        )}
      </div>
    </Card>
  );
};

export default ScheduleCard;
