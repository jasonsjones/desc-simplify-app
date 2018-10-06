import React from 'react';
import { Link } from 'react-router-dom';

import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <nav className="nav-wrapper teal">
            <div className="container">
                <Link to="/" className="brand-logo">
                    DESC Simplify
                </Link>
                <SignedOutLinks />
            </div>
        </nav>
    );
};

export default Navbar;
