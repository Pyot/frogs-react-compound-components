import React, { Component } from "react";

import "./styles.css";


class Field extends Component {
  checkInput = (e) => {
  console.log("TCL: Field -> checkInput -> e", e.target.value)
    
    let { fields } = this.props;
    fields[this.props.lane][this.props.position].check = !fields[this.props.lane][this.props.position].check;
    this.props.updateLake(fields);
    this.props.preventSelectThreeFields(fields);
  };

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        updateLake: this.props.updateLake,
        fields: this.props.fields,
        check: this.props.check,
        checkInput: this.checkInput,
        cleanCheck: this.props.cleanCheck
      });
    });

    return <td>{children}</td>;

  }
}

export default Field;
