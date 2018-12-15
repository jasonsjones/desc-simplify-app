import React from 'react';
import { connect } from 'react-redux';
import {
    Typography,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ItemExpansion = props => {
    return (
        <ExpansionPanel elevation={0}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{props.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                    lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

const ItemList = props => (
    <React.Fragment>
        <Typography variant="h4" style={{ marginBottom: 25 }}>
            {props.children}
        </Typography>
        {props.items &&
            props.items
                .filter(item => item.status === props.list)
                .map(item => (
                    <ItemExpansion
                        key={item._id}
                        name={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    />
                ))}
    </React.Fragment>
);

const mapStateToProps = state => {
    return {
        items: state.items
    };
};

export default connect(mapStateToProps)(ItemList);
