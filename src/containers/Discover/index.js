import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { apiCall } from '../../actions/apiCall';
import { Link } from 'react-router';
class Discover extends React.Component {
  componentDidMount() {
    this.props.apiCall();
  }
  renderMovies() {
    const { discover } = this.props;
    return discover.map(movie => {
      const url = `http://image.tmdb.org/t/p/w342/${movie.poster_path}`;
      return (
        <Link to={movie.title}>
        <div
          key={movie.title}
          style={{
            height: 500,
            backgroundSize: 'cover',
            background: `url(${url})  no-repeat `
          }}
        />
      </Link>
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
  return { discover: state.discover };
};

const mapDispatchToProps = dispatch => ({
  apiCall: data => dispatch(apiCall())
});
export default connect(mapStateToProps, mapDispatchToProps)(Discover);
