import React from 'react';
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


var BASEDIR = process.env.REACT_APP_BASEDIR;


class Doctorslist extends React.Component{
    render(){
        var doctorsList = [];
        for (var i = 0; i < this.props.doctors.length; i++) {
            doctorsList.push(


                                            <div className="col-md-6 col-lg-4" key={i}>
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src={this.props.doctors[i].avatar} alt="" />
                                                    </div>
                                                    <div className="team-info">
                                                        <h3><NavLink to={BASEDIR+"/hospital/doctor-profile"}>{ this.props.doctors[i].name }</NavLink></h3>
                                                        <span>{ this.props.doctors[i].position }</span>
                                                        <p>{ this.props.doctors[i].msg }</p>
                                                    </div>
                                                </div>
                                            </div>
            );
        }
        return (
                                <div className="row">
                                       { doctorsList }
                                </div>
        );
    }
}

Doctorslist.propTypes = {
    doctors: PropTypes.arrayOf(PropTypes.object)
}

export default Doctorslist;
