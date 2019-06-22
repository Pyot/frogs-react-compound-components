import React, { Component } from "react";

import "./styles.css";

class Frog extends Component {
  jump = newPosition => {
    console.log("jump", this.props);
    let { fields } = this.props;
    console.log(fields);
    let frog = { ...fields[this.props.lane][this.props.position] };
    fields[this.props.lane][this.props.position].type = "field";
    console.log("frog", frog);
    let jumpTo = this.getJumpPosition();
    console.log("jumpTo", jumpTo);

    if (jumpTo !== false) {
      frog.lane = jumpTo.lane;
      frog.position = jumpTo.position;
      fields[jumpTo.lane][jumpTo.position] = frog;
      this.props.updateLake(fields);
      this.props.updateLake(this.props.cleanCheck(fields));
    } else {
      this.props.updateLake(this.props.cleanCheck(fields));
    }
  };

  getJumpPosition = () => {
    let { fields } = this.props;

    let jumpTo = {};
    fields.map(lakeLane => {
      lakeLane.map(field => {
        if (field.check === true && field.type === "field") {
          jumpTo.lane = field.lane;
          jumpTo.position = field.position;
        } else if (field.check === true && field.type === "frog") {
          jumpTo = false;
        }
      });
    });

    return jumpTo;
  };

  checkInput = () => {
    let { fields } = this.props;
    fields[this.props.lane][this.props.position].check = true;
    this.props.updateLake(fields);
    this.props.preventSelectTwoFields(fields);
  };

  afterJumpPosition = () => {};

  render() {
    return (
      <>
        <td>
          <label className={"frog " + this.props.gender}>
            <input
              checked={this.props.check}
              onChange={this.checkInput}
              type="checkbox"
            />
            <button onClick={this.jump} />
          </label>
        </td>
      </>
    );
  }
}

export default Frog;
