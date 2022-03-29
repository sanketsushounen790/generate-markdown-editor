import React, { Component } from 'react'

import { convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToMarkdown from 'draftjs-to-markdown'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import "../styles/editor.css"
import Grid from "@mui/material/Grid"
import Alert from "@mui/material/Alert"

import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined'

const Container = props => <Grid container {...props} />
const Item = props => <Grid item {...props} />

class Main extends Component {
    state = {
        editorState: undefined,
        copied: false,
        copiedMsg: '',
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        })
    }

    clearCopiedMessage = () => {
        this.setState({
            copied: false,
            copiedMsg: '',
        })
    }

    copyToClipboard = () => {
        this.setState({ 
            copied: true, 
            copiedMsg: 'Copied !',
        })

        setTimeout(() => {
            this.setState({
                copied: false,
                copiedMsg: '',
            });
        }, 3000)
    }

    updataEditorMainHeight = () => {
        //editorMain value change whenever the screen resize
        const editorToolbarHeight = document.querySelector(".rdw-editor-toolbar")
        document.querySelector(".rdw-editor-main").style.height = window.innerHeight - editorToolbarHeight.clientHeight  + "px"
    }

    componentDidMount() {
        //initial editorMain first value
        const editorToolbarHeight = document.querySelector(".rdw-editor-toolbar")
        document.querySelector(".rdw-editor-main").style.height = window.innerHeight - editorToolbarHeight.clientHeight  + "px"

        //add resize event
        window.addEventListener('resize', this.updataEditorMainHeight);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updataEditorMainHeight);
    }

    render() {
        const { editorState } = this.state
        const markdownValue = editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))

        return (
            <Container 
                mb={4}
                spacing={3}
                justifyContent="space-around" 
                alignItems="flex-start"
            >
                <Item xs={12} sm={5}>
                    <Item xs={12} mb={4} sx={{ height: '5%' }}>
                        <Container 
                            direction="row"
                            justifyContent="flex-start" 
                            alignItems="center"
                        >                           
                            <span>Edit Here</span>                                                                                
                            <ArrowRightAltIcon />                                                     
                            <KeyboardAltOutlinedIcon />                                                  
                        </Container>
                    </Item>
                    <Item xs={12} sx={{ height: '100vh' }}>
                        <Container 
                            direction="row"
                            justifyContent="center" 
                            alignItems="stretch"
                        >           
                            <Editor
                                editorState={editorState}
                                onEditorStateChange={this.onEditorStateChange}
                            />                           
                        </Container>
                    </Item>
                </Item>
                <Item xs={12} sm={5}>
                    <Item xs={12} mb={4} sx={{ height: '5%' }}>
                        <Container 
                            direction="row"
                            justifyContent="flex-start" 
                            alignItems="center"
                        >
                            <span>Copy Here </span>
                            <ArrowRightAltIcon />
                            <CopyToClipboard text={markdownValue} onCopy={this.copyToClipboard}>
                                <ContentCopyIcon id='copy-icon'/>
                            </CopyToClipboard>

                            {
                                this.state.copied 
                                ? 
                                    <Alert severity="success" sx={{height: '30px', position: "absolute", marginLeft: "130px"}}>{this.state.copiedMsg}</Alert>
                            
                                : null
                            }
                        </Container>
                    </Item>
                    <Item xs={12} sx={{ height: '100vh' }}>
                        <Container 
                            direction="row"
                            justifyContent="center" 
                            alignItems="stretch"
                        >                           
                            <div className="preview">
                                {markdownValue}
                            </div>                        
                        </Container>                      
                    </Item>
                </Item>
            </Container>
        );
    }
}

export default Main