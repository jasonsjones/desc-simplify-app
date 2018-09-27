import React from 'react';
import PropTypes from 'prop-types';

import UserDetailsCard from './UserDetailsCard';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDataFetched: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
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
                <h5 className="center-align">Signup for Account</h5>
                <form
                    onSubmit={evt => {
                        evt.preventDefault();
                        this.props.handleSubmit({
                            name: {
                                first: this.state.firstName,
                                last: this.state.lastName
                            },
                            email: this.state.email,
                            password: this.state.password
                        });
                        this.setState({
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                        });
                    }}
                >
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="small material-icons prefix">account_circle</i>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="small material-icons prefix">email</i>
                            <input
                                className="validate"
                                type="email"
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="email">Your Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="small material-icons prefix">lock</i>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="small material-icons prefix">lock</i>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col offset-s1">
                            <button className="btn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

SignupForm.propTypes = {
    handleSubmit: PropTypes.func
};

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idDataFetched: false,
            contextUser: null,
            token: ''
        };
    }

    handleSubmit = data => {
        console.log(JSON.stringify(data));
        fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
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
            <div className="container">
                <div style={{ padding: '30px 0 0 0' }}>
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
                                <SignupForm handleSubmit={this.handleSubmit} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default SignupPage;
