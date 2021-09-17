import React from 'react';
import {
    Row, Col, Form, FormFeedback, Input , Label
} from 'reactstrap';

import {
    
} from 'components';

import { ValidatingFormGroup } from 'reactstrap-validation';

export interface HelloProps {
  initialValid?: boolean;
}

class FormValidation extends React.Component{
    

    render(){

        const { initialValid } = this.props;

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Form Validation</h1>
                        </div>
                    </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Form Validation</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-8 col-md-9 col-10">
             
                            

                                    <Form>
                                        <ValidatingFormGroup trigger="change" valid={initialValid} onStateChange={console.log}>
                                          <Label>Email validation</Label>
                                          <Input className="form-control" required type="email" />
                                          <FormFeedback>
                                          </FormFeedback>
                                        </ValidatingFormGroup>
                                      </Form>


                                
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

export default FormValidation;
