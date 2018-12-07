import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SignupForm from './SignupForm';

const styles = {
    main: {
        marginTop: 50
    }
};

class SignupPage extends React.Component {
    render() {
        return (
            <main style={styles.main}>
                {this.props.isAuth ? <Redirect to="/" /> : <SignupForm />}
            </main>
        );
    }
}

SignupPage.propTypes = {
    isAuth: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth
    };
};

export default connect(mapStateToProps)(SignupPage);
