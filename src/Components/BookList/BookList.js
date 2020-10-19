import React, { Component } from 'react'
import Book from '../Book/Book';

export default class BookList extends Component {
    render() {
        const bookList = [{ id: 1, title: "Title 1", description: "Description 1" },
        { id: 2, title: "Title 2", description: "Description 2" }];

        return (
            <div>
                <h1> Book List </h1>
                {bookList.map(book => (
                    <Book key={book.id} book={book} />
                ))}
            </div>
        )
    }
}
