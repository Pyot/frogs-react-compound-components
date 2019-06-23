import React, { Component } from "react";

import "./styles.css";

class Field extends Component {

  render() {
    return (
      <>
          <label>
            <input
              checked={this.props.check}
              onChange={this.props.checkInput}
              type="checkbox"
            />
          </label>
      </>
    );
  }
}

export default Field;
