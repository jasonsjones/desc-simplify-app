import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper teal">
            <div className="container">
                <Link to="/" className="brand-logo">
                    DESC Simplify
                </Link>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
