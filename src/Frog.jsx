import React, { Component } from "react";

import "./styles.css";

class Frog extends Component {
  jump = newPosition => {
    let { fields } = this.props;
    let field = { ...fields[this.props.lane][this.props.position] };
    let frog =  field.onField
    let jumpTo = this.getJumpPosition();

    if (jumpTo !== undefined) {
      fields[this.props.lane][this.props.position].empty = true
      fields[this.props.lane][this.props.position].onField = {}
      frog.lane = jumpTo.lane;
      frog.position = jumpTo.position;
      fields[jumpTo.lane][jumpTo.position].empty = false
      fields[jumpTo.lane][jumpTo.position].onField = frog;
      this.props.updateLake(fields);
      this.props.updateLake(this.props.cleanCheck(fields));
    } else {
      this.props.updateLake(this.props.cleanCheck(fields));
      alert('You can not jump on another frog')
    }
  };

  getJumpPosition = () => {
    let { fields } = this.props;
    let jumpTo = {};
    for (let i = 0; i < fields.length; i++){
      for (let a = 0; a < fields[i].length; a++){
        if (fields[i][a].check === true && fields[i][a].empty === true && fields[i][a].type === 'field') {
          jumpTo.lane = fields[i][a].lane;
          jumpTo.position = fields[i][a].position;
          return jumpTo;
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
