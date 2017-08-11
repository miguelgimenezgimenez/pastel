export const apiCall = (endpoint) => {
  return dispatch => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=77a22f81efdd5041eb5108dacd15f6e0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1'
    ).then(response => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem.  ' + response.status);
        dispatch({ type: 'DISCOVER_ERROR' });
        return;
      }
      response.json().then(movies => {
        dispatch({ type: 'DISCOVER_SUCCESS', tmdbMovies: movies });
      });
    });
  };
};
