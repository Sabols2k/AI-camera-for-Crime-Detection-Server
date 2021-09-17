import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class FormPremade extends React.Component{
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Premade Forms</h1>
                        </div>
                    </div>


                            


                    <div className="row margin-0">
                        <div className="col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Vertical Form</h2>
                                    
                                </header>
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">

                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail4">Email</label>
                                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputPassword4">Password</label>
                                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
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
                                                            <option>Choose...</option>
                                                            <option>...</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-md-2">
                                                        <label htmlFor="inputZip">Zip</label>
                                                        <input type="text" className="form-control" id="inputZip"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                                        <label className="form-check-label" htmlFor="gridCheck">
                                                            Check me out
                                                        </label>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Sign in</button>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </section></div>



                        <div className="col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Horizontal Form</h2>
                                    
                                </header>
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">
                                            <form>
                                                <div className="form-group row">
                                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                                    <div className="col-sm-10">
                                                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                                    <div className="col-sm-10">
                                                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                                                    </div>
                                                </div>
                                                <fieldset className="form-group">
                                                    <div className="row">
                                                        <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                                        <div className="col-sm-10">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                                                                <label className="form-check-label" htmlFor="gridRadios1">
                                                                    First radio
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                                                                <label className="form-check-label" htmlFor="gridRadios2">
                                                                    Second radio
                                                                </label>
                                                            </div>
                                                            <div className="form-check disabled">
                                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" defaultValue="option3" disabled />
                                                                <label className="form-check-label" htmlFor="gridRadios3">
                                                                    Third disabled radio
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <div className="form-group row">
                                                    <div className="col-sm-2">Checkbox</div>
                                                    <div className="col-sm-10">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                                            <label className="form-check-label" htmlFor="gridCheck1">
                                                                Example checkbox
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-sm-10">
                                                        <button type="submit" className="btn btn-primary">Sign in</button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </section></div>




                        <div className="col-xl-12 col-lg-12 col-12 col-md-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Inline Form</h2>
                                    
                                </header>
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">


                                            <form className="form-inline">
                                                <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                                                <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" />

                                                <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
                                                <div className="input-group mb-2 mr-sm-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text">@</div>
                                                    </div>
                                                    <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
                                                </div>

                                                <div className="form-check mb-2 mr-sm-2">
                                                    <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                                                    <label className="form-check-label" htmlFor="inlineFormCheck">
                                                        Remember me
                                                    </label>
                                                </div>

                                                <button type="submit" className="btn btn-primary mb-2">Submit</button>
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

export default FormPremade;
