import React, { Component } from "react";

import "./styles.css";
import LakeLane from "./LakeLane";
import Lake from "./Lake";
import Field from "./Field";
import Frog from "./Frog";
import FieldView from "./FieldView";


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
    console.log('fields LakeData.jsx', fields);
    return (
      <>
        <Lake key={'lake-0'} fields={fields} updateLake={this.updateLake}>
          {fields !== undefined ? (
            fields.map((lakelane, index) => {
              return (
                <LakeLane key={"lake-lane-" + index} >
                  {lakelane.map((field, inx) => {
                    return field.empty === false ? (
                      <Field
                        key={'field-' + inx}
                        lane={field.lane}
                        position={field.position}
                        check={field.check}
                      >
                        <Frog
                          key={'frog-' + inx}

                          gender={field.onField.gender}
                          char={field.onField.char}
                          lane={field.onField.lane}
                          position={field.onField.position}
                        />
                      </Field>

                    ) : (
                        <Field
                          key={'field-' + inx}

                          lane={field.lane}
                          position={field.position}
                          check={field.check}
                        >
                        <FieldView
                        key={'field-view' + inx}

                        />
                        </Field>
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
