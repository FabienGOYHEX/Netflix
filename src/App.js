import React, {Component} from 'react';
import './App.css';

import {Home} from '../src/route/Home'
import {Header} from './component'
import {API_URL, API_KEY} from './config'

import axios from "axios"


class App extends Component {
  state={
    loading:false,
    movies : [
  {
    backdrop_path: "./images/Fast_large.jpg",
    id: 475557,
    overview:
      "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: "./images/Fast_large.jpg",
    title: "Joker"
  },
   {
    backdrop_path: "./images/Fast_large.jpg",
    id: 475557,
    overview:
      "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: "./images/Fast_large.jpg",
    title: "Joker"
  },{
    backdrop_path: "./images/Fast_large.jpg",
    id: 475557,
    overview:
      "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: "./images/Fast_large.jpg",
    title: "Joker"
  },{
    backdrop_path: "./images/Fast_large.jpg",
    id: 475557,
    overview:
      "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: "./images/Fast_large.jpg",
    title: "Joker"
  }
],
    badge : 0,
    image : './images/Fast_large.jpg',
    mTitle : 'Fast and Furious',
    mDesc : `Fast and Furious ou Rapides et dangereux au Québec est une série de films américains d'action dont le premier est sorti en 2001. Elle comprend neuf longs métrages (sortis) ainsi que deux courts métrages. Le premier film est basé sur un article intitulé Racer X, écrit par le journaliste Ken Li et publié dans Vibe, parlant de courses-poursuites et de différents vols dans les rues de New-York (le film se déroule cependant à Los Angeles).`,
    activePage:0,
    totalPages:0,
    searchText:''
  }
  async componentDidMount(){
    try { 
      this.loadMovies()
    } catch(e) {
      console.log('e',e)
    }
  }
  loadMovies = () =>{
    const page = this.state.activePage + 1
const url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&langage=fr`
  return axios.get(url)
  }
  handleSearch = (value) =>{
// start reseach
console.log(' handleSearch', value);

  }
  loadMore = () => {
        //start request in api here
        console.log('loadMore');
        
    }
  render(){
     return (
    <div className="App">
      <Header badge={this.state.badge}/>
      <Home
      {...this.state}
      onSearchClick={this.handleSearch}
      onButtonClick={this.loadMore}
      />
    
    </div>
  );
}
}

export default App;
