import React from 'react';
import {
    Row, Col, Label, Input, textarea,
} from 'reactstrap';

//import InputMask from 'react-input-mask';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { EditorState, convertToRaw,  } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
//import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//import { convertFromRaw } from 'draft-js';

//const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

class AddBlog extends React.Component{
    constructor (props) {
    super(props)
    //const contentState = convertFromRaw(content);
    this.state = {
      startDate: moment(),
      startDate2: moment(),
      editorState: EditorState.createEmpty(),
      //contentState
    };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.onContentStateChange = this.onContentStateChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

      onEditorStateChange(content) {
        this.setState({
          editorState: content
        });
      }

      onContentStateChange(content) {
        this.setState({
         // contentState: content
        });
      }


  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleChange2(date) {
    this.setState({
      startDate2: date
    });
  }

    render(){

        const { editorState } = this.state;
       // const { contentState } = this.state;

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Add Blog</h1>
                        </div>
                    </div>


                            


                    <div className="row margin-0">
                        <div className="col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Basic Info</h2>
                                    
                                </header>
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">

                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4">Blog title</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" />
                                                    </div>


                                                      <div className="form-group col-md-12">
                                                          <label className="form-label" htmlFor="field-1">Blog Editor</label>
                                                          <div>
                                                              <Editor
                                                                editorState={editorState}
                                                                wrapperClassName="demo-wrapper"
                                                                editorClassName="demo-editor"
                                                                onEditorStateChange={this.onEditorStateChange}
                                                              />

                                                            </div>
                                                      </div>

                                                      <div className="form-group col-md-12">
                                                          <Label htmlFor="exampleText">HTML Format</Label>
                                                          <textarea className="form-control" 
                                                            disabled
                                                            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                                                          />
                                                       </div>
                                        

                                                    <div className="form-group col-md-12">
                                                        <label>Date Created</label>
                                                        <div className="controls">
                                                            <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                                                        </div>
                                                   </div>

                                                    <div className="form-group col-md-12">
                                                        <label>Date Last Edited</label>
                                                        <div className="controls">
                                                            <DatePicker selected={this.state.startDate2} onChange={this.handleChange2} />
                                                        </div>
                                                   </div>
                                                                                             
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Blog Category</Label>
                                                      <Input type="select" name="select" id="exampleSelect" multiple>
                                                        <option>Select</option>
                                                        <option>Web design</option>
                                                        <option>Logo design</option>
                                                        <option>Branding</option>
                                                        <option>Software consulting</option>
                                                      </Input>
                                                    </div>
                            
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Blog Tags</Label>
                                                      <Input type="select" name="select" id="exampleSelect" multiple>
                                                        <option>Select</option>
                                                        <option>Technology</option>
                                                        <option>Design</option>
                                                        <option>Logo</option>
                                                        <option>Brand</option>
                                                      </Input>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Status</Label>
                                                      <Input type="select" name="select" id="exampleSelect">
                                                        <option>Select</option>
                                                        <option>New</option>
                                                        <option>Draft</option>
                                                        <option>Published</option>
                                                      </Input>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleText">Blog Excerpt</Label>
                                                      <Input type="textarea" name="text" id="exampleText" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleFile">Featured Image</Label>
                                                      <Input type="file" name="file" id="exampleFile" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname51">Author</label>
                                                        <input type="text" className="form-control" id="inputname51" placeholder="" />
                                                    </div>

                                                </div>
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </section></div>


                       


                    </div>






                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default AddBlog;
