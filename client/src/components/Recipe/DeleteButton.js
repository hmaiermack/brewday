import React, {useContext} from 'react'
import {IconButton, makeStyles} from '@material-ui/core'
import RecipeContext from '../../context/RecipeContext'
import DeleteIcon from '@material-ui/icons/Delete'

const DeleteButton = (props) => {
    const { deleteItem } = useContext(RecipeContext)
    
    function handleClick () {
        deleteItem(props.target, props.index)
    }


    return (
        <IconButton aria-label="delete" onClick={handleClick}>
            <DeleteIcon />
        </IconButton>
    )
}

export default DeleteButton
