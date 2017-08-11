import React, { PropTypes } from 'react';

class MovieDetail extends React.Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        {this.props.params.movieId}
      </div>
    );
  }
}

export default MovieDetail;
