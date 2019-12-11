import React, {Component} from "react"

class Actor extends Component {
    render(){
        const name = this.props.name.split()
    return (
<div className="actor"> 
    <img className="actor--img" alt ="actor" src ={this.props.imgSrc}/>
        {this.props.hover ?(
                            <div className="actor--hoverlay"> 
                                    <h3 className="acctor--name">{name[0]}</h3>
                                    <h3 className="acctor--name">{name[1]}</h3>
                            </div>
                            ):(null
)}

</div>
    )
}
}
export {Actor}