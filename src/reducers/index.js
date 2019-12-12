import {combineReducers} from 'redux'

import { movieReducer } from './movies'

const rootReducer = combineReducers({
    movies: movieReducer,
})

export default rootReducer