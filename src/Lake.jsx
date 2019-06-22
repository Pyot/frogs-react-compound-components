import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Lake extends Component {
  state = {
    frogs: []
  };

  componentDidUpdate(prevProps, prevState) {
    // if(prevProps.fields !== this.props.fields){
    // this.preventSelectTwoFields();
    // }
  }

  preventSelectTwoFields = () => {
    const { fields } = this.props;
    let merged = [].concat.apply([], fields).filter(position => {
      return position.check === true;
    });
    if (merged.length >= 3) {
      this.props.updateLake(this.cleanCheck(fields));
    }
    return merged.length >= 2;
  };

  cleanCheck = fields => {
    const cleanCheck = fields.map(lakeLane => {
      return lakeLane.map(field => {
        field.check = false;
        return field;
      });
    });
    return cleanCheck;
  };

  componentDidMount() {}

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        updateLake: this.props.updateLake,
        fields: this.props.fields,
        preventSelectTwoFields: this.preventSelectTwoFields,
        cleanCheck: this.cleanCheck
      });
    });

    return (
      <>
        <button>Jump</button>
        <table id="lake">
          <thead>
            <tr>
              <th colSpan="10">Lake</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </>
    );
  }
}

export default Lake;
