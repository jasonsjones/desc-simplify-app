import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SimpleDataRow = ({ label, data }) => (
    <div className="row">
        <div className="col s2">
            <h6>
                <strong>{label}:</strong>
            </h6>
        </div>
        <div className="col s4">
            <h6>{data}</h6>
        </div>
    </div>
);

const UserDetailCard = ({ contextUser, token }) => {
    return (
        <div className="card-panel grey lighten-5">
            <div className="row">
                <h4 className="center-align">User Profile</h4>
            </div>
            <SimpleDataRow label="Id" data={contextUser._id} />
            <SimpleDataRow label="First Name" data={contextUser.name.first} />
            <SimpleDataRow label="Last Name" data={contextUser.name.last} />
            <SimpleDataRow label="Email" data={contextUser.email} />
            <SimpleDataRow label="Password" data={contextUser.password} />
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
            <SimpleDataRow label="lastLoginAt" data={contextUser.lastLoginAt} />
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
