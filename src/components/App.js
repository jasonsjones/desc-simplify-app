import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import NotFoundPage from './NotFoundPage';
import './App.css';

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
                        <Switch>
                            <Route exact path="/" component={AppContent} />
                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/signup" component={SignupPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
