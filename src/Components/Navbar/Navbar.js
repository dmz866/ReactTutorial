import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link><br />
                <Link to="/counter">Counter</Link>
                <Link to="/products">Products</Link><br />
                <Link to="/person">Person</Link><br />
            </nav>
        )
    }
}
