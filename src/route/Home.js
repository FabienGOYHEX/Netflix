import React, {Component} from "react"

import {HeaderImg} from '../component'

// const movies = [
//   {
//     //backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
//     backdrop_path:"./images/Fast_large.jpg",
//     id: 475557,
//     overview:
//       "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
//     //poster_path: "/tWjJ3ILjsbTwKgXxEv48QAbYZ19.jpg",
//     poster_path:"./images/Fast_large.jpg",
//     title: "Joker"
//   }
// ];



class Home extends Component{
    
    render(){
        return(
            <div>
                <HeaderImg
                title ='fast and furious'
                overview = 'lorem ipsum'
                imgSrc = {`./images/Fast_large.jpg`}

                />
            </div>
        )
    }
}

export {Home}