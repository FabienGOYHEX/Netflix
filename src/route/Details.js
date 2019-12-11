import React, {Component} from "react"

import {HeaderDetails, Spinner, ActorList} from '../component'


class Details extends Component {
    
    render (){
         const actors =[
        {
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
        },
    ]
        return(
            <div className='app'>
                {this.props.loading ?
                (
                    <Spinner/>
                ):
                (<>
                <HeaderDetails
                mTitle={'batman'} 
                mDesc={"description"} 
                imgSrc ={'./images/Fast_large.jpg'}
                runtime ={"2h30"}
                    revenue={"1233456789 € "}
                    status={"released"}
                    vote={""}
                />
                <ActorList actors ={actors}/>
                </>
                )}
                
            </div>
        ) 
    }
}
export {Details}