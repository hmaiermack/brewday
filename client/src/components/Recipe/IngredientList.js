import React from 'react'
import {Grid, List, ListItem, ListSubheader, ListItemText} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddButton from './AddButton'
import ListDelete from './ListDelete'


export const IngredientList = (props) => {
    let ingredients = props.ingredients

    const useStyles= makeStyles({
        root: {
            backgroundColor: "#ffff"
        }
    })
    
    const classes = useStyles();

    return (
        <Grid item xs={10} sm={4} >
            <List component="div" aria-labelledby="list-subheader"
                subheader={
                    <ListSubheader component="div" id="list-subheader">
                    Ingredients
                    </ListSubheader>}
            className={classes.root}>
                    {ingredients &&
                    ingredients.map((item, i) => 
                    <ListItem key={i} alignItems="flex-start">
                        <ListItemText>
                            {item}
                        </ListItemText>                        
                        <ListDelete target="ingredients" index={i} prompt={"Edit your ingredient"} />
                    </ListItem>
                    )}
                <Grid container justify="center">
                        <AddButton item prompt='Add one ingredient per line' target='ingredients'>Add an ingredient</AddButton>
                </Grid>
            </List>
        </Grid>   
    )
}

export default IngredientList;