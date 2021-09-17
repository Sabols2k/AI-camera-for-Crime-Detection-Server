import React from 'react';
import {
    Row, Col, Label, Input,
} from 'reactstrap';

import InputMask from 'react-input-mask';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class AddTicket extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      startDate1: moment(),
      startDate2: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
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
  handleChange2(date) {
    this.setState({
      startDate2: date
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
                            <h1 className="title">Add Ticket</h1>
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
                                                        <label htmlFor="inputname4">Ticket Number</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname423">Ticket Owner</label>
                                                        <input type="text" className="form-control" id="inputname423" placeholder="" />
                                                    </div>


                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname425">Owner Email</label>
                                                        <input type="text" className="form-control" id="inputname425" placeholder="" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                       <Label htmlFor="field-11">Phone (+49 99 999 99)</Label>
                                                       <InputMask id="field-11" className="form-control" mask="+4\9 99 999 99" maskChar="_" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname42">Ticket Subject</label>
                                                        <input type="text" className="form-control" id="inputname42" placeholder="" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label>Date of Creation</label>
                                                        <div className="controls">
                                                            <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                                                        </div>
                                                   </div>
                               
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Type</Label>
                                                      <Input type="select" name="select" id="exampleSelect">
                                                        <option>Select</option>
                                                        <option>Web design</option>
                                                        <option>Logo design</option>
                                                        <option>Branding</option>
                                                        <option>Software consulting</option>
                                                      </Input>
                                                    </div>


                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleText">Description</Label>
                                                      <Input type="textarea" name="text" id="exampleText" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleFile">Attachments</Label>
                                                      <Input type="file" name="file" id="exampleFile" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Ticket Status</Label>
                                                      <Input type="select" name="select" id="exampleSelect">
                                                        <option>Select</option>
                                                        <option>Resolved</option>
                                                        <option>Unresolved</option>
                                                      </Input>
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

export default AddTicket;
