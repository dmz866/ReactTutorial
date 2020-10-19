import React, { Component } from 'react'
import data from '../../Samples/data.json';

export default class ArrayExample extends Component {
    state = { books: data };
    render() {
        return (
            <div>
                <div>
                    {this.state.books.map(book =>
                        <div key={book.id}>
                            <div>{book.id}</div>
                            <button onClick={() => this.removeItem(book.id)}>Remove</button>
                        </div>
                    )}
                </div>
                <button onClick={() => this.deleteAll()}>Delete All</button>
            </div >
        )
    }

    deleteAll() {
        this.setState({ books: [] });
    }

    removeItem(id) {
        const arrAux = this.state.books.filter(book => book.id != id);
        this.setState({ books: arrAux });
    }
}
