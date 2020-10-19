import React, { Component } from 'react'

export default class FormExample extends Component {
    state = {
        firstName: '',
        email: '',
        people: []
    };
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.firstName && this.state.email) {
            const newPerson = { id: this.state.people.length, firstName: this.state.firstName, email: this.state.email };
            this.setState({ people: [...this.state.people, newPerson] });
        }
        console.log(this.testRef);
    }
    render() {
        return (
            <div>
                <form style={{ textAlign: 'center', marginTop: 50 }} onSubmit={this.onSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" name="firstName" onChange={this.onChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" onChange={this.onChange} />
                    </div>
                    <button type="submit">Click</button>
                </form>
                {
                    this.state.people.map((person, index) =>
                        <div key={index}>
                            <div>id: {person.id}</div>
                            <div>name: {person.firstName}</div>
                            <hr />
                        </div>
                    )
                }
            </div>
        )
    }


}
