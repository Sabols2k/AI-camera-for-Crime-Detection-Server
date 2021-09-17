import React from 'react';
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

var BASEDIR = process.env.REACT_APP_BASEDIR;




class Customerlist extends React.Component {


    render() {
        var customerlist = [];

        for (var i = 0; i < this.props.customers.length; i++) {
            customerlist.push(
                <option name="username" type="text" className="form-control" value={this.props.customers[i].username} > {this.props.customers[i].username}

                    {/* <div className="team-member aside-style">
                        <div className="row margin-0">
                            <div className="team-img col-4">
                                <img className="img-fluid" src={this.props.courses[i].avatar} alt="" />
                            </div>
                            <div className="team-info col-8">
                                <h3><NavLink to={BASEDIR + "/device-detail"}>{this.props.courses[i].name}</NavLink></h3>
                                <span>{this.props.courses[i].position}</span>
                                <p>{this.props.courses[i].msg}</p>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="form-group col-md-12">
                        <label htmlFor="inputname45">Assign Customer</label>
                        <input type="text" name="customer" className="form-control" id="inputname45" value={this.props.customers[i].username} />
                    </div> */}
                    {/* <select class="custom-select custom-select-lg mb-3">
                        <option selected>Open this select menu</option> */}

                    {/* </select> */}


                </option>
            );
        }
        return (
            <div className="form-group col-md-12">
                <select onchange="this.form.submit()">
                    <option selected>Assign Customer</option>
                    {customerlist}
                </select>
            </div>
        );
    }
}

Customerlist.propTypes = {
    customers: PropTypes.arrayOf(PropTypes.object)
}

export default Customerlist;
