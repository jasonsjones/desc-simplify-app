import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';

import ItemList from './ItemList';
import * as actions from '../actions/actions';

const styles = () => ({
    main: {
        margin: '40px auto',
        width: 800
    },
    tabs: {
        marginBottom: 30
    },
    tab: {
        padding: 20
    }
});

class RequestViewPage extends React.Component {
    state = {
        value: 0
    };

    componentDidMount() {
        this.props.fetchItems();
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        const { classes } = this.props;
        return (
            <Paper className={classes.main}>
                <Tabs value={value} className={classes.tabs} onChange={this.handleChange} centered>
                    <Tab label="Active" />
                    <Tab label="Approved" />
                    <Tab label="Wishlist" />
                    <Tab label="Denied" />
                    <Tab label="Archived" />
                </Tabs>
                <section className={classes.tab}>
                    {value === 0 && <ItemList list="active">Active Requests</ItemList>}
                    {value === 1 && <ItemList list="approved">Approved Requests</ItemList>}
                    {value === 2 && <ItemList list="wishlist">WishList Requests</ItemList>}
                    {value === 3 && <ItemList list="denied">Rejected Requests</ItemList>}
                    {value === 4 && <ItemList list="archived">Archived Requests</ItemList>}
                </section>
            </Paper>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItems: () => dispatch(actions.fetchItems())
    };
};

export default withStyles(styles)(
    connect(
        null,
        mapDispatchToProps
    )(RequestViewPage)
);
