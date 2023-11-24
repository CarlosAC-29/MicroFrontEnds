import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactDom from "react-dom";
import CounterWrapper from "remote/CounterWrapper";
import FooterComponent from "remote_footer/FooterComponent";
import Card from "remote_card/Card";

import "./index.scss";

const App = () => {
  const divRef = useRef(null);

  useEffect(() => {
    CounterWrapper(divRef.current);
  },[]);

  return (
  <div className="">
    <div ref={divRef}></div>
    <Card />
    <FooterComponent />
  </div>
);
}
ReactDOM.render(<App />, document.getElementById("app"));
