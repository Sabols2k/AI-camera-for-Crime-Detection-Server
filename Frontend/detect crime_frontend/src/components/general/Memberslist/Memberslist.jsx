import React from 'react';
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

var BASEDIR = process.env.REACT_APP_BASEDIR;

class Memberslist extends React.Component{
    render(){
        var membersList = [];
        for (var i = 0; i < this.props.members.length; i++) {
            membersList.push(


                                            <div className="col-md-6 col-lg-4" key={i}>
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src={this.props.members[i].avatar} alt="" />
                                                    </div>
                                                    <div className="team-info">
                                                        <h3><NavLink to={BASEDIR+"/ui-profile"}>{ this.props.members[i].name }</NavLink></h3>
                                                        <span>{ this.props.members[i].position }</span>
                                                        <ul className="social-icons list-inline list-unstyled">
                                                            <li className="list-inline-item"><a href={ this.props.members[i].facebook }><i className="i-social-facebook icon-primary icon-xs"></i></a></li>
                                                            <li className="list-inline-item"><a href={ this.props.members[i].twitter }><i className="i-social-twitter icon-primary icon-xs"></i></a></li>
                                                            <li className="list-inline-item"><a href={ this.props.members[i].linkedin }><i className="i-social-linkedin icon-primary icon-xs"></i></a></li>
                                                        </ul>
                                                        <p>{ this.props.members[i].msg }</p>
                                                    </div>
                                                </div>
                                            </div>
            );
        }
        return (
                                <div className="row">
                                       { membersList }
                                </div>
        );
    }
}

Memberslist.propTypes = {
    members: PropTypes.arrayOf(PropTypes.object)
}

export default Memberslist;
