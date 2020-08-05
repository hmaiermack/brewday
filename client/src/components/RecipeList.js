import React, {useEffect, useContext, useState} from 'react';
import { Card, CardContent, CardActions, Button, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import { Link, useHistory } from 'react-router-dom'
import RecipeContext from '../context/RecipeContext';



export const RecipeList = () => {
    let history = useHistory();
    const { items, initialFetch, loading } = useContext(RecipeContext);

    const useStyles = makeStyles({
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
      
    useEffect(() => {
        initialFetch(history)
    }, [])


    return (
        <Grid container spacing={2}>
            {/*create cards from fetch call */}
            {!loading &&
            items.map(({_id, name, description}, idx) => (
                <Grid item xs={12} sm={4} key={_id}>
                    <Card key={idx}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {name}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/recipe/${_id}`}>
                                <Button size="small" color="primary">
                                    View
                                </Button>
                            </Link>
                            <Button size="small" color="secondary">
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default RecipeList;