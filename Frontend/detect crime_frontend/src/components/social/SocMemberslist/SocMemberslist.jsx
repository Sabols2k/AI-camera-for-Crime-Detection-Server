import React from 'react';
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


var BASEDIR = process.env.REACT_APP_BASEDIR;


class SocMemberslist extends React.Component{
    render(){
        var socmembersList = [];
        for (var i = 0; i < this.props.socmembers.length; i++) {
            socmembersList.push(


                                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" key={i}>
                                                <div className="team-member">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src={this.props.socmembers[i].avatar} alt="" />
                                                    </div>
                                                    <div className="team-info">
                                                        <h3><NavLink to={BASEDIR+"/social/member-profile"}>{ this.props.socmembers[i].name }</NavLink></h3>
                                                        <span>{ this.props.socmembers[i].position }</span> / <span>{ this.props.socmembers[i].age } years old</span>
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
                                       { socmembersList }
                                </div>
        );
    }
}

SocMemberslist.propTypes = {
    socmembers: PropTypes.arrayOf(PropTypes.object)
}

export default SocMemberslist;
