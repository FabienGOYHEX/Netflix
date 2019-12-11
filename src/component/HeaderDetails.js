import React, {Component} from "react"

import {Container} from './index'
import {Stars} from './index'
import '../css/HeaderDetails.css'
 

class HeaderDetails extends Component {
    render() {
        const imgSrc = this.props.imgSrc
        return (
            <div className="headerDetails">
    <div className="badge-decoration">{this.props.status}</div>
        <div className="headerDetails">
            <img className= "headerDetails--pster___img" src={imgSrc} alt ='poster'/>
                </div>
    <div className="headerDetails--container">
        <h3 className="headerDetails--container_title"> {this.props.mTitle}</h3>
    <p className="headerDetails--container__desc">{this.props.mDesc}</p>
        <div className="headerDetails--info">
            <Container iconName='clock' content={this.props.runtime}/>
            <Stars  fakeArray1={["1","1","1"]} fakeArray2={["1","1"]}/>
            <Container iconName='money' content={this.props.revenue}/>
            
        </div>
    </div>
            </div>
        )
    }
}
export {HeaderDetails}