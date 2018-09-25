import React from 'react';

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

export default LoginPage;
