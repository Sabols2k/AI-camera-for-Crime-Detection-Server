import React from 'react';
import {
    Row, Col, Label, Input,
} from 'reactstrap';

//import InputMask from 'react-input-mask';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

var IMGDIR = process.env.REACT_APP_IMGDIR;

class EditProduct extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
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
                            <h1 className="title">Edit Product</h1>
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
                                                        <label htmlFor="inputname4">Product SKU</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" defaultValue="234-5455" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname74">Product Name</label>
                                                        <input type="text" className="form-control" id="inputname74" placeholder="" defaultValue="Sports watch for men" />
                                                    </div>


                                                    <div className="form-group col-md-12">
                                                        <label>Date of Creation</label>
                                                        <div className="controls">
                                                            <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                                                        </div>
                                                   </div>


                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Status</Label>
                                                      <Input type="select" name="select" id="exampleSelect" defaultValue="instock">
                                                        <option>Select</option>
                                                        <option value="instock">In stock</option>
                                                        <option value="outstock">Out of stock</option>
                                                      </Input>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleFile">Product Image</Label>
                                                      <div className="profileimg-input"><img alt="" src={IMGDIR+"/images/ecommerce/products/product-1.jpg"} className="img-fluid" style={{"width": "120px"}}/></div>
                                                      <Input type="file" name="file" id="exampleFile" />
                                                    </div>

                          

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname51">Quantity</label>
                                                        <input type="text" className="form-control" id="inputname51" placeholder="" defaultValue="43" />
                                                    </div>


                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname411">Price</label>
                                                        <input type="text" className="form-control" id="inputname411" placeholder="" defaultValue="$200.00" />
                                                    </div>


                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4121">Tax</label>
                                                        <input type="text" className="form-control" id="inputname4121" placeholder="" defaultValue="$20.00" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4131">Discount</label>
                                                        <input type="text" className="form-control" id="inputname4131" placeholder="" defaultValue="$10.00" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4151">Vendor</label>
                                                        <input type="text" className="form-control" id="inputname4151" placeholder="" defaultValue="TopSports" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleText">Brief</Label>
                                                      <Input type="textarea" name="text" id="exampleText" defaultValue="A very stylish sports watch for men." />
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

export default EditProduct;
