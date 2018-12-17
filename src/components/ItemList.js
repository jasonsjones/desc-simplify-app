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
    return (
        <ExpansionPanel elevation={0}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container justify="space-between">
                    <Grid item>
                        <Typography>{`
                            ${props.submittedBy.name.first} ${props.submittedBy.name.last}
                        `}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{`${props.numberOfItems} ${props.name}`}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{new Date(props.createdAt).toDateString()}</Typography>
                    </Grid>
                </Grid>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{ alignItems: 'center' }}>
                <Typography variant="body2" style={{ marginRight: 15 }}>
                    This will contain details about the request...
                </Typography>
                <Typography variant="body2" style={{ marginRight: 15 }}>
                    Urgency:
                </Typography>
                <Typography variant="body1" style={{ marginRight: 15 }}>
                    {props.urgency}
                </Typography>
                {props.notes.length > 0 && (
                    <Typography variant="body2" style={{ marginRight: 15 }}>
                        NOTES:
                    </Typography>
                )}
                {props.notes &&
                    props.notes.map(note => (
                        <Typography key={note._id} variant="body1">
                            {note.body}
                        </Typography>
                    ))}
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
