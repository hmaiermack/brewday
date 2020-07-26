import React from 'react'
import {Grid, List, ListItem, ListSubheader} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

export const IngredientList = (props) => {
    let ingredients = props.ingredients

    const useStyles= makeStyles({
        root: {
            backgroundColor: "#ffff"
        }
    })
    
    const classes = useStyles();

    return (
        <Grid item xs={10} sm={3} >
            <List component="div" aria-labelledby="list-subheader"
                subheader={
                    <ListSubheader component="div" id="list-subheader">
                    Ingredients
                    </ListSubheader>}
            className={classes.root}>
                    {ingredients &&
                    ingredients.map((item, i) => 
                    <ListItem key={i}>{item}</ListItem>
                    )}
            </List>
        </Grid>   
    )
}

export default IngredientList;