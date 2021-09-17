import React from 'react';
import {
    Row, Col, Label, Input,
} from 'reactstrap';

import InputMask from 'react-input-mask';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class AddDoctor extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
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
                            <h1 className="title">Add Doctor</h1>
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
                                                        <label htmlFor="inputname4">Name</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label>Date of Birth</label>
                                                        <div className="controls">
                                                            <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                                                        </div>
                                                   </div>
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Gender</Label>
                                                      <Input type="select" name="select" id="exampleSelect">
                                                        <option>Select</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                      </Input>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                       <Label htmlFor="field-11">Phone (+49 99 999 99)</Label>
                                                       <InputMask id="field-11" className="form-control" mask="+4\9 99 999 99" maskChar="_" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleText">Brief</Label>
                                                      <Input type="textarea" name="text" id="exampleText" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleFile">Profile Image</Label>
                                                      <Input type="file" name="file" id="exampleFile" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="input4">Website</label>
                                                        <input type="text" className="form-control" id="input4" placeholder="" />
                                                    </div>

                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputAddress">Address</label>
                                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputAddress2">Address 2</label>
                                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
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
                                                            <option>...</option>
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


                        <div className="col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Account Info</h2>
                                </header>
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">

                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputEmail4">Email</label>
                                                        <input type="email" className="form-control" id="inputEmail4" placeholder="" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputPassword4">Password</label>
                                                        <input type="password" className="form-control" id="inputPassword4" placeholder=""/>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputPassword41">Confirm Password</label>
                                                        <input type="password" className="form-control" id="inputPassword41" placeholder=""/>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </section></div>





                        <div className="col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Social Media Info</h2>
                                </header>
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">

                                            <form>
                                                <div className="form-row">
                                                    
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="input24">Facebook URL</label>
                                                        <input type="text" className="form-control" id="input24" placeholder="" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="input241">Twitter URL</label>
                                                        <input type="text" className="form-control" id="input241" placeholder="" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="input242">Linkedin URL</label>
                                                        <input type="text" className="form-control" id="input242" placeholder="" />
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

export default AddDoctor;
