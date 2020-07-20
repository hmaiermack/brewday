import React, { useEffect, useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'

export const Recipe = (props) => {
    const [data, setData] = useState({});
    let recipe = {};
    const [goodId, setGoodId] = useState();
    const _isMounted = useRef(true);

    useEffect(() => {
        if(_isMounted.current === true){
        fetch(`http://localhost:5000/api/items/${props.match.params.id}`)
        .then(res => {
            if(!res.ok) {
               setGoodId(false)
            }
            return res.json()
        })
        .then(json => setData(json))
        .catch(err => (
            console.log(err)
        ))}

        return () => { // ComponentWillUnmount in Class Component
        _isMounted.current = false;
    }
 
    }, [props.match.params.id])

    if(goodId === false) {
        return (
            <Redirect to={{ pathname: "/404" }} />
        )
    }


    return (
        <h1>
            {data.date}
        </h1>
    )
}

export default Recipe;