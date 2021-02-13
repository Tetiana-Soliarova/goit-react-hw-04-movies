import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Details from '../component/Details/Details';
import routes from '../routes';
import styles from '../component/Details/style.module.css'

const AsyncCast = lazy(() =>
  import('../component/Cast/cast' /* webpackChunkName: "cast" */),
)
const Reviews = lazy(() =>
  import('../component/Reviews/Reviews' /* webpackChunkName: "reviews" */),
)

class MovieDetailsPage extends Component {
  state = {
    movie: {
      genres: [],
      poster_path: null,
    },
  }

  componentDidMount() {
    const API_KEY = '83f07c57364055dd40420fef72cb0c8f'

    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`,
    )
      .then((response) => {
        return response.json()
      }) 
      .then((movie) => this.setState({ movie }))
  }

  hendleGoBack = () => {
    const { state } = this.props.location
    if (state && state.from) {
      console.log(state.from)

      return this.props.history.push(state.from)
    }

    this.props.history.push(routes.home)
  }

  render() {
    return (
      <>
        <button
          type="button"
          className={styles.button}
          onClick={this.hendleGoBack}
        >
          Go back
        </button>

        <div>{this.state.movie && <Details movie={this.state.movie} />}</div>
        <hr />
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink
              exact
              to={{
                pathname: `${this.props.match.url}/cast`,
                state: {
                  from: this.props.location?.state?.from || routes.home,
                },
              }}
              className={styles.movies}
              activeClassName={styles.Moviesactive}
            >
              Cast
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              to={{
                pathname: `${this.props.match.url}/reviews`,
                state: {
                  from: this.props.location?.state?.from || routes.home,
                },
              }}
              className={styles.Movies}
              activeClassName={styles.Moviesactive}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <hr />
        <Suspense fallback={<h1>Loading....</h1>}>
          <Route exact path={`/movies/:movieId/cast`} component={AsyncCast} />
          <Route exact path={`/movies/:movieId/reviews`} component={Reviews} />
        </Suspense>
      </>
    )
  }
}

export default MovieDetailsPage
