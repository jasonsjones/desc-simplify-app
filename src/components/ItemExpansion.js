import React from 'react';
import {
    Typography,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = () => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    panelDetails: {
        alignItems: 'center'
    },
    spacingRight: {
        marginRight: 15
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ccc'
    }
});

const _ItemSummary = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <Typography>{`
                ${props.submittedBy.name.first} ${props.submittedBy.name.last}
            `}</Typography>
            <Typography>{`${props.numberOfItems} ${props.name}`}</Typography>
            <Typography>{new Date(props.createdAt).toDateString()}</Typography>
        </div>
    );
};

const ItemSummary = withStyles(styles)(_ItemSummary);

const _PanelDetails = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <div className={classes.column}>
                <Typography variant="body2" className={classes.spacingRight}>
                    This will contain details about the request...
                </Typography>
            </div>
            <div className={classes.column}>
                <Typography variant="body2">Urgency: {props.urgency}</Typography>
            </div>

            {props.notes.length > 0 && (
                <div className={classes.column}>
                    <Typography variant="body2">NOTES:</Typography>
                    {props.notes &&
                        props.notes.map(note => (
                            <Typography key={note._id} variant="body1">
                                {note.body}
                            </Typography>
                        ))}
                </div>
            )}
        </div>
    );
};

const PanelDetails = withStyles(styles)(_PanelDetails);

const ItemExpansion = props => {
    const { classes } = props;
    return (
        <ExpansionPanel elevation={0}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <ItemSummary {...props} />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.panelDetails}>
                <PanelDetails {...props} />
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default withStyles(styles)(ItemExpansion);
