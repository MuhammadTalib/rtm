import React from "react";
import { Card } from "reactstrap";
const TaskDistribution = props => {
  return (
    <Card
      style={{
        height: "36rem",
        width: "35.5rem",
        borderRadius: "10px",
        marginLeft: "9px",
        marginRight: "1rem"
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
      <table
        className="table"
        style={{
          position: "absolute",
          marginTop: "3.5rem",

          fontSize: "15px"
        }}
      >
        <thead>
          <tr>
            <th scope="col" className=" text-center align-middle">
              Title
            </th>
            <th scope="col" className=" text-center align-middle">
              Assigned(A)
            </th>
            <th scope="col" className=" text-center align-middle">
              Completed(B)
            </th>
            <th scope="col" className=" text-center align-middle">
              <div>Individual</div> <div>(B / A) * 100</div>
            </th>
            <th scope="col" className=" text-center">
              <div>Total</div> <div>(B / C) * 100</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.TaskOutComes[0].groupTitleWise.map((row, index) => (
            <tr className="text-center" key={index}>
              <td>{row._id}</td>
              <td>{row.count}</td>
              <td>{row.Completed}</td>
              <td>{((row.Completed / row.count) * 100).toFixed()}%</td>
              <td>{((row.Completed / row.count) * 100).toFixed()}%</td>
              <td>
                <i className="fas fa-arrow-right" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default TaskDistribution;
