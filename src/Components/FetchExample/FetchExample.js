import React, { Component } from 'react';

FetchExample.defaultProps = {
    image: 'xxxxxxxx',
    price: 3.99
};

export default class FetchExample extends Component {
    url = 'https://api.github.com/users';
    state = { users: [], loading: true, error: false };

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                {(this.state.loading) ? this.getStatusComponent() : this.getUserComponent()}
            </div>
        )
    }

    getStatusComponent() {
        return (
            <div>
                {
                    (!this.state.error) ? < div > Loading....</div > : < div > Error....</div >
                }
            </div>
        )
    }

    getUserComponent() {
        return (
            <div>
                {
                    this.state.users.map(user =>
                        <div key={user.id}>
                            <img src={user.avatar_url} style={{ width: 50 }} />
                            <label>User: {user.login}</label>
                        </div>
                    )
                }
            </div>
        )
    }

    async getData() {
        const response = await fetch(this.url);
        const users = await response.json();

        if (response.ok) {
            this.setState({ users: users });
        }
        else {
            this.setState({ error: true });
        }

        setTimeout(() => {
            this.setState({ loading: false });
        }, 4000);
    }
}
