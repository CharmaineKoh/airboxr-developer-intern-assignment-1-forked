import React from "react";
import ReactDOM from "react-dom";
import {SelectSourcePage} from "./SelectSourcePage";
import RootComponent from "./RootComponent";

ReactDOM.render(
  <RootComponent>
    <SelectSourcePage />
  </RootComponent>,
  document.querySelector("#root")
);
