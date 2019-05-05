import React, { Component } from "react";

class DangerHtml extends Component {
  constructor() {
    super();
    this.state = {
      securetext: "",
      insecuretext: ""
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  createMarkup(text) {
    return { __html: text };
  }

  render() {
    const { securetext, insecuretext } = this.state;
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">Demo for classic xss</h2>
        <form>
          <div className="row">
            Safe Input &nbsp;
            <input
              name="safe"
              value={securetext}
              onChange={this.handleChange("securetext")}
            />
          </div>
          <div className="row">
            Unsafe Input &nbsp;
            <input
              name="unsafe"
              value={insecuretext}
              onChange={this.handleChange("insecuretext")}
            />
          </div>
          <button className="btn btn-default">Cancel</button>
          <button type="submit" className="btn btn-primary btn-raised">
            Submit
          </button>
          <br />
          {securetext}
          <br />
          <div
            dangerouslySetInnerHTML={this.createMarkup(insecuretext)}
          />
        </form>
      </div>
    );
  }
}

export default DangerHtml;
