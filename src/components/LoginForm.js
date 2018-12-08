import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
    Typography,
    Paper,
    Button,
    Avatar,
    FormControl,
    FormControlLabel,
    InputLabel,
    Input,
    Checkbox
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';

import * as actions from '../actions/actions';

const styles = () => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px auto',
        padding: '20px',
        width: 400
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
        const { email, password } = this.state;
        this.props.login({
            email,
            password
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
        const { classes } = this.props;
        return (
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form onSubmit={this.handleSubmitForm} className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input
                            id="email"
                            name="email"
                            autoComplete="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            autoFocus
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
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        className={classes.button}
                        fullWidth
                    >
                        {this.props.isFetching ? 'Logging in...' : 'Login'}
                    </Button>
                </form>
                {this.props.error && (
                    <Typography variant="h5" color="error">
                        {this.props.error}
                    </Typography>
                )}
            </Paper>
        );
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
    login: PropTypes.func,
    isFetching: PropTypes.bool,
    isAuth: PropTypes.bool,
    error: PropTypes.string
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
        login: creds => dispatch(actions.userLogin(creds))
    };
};

export default withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(LoginForm)
);
