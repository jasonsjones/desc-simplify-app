import React from 'react';

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

export default SignupPage;
