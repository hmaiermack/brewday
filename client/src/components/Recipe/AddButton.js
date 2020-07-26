import React from 'react'
import { Button } from '@material-ui/core';

export const EditButton = (props) => {
    
    return (
        <Button variant="contained" color="primary">
            {props.children}
        </Button>
    )
}

export default EditButton;