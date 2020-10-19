import React, { Component } from 'react'

export default class Person extends Component {
    state = { person: { name: 'Dosh', lastName: 'Murillo', age: 30 } };
    render() {
        return (
            <div>
                <div>Name: {this.state.person.name}</div>
                <div>Name: {this.state.person.lastName}</div>
                <div>Name: {this.state.person.age}</div>
                <button onClick={() => this.onClick()}>Change age</button>
            </div>
        )
    }

    onClick() {
        const newPerson = this.state.person;
        newPerson.age = 40;
        this.setState({ person: newPerson });
    }
}
