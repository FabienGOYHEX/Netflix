import React, { Component }from 'react'
import ReactPlayer from 'react-player'

class VideoPlayer extends Component {
    handleEnded = () =>{
console.log("video Ended");

    }
    render (){
        const videoUrl = "https://www.youtube.com/watch?v=crnCudRa3wc"
        const imageSrc = "./images/Fast_large.jpg"
        return(
            <div className="videoPlayer">
                <ReactPlayer
                url = {videoUrl}
                controls
                playing={false}
                width = '100%'
                height = '100%'
                style  ={{position:'absolute', top:'0', left:'0'}}
                light ={imageSrc}
                onEnded={this.handleEnded}
                />
            </div>
        )
    }
}

export { VideoPlayer}