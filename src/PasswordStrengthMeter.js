import React, { Component } from "react";

export class PasswordStrengthMeter extends Component {
  render() {
    const { password } = this.props;
    return (
      <div>
        <div className="password-strength-meter">
          <label className="password-strength-meter-label">{password}</label>
        </div>
      </div>
    );
  }
}

export default PasswordStrengthMeter;
