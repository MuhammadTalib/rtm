import React from "react";

import "./TaskTable.css";
import Paginator from "../Paginator";
const TaskTable = props => {
  return (
    <div
      style={{
        fontSize: "14px",
        width: "34rem",
        padding: "20px",
        fontWeight: "800"
      }}
    >
      <table
        className="table table-bordered tasktable mat-elevation-z8"
        style={{}}
      >
        {console.log(props.data[0])}
        <thead>
          <tr>
            <th>Client</th>
            <th> Date</th>
            <th> Task</th>
            <th> By</th>
            <th>Ticket</th>
            <th width="8rem" />
          </tr>
        </thead>
        <tbody>
          {props.data.map((row, index) => (
            <tr key={index}>
              <td className="col-md-6">
                {row.ClientDetails.OrganizationName},
                {row.ClientDetails.LocationName}
              </td>
              <td className="col-md-6">
                {row.ScheduleDate.slice(8, 10)}/{row.ScheduleDate.slice(5, 7)}/
                {row.ScheduleDate.slice(0, 4)}
              </td>
              <td className="col-md-1">{row.TaskTitle}</td>
              <td className="col-md-6">
                {row.CreationDetails.ActionTakenByName}
              </td>
              <td className="col-md-6">{row.TicketID}</td>

              <td width="20rem">
                <i className="fas fa-user-plus m-1" />
                <i className="fas fa-ticket-alt m-1" />
                <i className="fas fa-history m-1" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginator
        skip={props.skip}
        totalLength={props.taskCount}
        dataLength={props.data.length}
        skipBackward={props.skipBackward}
        skipForward={props.skipForward}
        Tag="Task"
      />
    </div>
  );
};
export default TaskTable;
