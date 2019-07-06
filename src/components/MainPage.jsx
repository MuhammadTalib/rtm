import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { slideInRight, slideOutRight } from "react-animations";
import { connect, Provider } from "react-redux";
import NavbarTop from "./MainPageContent/NavbarTop";
import NavbarLeft from "./LeftNavbar/NavbarLeft";
import MainPageContent from "./MainPageContent/MainPageContent";
import RightNavbar from "./RightNavbar/RightNavbar";
import axios from "axios";
import ExpandedRightNavbar from "./RightNavbar/ExpandedRightNavbar";

const MainPage = props => {
  const [barClicked, setbarClicked] = useState(0);
  const [marginLeft, setmarginLeft] = useState("3.9rem");
  const [hover, changehover] = useState(false);
  const [navwidth, setnavwidth] = useState("4.0rem");
  const [userData, setUserData] = useState({ Users: [], status: false });
  const [Expand_RightNavbar, set_Expand_RightNavbar] = useState(false);
  const [z, sz] = useState(-1);

  const SlideIn = styled.div`
    animation: 0.099s ${keyframes`${slideInRight}`};
  `;
  const SlideOut = styled.div`
    animation: 1s ${keyframes`${slideOutRight}`};
  `;

  useEffect(() => {
    const fetch = () => {
      var data = {
        IsChatPanel: true,
        SelectParams:
          "FirstName MiddleName LastName EmployeeID EmailIDs _id Vehicle",
        SiteID: "5ca1fdd5e7179a0e4090502a",
        isActiveUsers: true
      };
      var headers = {
        "Content-Type": "application/json",
        Authorization:
          props.users.token === ""
            ? "Bearer " + localStorage.getItem("token")
            : "Bearer " + props.users.token
      };
      if (userData.status === false)
        axios
          .post("http://rtm2.innovativeanglez.com/api/User/getUsers", data, {
            headers: headers
          })
          .then(res => {
            setUserData(res.data);
          })
          .catch(err => {
            console.log("error    ", err.message);
          })
          .finally(() => {
            //loader[1](false);
          });
    };
    fetch();
  });
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
  const clickHandler = () => {
    set_Expand_RightNavbar(true);
    sz(5);
  };
  const rncancelHanldler = () => {
    set_Expand_RightNavbar(false);
    sz(-1);
  };
  return (
    <div style={{ zIndex: "1" }}>
      {props.users.status
        ? (localStorage.setItem("_id", props.users._id),
          localStorage.setItem("FirstName", props.users.FirstName),
          localStorage.setItem("MiddleName", props.users.MiddleName),
          localStorage.setItem("EmailIDs", props.users.EmailIDs),
          localStorage.setItem("LastName", props.users.LastName),
          localStorage.setItem("LoginID", props.users.LoginID),
          localStorage.getItem("Sites", props.users.Sites),
          localStorage.getItem("status", props.users.status),
          localStorage.setItem("token", props.users.token))
        : update({
            _id: localStorage.getItem("_id"),
            FirstName: localStorage.getItem("FirstName"),
            MiddleName: localStorage.getItem("MiddleName"),
            EmailIDs: [localStorage.getItem("EmailIDs")],
            LastName: localStorage.getItem("LastName"),
            status: localStorage.getItem("status"),
            Sites: localStorage.getItem("Sites"),
            LoginID: localStorage.getItem("LoginID"),
            token: localStorage.getItem("token")
          })}
      }
      <NavbarTop marginLeft={marginLeft} />
      <NavbarLeft
        user={props.users}
        barHandler={barHandler}
        hoverHandler={hoverHandler}
        hover={hover}
        navwidth={navwidth}
      />
      <RightNavbar data={userData} onClick={clickHandler} />
      {Expand_RightNavbar ? (
        <div>
          <SlideIn>
            <ExpandedRightNavbar
              data={userData}
              cancel={rncancelHanldler}
              z={z}
            />
          </SlideIn>
        </div>
      ) : (
        <SlideOut>
          <ExpandedRightNavbar
            data={userData}
            cancel={rncancelHanldler}
            z={z}
          />
        </SlideOut>
      )}
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
