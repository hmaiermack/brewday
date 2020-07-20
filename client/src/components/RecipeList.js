import React, {useState} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, Card, CardContent, CardActions, Button, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'

const dummyData = [
    {
        id: "5f1479d365026e26589a51b7",
        description: "this is a description",
        recipe: [
            {
                "ingredient": "Hops",
                "amount": "2lb"
            }
        ],
        name: "Blonde",
        gravity: [
            {
                id: "5f1479d365026e26589a51b8",
                reading: 1.3,
                date: "2020-07-19T16:50:27.377Z"
            }
        ],
        notes: [
            {
                id: "5f1479d365026e26589a51b9",
                note: "this is a note",
                date: "2020-07-19T16:50:27.378Z"
            }
        ],
        date: "2020-07-19T16:50:27.378Z",
    },
    {
        id: uuidv4(),
        description: "this is a description",
        recipe: [
            {
                "ingredient": "Hops",
                "amount": "2lb"
            }
        ],
        name: "Pilsner",
        gravity: [
            {
                id: "5f1479d365026e26589a51b8",
                reading: 1.3,
                date: "2020-07-19T16:50:27.377Z"
            }
        ],
        notes: [
            {
                id: "5f1479d365026e26589a51b9",
                note: "this is a note",
                date: "2020-07-19T16:50:27.378Z"
            }
        ],
        date: "2020-07-17T16:50:27.378Z",
    },    
    {        
        id: uuidv4(),
        description: "this is a description",
        recipe: [
            {
                "ingredient": "Hops",
                "amount": "2lb"
            }
        ],
        name: "IPA",
        gravity: [
            {
                id: "5f1479d365026e26589a51b8",
                reading: 1.3,
                date: "2020-07-19T16:50:27.377Z"
            }
        ],
        notes: [
            {
                id: "5f1479d365026e26589a51b9",
                note: "this is a note",
                date: "2020-07-19T16:50:27.378Z"
            }
        ],
        date: "2020-07-18T16:50:27.378Z",
    }

]

export const RecipeList = () => {
    const useStyles = makeStyles({
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
      
    const [items, setItems] = useState(dummyData);

    return (
        <Grid container spacing={2}>
            {items.map(({id, name, description}) => (
                <Grid item xs={12} sm={4} key={id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {name}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/recipe/${id}`}>
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