import React from 'react';
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


var BASEDIR = process.env.REACT_APP_BASEDIR;


class Professorslist extends React.Component{
    render(){
        var professorsList = [];
        for (var i = 0; i < this.props.professors.length; i++) {
            professorsList.push(


                                            <div className="col-md-6 col-lg-4" key={i}>
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src={this.props.professors[i].avatar} alt="" />
                                                    </div>
                                                    <div className="team-info">
                                                        <h3><NavLink to={BASEDIR+"/admin/user-profile"}>{ this.props.professors[i].name }</NavLink></h3>
                                                        <p>{ this.props.professors[i].position }</p>
                                                        <p>Age: { this.props.professors[i].age }</p>
                                                        <ul className="social-icons list-inline list-unstyled">
                                                            <li className="list-inline-item"><a href={ this.props.professors[i].facebook }><i className="i-social-facebook icon-primary icon-xs"></i></a></li>
                                                            <li className="list-inline-item"><a href={ this.props.professors[i].twitter }><i className="i-social-twitter icon-primary icon-xs"></i></a></li>
                                                            <li className="list-inline-item"><a href={ this.props.professors[i].linkedin }><i className="i-social-linkedin icon-primary icon-xs"></i></a></li>
                                                        </ul>
                                                        
                                                    </div>
                                                </div>
                                            </div>
            );
        }
        return (
                                <div className="row">
                                       { professorsList }
                                </div>
        );
    }
}

Professorslist.propTypes = {
    professors: PropTypes.arrayOf(PropTypes.object)
}

export default Professorslist;
