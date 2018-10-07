import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

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
                <NavLink to="#">Logout</NavLink>
            </li>
        </ul>
    );
};

SignedInLinks.propTypes = {
    contextUser: PropTypes.object
};

export default SignedInLinks;
