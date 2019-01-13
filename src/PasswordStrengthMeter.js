import React, { Component } from "react";
var zxcvbn = require("zxcvbn");

export class PasswordStrengthMeter extends Component {
  render() {
    const { password } = this.props;
    const testedResult = zxcvbn(password);
    return (
        <div className="password-strength-meter">
        <progress
          value={testedResult.score}
          max="4"
        />
        <br />
        <label
          className="password-strength-meter-label"
        >
          {password}
        </label>
      </div>
    );
  }
}

export default PasswordStrengthMeter;
