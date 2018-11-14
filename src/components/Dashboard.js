import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
    <React.Fragment>
        <h2 className="grey-text align-center">Dashboard component</h2>
        <Link to="/requests" className="waves-effect waves-light btn-large">
            View Requests
        </Link>
    </React.Fragment>
);

export default Dashboard;
