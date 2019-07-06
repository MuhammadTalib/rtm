import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import MyCard from "./Card";
import { connect } from "react-redux";
import Targets from "./Targets";
import TaskDistribution from "./TaskDistribution";
import ScheduleCard from "./ScheduleCard";
import Loader from "../loader";
const MainPageContent = props => {
  var date = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();
  const verificationPending = () => {};
  const loader = useState(false);
  const [skip, setskip] = useState(0);
  const [skipTask, setskipTask] = useState(0);
  const [ClientData, setClientdata] = useState({
    ClientsCount: 0,
    client: [],
    message: "Clients data",
    serverDate: "",
    status: false,
    task: [],
    taskCount: 0
  });
  const [aggregatedData, setaggregatedData] = useState({
    status: false,
    message: "grapgh data count",
    TaskOutComes: [
      {
        TotalCounts: [{ Task: 8 }],
        groupTitleWise: [
          {
            _id: "Call",
            count: 5,
            Completed: 0,
            AssignedUser: [
              { AssignedUser: "Aiesha BDRO" },
              { AssignedUser: "Aiesha Saleem" },
              { AssignedUser: "Aiesha BDRO" },
              { AssignedUser: "Aiesha BDRO" },
              { AssignedUser: "Aiesha BDRO" }
            ]
          },
          {
            _id: "Visit",
            count: 3,
            Completed: 0,
            AssignedUser: [
              { AssignedUser: "Aiesha Saleem" },
              { AssignedUser: "Arif Khan" },
              { AssignedUser: "Aiesha BDRO" }
            ]
          }
        ],
        TotalCompletedCounts: []
      }
    ]
  });
  const [Ticketsdata, setTicketsdata] = useState({
    AssignedTask: [],
    CompleteTask: 0,
    DueTask: 0,
    OutComes: 0,
    OverDueTask: 0,
    PreviousOverDueTask: 0,
    achievedTargets: [],
    message: "",
    overDueStartDate: "",
    status: false,
    targetCounts: [],
    targetsVerificationPendingCounts: 0,
    ticketCounts: 0,
    ticketsClosed: 0,
    ticketsVerificationPendingCounts: 0,
    todayEndDate: "",
    todayStartDate: ""
  });

  const skipForward = activePaging => {
    if (activePaging === "Client") {
      console.log("skip", skip);
      if (skip + 5 < ClientData.ClientsCount)
        fetchClientData(skip + 5, activePaging);
    } else {
      console.log("skip", skipTask);
      if (skipTask + 5 < ClientData.taskCount)
        fetchClientData(skipTask + 5, activePaging);
    }
  };
  const skipBackward = activePaging => {
    if (activePaging === "Client") {
      console.log("skip", skip);
      if (skip > 0) fetchClientData(skip - 5, activePaging);
    } else {
      console.log("skip", skipTask);
      if (skipTask > 0) fetchClientData(skipTask - 5, activePaging);
    }
  };

  const fetchClientData = (skipper, activePaging) => {
    activePaging === "Client" ? setskip(skipper) : setskipTask(skipper);
    var data2 = {
      OrganizationName: null,
      SiteID: "5ca1fdd5e7179a0e4090502a",
      Today_Date: { y: year, m: month, d: date },
      activePaging: activePaging,
      limit: 5,
      skip: skipper
    };
    var headers2 = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + props.users.token
    };
    loader[1](true);
    axios
      .post(
        "http://rtm2.innovativeanglez.com/api/Client/getClientsBySearchFilter",
        data2,
        { headers: headers2 }
      )
      .then(res => {
        setClientdata(res.data);
      })
      .catch(err => {
        console.log("error    ", err.message);

        loader[1](false);
      })
      .finally(() => {
        loader[1](false);
      });
  };
  useEffect(() => {
    var data = {
      SelectedUserIDs: [],
      SiteID: "5ca1fdd5e7179a0e4090502a",
      currentRange: "Today",
      selectedDate: { y: year, m: month, d: date }
    };
    var headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + props.users.token
    };
    if (Ticketsdata.status === false) {
      loader[1](true);
      axios
        .post(
          "http://rtm2.innovativeanglez.com/api/Task/getTicketsTargetsCount",
          data,
          { headers: headers }
        )
        .then(res => {
          setTicketsdata(res.data);
        })
        .catch(err => {
          console.log("error    ", err.message);
          loader[1](false);
        })
        .finally(() => {
          loader[1](false);
        });
    }
    var data1 = {
      Category: "Task",
      SelectedUserIDs: [],
      SiteID: "5ca1fdd5e7179a0e4090502a",
      UserID: null,
      currentRange: "Today",
      selectedDate: { y: year, m: month, d: date }
    };
    var headers1 = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + props.users.token
    };

    if (aggregatedData.status === false) {
      loader[1](true);
      axios
        .post(
          "http://rtm2.innovativeanglez.com/api/Task/getAggregated_Task_OutComes_Count",
          data1,
          { headers: headers1 }
        )
        .then(res => {
          setaggregatedData(res.data);
        })
        .catch(err => {
          console.log("error    ", err.message);

          loader[1](false);
        })
        .finally(() => {
          loader[1](false);
        });
    }
    if (ClientData.status === false) fetchClientData(0, "Both");
  });
  return (
    <div>
      {loader[0] ? <Loader /> : <div />}
      <div
        style={{
          marginLeft: props.marginLeft,
          fontFamily: "Muli",
          paddingBottom: "2rem",
          backgroundColor: "#f6f6f6"
        }}
      >
        <Container
          fluid
          style={{
            paddingTop: "1.5rem",
            paddingLeft: "2rem",
            paddingRight: "2rem"
          }}
        >
          {/* {Ticketsdata.status ? ( */}
          <Row>
            <MyCard
              head="Today"
              value={Ticketsdata.DueTask}
              name="DUE TASKS"
              val_color="#039be5"
              data={props.users}
              bottomContent={[
                {
                  title: "Completed",
                  value: Ticketsdata.CompleteTask,
                  down: "false"
                }
              ]}
            />
            <MyCard
              head="Overdue"
              value={Ticketsdata.OverDueTask}
              name="TASKS"
              data={props.users}
              url="http://rtm2.innovativeanglez.com/api/Task/getTicketsTargetsCount"
              val_color="#f44336"
              bottomContent={[
                {
                  title: "Yesterday's overdue",
                  value: Ticketsdata.PreviousOverDueTask,
                  down: "false"
                }
              ]}
            />
            <MyCard
              head="Tickets"
              value={Ticketsdata.ticketCounts}
              name="OPEN"
              data={props.users}
              items={[Ticketsdata.DueTask, Ticketsdata.CompleteTask]}
              url="http://rtm2.innovativeanglez.com/api/Task/getTicketsTargetsCount"
              val_color="#ff9800"
              clickHandler={verificationPending}
              bottomContent={[
                {
                  title: "ClosedToday",
                  value: Ticketsdata.ticketsClosed,
                  down: "false"
                },
                {
                  title: "Verification Pending",
                  value: Ticketsdata.ticketsVerificationPendingCounts,
                  down: "true"
                }
              ]}
            />
            <Targets
              head="Targets"
              targets={Ticketsdata.targetCounts}
              value="55"
              name="TASKS"
              val_color="#f44336"
              bottomContent={[
                {
                  title: "Verification Pending",
                  value: Ticketsdata.targetsVerificationPendingCounts,
                  down: "true"
                },
                { title: "View All Targets", value: " ", down: "true" }
              ]}
            />

            <TaskDistribution data={aggregatedData} />

            <ScheduleCard
              data={ClientData}
              skip={skip}
              skipTask={skipTask}
              skipBackward={skipBackward}
              skipForward={skipForward}
            />
          </Row>
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { users: state.user };
};
const mapDispatchToProps = dispatch => {
  return {
    onUpdateUser: data => dispatch({ type: "UPDATE_USER", data: data })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPageContent);
