import React from "react";
import ReactDOM from "react-dom";
import FooterComponent from "./FooterComponent";
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto">
    <FooterComponent />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
