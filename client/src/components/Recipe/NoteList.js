import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddButton from './AddButton'


export const NoteList = (props) => {
    let notes = props.notes


    const useStyles= makeStyles({
        root: {
            backgroundColor: "#ffff",
            margin: 5
        }
    })

    const classes = useStyles();



    return (
        <Grid container direction="column" alignItems="center" spacing={1}>
            <Grid item xs={12}>
            <Typography variant="h6" justify="center" color="textPrimary">Notes</Typography>
            </Grid>
            {notes &&
                notes.map((note, idx) => 
                    <Grid item xs={10} key={idx} className={classes.root}>
                        <Typography variant="subtitle2" color="textSecondary" >{note.date}</Typography>
                        <Typography variant="body1">{note.note}</Typography>
                    </Grid>
                )
            }
            <AddButton prompt='add a note' target='notes' keyId="note">Add a note</AddButton>
        </Grid>
    )
}


export default NoteList;