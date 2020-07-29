import React, {useContext} from 'react'
import {ListItemSecondaryAction, IconButton, makeStyles} from '@material-ui/core'
import RecipeContext from '../../context/RecipeContext'
import DeleteIcon from '@material-ui/icons/Delete'
import EditButton from './EditButton'

const ListDelete = (props) => {
    const useStyles = makeStyles({
        root: {
            position: 'static',
            transform: 'none'
        }
    })
    const { deleteItem } = useContext(RecipeContext)
    
    function handleClick () {
        deleteItem(props.target, props.index)
    }

    const classes = useStyles();

    return (
        <ListItemSecondaryAction className={classes.root} >
            <EditButton target={props.target} index={props.index} prompt={props.prompt} />
            <IconButton aria-label="delete" edge="end" onClick={handleClick}>
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
    )
}

export default ListDelete