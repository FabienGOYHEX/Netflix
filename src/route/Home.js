import React, {Component} from "react"

import {HeaderImg, SearchBar, PosterList, LoadButton} from '../component'




class Home extends Component{
    
    render(){
      const { mTitle, mDesc, image, movies, loading } = this.props
        return(
            <div>
                <HeaderImg
                title ={mTitle}
                overview = {mDesc}
                imgSrc = {image}

                />
                <SearchBar onSearchClick={this.props.onSearchClick}/>
                <PosterList movies={movies}/>
                <LoadButton loading ={loading}/>
            </div>
        )
    }
}

export {Home}