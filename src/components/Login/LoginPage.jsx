import React from "react";
import back from "./back.jpg";
import LoginBox from "./LoginBox";
import { Provider } from "react-redux";

const LoginPage = props => {
  return (
    <React.Fragment>
      <img
        alt=""
        src={back}
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundPosition: "centre"
        }}
      />
      <Provider store={props.store}>
        <LoginBox />
      </Provider>
    </React.Fragment>
  );
};

export default LoginPage;
