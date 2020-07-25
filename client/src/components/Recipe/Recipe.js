import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Container, Paper, Typography } from '@material-ui/core'


 const Recipe = (props) => {
     //hook to use history from react router
     let history = useHistory();
     const [data, setData] = useState({
         description: "test"
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
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Typography variant="h6">{data.name}</Typography>
                    <Typography variant="subtitle2">{data.date}</Typography>
                    <Typography variant="p">{data.description}</Typography>
                </Grid>
                <Grid item xs={2} />
            </Grid>
    )
}

export default Recipe;