import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import '../css/SearchBar.css'

 class SearchBar extends Component {
     state= {
         value :''
     }
     handleChange = (event) => {
                this.setState({value: event.target.value})
     }
     render(){
         return (
             <div className='searchBar--container'>
                <div className='searchBar'>
                    <input 
                    className='searchBar--input'
                     type='text' 
                     placeholder='rechercher un film'
                     value ={this.state.value}
                     onChange={this.handleChange}
                     />
                        <div className ='searchBar--submit'>
                            <FontAwesome className="searchIcon" name="search"/>
                        </div>
                </div>
             </div>
         )
     }
 }
 export {SearchBar}