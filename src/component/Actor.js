import React, {Component} from "react"
import '../css/Actor.css'

class Actor extends Component {
    state ={
        hover:false,
    }
    showoverlay =() =>{
        if(this.state.hover){
            return;
        }
        this.setState({hover: true})
    }
    hideoverlay = () => {
        if(this.state.hover){
            return this.setState({hover: false})
        }
    }
    render(){
        const name = this.props.name.split()
    return (
<div className="actor"
    onMouseEnter ={this.showoverlay}
    onMouseLeave={this.hideoverlay}> 
    <img className="actor--img" alt ="actor" src ={this.props.imgSrc}/>
        {this.state.hover ?(
                            <div className="actor--overlay">
                            <h3 className="actor--name">{name[0]}</h3>
                            <h3 className="actor--name">{name[1]}</h3>
                        </div>
                            ):(null
)}

</div>
    )
}
}
export {Actor}