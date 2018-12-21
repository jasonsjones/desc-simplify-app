import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const SignedOutLinks = () => {
    return (
        <React.Fragment>
            <Button component={NavLink} to="/signup" color="inherit">
                Signup
            </Button>
            <Button component={NavLink} to="/login" color="inherit">
                Login
            </Button>
        </React.Fragment>
    );
};

export default SignedOutLinks;
