import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Typography, Toolbar } from '@material-ui/core';


export const Nav = () => {
    return (
        <AppBar position="static" xs={10}>
            <Toolbar>
                <Typography align="left">BrewDay</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Nav;