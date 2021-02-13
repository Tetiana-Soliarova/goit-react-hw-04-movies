import { Component } from 'react'
import styles from './searchbar.module.css'

export default class Searchbox extends Component {
  state = {
    value: ' ',
  }
  //получаем значение в стейт
  hendleChange = (event) => {
    this.setState({ value: event.currentTarget.value.toLowerCase() })
  }

  //записиваем значение в стейт
  hendleSubmit = (event) => {
    event.preventDefault()
    //проверка что не пустая строка
    if (this.state.value.trim() === '') {
      alert('Введите даные для поиска')
      return
    }

    this.props.onSubmit(this.state.value)
    //очистка поля после сабмита
    this.setState({ value: '' })
  }

  render() {
    return (
      <div className={styles.Searchbox}>
        <form onSubmit={this.hendleSubmit}>
          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Movie search"
            value={this.state.value}
            onChange={this.hendleChange}
          />
          <button type="submit" className={styles.SearchFormButton}>
            <span>Search</span>
          </button>
        </form>
      </div>
    )
  }
}
