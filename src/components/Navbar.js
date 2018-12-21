import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import * as actions from '../actions/actions';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';

const HomeLink = props => <Link to="/" style={{ textDecoration: 'none' }} {...props} />;

const styles = () => ({
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
});

class MenuAppBar extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component={HomeLink}
                            variant="h6"
                            color="inherit"
                            className={classes.grow}
                        >
                            DESC In Kind Portal
                        </Typography>
                        {this.props.isAuth ? <SignedInLinks /> : <SignedOutLinks />}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    isAuth: PropTypes.bool,
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.userLogout())
    };
};

export default withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(MenuAppBar)
);
