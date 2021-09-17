import React from 'react';
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


class Medialist extends React.Component{
    render(){
        var mediaList = [];
        for (var i = 0; i < this.props.media.length; i++) {
            mediaList.push(


                                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" key={i}>
                                                <div className="team-member">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src={this.props.media[i].avatar} alt="" />
                                                    </div>
                                                    <div className="team-info">
                                                        <h3><NavLink to="#!">{ this.props.media[i].name }</NavLink></h3>
                                                        <span>By: { this.props.media[i].by }</span>
                                                        <ul className="social-icons list-inline list-unstyled">
                                                                <li className="list-inline-item"><a href="#!"><i className="i-heart icon-primary icon-xs"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
            );
        }
        return (
                                <div className="row">
                                       { mediaList }
                                </div>
        );
    }
}

Medialist.propTypes = {
    media: PropTypes.arrayOf(PropTypes.object)
}

export default Medialist;
