import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card"
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote-card</div>
    <Card/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
