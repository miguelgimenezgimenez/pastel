export default (state = [], action) => {
  switch (action.type) {
    case 'DISCOVER_SUCCESS':
    const newstate = state.concat(action.tmdbMovies.results);
        return newstate;

    case 'DISCOVER_REQUEST':
      return { ...state, pending: true };

    default:
      return state;
  }
};
