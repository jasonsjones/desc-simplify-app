import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const UserDetailCard = ({ contextUser, token }) => {
    return (
        <div className="card-panel grey lighten-5">
            <div className="row">
                <h4 className="center-align">{`${contextUser.name.first} ${
                    contextUser.name.last
                }`}</h4>
            </div>
            <div className="row">
                <div className="col s2">
                    <h6>
                        <strong>Id:</strong>
                    </h6>
                </div>
                <div className="col s4">
                    <h6>{contextUser._id}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col s2">
                    <h6>
                        <strong>Email:</strong>
                    </h6>
                </div>
                <div className="col s4">
                    <h6>{contextUser.email}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col s2">
                    <h6>
                        <strong>Password:</strong>
                    </h6>
                </div>
                <div className="col s4">
                    <h6>{contextUser.password}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col s2">
                    <h6>
                        <strong>Roles:</strong>
                    </h6>
                </div>
                <div className="col s4">
                    <h6>
                        {contextUser.roles.map(role => (
                            <span key={role}>{role + ' '}</span>
                        ))}
                    </h6>
                </div>
            </div>
            <div className="row">
                <div className="col s2">
                    <h6>
                        <strong>isEmailValid:</strong>
                    </h6>
                </div>
                <div className="col s4">
                    <h6>{contextUser.isEmailValid ? 'true' : 'false'}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col s2">
                    <h6>
                        <strong>lastLoginAt:</strong>
                    </h6>
                </div>
                <div className="col s4">
                    <h6>{contextUser.lastLoginAt}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col s2">
                    <h6 style={{ overflowWrap: 'break-word' }}>
                        <strong>JSON Web Token:</strong>
                    </h6>
                </div>
                <div className="col s10">
                    <h6 style={{ overflowWrap: 'break-word' }}>{token}</h6>
                </div>
            </div>
        </div>
    );
};

UserDetailCard.propTypes = {
    contextUser: PropTypes.object,
    token: PropTypes.string
};

const mapStateToProps = state => {
    return {
        contextUser: state.contextUser,
        token: state.token
    };
};

export default connect(mapStateToProps)(UserDetailCard);
