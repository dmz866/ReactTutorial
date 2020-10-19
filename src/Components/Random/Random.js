import React, { Component } from 'react'

export default class Random extends Component {
    state = {
        title: 'shi'
    };

    onClick() {
        this.setState({ title: (this.state.title == 'shi') ? 'no' : 'shi' });
    }

    render() {
        return (
            <div>
                <div>{this.state.title}</div>
                <button onClick={() => this.onClick()}>Click</button>
            </div>
        )
    }

}
