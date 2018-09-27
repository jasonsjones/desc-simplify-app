import React from 'react';
import PropTypes from 'prop-types';
import UserDetailsCard from './UserDetailsCard';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="card-panel">
                <h5 className="center-align">Login</h5>
                <form
                    onSubmit={evt => {
                        evt.preventDefault();
                        this.props.handleSubmit({
                            email: this.state.email,
                            password: this.state.password
                        });
                        this.setState({
                            email: '',
                            password: ''
                        });
                    }}
                >
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="small material-icons prefix">email</i>
                            <input
                                className="validate"
                                type="email"
                                id="email"
                                name="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="small material-icons prefix">lock</i>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col offset-s1">
                            <button className="btn">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func
};

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idDataFetched: false,
            contextUser: null,
            token: ''
        };
    }

    handleSubmit = creds => {
        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(creds)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                console.log(JSON.stringify(data));
                if (data) {
                    this.setState({
                        isDataFetched: true,
                        contextUser: data.payload.user,
                        token: data.payload.token
                    });
                }
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div style={{ padding: '30px 0 0 0' }}>
                <div className="container">
                    {this.state.isDataFetched ? (
                        <div className="row">
                            <div className="col s12 l8 offset-l2">
                                <UserDetailsCard
                                    contextUser={this.state.contextUser}
                                    token={this.state.token}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col s12 l6 offset-l3">
                                <LoginForm handleSubmit={this.handleSubmit} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default LoginPage;
