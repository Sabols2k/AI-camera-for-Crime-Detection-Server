import React from 'react';
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


var BASEDIR = process.env.REACT_APP_BASEDIR;


class Friendslist extends React.Component{
    render(){
        var friendsList = [];
        for (var i = 0; i < this.props.friends.length; i++) {
            friendsList.push(

                                            <div className="col-md-6 col-lg-6 col-sm-12" key={i}>
                                                    <div className="team-member aside-style">
                                                        <div className="row margin-0">
                                                        <div className="team-img col-4">
                                                            <img className="img-fluid" src={this.props.friends[i].avatar} alt="" />
                                                        </div>
                                                        <div className="team-info col-8">
                                                            <h3><NavLink to={BASEDIR+"/social/friend-profile"}>{ this.props.friends[i].name }</NavLink></h3>
                                                            <span>{ this.props.friends[i].position }</span> / <span>{ this.props.friends[i].age } years old</span>
                                                            <ul className="social-icons list-inline list-unstyled">
                                                                <li className="list-inline-item"><a href="#!"><i className="i-envelope icon-primary icon-xs"></i></a></li>
                                                            </ul>
                                                            <p>{ this.props.friends[i].msg }</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
            );
        }
        return (
                                <div className="row">
                                       { friendsList }
                                </div>
        );
    }
}

Friendslist.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}

export default Friendslist;
