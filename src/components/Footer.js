import React from 'react'

import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"

const Container = props => <Grid container {...props} />
const Item = props => <Grid item {...props} />

const Footer = () => {
    return ( 
        <>
            <Divider />
            <Container mt={1} mb={1} justifyContent="center" alignItems="flex-start">
                <span>Made with</span>
                <a href="https://www.npmjs.com/package/react-draft-wysiwyg" target="_blank">&nbsp;react-draft-wysiwyg&nbsp;</a>
                <span>and</span>
                <a href="https://www.npmjs.com/package/react-copy-to-clipboard" target="_blank">&nbsp;react-copy-to-clipboard&nbsp;</a>
            </Container>
        </>
    )
}

export default Footer