import { render } from "solid-js/web";
import Counter from "./Counter";
import Hero from "./Hero";

import "./index.scss";

const App = () => (
  <div class="h-[10rem]">
    <Hero />
  </div>
);
render(App, document.getElementById("app"));
