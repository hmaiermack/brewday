import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'


 const Recipe = (props) => {
     let history = useHistory();
    const [data, setData] = useState({});
    let recipe = {};

    useEffect(() => {
        fetch(`http://localhost:5000/api/items/${props.match.params.id}`)
        .then(res => {
            if(!res.ok) {
               throw new Error('404 not found')
            }
            return res.json()
        })
        .then(json => setData(json))
        .catch(err => {
            console.log(err);
            history.push("/404")
        } )
    }, [])
        


    return (
        <h1>
            <p>hi</p>
        </h1>
    )
}

export default Recipe;