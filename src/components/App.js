import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../containers/Layout';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Dashboard from './Dashboard';
import RequestViewPage from './RequestViewPage';
import NotFoundPage from './NotFoundPage';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/signup" component={SignupPage} />
                            <Route exact path="/requests" component={RequestViewPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
