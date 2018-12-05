import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';

const styles = {
    main: {
        marginTop: 50
    }
};

class LoginPage extends React.Component {
    render() {
        return (
            <main style={styles.main}>
                {this.props.isAuth ? <Redirect to="/" /> : <LoginForm />}
            </main>
        );
    }
}

LoginPage.propTypes = {
    isAuth: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth
    };
};

export default connect(mapStateToProps)(LoginPage);
