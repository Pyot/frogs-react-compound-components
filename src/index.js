import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import LakeData from "./LakeData";

const fields = [
  [
    {
      type: "frog",
      gender: "male",
      char: ["fat", "tall"],
      lane: 0,
      position: 0,
      check: false
    },
    {
      type: "frog",
      gender: "female",
      char: ["skinny", "short"],
      lane: 0,
      position: 1,
      check: false
    },
    { type: "field", check: false, lane: 0, position: 2 },
    { type: "field", check: false, lane: 0, position: 3 },
    { type: "field", check: false, lane: 0, position: 4 },
    { type: "field", check: false, lane: 0, position: 5 },
    { type: "field", check: false, lane: 0, position: 6 },
    { type: "field", check: false, lane: 0, position: 7 },
    { type: "field", check: false, lane: 0, position: 8 },
    { type: "field", check: false, lane: 0, position: 9 }
  ],
  [
    { type: "field", check: false, lane: 1, position: 0 },
    { type: "field", check: false, lane: 1, position: 1 },
    { type: "field", check: false, lane: 1, position: 2 },
    { type: "field", check: false, lane: 1, position: 3 },
    { type: "field", check: false, lane: 1, position: 4 },
    { type: "field", check: false, lane: 1, position: 5 },
    { type: "field", check: false, lane: 1, position: 6 },
    { type: "field", check: false, lane: 1, position: 7 },
    { type: "field", check: false, lane: 1, position: 8 },
    { type: "field", check: false, lane: 1, position: 9 }
  ],
  [
    { type: "field", check: false, lane: 2, position: 0 },
    { type: "field", check: false, lane: 2, position: 1 },
    { type: "field", check: false, lane: 2, position: 2 },
    { type: "field", check: false, lane: 2, position: 3 },
    { type: "field", check: false, lane: 2, position: 4 },
    { type: "field", check: false, lane: 2, position: 5 },
    { type: "field", check: false, lane: 2, position: 6 },
    { type: "field", check: false, lane: 2, position: 7 },
    { type: "field", check: false, lane: 2, position: 8 },
    { type: "field", check: false, lane: 2, position: 9 }
  ]
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <LakeData fields={fields} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
