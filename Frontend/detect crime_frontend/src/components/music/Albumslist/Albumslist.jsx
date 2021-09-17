import React from 'react';
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


var BASEDIR = process.env.REACT_APP_BASEDIR;


class Albumslist extends React.Component{
    render(){
        var albumsList = [];
        for (var i = 0; i < this.props.albums.length; i++) {
            albumsList.push(


                                            <div className="col-md-6 col-lg-4" key={i}>
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src={this.props.albums[i].avatar} alt="" />
                                                    </div>
                                                    <div className="team-info">
                                                        <h3><NavLink to={BASEDIR+"/music/album-view"}>{ this.props.albums[i].name }</NavLink></h3>
                                                        <span>{ this.props.albums[i].position }</span>
                                                        <ul className="social-icons list-inline list-unstyled">
                                                            <li className="list-inline-item"><a href={ this.props.albums[i].facebook }><i className="i-social-facebook icon-primary icon-xs"></i></a></li>
                                                            <li className="list-inline-item"><a href={ this.props.albums[i].twitter }><i className="i-social-twitter icon-primary icon-xs"></i></a></li>
                                                        </ul>
                                                        <p>{ this.props.albums[i].msg }</p>
                                                    </div>
                                                </div>
                                            </div>
            );
        }
        return (
                                <div className="row">
                                       { albumsList }
                                </div>
        );
    }
}

Albumslist.propTypes = {
    albums: PropTypes.arrayOf(PropTypes.object)
}

export default Albumslist;
