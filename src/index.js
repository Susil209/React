import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1>List Elements</h1>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </div>,
  document.getElementById("root")
);