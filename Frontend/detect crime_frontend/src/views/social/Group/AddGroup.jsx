import React from 'react';
import {
    Row, Col, Label, Input,
} from 'reactstrap';

//import InputMask from 'react-input-mask';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class AddGroup extends React.Component{
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
                            <h1 className="title">Add Group</h1>
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
                                                        <label htmlFor="inputname4">Group Name</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label>Group created on</label>
                                                        <div className="controls">
                                                            <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                                                        </div>
                                                   </div>
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Group Status</Label>
                                                      <Input type="select" name="select" id="exampleSelect">
                                                        <option>Select</option>
                                                        <option>Active</option>
                                                        <option>Inactive</option>
                                                      </Input>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleText">Brief</Label>
                                                      <Input type="textarea" name="text" id="exampleText" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleFile">Group Image</Label>
                                                      <Input type="file" name="file" id="exampleFile" />
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
                                    <h2 className="title float-left">Group Social Media Info</h2>
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

export default AddGroup;
