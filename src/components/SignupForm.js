import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Paper,
    Avatar,
    FormControl,
    InputLabel,
    Input,
    Button
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';

import * as actions from '../actions/actions';

const styles = () => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px auto',
        padding: '20px',
        width: 500
    },
    avatar: {
        margin: 10,
        color: 'white',
        backgroundColor: '#7986CB'
    },
    form: {
        width: '100%'
    },
    button: {
        height: 50,
        marginTop: 20,
        marginBottom: 20
    }
});

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmitForm = e => {
        e.preventDefault();
        const { firstName, lastName, email, password } = this.state;
        this.props.signup({
            name: {
                first: firstName,
                last: lastName
            },
            email,
            password
        });
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    handleChange = evt => {
        const { id, value } = evt.target;
        this.setState({
            [id]: value
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AccountCircle />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up for an Account
                </Typography>
                <form onSubmit={this.handleSubmitForm} className={classes.form}>
                    <Grid container justify="center" spacing={32}>
                        <Grid item xs={6}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="firstName">First Name</InputLabel>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    onChange={this.handleChange}
                                    value={this.state.firstName}
                                    autoFocus
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    onChange={this.handleChange}
                                    value={this.state.lastName}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input
                            id="email"
                            name="email"
                            autoComplete="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="current-password"
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                        <Input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            onChange={this.handleChange}
                            value={this.state.confirmPassword}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        className={classes.button}
                        fullWidth
                    >
                        {this.props.isFetching ? 'Signing up now...' : 'Submit'}
                    </Button>
                </form>
            </Paper>
        );
    }
}

SignupForm.propTypes = {
    classes: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func
};

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        isAuth: state.isAuth,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: userData => dispatch(actions.userSignup(userData))
    };
};

export default withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SignupForm)
);
