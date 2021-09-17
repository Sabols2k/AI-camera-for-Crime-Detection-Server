import React from 'react';
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

var BASEDIR = process.env.REACT_APP_BASEDIR;

class BlogUserslist extends React.Component{
    render(){
        var bloguserList = [];
        for (var i = 0; i < this.props.bloguser.length; i++) {
            bloguserList.push(


                                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" key={i}>
                                                <div className="team-member">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src={this.props.bloguser[i].avatar} alt="" />
                                                    </div>
                                                    <div className="team-info">
                                                        <h3><NavLink to={BASEDIR+"/blog/user-profile"}>{ this.props.bloguser[i].name }</NavLink></h3>
                                                        <span>{ this.props.bloguser[i].position }</span> / <span>{ this.props.bloguser[i].age } years old</span>
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
                                       { bloguserList }
                                </div>
        );
    }
}

BlogUserslist.propTypes = {
    bloguser: PropTypes.arrayOf(PropTypes.object)
}

export default BlogUserslist;
