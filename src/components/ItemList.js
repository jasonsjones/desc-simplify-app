import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import ItemExpansion from './ItemExpansion';

const ItemList = props => (
    <React.Fragment>
        <Typography variant="h4" style={{ marginBottom: 25 }}>
            {props.children}
        </Typography>
        {props.items &&
            props.items
                .filter(item => item.status === props.list)
                .map(item => <ItemExpansion key={item._id} {...item} />)}
    </React.Fragment>
);

const mapStateToProps = state => {
    return {
        items: state.items
    };
};

export default connect(mapStateToProps)(ItemList);
