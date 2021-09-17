import React from 'react';
import {
    Row, Col, Label, Input,
} from 'reactstrap';

//import InputMask from 'react-input-mask';

//import 'react-datepicker/dist/react-datepicker.css';
//import DatePicker from 'react-datepicker';
//import moment from 'moment';

class EditLibrary extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
    };
  }


    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Add Library</h1>
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
                                                        <label htmlFor="inputname4">Title</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" defaultValue="Machine Learning" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4">Subject</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" defaultValue="AI" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname411">Price</label>
                                                        <input type="text" className="form-control" id="inputname411" placeholder="" defaultValue="$123.00" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4211">Author</label>
                                                        <input type="text" className="form-control" id="inputname4211" placeholder="" defaultValue="Mr. Jack Sean" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname51">Year</label>
                                                        <input type="text" className="form-control" id="inputname51" placeholder="" defaultValue="2018" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Status</Label>
                                                      <Input type="select" name="select" id="exampleSelect" defaultValue="instock">
                                                        <option>Select</option>
                                                        <option value="instock">In stock</option>
                                                        <option>Out of stock</option>
                                                      </Input>
                                                    </div>


                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect3">Department</Label>
                                                      <Input type="select" name="select" id="exampleSelect3" defaultValue="MBA">
                                                        <option>Select</option>
                                                            <option value="Computer Engineering">Computer Engineering</option>
                                                            <option value="Architecture">Architecture</option>
                                                            <option value="MBA">MBA</option>
                                                            <option value="Automobile Engg.">Automobile Engg.</option>
                                                            <option value="Civil Engg.">Civil Engg.</option>
                                                            <option value="Mechanical Engg.">Mechanical Engg.</option>
                                                            <option value="BBA">BBA</option>
                                                      </Input>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4121">For Students of Year</label>
                                                        <input type="text" className="form-control" id="inputname4121" placeholder="" defaultValue="Last Year" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleText">Brief</Label>
                                                      <Input type="textarea" name="text" id="exampleText" defaultValue="This book is about AI and machine learning technology." />
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

export default EditLibrary;
