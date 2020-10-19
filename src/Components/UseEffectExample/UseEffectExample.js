import React, { Component } from 'react'

export default class UseEffectExample extends Component {

    state = { count: 0 };
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
            </div>
        )
    }
}
