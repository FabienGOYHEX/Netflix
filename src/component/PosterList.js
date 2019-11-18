import React, {Component} from "react"

class PosterList extends Component{
    renderPoster= () =>{
            
        }
    render(){
        return(
            <div className="posterList">
                <h3 className="posterListt--title">Nouveaux Films</h3>
    <div className="posterLists--grid">{this.renderPoster}</div>
            </div>
        )
    }
}
export {PosterList}