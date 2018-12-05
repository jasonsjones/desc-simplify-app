import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Typography, Paper } from '@material-ui/core';

import LoginForm from './LoginForm';
import * as actions from '../actions/actions';

const styles = {
    main: {
        marginTop: 50
    },
    paper: {
        margin: '20px auto',
        padding: '20px',
        width: 400
    }
};

class LoginPage extends React.Component {
    handleSubmit = creds => {
        this.props.login(creds);
    };

    render() {
        return (
            <React.Fragment>
                {this.props.isAuth ? (
                    <Redirect to="/" />
                ) : (
                    <main style={styles.main}>
                        <Paper style={styles.paper}>
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
                    </main>
                )}
            </React.Fragment>
        );
    }
}

LoginPage.propTypes = {
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
