import React, { Component } from 'react'
import logo from '../../logo.svg';

export default class Book extends Component {
    render() {
        const { book } = this.props;
        return (
            <div>
                <img src={logo} style={{ width: 50 }} />
                <h2>{book.title}</h2>
                <p>{book.description}</p>
            </div>
        )
    }
}
