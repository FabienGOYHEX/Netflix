import React, { Component } from "react";
import orderSup from "./Hoc";

class Text1 extends Component {
 
  render() {
    const {state, placeholder, handleChange} = this.props
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

export default orderSup(Text1);
