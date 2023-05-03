import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        {
          email: "",
          password: "",
        },
      ],
      email: "",
      password: "",
    };
  }

  getInput = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmit = (e) => {
    e.preventDefault();
    const newInfo = {
      email: this.state.info.email,
      password: this.state.info.password,
    };
    this.setState({
      info: [...this.state.info, newInfo],
    });
    console.log(this.state);
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.formSubmit}>
          <h1 className="log">Enter your details</h1>
          <div className="content">
            <div className="input-field">
              <input
                name="email"
                type="email"
                value={this.state.email}
                placeholder="Email"
                autoComplete="no"
                onChange={this.getInput}
              />
            </div>
            <div className="input-field">
              <input
                name="password"
                type="password"
                value={this.state.password}
                placeholder="Password"
                autoComplete="no"
                onChange={this.getInput}
              />
            </div>
            <a href="#" className="link">
              Forgot Your Password?
            </a>
          </div>
          <div className="action">
            <button>Register</button>
            <button>Sign in</button>
          </div>
        </form>
      </div>
    );
  }
}
