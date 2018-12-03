import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';

import * as actions from '../actions/actions';

class SignedInLinks extends React.Component {
    state = {
        anchorEl: null
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = event => {
        if (event.target.textContent === 'Logout') {
            this.props.logout();
        }
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <React.Fragment>
                <Typography variant="subtitle1" color="inherit">
                    {`${this.props.contextUser.name.first} ${this.props.contextUser.name.last}`}
                </Typography>
                <IconButton
                    aria-owns={open ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
            </React.Fragment>
        );
    }
}

SignedInLinks.propTypes = {
    contextUser: PropTypes.object,
    logout: PropTypes.func
};

const mapStateToProps = state => {
    return {
        contextUser: state.contextUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.userLogout())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignedInLinks);

/*
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

*/
