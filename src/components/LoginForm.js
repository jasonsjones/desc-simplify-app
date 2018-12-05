import React from 'react';
import PropTypes from 'prop-types';
import {
    Typography,
    Button,
    Avatar,
    FormControl,
    FormControlLabel,
    InputLabel,
    Input,
    Checkbox
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: 10
    },
    form: {
        width: '100%'
    },
    button: {
        height: 50,
        marginTop: 20,
        marginBottom: 20
    }
};

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
            <div style={styles.root}>
                <Avatar style={styles.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form onSubmit={this.handleSubmitForm} style={styles.form}>
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
                        fullWidth
                        color="primary"
                        variant="contained"
                        style={styles.button}
                    >
                        {this.props.isFetching ? 'Logging in...' : 'Login'}
                    </Button>
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func,
    isFetching: PropTypes.bool
};

export default LoginForm;
