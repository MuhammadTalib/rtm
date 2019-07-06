import React from "react";
const UserDetailed = props => {
  return (
    <div className="custom-control custom-checkbox" style={{ margin: "10px" }}>
      <input
        style={{ marginTop: "10px" }}
        type="checkbox"
        className="custom-control-input "
        id="defaultUnchecked"
      />
      <div className="custom-control-label" htmlFor="defaultUnchecked">
        <div>
          {props.data.FirstName} {props.data.LastName} ({props.data.EmployeeID})
        </div>
        <div>Offline</div>
      </div>
    </div>
  );
};

export default UserDetailed;
