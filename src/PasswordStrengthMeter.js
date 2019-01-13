import React, { Component } from "react";
var zxcvbn = require("zxcvbn");

export class PasswordStrengthMeter extends Component {
  render() {
    const { password } = this.props;
    const testedResult = zxcvbn(password);
    return (
      <div>
        <div className="password-strength-meter">
          <label className="password-strength-meter-label">
            {password} is your password and is a level {testedResult.score}{" "}
            password
          </label>
        </div>
      </div>
    );
  }
}

export default PasswordStrengthMeter;
