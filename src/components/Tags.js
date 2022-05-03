import React, { Component } from "react";

export class Tags extends Component {
  style = {
    cursor: "pointer",
  };
  render() {
    let { changeTag } = this.props;
    console.log(changeTag)
    return (
      <div className="container">
        <h6>Tags</h6>
        <span
          className="badge bg-secondary"
          onClick={changeTag("samsung")}
          style={this.style}
        >
          samsung
        </span>
      </div>
    );
  }
}
