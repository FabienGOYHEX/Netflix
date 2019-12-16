import React, { Component } from 'react'
import axios from 'axios'
import _ from 'lodash'

import {VideoPlayer, MvPlayerList} from '../component/index'
import {Spinner} from '../component/index'
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE  } from '../config'
import '../css/MoviePlayer.css'

import { calcTime } from '../Utils/Helpers'


let newMovies =[];


class MoviePlayer extends Component {
    state = {
        movies : [],
        selectedMovie: {},
        loading: true,
    }
        async componentDidMount(){
           const oldMovies = JSON.parse(localStorage.getItem('movies'));
                            const results = await this.getNewMovies(oldMovies);
                            newMovies = oldMovies.map((oldMovie, index) => {
                                return {
                                    id: oldMovie.id,
                                    position: index +1,
                                    title: oldMovie.title,
                                    duration: results[index],
                                    imageUrl: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${oldMovie.backdrop_path}`,
                                    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                }
                            })

                            const id = this.props.match.params.id;

                            if (id) {
                                const selectedMovie = this.getSelectedMovie(newMovies, id);
                                this.setState({
                                    loading: false,
                                    movies: [...newMovies],
                                    selectedMovie
                                })
                            } else {
                                const selectedMovie = newMovies[0];
                                this.setState({
                                    loading: false,
                                    movies: [...newMovies],
                                    selectedMovie
                                })
                                this.props.history.push({
                                    pathname: `/player/${selectedMovie.id}`
                                })
                            }
        }

        getSelectedMovie = (movies, movieId) => {
        const selectedMovie = _.find(movies, { id : parseInt(movieId, 10) });
        return selectedMovie;
    }
    handleEnded = () => {
        console.log('video ended');
        // const { movies, selectedMovie } = this.state;
        // const movieIndex = movies.findIndex(movie => selectedMovie.id === movie.id);
        // const nextMovieIndex = movieIndex === movies.length - 1 ? 0 : movieIndex + 1;
        // const NewSelectedMovie = movies[nextMovieIndex];
        // this.props.history.push({ pathname: `/player/${NewSelectedMovie.id}`});
        // this.setState({ selectedMovie: NewSelectedMovie });
    }
    getTime = movieId => {
        return new Promise((resolve, reject) => {
            const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr`;
            axios.get(url)
                .then(data => {
                    const duration = data.data.runtime;
                    resolve(duration)
                })
                .catch(e => {
                    console.log('e',e);
                    reject('error ', e);
                })
        })
    }
    getNewMovies = async oldMovies => {
        let promises = [];
        for(let i = 0; i<oldMovies.length; i++) {
            const element = oldMovies[i];
            const id = element.id;
            const time = await this.getTime(id);
            promises.push(calcTime(time));
        }
        return Promise.all(promises);
    }
    render() {
        const { movies, selectedMovie } = this.state;
        return (
            <div className="moviePlayer">
            {this.state.loading ? 
            (
                <Spinner />
            ): 
            (
                <>
                    <VideoPlayer 
                        videoUrl={this.state.selectedMovie.videoUrl}
                        imageUrl={this.state.selectedMovie.imageUrl}
                        handleEnded={this.handleEnded}
                    />
                    <MvPlayerList 
                        movies={movies}
                        selectedMovie={selectedMovie}
                    />
                </>
            )}
            </div>
        )
    }
}
export { MoviePlayer }