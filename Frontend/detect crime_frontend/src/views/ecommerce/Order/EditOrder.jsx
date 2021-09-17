import React from 'react';
import {
    Row, Col, Label, Input,
} from 'reactstrap';

//import InputMask from 'react-input-mask';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class EditOrder extends React.Component{
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
                            <h1 className="title">Edit Order</h1>
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
                                                        <label htmlFor="inputname4">Order Number</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" defaultValue="232-6464"/>
                                                    </div>


                                                    <div className="form-group col-md-12">
                                                        <label>Date of Order</label>
                                                        <div className="controls">
                                                            <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                                                        </div>
                                                   </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Order Status</Label>
                                                      <Input type="select" name="select" id="exampleSelect" defaultValue="new">
                                                        <option>Select</option>
                                                        <option value="new">New</option>
                                                        <option>Shipped</option>
                                                        <option>Delivered</option>
                                                        <option>Cancelled</option>
                                                      </Input>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname521">Customer</label>
                                                        <input type="text" className="form-control" id="inputname521" placeholder="" defaultValue="Mr. Harry" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname51">Vendor</label>
                                                        <input type="text" className="form-control" id="inputname51" placeholder="" defaultValue="Mr. Sam" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect1">Payment type</Label>
                                                      <Input type="select" name="select" id="exampleSelect1" defaultValue="card" >
                                                        <option>Select</option>
                                                        <option value="card">Card</option>
                                                        <option>Cash</option>
                                                        <option>Cheque</option>
                                                        <option>Escrow</option>
                                                      </Input>
                                                    </div>





                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname411">Price</label>
                                                        <input type="text" className="form-control" id="inputname411" placeholder="" defaultValue="$455.00" />
                                                    </div>


                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4121">Tax</label>
                                                        <input type="text" className="form-control" id="inputname4121" placeholder="" defaultValue="$34.00" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4131">Discount</label>
                                                        <input type="text" className="form-control" id="inputname4131" placeholder="" defaultValue="$23.00" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4151">Amount Due</label>
                                                        <input type="text" className="form-control" id="inputname4151" placeholder="" defaultValue="$0.00" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleText">Brief</Label>
                                                      <Input type="textarea" name="text" id="exampleText" defaultValue="Project posted regarding web design for a top service provider."/>
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

export default EditOrder;
