import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../utils/BooksAPI'
import PropTypes from 'prop-types'

export default class SearchPage extends Component {
  static propTypes = {
    changeShelf: PropTypes.func.isRequired,
    booksOnShelf: PropTypes.array,
  }
  
  state = {
    query: '',
    books: []
  }

  updateQuery = query => {
    this.setState({query: query.trim()})
    BooksAPI.search(query, 30).then(books => {this.setState({books})})
  }

    render() {
        return (  
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search"  to='/'> Close </Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author"
                  onChange={e => this.updateQuery(e.target.value)} />
                </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.books.sort().map(book => (
                  <Book changeShelf={this.props.changeShelf}
                  key={book.id} book={book} />
                ))}
              </ol>
            </div>
          </div>
        )
    }
}
