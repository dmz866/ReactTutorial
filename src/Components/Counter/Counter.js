import React, { Component } from 'react';
import Products from '../Products/Products';
export default class Counter extends Component {
    state = { count: 0 };
    render() {
        console.count('counter');
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Regular Counter</h1>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
                <button onClick={() => this.setState({ count: 0 })}>0</button>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                <hr />
                <Products />
            </div >
        )
    }
}
