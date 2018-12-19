import React from 'react';
import {
    Typography,
    Grid,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ItemSummaryHeader = props => (
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
);

const styles = () => ({
    panelDetails: {
        alignItems: 'center'
    },
    spacingRight: {
        marginRight: 15
    }
});

const ItemExpansion = props => {
    const { classes } = props;
    return (
        <ExpansionPanel elevation={0}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <ItemSummaryHeader {...props} />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.panelDetails}>
                <Typography variant="body2" className={classes.spacingRight}>
                    This will contain details about the request...
                </Typography>
                <Typography variant="body2" className={classes.spacingRight}>
                    Urgency:
                </Typography>
                <Typography variant="body1" className={classes.spacingRight}>
                    {props.urgency}
                </Typography>
                {props.notes.length > 0 && (
                    <Typography variant="body2" className={classes.spacingRight}>
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

export default withStyles(styles)(ItemExpansion);
