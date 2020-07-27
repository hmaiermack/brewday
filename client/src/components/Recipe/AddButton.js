import React, { useContext } from 'react'
import { Button } from '@material-ui/core';
import RecipeContext from '../../context/RecipeContext';

export const EditButton = (props) => {

    const {addItem} = useContext(RecipeContext)
    
    function clickPopup () {
        const note = prompt('Write your note here!')

        if(note){
            addItem('notes', note)
        }
    }

    return (
        <Button variant="contained" color="primary" onClick={clickPopup}>
            {props.children}
        </Button>
    )
}

export default EditButton;