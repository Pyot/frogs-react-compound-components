import React, { Component } from "react";

import "./styles.css";

class Frog extends Component {
  jump = newPosition => {
    let { fields } = this.props;
    let frog = { ...fields[this.props.lane][this.props.position] };
    // fields[this.props.lane][this.props.position].type = "field";
    let jumpTo = this.getJumpPosition();
    console.log("TCL: Frog -> jumpTo xx77", jumpTo)

    if (jumpTo !== undefined) {
      frog.lane = jumpTo.lane;
      frog.position = jumpTo.position;
      fields[jumpTo.lane][jumpTo.position] = frog;
      this.props.updateLake(fields);
      this.props.updateLake(this.props.cleanCheck(fields));
    } else {
      // this.props.updateLake(this.props.cleanCheck(fields));
    }
  };

  getJumpPosition = () => {
    let { fields } = this.props;
    let jumpTo = {};
    // fields.map(lakeLane => {
    //   lakeLane.map(field => {
    //     // console.log("TCL: Frog -> getJumpPosition -> field", fiel
    //     if (field.check === true && field.empty === true && field.type === 'field') {
    //       console.log('field TRUE', field.lane)
    //       jumpTo.lane = field.lane;
    //       jumpTo.position = field.position;
    //     }
    //   });
    // });
    for (let i = 0; i < fields.length; i++){
      for (let a = 0; a < fields[i].length; a++){
        if (fields[i][a].check === true && fields[i][a].empty === true && fields[i][a].type === 'field') {
          // console.log('field TRUE', fields.lane)
          jumpTo.lane = fields[i][a].lane;
          jumpTo.position = fields[i][a].position;
          return jumpTo;

          break;
        }
      }
    }


  };

  checkCanJump = () => {
    let { fields } = this.props;
    let canJump = false;
    fields.map(lakeLane => {
      lakeLane.map(field => {
        // console.log("TCL: Frog -> getJumpPosition -> field", fiel
        if (field.check === true && field.empty === true  && field.type === 'frog') {
          console.log('field TRUE', field.lane)
          canJump = true;
        }
      });
    });
    return canJump;
  }

  afterJumpPosition = () => { };

  render() {
    return (
      <>

        <label className={"frog " + this.props.gender}>
          <input
            checked={this.props.check}
            onChange={this.props.checkInput}
            type="checkbox"
          />
          <button onClick={this.jump} />
        </label>

      </>
    );
  }
}

export default Frog;
