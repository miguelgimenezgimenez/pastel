import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../actions/getMovies';

class Discover extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }
  renderMovies() {
    const { tmdbMovies } = this.props;
    console.log(tmdbMovies);
    return tmdbMovies.map(movie => {
      const url = `http://image.tmdb.org/t/p/w342/${movie.poster_path}`;

      return (
        <div
          style={{
            height: 500,
            backgroundSize: 'cover',
            background: `url(${url})  no-repeat `
          }}
        />
      );
    });
  }
  render() {
    return (
      <div>
        {this.renderMovies()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tmdbMovies: state.tmdbMovies };
};

const mapDispatchToProps = dispatch => ({
  getMovies: data => dispatch(getMovies())
});
export default connect(mapStateToProps, mapDispatchToProps)(Discover);
