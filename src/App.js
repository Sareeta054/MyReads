import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import {Route, Link} from 'react-router-dom'
import Search from './components/SearchPage'
import Bookshelf from './components/Bookshelf'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }))
    })
  }

  componentDidMount(){
      BooksAPI.getAll().then(books => {
        this.setState({books})
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path = '/' render={() => ( 
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Bookshelf changeShelf={this.changeShelf} booksOnShelf={this.state.books} />
            <div className="open-search">
                <Link to="/search"><button>Add a book</button></Link>
            </div>
          </div>
        )} />

        <Route exact path = '/search' render={() => (
          <Search changeShelf={this.changeShelf} booksOnShelf={this.state.books} />
          )} />
      </div>
    )
  }
}

export default BooksApp
