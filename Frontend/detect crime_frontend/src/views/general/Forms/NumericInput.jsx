import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import NumericInput from 'react-numeric-input';

class FormNumericInput extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
          content: 'content',
        };
        this.myFormat = this.myFormat.bind(this);
      }

      updateContent(newContent) {
        this.setState({
          content: newContent
        });
      }

      myFormat(num) {
          return num + '$';
      }


    render(){
        

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Numeric Input</h1>
                        </div>
                    </div>

      
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Numeric Input</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">
             
                                    
                            
                                    <div className="form-group">
                                        <label className="form-label">Basic</label>
                                      <NumericInput className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">No style</label>
                                        <NumericInput className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Typical</label>
                                        <NumericInput className="form-control" min={0} max={100} value={50}/>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Floats</label>
                                        <NumericInput className="form-control" step={0.1} precision={2} value={50.3}/>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Formats</label>
                                        <NumericInput className="form-control" precision={2} value={50.3} step={0.1} format={this.myFormat}/>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Disabled</label>
                                        <NumericInput className="form-control" disabled value={23.45}/>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Read only</label>
                                        <NumericInput className="form-control" readOnly value={23.45}/>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Mobile Version</label>
                                        <NumericInput className="form-control" mobile />
                                    </div>

                                
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

export default FormNumericInput;
