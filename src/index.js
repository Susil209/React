import React from "react";
import ReactDom from "react-dom";

// ReactDom.render("What to show", "Where to show")
ReactDom.render(
  <div>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);
