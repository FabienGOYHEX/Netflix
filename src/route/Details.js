import React, {Component} from "react"
import axios from 'axios'

import {HeaderDetails, Spinner, ActorList} from '../component'
import {API_URL, API_KEY} from '../config'

class Details extends Component {
    state ={
        loading : true,
        actors:[{
            name : "fgffdgdfgdg"
        },
        {
            name : "jkgngnftudg"
        },
        {
            name : "gjhkuoometr"
        },
        {
            name : "ertyjtjujujr"
        }],
        mTitle:'batman',
        mDesc: "description",
        imgSrc : './images/Fast_large.jpg',
        runtime : "2h30",
        revenue : "1233456789 € ",
        status : "released",
        vote : "",
    }
    async componentDidMount(){
        try{
            const movieId = this.props.match.params.id;
            const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr`;
           const {data : {
                            revenue,
                            runtime, 
                            title, 
                            overview,
                            status, 
                            vote_average, 
                            poster_path  
                             }
                } = await this.loadInfos(url);
                    this.setState({
                                    revenue,
                                    runtime,
                                    mTitle: title,
                                    mDesc: overview,
                                    status,
                                    imgSrc: poster_path,
                                    vote: vote_average
                    }, async () =>{ 
                        const url =  `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=fr`;
                        const {data:{cast}} = await this.loadInfos(url)
                            this.setState({
                                actors:[...cast],
                                loading : false
                            })
                            
                    })
           
        } catch(e) {
            console.log('error',e);

        }

    }
    loadInfos = (url) => axios.get(url)  
     render (){
        const {mTitle, mDesc,imgSrc, runtime ,revenue , status, vote ,} = this.state
        return(
            <div className='app'>
                {this.state.loading ?
                (
                    <Spinner/>
                ):
                (<>
                <HeaderDetails
                     mTitle={mTitle} 
                    mDesc={mDesc} 
                    imgSrc ={imgSrc}
                    runtime ={runtime}
                    revenue={revenue}
                    status={status}
                    vote={vote}
                />
                <ActorList actors ={this.state.actors}/>
                </>
                )}
                
            </div>
        ) 
    }
}
export {Details}