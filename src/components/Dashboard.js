import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        return (
            <React.Fragment>
                <h2 className="grey-text align-center">Dashboard component</h2>
                {this.props.isAuth ? (
                    <div className="row">
                        <div className="col s1 m4">
                            <Link
                                to="/create-request"
                                className="waves-effect waves-light btn-large"
                            >
                                Create Request
                            </Link>
                        </div>
                        <div className="col s1 m4">
                            <Link to="/requests" className="waves-effect waves-light btn-large">
                                View Requests
                            </Link>
                        </div>
                    </div>
                ) : (
                    <p>Please sign in...</p>
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchItems: () => dispatch(actions.fetchItems())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
