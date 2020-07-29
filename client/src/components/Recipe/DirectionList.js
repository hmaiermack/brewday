import React from 'react'
import {Grid, List, ListItem, ListSubheader, ListItemIcon, ListItemText} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddButton from './AddButton'
import ListDelete from './ListDelete'



export const DirectionList = (props) => {
    let directions = props.directions

    const useStyles= makeStyles({
        root: {
            backgroundColor: "#ffff"
        },

    })
    
    const classes = useStyles();

    return (
        <Grid item xs={10} sm={6}>
            <List component="div" aria-labelledby="list-subheader"
                subheader={
                    <ListSubheader component="div" id="list-subheader">
                    Directions
                    </ListSubheader>}
            className={classes.root}>
                    {directions &&
                    directions.map((item, i) => 
                    <ListItem key={i} alignItems="flex-start">
                        <ListItemIcon>
                            {i + 1}
                        </ListItemIcon>
                        <ListItemText>
                            {item}
                        </ListItemText>
                        <ListDelete target="directions" index={i} prompt={"Edit your direction"} />
                    </ListItem>
                    )}
                    <Grid container justify="center">
                        <AddButton item prompt='Add directions seperated by a new line' target='directions'>Add a direction</AddButton>
                    </Grid>
            </List>
            
        </Grid>   
    )
}

export default DirectionList;