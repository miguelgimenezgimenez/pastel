import { combineReducers } from 'redux';

import tmdbMovies from './tmdbMovies';

const reducers = combineReducers({
  tmdbMovies,
});

export default reducers;
