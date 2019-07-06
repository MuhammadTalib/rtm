import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

// const handleUpdate = () => {
//   scrollBar.scrollToBottom();
// };

// var scrollBar = null;
ReactDOM.render(
  <BrowserRouter>
    <App />
    {/* <Example /> */}
    {/* <Scrollbars
      style={{ width: 500, height: 100 }}
      autoHide
      autoHideTimeout={10}
      autoHideDuration={10}
      ref={e => (scrollBar = e)}
      onUpdate={() => handleUpdate(this)}
    >
      <div>
        oremloremloremloremloremloremloremloremloremlorem lorem
        oremloremloremloremloremloremloremloremloremlorem lorem
        loremloremloremloremlorem loremloremlorem loremlorem loremloremloreml
        oremloremloremloremlo remloremloremlore mloremloremloremlore
        mloremloremloremloremloreml
      </div>
    </Scrollbars> */}
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
