import React from 'react';
import {
    Row, Col, FormGroup, Label, textarea,
} from 'reactstrap';

import {
    
} from 'components';


import { EditorState, convertToRaw,  } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
//import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { convertFromRaw } from 'draft-js';

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};


class FormWysiwygEditor extends React.Component{

    constructor (props) {
        super(props)
        const contentState = convertFromRaw(content);
        this.state = {
          editorState: EditorState.createEmpty(),
          contentState
        };
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
        this.onContentStateChange = this.onContentStateChange.bind(this);
      }

      onEditorStateChange(content) {
        this.setState({
          editorState: content
        });
      }

      onContentStateChange(content) {
        this.setState({
          contentState: content
        });
      }


    render(){
        
        const { editorState } = this.state;
        const { contentState } = this.state;

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Wysiwyg Editor</h1>
                        </div>
                    </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Wysiwyg Editor</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
             
                            
                            
                                      <div className="form-group">
                                        <label className="form-label" htmlFor="field-1">Controlled editor component with conversion of content from and to HTML</label>
                                          <div>
                                              <Editor
                                                editorState={editorState}
                                                wrapperClassName="demo-wrapper"
                                                editorClassName="demo-editor"
                                                onEditorStateChange={this.onEditorStateChange}
                                              />

                                            </div>
                                          </div>

                                            <FormGroup>
                                              <Label htmlFor="exampleText">HTML Format</Label>
                                              <textarea className="form-control" 
                                                disabled
                                                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                                              />
                                            </FormGroup>
                                            <br/>
                            
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="field-1">Uncontrolled editor component with conversion of content from and to JSON (RawDraftContentState)</label>
                                            <div>
                                              <Editor
                                                wrapperClassName="demo-wrapper"
                                                editorClassName="demo-editor"
                                                onContentStateChange={this.onContentStateChange}
                                              />
                                            </div>
                                          </div>

                                            <FormGroup>
                                              <Label htmlFor="exampleText">Json Format</Label>
                                              <textarea className="form-control" 
                                                disabled
                                                value={JSON.stringify(contentState, null, 4)}
                                              />
                                            </FormGroup>
                                            <br/>

                                
                                  </div>
                              </div>
                            </div>
                        </section>
                        </div>


                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default FormWysiwygEditor;
