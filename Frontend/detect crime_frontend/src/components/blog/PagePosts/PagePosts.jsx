import React from 'react';
import { NavLink } from 'react-router-dom';
// used for making the prop types of this component
import PropTypes from 'prop-types';

class PagePosts extends React.Component{ 
    render(){
        var pagesList = [];
        for (var i = 0; i < this.props.pages.length; i++) {
            pagesList.push(

                        <div className="col-12 col-md-6" key={i}>
                                        <div className="blog_post">
                                            <img className="media-object" src={this.props.pages[i].image} alt="" />
                                            <h4><NavLink to='#!'>{this.props.pages[i].title}</NavLink></h4>
                                            <p>Written by <a href="#!">{this.props.pages[i].author}</a> on {this.props.pages[i].date}.</p>
                                            <p className="blog-content">{this.props.pages[i].description}</p>
                                        </div>
                        </div>
            );
        }
        return (          
                                <div className="row">
                                       { pagesList }
                                </div>
        );
    }
}

PagePosts.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.object)
}

export default PagePosts;
