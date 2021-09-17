import React from 'react';
import {
    Row, Col, Label, Input,
} from 'reactstrap';

import InputMask from 'react-input-mask';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {
    Customerlist
} from 'components';


class AddDevice extends React.Component {
    constructor(props) {
        super(props)
        this.cuslist = this.cuslist.bind(this);
        this.state = {
            //   startDate: moment()
            customer: [
                'cus_id',
                'cus_name',
            ],
            length: 3,
            abc: '0'
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    //   handleChange(date) {
    //     this.setState({
    //       startDate: date
    //     });
    //   }
    async componentDidMount() {
        const customers = await axios.get(`http://localhost:3000/admin/showcustomer`);
        this.setState({ customer: customers.data });
        console.log(this.state.customer);
    }
    async cuslist() {
        const customers = await axios.get(`http://localhost:3000/admin/showcustomer`);
        var list = customers.data;
        const kq = [];
        for (let i = 0; i < list.length; i++) {
            kq[i] = list.username
        }
        return kq;
    }

    render() {
        const length = 3;
        return (

            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                            <div className="page-title">
                                <div className="float-left">
                                    <h1 className="title">Add Device</h1>
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

                                                    <form method="POST" action="http://localhost:3000/admindevice/create">
                                                        <div className="form-row">
                                                            <div className="form-group col-md-12">
                                                                <label htmlFor="inputname4">Device Name</label>
                                                                <input name="device_name" type="text" className="form-control" id="inputname4" placeholder="" />
                                                            </div>
                                                            {/* <div className="form-group col-md-12">
                                                        <label>Device Start date</label>
                                                        <div className="controls">
                                                            <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                                                        </div>
                                                   </div> */}

                                                            {/* <div className="form-group col-md-12">
                                                        <label htmlFor="inputname45">Assign Customer</label>
                                                        <input type="text" name="customer" className="form-control" id="inputname45"  value="{this.state.customer._id}" />
                                                    </div> */}
                                                            {/* <select class="custom-select custom-select-lg mb-3">
                                                                <option selected>Open this select menu</option>
                                                                <option value="1"><Customerlist customers={this.state.customer} /></option>


                                                            </select> */}


                                                            <Customerlist customers={this.state.customer} />
                                                            {/* <h1>abc{this.state.customer['_id']}</h1> */}
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

export default AddDevice;
