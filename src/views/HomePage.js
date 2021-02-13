import { Component } from 'react'
import Home from '../component/HomePage/Home'

class HomePage extends Component {
  state = {
    medias: [],
  }

  componentDidMount() {
    const API_KEY = '83f07c57364055dd40420fef72cb0c8f'

    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then((response) => {
        {
          if (response.ok) {
            return response.json()
          }
        }
      })
      .then((medias) => this.setState({ medias: medias.results }))
  }

  render() {
    return (
      <div>
        <h1>Trending today</h1>
        <ul>{this.state.medias && <Home medias={this.state.medias} />}</ul>
      </div> 
    )
  }
}

export default HomePage;
