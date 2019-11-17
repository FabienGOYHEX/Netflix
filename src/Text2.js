import React, { Component } from "react";
import orderSup from "./Hoc";

class Text2 extends Component {
  
  render() {
    const {state, handleChange, placeholder} = this.props
    return (
      <>
        <input
          value={state.value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </>
    );
  }
}

export default orderSup(Text2);
