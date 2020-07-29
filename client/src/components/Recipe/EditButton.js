import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import RecipeContext from '../../context/RecipeContext'

const EditButton = (props) => {
    const { editItem, data } = useContext(RecipeContext);

    function clickPopup () {
        const value = prompt(props.prompt)

        if(prompt){
            if(props.target === 'notes'){
            const update = data.notes
            update[props.index].note = value
            editItem(props.target, update)}
            
            const update = data[props.target]
            update[props.index] = value
            editItem(props.target, update)
        }
    }

    return (
        <Button onClick={clickPopup}>
            Edit
        </Button>
    )
}

export default EditButton
