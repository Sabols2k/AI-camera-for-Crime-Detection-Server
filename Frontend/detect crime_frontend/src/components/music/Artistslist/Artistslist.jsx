import React from 'react';
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


var BASEDIR = process.env.REACT_APP_BASEDIR;


class Artistslist extends React.Component{
    render(){
        var artistsList = [];
        for (var i = 0; i < this.props.artists.length; i++) {
            artistsList.push(


                                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" key={i}>
                                                <div className="team-member">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src={this.props.artists[i].avatar} alt="" />
                                                    </div>
                                                    <div className="team-info">
                                                        <h3><NavLink to={BASEDIR+"/music/artist-profile"}>{ this.props.artists[i].name }</NavLink></h3>
                                                        <span>{ this.props.artists[i].position }</span> / <span>{ this.props.artists[i].age } years old</span>
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
                                       { artistsList }
                                </div>
        );
    }
}

Artistslist.propTypes = {
    artists: PropTypes.arrayOf(PropTypes.object)
}

export default Artistslist;
