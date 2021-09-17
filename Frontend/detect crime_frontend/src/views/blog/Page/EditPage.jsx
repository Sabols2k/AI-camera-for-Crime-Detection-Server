import React from 'react';
import {
    Row, Col, Label, Input,
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

var IMGDIR = process.env.REACT_APP_IMGDIR;

class EditPage extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      startDate2: moment(),
      editorState: EditorState.createEmpty(),
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
                            <h1 className="title">Edit Page</h1>
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
                                                        <label htmlFor="inputname4">Page title</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" defaultValue="Web development tutorial for beginners" />
                                                    </div>

                                                      <div className="form-group col-md-12">
                                                          <label className="form-label" htmlFor="field-1">Page Editor</label>
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
                                                      <Label htmlFor="exampleSelect">Page Category</Label>
                                                      <Input type="select" name="select" id="exampleSelect" multiple defaultValue={['web']}>
                                                        <option>Select</option>
                                                        <option value="web">Web design</option>
                                                        <option>Logo design</option>
                                                        <option>Branding</option>
                                                        <option>Software consulting</option>
                                                      </Input>
                                                    </div>
                            
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Page Tags</Label>
                                                      <Input type="select" name="select" id="exampleSelect" multiple  defaultValue={['design']}>
                                                        <option>Select</option>
                                                        <option>Technology</option>
                                                        <option value="design">Design</option>
                                                        <option>Logo</option>
                                                        <option>Brand</option>
                                                      </Input>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Status</Label>
                                                      <Input type="select" name="select" id="exampleSelect" defaultValue="publish">
                                                        <option>Select</option>
                                                        <option>New</option>
                                                        <option>Draft</option>
                                                        <option value="publish">Published</option>
                                                      </Input>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleText">Page Excerpt</Label>
                                                      <Input type="textarea" name="text" id="exampleText" defaultValue="The field is considered a subset of visual communication and communication design, but sometimes the term graphic design is used interchangeably with these due to overlapping skills involved. Graphic designers use various methods to create and combine words, symbols, and images to create a visual representation of ideas and messages. "/>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleFile">Featured Image</Label>
                                                      <div className="profileimg-input"><img alt="" src={IMGDIR+"/images/page/pages/page-1.jpg"} className="img-fluid" style={{"width": "120px"}}/></div>
                                                      <Input type="file" name="file" id="exampleFile" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname51">Author</label>
                                                        <input type="text" className="form-control" id="inputname51" placeholder="" defaultValue="Mr. Dean Kane" />
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

export default EditPage;
