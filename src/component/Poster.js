import React, {Component} from "react"
import FontAwesome from 'react-fontawesome'
import '../css/Poster.css'


class Poster extends Component{
    render(){
        return(
            <div className='poster'>
                <img className='poster--img' src={this.props.imgSrc} alt ="Poster"></img>
                {this.props.hover ?
                (
                    <div className="poster--overlay">
                        <h3 poster--overlay__text> Liste de souhaits</h3>
                            {this.props.wished ?
                            (
                                <FontAwesome className='poster--icon' name='heart' size='3x'/>
                            ):
                            (
                                 <FontAwesome className='poster--icon__not' name='heart-o' size='3x'/>
                            )}
                    </div>
                ): null}
            </div>
        )
    }
}
export {Poster}