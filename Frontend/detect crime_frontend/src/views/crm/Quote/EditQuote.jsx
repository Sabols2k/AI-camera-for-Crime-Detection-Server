import React from 'react';
import {
    Row, Col, Label, Input,
} from 'reactstrap';

//import InputMask from 'react-input-mask';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class EditQuote extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      startDate1: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleChange1(date) {
    this.setState({
      startDate1: date
    });
  }

    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Add Quote</h1>
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
                                                        <label htmlFor="inputname4">Quote Title</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" defaultValue="Web Developement" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Category</Label>
                                                      <Input type="select" name="select" id="exampleSelect" defaultValue="webdesign">
                                                        <option>Select</option>
                                                        <option value="webdesign">Web design</option>
                                                        <option>Logo design</option>
                                                        <option>Branding</option>
                                                        <option>Software consulting</option>
                                                      </Input>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname51">Customer</label>
                                                        <input type="text" className="form-control" id="inputname51" placeholder="" defaultValue="Mr. Eric Pant"/>
                                                    </div>


                                                    <div className="form-group col-md-12">
                                                        <label>Date of Quotation</label>
                                                        <div className="controls">
                                                            <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                                                        </div>
                                                   </div>
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Status</Label>
                                                      <Input type="select" name="select" id="exampleSelect" defaultValue="new">
                                                        <option>Select</option>
                                                        <option value="new">New</option>
                                                        <option>Completed</option>
                                                      </Input>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label>Date of Approval</label>
                                                        <div className="controls">
                                                            <DatePicker selected={this.state.startDate1} onChange={this.handleChange1} />
                                                        </div>
                                                   </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname411">Price</label>
                                                        <input type="text" className="form-control" id="inputname411" placeholder="" defaultValue="$300.00"/>
                                                    </div>


                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4121">Tax</label>
                                                        <input type="text" className="form-control" id="inputname4121" placeholder="" defaultValue="$30.00"/>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4131">Discount</label>
                                                        <input type="text" className="form-control" id="inputname4131" placeholder="" defaultValue="$25.00"/>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleText">Brief</Label>
                                                      <Input type="textarea" name="text" id="exampleText" defaultValue="Client asked to create a new website for this business. It was completed as per description and customer satisfaction."/>
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

export default EditQuote;
