import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import LakeLane from "./LakeLane";
import Lake from "./Lake";
import Field from "./Field";
import Frog from "./Frog";

class LakeData extends Component {
  state = {
    fields: []
  };

  componentDidMount() {
    this.setState({ fields: this.props.fields });
  }

  updateLake = fields => {
    this.setState({ fields });
  };

  render() {
    const { fields } = this.state;
    return (
      <>
        <Lake fields={fields} updateLake={this.updateLake}>
          {fields !== undefined ? (
            fields.map(lakelane => {
              return (
                <LakeLane>
                  {lakelane.map(field => {
                    return field.type === "frog" ? (
                      <Frog
                        gender={field.gender}
                        char={field.char}
                        lane={field.lane}
                        position={field.position}
                        check={field.check}
                      />
                    ) : (
                      <Field
                        lane={field.lane}
                        position={field.position}
                        check={field.check}
                      />
                    );
                  })}
                </LakeLane>
              );
            })
          ) : (
            <p>Waiting for frog data</p>
          )}
        </Lake>
      </>
    );
  }
}

export default LakeData;
