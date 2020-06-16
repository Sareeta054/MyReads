import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

export default class Bookshelf extends Component {
    static propTypes ={
        booksOnShelf: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired,
    }

    render() {
        const shelves = ['currentlyReading', 'wantToRead', 'read']
        const shelveNames = ['Currently Reading', 'Want To Read', 'Read']

        return (
            <div>
                {shelves.map((shelf, index) => {
                    return(
                        <div key={index} className='list-books-content'>
                            <div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">{shelveNames[index]}</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {this.props.booksOnShelf.sort().filter(book => book.shelf === shelf)
                                            .map(book => (
                                                <Book key={book.id}
                                                book={book}
                                                changeShelf={this.props.changeShelf} />
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )})}
            </div>
        )
    }
}
