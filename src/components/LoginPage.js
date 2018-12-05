import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Typography, TextField, Paper, Button } from '@material-ui/core';
import Email from '@material-ui/icons/email';
import Lock from '@material-ui/icons/lock';

import * as actions from '../actions/actions';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmitForm = e => {
        e.preventDefault();
        this.props.handleSubmit({
            email: this.state.email,
            password: this.state.password
        });
        this.setState({
            email: '',
            password: ''
        });
    };

    handleChange = e => {
        const { id, value } = e.target;
        this.setState({
            [id]: value
        });
    };

    render() {
        return (
            <Grid container direction="column">
                <Typography align="center" variant="h5" color="inherit">
                    Login
                </Typography>
                <form onSubmit={this.handleSubmitForm}>
                    <Grid container alignItems="flex-end" justify="center" spacing={16}>
                        <Grid item>
                            <Email />
                        </Grid>
                        <Grid item style={{ width: 320 }}>
                            <TextField
                                type="email"
                                label="Email"
                                id="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                                margin="normal"
                                fullWidth={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-end" justify="center" spacing={16}>
                        <Grid item>
                            <Lock />
                        </Grid>
                        <Grid item style={{ width: 320 }}>
                            <TextField
                                type="password"
                                label="Password"
                                id="password"
                                onChange={this.handleChange}
                                value={this.state.email}
                                margin="normal"
                                fullWidth={true}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        color="primary"
                        variant="contained"
                        style={{ margin: '20px auto', width: '80%' }}
                    >
                        {this.props.isFetching ? 'Logging in...' : 'Login'}
                    </Button>
                </form>
            </Grid>
        );
    }
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func,
    isFetching: PropTypes.bool
};

class LoginPage extends React.Component {
    handleSubmit = creds => {
        this.props.login(creds);
    };

    render() {
        return (
            <div style={{ padding: '30px 0 0 0' }}>
                {this.props.isAuth ? (
                    <Redirect to="/" />
                ) : (
                    <div>
                        <Grid container justify="center" spacing={24}>
                            <Grid item>
                                <Paper style={{ width: 400, height: 300 }}>
                                    <LoginForm
                                        handleSubmit={this.handleSubmit}
                                        isFetching={this.props.isFetching}
                                    />
                                    {this.props.error && (
                                        <Typography variant="h5" color="error">
                                            {this.props.error}
                                        </Typography>
                                    )}
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                )}
            </div>
        );
    }
}

LoginPage.propTypes = {
    login: PropTypes.func,
    isFetching: PropTypes.bool,
    isAuth: PropTypes.bool,
    contextUser: PropTypes.object,
    token: PropTypes.string,
    error: PropTypes.string
};

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        isAuth: state.isAuth,
        contextUser: state.contextUser,
        token: state.token,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: creds => dispatch(actions.userLogin(creds))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
