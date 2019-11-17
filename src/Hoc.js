import React, {Component} from "react";

const  orderSup= (WrappedComponent) =>{

        class OrderSupp extends Component {
             state = {
    value: ""
  }
  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }
            render(){
             return(
                <WrappedComponent
                {...this.props}
                state={this.state}
                handleChange={this.handleChange}
                />
                )
            }
        }
    return OrderSupp
}
export default orderSup;