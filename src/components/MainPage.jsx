import React, { useState, useEffect } from "react";
import { connect, Provider } from "react-redux";
import NavbarTop from "./MainPageContent/NavbarTop";
import NavbarLeft from "./LeftNavbar/NavbarLeft";
import MainPageContent from "./MainPageContent/MainPageContent";

const MainPage = props => {
  const [barClicked, setbarClicked] = useState(0);
  const [marginLeft, setmarginLeft] = useState("3.9rem");
  const [hover, changehover] = useState(false);
  const [navwidth, setnavwidth] = useState("4.0rem");

  useEffect(() => {}, []);
  const hoverHandler = () => {
    if (!barClicked) {
      if (!hover) {
        setnavwidth("17.6rem");
        changehover(!hover);
      } else {
        setnavwidth("4rem");
        changehover(!hover);
      }
    }
  };
  const barHandler = () => {
    if (barClicked === 0) {
      setbarClicked(1);
      setmarginLeft("17.5rem");
    } else {
      setbarClicked(0);
      changehover(!hover);
      setnavwidth("4rem");
      setmarginLeft("3.9rem");
    }
  };
  const update = data => {
    if (props.users._id === " ") {
      props.onUpdateUser(data);
    }
  };
  return (
    <div>
      {props.users.status
        ? (localStorage.setItem("_id", props.users._id),
          localStorage.setItem("FirstName", props.users.FirstName),
          localStorage.setItem("MiddleName", props.users.MiddleName),
          localStorage.setItem("EmailIDs", props.users.EmailIDs),
          localStorage.setItem("LastName", props.users.LastName),
          localStorage.setItem("LoginID", props.users.LoginID),
          localStorage.getItem("Sites", props.users.Sites),
          localStorage.getItem("status", props.users.status),
          localStorage.setItem("token", props.users.token),
          console.log("Data Saved in local Storage", props.users))
        : (console.log("Data Fetched from local Storage", props.users),
          update({
            _id: localStorage.getItem("_id"),
            FirstName: localStorage.getItem("FirstName"),
            MiddleName: localStorage.getItem("MiddleName"),
            EmailIDs: [localStorage.getItem("EmailIDs")],
            LastName: localStorage.getItem("LastName"),
            status: localStorage.getItem("status"),
            Sites: localStorage.getItem("Sites"),
            LoginID: localStorage.getItem("LoginID"),
            token: localStorage.getItem("token")
          }))}
      }
      <NavbarTop marginLeft={marginLeft} />
      <NavbarLeft
        user={props.users}
        barHandler={barHandler}
        hoverHandler={hoverHandler}
        hover={hover}
        navwidth={navwidth}
      />
      <Provider store={props.store}>
        <MainPageContent marginLeft={marginLeft} />
      </Provider>
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
)(MainPage);
