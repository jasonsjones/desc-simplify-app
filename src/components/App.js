import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

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

const LoginForm = () => {
    return (
        <div style={{ padding: '30px 0 0 0' }}>
            <div className="card-panel">
                <h5 className="center-align">Login</h5>
                <form>
                    <div className="input-field">
                        <i className="small material-icons prefix">email</i>
                        <input type="email" id="lemail" />
                        <label htmlFor="lemail">Your Email</label>
                    </div>
                    <div className="input-field">
                        <i className="small material-icons prefix">lock</i>
                        <input type="password" id="lpassword" />
                        <label htmlFor="lpassword">Password</label>
                    </div>
                    <div className="row">
                        <div className="col offset-l1">
                            <button className="btn">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

const LoginPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 l6 offset-l3">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

const SignupPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 l6 offset-l3">
                    <SignupForm />
                </div>
            </div>
        </div>
    );
};

const SignupForm = () => {
    return (
        <div style={{ padding: '30px 0 0 0' }}>
            <h5 className="center-align">Signup for Account</h5>
            <form>
                <div className="row">
                    <div className="col s6">
                        <div className="input-field">
                            <i className="small material-icons prefix">person</i>
                            <input type="text" id="firstName" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="input-field">
                            <input type="text" id="lastName" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                </div>
                <div className="input-field">
                    <i className="small material-icons prefix">email</i>
                    <input type="email" id="email" />
                    <label htmlFor="email">Your Email</label>
                </div>
                <div className="input-field">
                    <i className="small material-icons prefix">lock</i>
                    <input type="password" id="password" />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="input-field">
                    <i className="small material-icons prefix">lock</i>
                    <input type="password" id="confirmPassword" />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                </div>
                <div className="row">
                    <div className="col offset-l1">
                        <button className="btn">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

const AppContent = () => {
    return (
        <div>
            <header className="grey lighten-4">
                <div>
                    <h1
                        className="grey-text center-align"
                        style={{ margin: '0', padding: '30px 0 0 0' }}
                    >
                        DESC Simplify Project
                    </h1>
                </div>
            </header>
        </div>
    );
};

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <Route exact path="/" component={AppContent} />
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/signup" component={SignupPage} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
