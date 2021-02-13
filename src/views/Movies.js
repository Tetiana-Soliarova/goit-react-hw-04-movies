import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../component/SearchBar/SearchBar'
import Searchbox from '../component/SearchBar/searchbox'
import getQueryParams from '../utils/get-query-params'

export default class Movies extends Component {
  state = {
    shows: {
      results: [],
    },
  }
  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search)
    if (query) {
      this.fetchShows(query)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search)
    const { query: nextQuery } = getQueryParams(this.props.location.search)

    if (prevQuery !== nextQuery) {
      this.fetchShows(nextQuery)
    }
  }

  fetchShows = (query) => {
    const API_KEY = '83f07c57364055dd40420fef72cb0c8f'
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
    )
      .then((response) => {
        return response.json()
      })
      .then((shows) => this.setState({ shows }))
  }

  handleChangeQuery = (query) => {
    console.log(query)
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    })
  }

  render() {
    return (
      <div>
        <Searchbox onSubmit={this.handleChangeQuery} />
        {this.state.shows.results.length > 0 && (
          <ul>
            {this.state.shows.results.map((show) => (
              <li key={show.id}>
                <Link
                  to={{
                    pathname: `${this.props.match.url}/${show.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {show.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
