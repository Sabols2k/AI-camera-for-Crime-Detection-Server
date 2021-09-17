import React from 'react';
import {
    Row, Col, Label, Input,
} from 'reactstrap';

import InputMask from 'react-input-mask';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

//import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
//import "./styles.css";

const columns = [
  { key: "id", name: "ID", editable: true },
  { key: "particular", name: "Particulars", editable: true },
  { key: "type", name: "Type", editable: true },
  { key: "rate", name: "Rate", editable: true },
  { key: "quantity", name: "Quantity", editable: true },
  { key: "amount", name: "Amount", editable: true },
  { key: "utilizedon", name: "Utilized on", editable: true },
];

const rows = [
{id: 1, particular: "Medicine", type: "Pharmacy", rate: 199.00, quantity: 1, amount: 199.00, utilizedon: "2/17/2015"}, 
{id: 2, particular: "Special Ward", type: "Room", rate: 129.00, quantity: 1, amount: 129.00, utilizedon: "2/17/2015"}, 
{id: 3, particular: "Ambulance", type: "Transport", rate: 159.00, quantity: 1, amount: 159.00, utilizedon: "2/17/2015"}, 
{id: 4, particular: "Reports", type: "Lab", rate: 162.00, quantity: 1, amount: 162.00, utilizedon: "2/17/2015"}, 
{id: 5, particular: "Therapy", type: "Treatment", rate: 121.00, quantity: 1, amount: 121.00, utilizedon: "2/17/2015"}, 
{id: 6, particular: "Surgery", type: "Treatment", rate: 99.00, quantity: 1, amount: 99.00, utilizedon: "2/17/2015"}, 
{id: 7, particular: "Checkup", type: "Checkup", rate: 42.00, quantity: 1, amount: 42.00, utilizedon: "2/17/2015"}, 
{id: 8, particular: "Consulting", type: "Checkup", rate: 52.00, quantity: 1, amount: 52.00, utilizedon: "2/17/2015"}, 
];

class HospitalAddPayment extends React.Component{
    constructor (props) {
      super(props)
      this.state = {
        startDate: moment(),
        rows: rows,
      };
      this.handleChange = this.handleChange.bind(this);
    }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
   
  //state = { rows };
  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };
    
    render(){
  
      return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Add Payment</h1>
                        </div>
                    </div>

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
                                                        <label htmlFor="inputname4">Bill Number</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname44">Patient Name</label>
                                                        <input type="text" className="form-control" id="inputname44" placeholder="" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname45">Doctor Name</label>
                                                        <input type="text" className="form-control" id="inputname45" placeholder="" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label>Bill Date</label>
                                                        <div className="controls">
                                                            <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                                                        </div>
                                                   </div>
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Payment Method</Label>
                                                      <Input type="select" name="select" id="exampleSelect">
                                                        <option>Select</option>
                                                        <option>Cash</option>
                                                        <option>Card</option>
                                                      </Input>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect1">Payment Status</Label>
                                                      <Input type="select" name="select" id="exampleSelect1">
                                                        <option>Select</option>
                                                        <option>Completed</option>
                                                        <option>Partial</option>
                                                        <option>Pending</option>
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
                                <h2 className="title float-left">Charge Details</h2>
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-11">

        <ReactDataGrid
          minHeight={rows.length*50 + 52}
          rowHeight={50}
          columns={columns}
          rowGetter={i => this.state.rows[i]}
          rowsCount={8}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
        />


                               

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>




                        <div className="col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Patient Info</h2>
                                </header>
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">

                                            <form>
                                                
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


                        </Col>

                    </Row>
                </div>
            </div>



      );

    }
}

export default HospitalAddPayment;
