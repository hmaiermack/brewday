import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import RecipeContext from '../context/RecipeContext'

const CreateButton = () => {

    const {newItem} = useContext(RecipeContext)

    function popup () {
        const name = prompt('Name of your recipe')

        const item = {
            name: name,
        }

        newItem(item)
    }

    return (
        <Button variant="contained" color="primary" onClick={popup}>
            Create new recipe
        </Button>
    )
}

export default CreateButton
