import React from 'react';
import { connect } from 'react-redux';
import {
    Typography,
    Grid,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ItemExpansion = props => {
    console.log(props);
    return (
        <ExpansionPanel elevation={0}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container justify="space-between">
                    <Grid item>
                        <Typography>{props.submittedBy.name.first}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{props.numberOfItems}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{props.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{props.urgency}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{props.createdAt}</Typography>
                    </Grid>
                </Grid>
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
                .map(item => <ItemExpansion key={item._id} {...item} />)}
    </React.Fragment>
);

const mapStateToProps = state => {
    return {
        items: state.items
    };
};

export default connect(mapStateToProps)(ItemList);
