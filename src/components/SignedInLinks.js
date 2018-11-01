import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

const SignedInLinks = props => {
    console.log(props.contextUser);
    return (
        <ul className="right hide-on-med-and-down">
            <li>
                <NavLink to="#">{`${props.contextUser.name.first} ${
                    props.contextUser.name.last
                }`}</NavLink>
            </li>
            <li>
                <NavLink to="#" onClick={props.logout}>
                    Logout
                </NavLink>
            </li>
        </ul>
    );
};

SignedInLinks.propTypes = {
    contextUser: PropTypes.object,
    logout: PropTypes.func
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.userLogout())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(SignedInLinks);