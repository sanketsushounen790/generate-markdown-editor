import React from 'react'

import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

import ukraineFlag from "../images/ukraine_flag.png"
import npmLogo from "../images/npm_logo.png"
import peacePigeonIcon from "../images/peace_pigeon_icon.png"

const Container = props => <Grid container {...props} />
const Item = props => <Grid item {...props} />

const Header = () => {
  return (
    <Container mb={5}>
        <Item xs={12} mb={2}>
            <Container justifyContent="center" alignItems="center">
                <img id="peace_pigeon_icon" src={peacePigeonIcon} alt="peace pigeon icon" />
                <span>Stand with Ukraine</span>
                <img id="ukraine_flag" src={ukraineFlag} alt="ukraine flag"/>
            </Container>
            <Divider />
        </Item>
        <Item xs={12}>
            <Container direction="column" justifyContent="center" alignItems="center">
                <Item xs={12} pl={3} pr={3}>    
                    <h3>Hey ! It's just my weekend fun web-app here. It's help you to write your markdown file more easier.</h3>                             
                    <h3>I'm using these packages bellow to make this web-app.</h3>          
                </Item>
                <Item xs={12}>                
                    <ArrowDownwardIcon />                
                </Item>
            </Container>
        </Item>
        <Item xs={12}>
            <Container mb={2} justifyContent="center" alignItems="center">
                <Item xs={12} sm={4} md={3}>
                    <Container spacing={1} justifyContent="center" alignItems="center">
                        <Item>
                            <img id="npm_logo" src={npmLogo} alt="npm logo" />
                        </Item>
                        <Item>  
                            <a href="https://www.npmjs.com/package/react-draft-wysiwyg" target="_blank">react-draft-wysiwyg</a>
                        </Item>
                    </Container>                   
                </Item>
                <Item xs={12} sm={4} md={3}>
                    <Container spacing={1} justifyContent="center" alignItems="center">
                        <Item>
                            <img id="npm_logo" src={npmLogo} alt="npm logo" />
                        </Item>
                        <Item>
                            <a href="https://www.npmjs.com/package/react-copy-to-clipboard" target="_blank">react-copy-to-clipboard</a>
                        </Item>
                    </Container>        
                </Item>
            </Container>
            <Divider />
        </Item>
    </Container>
  )
}

export default Header