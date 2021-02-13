import React, { Component } from 'react';
import ReviewsItem from './ReviewsItem'

class Reviews extends Component {
  state = {
    reviews: {
      results: [],
    },
  }

  componentDidMount() {
    const API_KEY = '83f07c57364055dd40420fef72cb0c8f'

    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    )
      .then((response) => {
        return response.json()
      })
      .then((reviews) => this.setState({ reviews }))
  }

  render() {
    return (
      <>
        {this.state.reviews.results.length > 0 && (
          <ReviewsItem reviews={this.state.reviews.results} />
        )}
        {this.state.reviews.results.length === 0 && (
          <p>We don't have any reviews for this movie.</p>
        )}
      </>
    )
  }
}

export default Reviews;
