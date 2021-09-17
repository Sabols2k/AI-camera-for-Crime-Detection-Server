import React from 'react';
import {
    Row, Col, Label, Input,
} from 'reactstrap';

import InputMask from 'react-input-mask';

import 'react-datepicker/dist/react-datepicker.css';
//import DatePicker from 'react-datepicker';
//import moment from 'moment';


import DateTimePicker from 'react-datetime-picker';


class AddEvent extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
    };
    this.handleChange1 = this.handleChange1.bind(this);
  }

  handleChange1(date) {    
    this.setState({ date: date  });  
  }

    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Add Event</h1>
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
                                                        <label htmlFor="inputname4">Event Title</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder=""/>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Event Type</Label>
                                                      <Input type="select" name="select" id="exampleSelect">
                                                        <option value="select">Select</option>
                                                        <option value="open">Open for all</option>
                                                        <option value="invite">Invite Only</option>
                                                      </Input>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputEmail4">Email</label>
                                                        <input type="email" className="form-control" id="inputEmail4" placeholder="" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputEmail411">Website</label>
                                                        <input type="email" className="form-control" id="inputEmail411" placeholder="" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                       <Label>Phone (+49 99 999 99)</Label>
                                                       <InputMask id="field-11" className="form-control" mask="+4\9 99 999 99" maskChar="_" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label className="form-label">Event Date and Time</label>
                                                        <div className="controls">
                                                        <DateTimePicker
                                                              onChange={this.handleChange1}
                                                              value={this.state.date}
                                                            />

                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleText">Brief</Label>
                                                      <Input type="textarea" name="text" id="exampleText" />
                                                    </div>

                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputAddress">Address</label>
                                                    <input type="text" className="form-control" id="inputAddress" placeholder=""/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputAddress2">Address 2</label>
                                                    <input type="text" className="form-control" id="inputAddress2" placeholder=""/>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputCity">City</label>
                                                        <input type="text" className="form-control" id="inputCity"/>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="inputState">State</label>
                                                        <select id="inputState" className="form-control">
                                                            <option>Select</option>
                                                            <option>Maharashtra</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-md-2">
                                                        <label htmlFor="inputZip">Zip</label>
                                                        <input type="text" className="form-control" id="inputZip"/>
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

export default AddEvent;
