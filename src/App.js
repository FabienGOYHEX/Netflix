import React, {Component} from 'react';
import './App.css';

import { Home } from '../src/route/Home'
import { Header } from './component'
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from './config'

import axios from "axios"


class App extends Component {
  state={
    loading:false,
    movies : [],
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
     const {data :{results, page, total_pages}} = await this.loadMovies()
     console.log('res',results);
     this.setState({
       movies: results,
       loading: false,
       activePage: page,
       totalPages: total_pages,
       image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
       mTitle: results[0].title,
       mDesc: results[0].overview
     })
    } catch(e) {
      console.log('e',e)
    }
  }
  loadMovies = () =>{
    const page = this.state.activePage + 1
const url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=fr`
  return axios.get(url)
  }
  searchMovie = ()=>{
const url =`${API_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchText}&language=fr`
return axios.get(url)
  }

  handleSearch = (value) =>{
    this.setState({loading:true, searchText: value,  image:null},async() => { 
        try { 
     const {data :{results, page, total_pages}} = await this.searchMovie()
     console.log('res',results);
     this.setState({
       movies: results,
       loading: false,
       activePage: page,
       totalPages: total_pages,
       image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
       mTitle: results[0].title,
       mDesc: results[0].overview
     })
    } catch(e) {
      console.log('e',e)
    }

    })
// start reseach
console.log(' handleSearch', value);

  }
  loadMore = async () => {
    try {
      this.setState({loading: true})
const {data :{results, page, total_pages}} = await this.loadMovies()
     console.log('res',results);
     this.setState({
       movies: [...this.state.movies, ...results],
       loading: false,
       activePage: page,
       totalPages: total_pages,
       image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
       mTitle: results[0].title,
       mDesc: results[0].overview,
     })
    } catch(e) {
      console.log('error load more',e);
      
    }
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
