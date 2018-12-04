import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        marginTop: 50,
        marginLeft: 100
    }
};

class Dashboard extends React.Component {
    render() {
        return (
            <div style={styles.root}>
                <Typography variant="h4">Dashboard component</Typography>
                {this.props.isAuth ? (
                    <Grid container style={{ marginTop: 25 }} spacing={24}>
                        <Grid item>
                            <Button component={Link} to="#" color="primary" variant="contained">
                                Create Requests
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                component={Link}
                                to="/requests"
                                color="primary"
                                variant="contained"
                            >
                                View Requests
                            </Button>
                        </Grid>
                    </Grid>
                ) : (
                    <Typography variant="body1" style={{ marginTop: 25 }}>
                        Please{' '}
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            login
                        </Link>{' '}
                        to see the available options.
                    </Typography>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth
    };
};

export default connect(mapStateToProps)(Dashboard);
