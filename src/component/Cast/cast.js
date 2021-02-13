import React, { Component } from 'react';
import CastItem from './CastItem';

class Cast extends Component {
  state = {
    casts: {
      cast: [],
    },
  }

  componentDidMount() {
    const API_KEY = '83f07c57364055dd40420fef72cb0c8f'

    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}&language=en-US`,
    )
      .then((response) => {
        return response.json()
      })
      .then((casts) => this.setState({ casts }))
  }

  render() {
    return (
      <>
        <CastItem actors={this.state.casts.cast} />
      </>
    )
  }
}

export default Cast;
