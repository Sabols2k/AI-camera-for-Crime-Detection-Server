import React from 'react';
import { NavLink } from 'react-router-dom';
// used for making the prop types of this component
import PropTypes from 'prop-types';

//var BASEDIR = process.env.REACT_APP_BASEDIR;


class GenreList extends React.Component{ 
    render(){
        var searchList = [];
        for (var i = 0; i < this.props.search.length; i++) {
            searchList.push(

                                                <div className="search_result col-12 col-sm-12 col-md-6" key={i}>
                                                    <div className="float-left col-md-4 col-sm-3 col-5">
                                                    <img alt="search-result" className="img-fluid" src={this.props.search[i].image}/>
                                                    </div>
                                                    <div className="float-left col-md-8 col-sm-9 col-7">
                                                        <h4 className="searchtitle"><NavLink to="#!">{this.props.search[i].title}</NavLink></h4>
                                                        <p className="searchauthor">Written by <a href="#!">{this.props.search[i].author}</a> on {this.props.search[i].date}.</p>
                                                        <p>{this.props.search[i].description}</p>
                                                    </div>
                                                </div>
            );
        }
        return (          
                                <div className="row">
                                       { searchList }
                                </div>
        );
    }
}

GenreList.propTypes = {
    search: PropTypes.arrayOf(PropTypes.object)
}

export default GenreList;
