import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';


export const Nav = () => {
    return (
        <AppBar position="static" xs={10}>
            <Typography align="left">BrewDay</Typography>
        </AppBar>
    )
}

export default Nav;