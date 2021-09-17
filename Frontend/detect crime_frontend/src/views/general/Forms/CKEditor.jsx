import React from 'react';
import {
     Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import CKEditor from "react-ckeditor-component";

class FormCKEditor extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
          content: 'content',
        };
        this.updateContent = this.updateContent.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.afterPaste = this.afterPaste.bind(this);
      }

      updateContent(newContent) {
        this.setState({
          content: newContent
        });
      }


    onChange(evt){
      //console.log("onChange fired with event info: ", evt);
      var newContent = evt.editor.getData();
      this.setState({
        content: newContent
      })
    }
    
    onBlur(evt){
      //console.log("onBlur event called with event info: ", evt);
    }
    
    afterPaste(evt){
      //console.log("afterPaste event called with event info: ", evt);
    }
 
    render(){
        

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">CKEditor</h1>
                        </div>
                    </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">CKEditor</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                       

                                    <CKEditor 
                                      activeClass="p10" 
                                      content={this.state.content} 
                                      events={{
                                        "blur": this.onBlur,
                                        "afterPaste": this.afterPaste,
                                        "change": this.onChange
                                      }}
                                     />
                          
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

export default FormCKEditor;
