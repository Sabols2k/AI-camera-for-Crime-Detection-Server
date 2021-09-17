import React from 'react';
import { NavLink } from 'react-router-dom';
// used for making the prop types of this component
import PropTypes from 'prop-types';

var BASEDIR = process.env.REACT_APP_BASEDIR;

class SearchPosts extends React.Component{ 
    render(){
        var searchList = [];
        for (var i = 0; i < this.props.search.length; i++) {
            searchList.push(

                                                <div className="search_result" key={i}>
                                                    <div className="float-left col-md-3 col-4">
                                                    <img alt="search-result" className="img-fluid" src={this.props.search[i].image}/>
                                                    </div>
                                                    <div className="float-left col-md-9 col-8">
                                                        <h4 className="searchtitle"><NavLink to={BASEDIR+'/ui-blog-item'}>{this.props.search[i].title}</NavLink></h4>
                                                        <p className="searchauthor">Written by <a href="#!">{this.props.search[i].author}</a> on {this.props.search[i].date}.</p>
                                                        <p>{this.props.search[i].description} <a href="#!" className=""><small>Read More...</small></a></p>
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

SearchPosts.propTypes = {
    search: PropTypes.arrayOf(PropTypes.object)
}

export default SearchPosts;
