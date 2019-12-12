import React, { Component } from 'react'

class MoviePlayer extends Component {
    render(){
        return(
            <div className= 'moviePlayer'>
                <VideoPlayer></VideoPlayer>
                <MvPlayerList/>
            </div>
        )
    }
}

export { MoviePlayer }