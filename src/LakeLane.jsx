import React, { Component } from "react";

import "./styles.css";

class LakeLane extends Component {
  state = {
    frogs: []
  };

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        updateLake: this.props.updateLake,
        fields: this.props.fields,
        preventSelectThreeFields: this.props.preventSelectThreeFields,
        cleanCheck: this.props.cleanCheck
      });
    });

    return <tr>{children}</tr>;
  }
}

export default LakeLane;
