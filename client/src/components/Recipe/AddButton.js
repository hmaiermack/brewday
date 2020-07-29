import React, { useContext } from 'react'
import { Button } from '@material-ui/core';
import RecipeContext from '../../context/RecipeContext';

export const EditButton = (props) => {

    const {addItem} = useContext(RecipeContext)
    const promptText = props.prompt
    
    function clickPopup () {
        const value = prompt(props.prompt)

        if(prompt){
            if(props.target === 'notes'){
            addItem(props.target, {
                [props.keyId]: value,
                date: new Date().toISOString()
            })}

            const split = value.split(/[ ,]+/)
            console.log(split)
            addItem(props.target, split)
        }
    }

    return (
        <Button variant="contained" color="primary" onClick={clickPopup}>
            {props.children}
        </Button>
    )
}

export default EditButton;