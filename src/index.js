import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import LakeData from "./LakeData";

const fields = [
  [
    {
      type: "field", check: false, lane: 0, position: 0, empty: false,
      onField: {
        type: "frog",
        gender: "male",
        char: ["fat", "tall"],
        lane: 0,
        position: 0,
      }
    },
    {
      type: "field", check: false, lane: 0, position: 1, empty: false,
      onField: {
        type: "frog",
        gender: "female",
        char: ["skinny", "short"],
        lane: 0,
        position: 1,
      }
    },
    { type: "field", check: false, lane: 0, position: 2, empty: true, onField: {}},
    { type: "field", check: false, lane: 0, position: 3, empty: true, onField: {}},
    { type: "field", check: false, lane: 0, position: 4, empty: true, onField: {}},
    { type: "field", check: false, lane: 0, position: 5, empty: true, onField: {}},
    { type: "field", check: false, lane: 0, position: 6, empty: true, onField: {}},
    { type: "field", check: false, lane: 0, position: 7, empty: true, onField: {}},
    { type: "field", check: false, lane: 0, position: 8, empty: true, onField: {}},
    { type: "field", check: false, lane: 0, position: 9, empty: true, onField: {}}
  ],
  [
    { type: "field", check: false, lane: 1, position: 0, empty: true, onField: {}},
    { type: "field", check: false, lane: 1, position: 1, empty: true, onField: {}},
    { type: "field", check: false, lane: 1, position: 2, empty: true, onField: {}},
    { type: "field", check: false, lane: 1, position: 3, empty: true, onField: {}},
    { type: "field", check: false, lane: 1, position: 4, empty: true, onField: {}},
    { type: "field", check: false, lane: 1, position: 5, empty: true, onField: {}},
    { type: "field", check: false, lane: 1, position: 6, empty: true, onField: {}},
    { type: "field", check: false, lane: 1, position: 7, empty: true, onField: {}},
    { type: "field", check: false, lane: 1, position: 8, empty: true, onField: {}},
    { type: "field", check: false, lane: 1, position: 9, empty: true, onField: {}}
  ],
  [
    { type: "field", check: false, lane: 2, position: 0, empty: true, onField: {}},
    { type: "field", check: false, lane: 2, position: 1, empty: true, onField: {}},
    { type: "field", check: false, lane: 2, position: 2, empty: true, onField: {}},
    { type: "field", check: false, lane: 2, position: 3, empty: true, onField: {}},
    { type: "field", check: false, lane: 2, position: 4, empty: true, onField: {}},
    { type: "field", check: false, lane: 2, position: 5, empty: true, onField: {}},
    { type: "field", check: false, lane: 2, position: 6, empty: true, onField: {}},
    { type: "field", check: false, lane: 2, position: 7, empty: true, onField: {}},
    { type: "field", check: false, lane: 2, position: 8, empty: true, onField: {}},
    { type: "field", check: false, lane: 2, position: 9, empty: true, onField: {}}
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
