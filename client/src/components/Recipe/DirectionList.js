import React from 'react'
import {Grid, List, ListItem, ListSubheader, ListItemIcon, ListItemText} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';



export const DirectionList = (props) => {
    let directions = props.directions

    const useStyles= makeStyles({
        root: {
            backgroundColor: "#ffff"
        }
    })
    
    const classes = useStyles();

    return (
        <Grid item xs={10} sm={7}>
            <List component="div" aria-labelledby="list-subheader"
                subheader={
                    <ListSubheader component="div" id="list-subheader">
                    Directions
                    </ListSubheader>}
            className={classes.root}>
                    {directions &&
                    directions.map((item, i) => 
                    <ListItem key={i}>
                        <ListItemIcon>
                            {i + 1}
                        </ListItemIcon>
                        <ListItemText>
                            {item}
                        </ListItemText>
                    </ListItem>
                    )}
            </List>
        </Grid>   
    )
}

export default DirectionList;