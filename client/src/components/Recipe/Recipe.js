import React, { useEffect, useState, useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'
import IngredientList from './IngredientList'
import DirectionList from './DirectionList'
import NoteList from './NoteList'
import RecipeContext from '../../context/RecipeContext'


 const Recipe = (props) => {
     //hook to use history from react router
     let history = useHistory();
     const [data, setData] = useState({
     });

     const { recipe } = useContext(RecipeContext)

     console.log(recipe)
    

    useEffect(() => {
        fetch(`http://localhost:5000/api/items/${props.match.params.id}`)
        .then(res => {
            if(!res.ok) {
               throw new Error('404 not found')
            }
            return res.json()
        })
        .then(json => setData({ ...json, 
                                date: json.date.substr(0,10),
                                //sort by newest date first
                                notes: json.notes.sort((a, b) => {
                                    if(Date.parse(a.date) < Date.parse(b.date)){
                                        return 1
                                    }
                                    else if(Date.parse(a.date) > Date.parse(b.date)) {
                                        return -1
                                    }
                                    else { return 0 }
                                })
                            }))
        .catch(err => {
            console.log(err);
            //if response is not ok redirect to /404
            history.push("/404")
        } )

        
    }, [])
        


    return (
            <Grid container  direction="row">
                <Grid container>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Typography variant="h4">{recipe.name}</Typography>
                    <Typography variant="subtitle2" color="textSecondary">{recipe.date}</Typography>
                    <Typography variant="body1" paragraph>{recipe.description}</Typography>
                </Grid>
                <Grid item xs={2} />
                </Grid>
                <Grid container spacing={2} justify="center">
                    <IngredientList ingredients={recipe.ingredients}/>
                    <DirectionList directions={recipe.directions} />
                </Grid>
                    <NoteList notes={recipe.notes}/>
            </Grid>
    )
}

export default Recipe;