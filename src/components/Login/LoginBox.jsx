import React, { useState } from "react";
import logo from "../logo.PNG";
import axios from "axios";
import { Card } from "reactstrap";
import { Redirect } from "react-router-dom";
import InputField from "./InputField";
import { connect } from "react-redux";

const LoginBox = props => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [btnColor, setbtnColor] = useState("btn-disable");
  const [showPassword, setpassState] = useState("password");
  const [loginStatus, setLoginStatus] = useState(false);

  const onLoginChange = e => {
    setLoginId(e.target.value);
    if (loginId.length > 0 && password.length > -1) {
      setbtnColor("btn-primary");
    }
  };
  const onPasswordChange = e => {
    setPassword(e.target.value);
    if (loginId.length > 0 && password.length > -1) {
      setbtnColor("btn-primary");
    }
  };
  const openDashboard = () => {
    axios
      .post("http://rtm2.innovativeanglez.com/api/User/Login", {
        login_id: loginId,
        password: password
      })
      .then(res => {
        props.onUpdateUser(res.data);
        setLoginStatus(res.data.status);
        console.log("users after login", props.users);
      })
      .catch(err => {
        console.log("error    ", err);
      });
    // if (loginId === "Talib")
    //   if (password === "123456") redirect(true);
    //   else {
    //     setpassInc(true);
    //     setInterval(() => {
    //       setpassInc(false);
    //     }, 2000);
    //   }
    // else {
    //   setloginidreg(true);
    //   setInterval(() => {
    //     setloginidreg(false);
    //   }, 2000);
    // }
  };
  const eyeClicked = () => {
    showPassword === "password"
      ? setpassState("text")
      : setpassState("password");
  };
  if (loginStatus) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Card
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        width: "25rem",
        height: "35rem",
        fontFamily: "Muli"
      }}
    >
      <div className="text-center " style={{ marginTop: "60px" }}>
        <img src={logo} alt="" />
        <div
          style={{
            fontFamily: "Muli",
            fontSize: "20px",
            marginTop: "20px",
            marginBottom: "20px"
          }}
        >
          LOGIN TO YOUR ACCOUNT
        </div>
        <InputField
          value={loginId}
          type="text"
          onChange={onLoginChange}
          title="Login ID"
          placeholder="Login ID"
        />
        <i
          className={
            showPassword === "password" ? "far fa-eye-slash" : "far fa-eye"
          }
          onClick={eyeClicked}
          style={{
            position: "absolute",
            zIndex: "9999",
            fontSize: "22px",
            marginTop: "34px",
            marginLeft: "125px",
            color: "#737373"
          }}
        />
        <InputField
          value={password}
          type={showPassword}
          onChange={onPasswordChange}
          title="Password"
          placeholder="Password"
        />

        <button
          disabled={!(loginId && password)}
          onClick={openDashboard}
          className={btnColor}
          style={{
            marginTop: "50px",
            height: "50px",
            width: "100px",
            borderRadius: "10px"
          }}
        >
          LOGIN
        </button>
      </div>
      <div
        className="text-primary"
        style={{ marginLeft: "33px", fontSize: "15px", marginTop: "-80px" }}
      >
        Forgot Password?
      </div>
      {/* {!loginStatus ? <div /> : <Toast content={errorMessage} />} */}
    </Card>
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
)(LoginBox);
