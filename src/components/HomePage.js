import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Bookshelf />
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
            </div>
        )
    }
}
