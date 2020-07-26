import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'
import IngredientList from './IngredientList'
import DirectionList from './DirectionList'
import NoteList from './NoteList'


 const Recipe = (props) => {
     //hook to use history from react router
     let history = useHistory();
     const [data, setData] = useState({
     });
    

    useEffect(() => {
        fetch(`http://localhost:5000/api/items/${props.match.params.id}`)
        .then(res => {
            if(!res.ok) {
               throw new Error('404 not found')
            }
            return res.json()
        })
        .then(json => setData({...json, date: json.date.substr(0,10)}))
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
                    <Typography variant="h4">{data.name}</Typography>
                    <Typography variant="subtitle2" color="textSecondary">{data.date}</Typography>
                    <Typography variant="body1" paragraph>{data.description}</Typography>
                </Grid>
                <Grid item xs={2} />
                </Grid>
                <Grid container spacing={2} justify="center">
                    <IngredientList ingredients={data.ingredients}/>
                    <DirectionList directions={data.directions} />
                </Grid>
                    <NoteList notes={data.notes}/>
            </Grid>
    )
}

export default Recipe;