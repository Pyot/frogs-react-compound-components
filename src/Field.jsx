import React, { Component } from "react";

import "./styles.css";

class Field extends Component {
  checkInput = () => {
    let { fields } = this.props;
    fields[this.props.lane][this.props.position].check = true;
    this.props.updateLake(fields);
    this.props.preventSelectTwoFields(fields);
    // if (!this.props.preventSelectTwoFields()) {
    //   console.log("true");
    //
    // } else {
    //   console.log("false");
    // }
  };

  render() {
    return (
      <>
        <td>
          <label>
            <input
              checked={this.props.check}
              onChange={this.checkInput}
              type="checkbox"
            />
          </label>
        </td>
      </>
    );
  }
}

export default Field;
