import React from 'react';
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


var BASEDIR = process.env.REACT_APP_BASEDIR;


class Staffslist extends React.Component{
    render(){
        var staffsList = [];
        for (var i = 0; i < this.props.staffs.length; i++) { 
            staffsList.push(


                                            <div className="col-md-6 col-lg-6 col-sm-12" key={i}>
                                                    <div className="team-member aside-style">
                                                        <div className="row margin-0">
                                                        <div className="team-img col-4">
                                                            <img className="img-fluid" src={this.props.staffs[i].avatar} alt="" />
                                                        </div>
                                                        <div className="team-info col-8">
                                                            <h3><NavLink to={BASEDIR+"/hospital/staff-profile"}>{ this.props.staffs[i].name }</NavLink></h3>
                                                            <span>{ this.props.staffs[i].position }</span> / <span>{ this.props.staffs[i].age } years old</span>
                                                            <ul className="social-icons list-inline list-unstyled">
                                                                <li className="list-inline-item"><a href="#!"><i className="i-envelope icon-primary icon-xs"></i></a></li>
                                                            </ul>
                                                            <p>{ this.props.staffs[i].msg }</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
            );
        }
        return (
                                <div className="row">
                                       { staffsList }
                                </div>
        );
    }
}

Staffslist.propTypes = {
    staffs: PropTypes.arrayOf(PropTypes.object)
}

export default Staffslist;
