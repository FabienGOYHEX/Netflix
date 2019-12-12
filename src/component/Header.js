import React, {Component} from "react";
import Fontawesome from "react-fontawesome";
import {Link} from "react-router-dom"
import {connect} from "react-redux"

import '../css/Header.css'
import { getNumber } from '../actions/movie'

class HeaderComponent extends Component{
    render(){
        return (
            <div className ='header'>
                <Link to={{pathname:"/"}}>
                <Fontawesome className='header--movie' name="film" size ="5x"/>
                </Link>
                <h3>NETFLIX</h3>
                <Fontawesome className='header--heart' name="heart" size ="5x"/>
    <div className='header--badge'>{this.props.badge}</div>
            </div>
        )
    }
}
const mapStateToprops = state =>{
    return {
        badge: state.movies.number
    }
}
const mapDispathcToProps = dispatch =>{
    return {
        getNumber: ()=>dispatch(getNumber())
    }
}

const Header = connect(mapStateToprops, mapDispathcToProps)(HeaderComponent)

export { Header }