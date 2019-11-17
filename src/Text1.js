import React, { Component } from "react";

class Text1 extends Component {
  state = {
    value: ""
  }
  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
        />
      </>
    );
  }
}

export default Text1;
