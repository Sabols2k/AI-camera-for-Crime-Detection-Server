import React from 'react';
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


var BASEDIR = process.env.REACT_APP_BASEDIR;


class Patientslist extends React.Component{
    render(){
        var patientsList = [];
        for (var i = 0; i < this.props.patients.length; i++) {
            patientsList.push(


                                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" key={i}>
                                                <div className="team-member">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src={this.props.patients[i].avatar} alt="" />
                                                    </div>
                                                    <div className="team-info">
                                                        <h4><NavLink to={BASEDIR+"/hospital/patient-profile"}>{ this.props.patients[i].name }</NavLink></h4>
                                                        <span>{ this.props.patients[i].position }</span> / <span>{ this.props.patients[i].age } years old</span>
                                                        <ul className="social-icons list-inline list-unstyled">
                                                                <li className="list-inline-item"><a href="#!"><i className="i-envelope icon-primary icon-xs"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
            );
        }
        return (
                                <div className="row">
                                       { patientsList }
                                </div>
        );
    }
}

Patientslist.propTypes = {
    patients: PropTypes.arrayOf(PropTypes.object)
}

export default Patientslist;
