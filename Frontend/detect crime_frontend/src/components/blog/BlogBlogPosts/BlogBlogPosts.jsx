import React from 'react';
import { NavLink } from 'react-router-dom';
// used for making the prop types of this component
import PropTypes from 'prop-types';

var BASEDIR = process.env.REACT_APP_BASEDIR;

class BlogBlogPosts extends React.Component{ 
    render(){
        var blogsList = [];
        for (var i = 0; i < this.props.blogs.length; i++) {
            blogsList.push(

                        <div className="col-12 col-md-6" key={i}>
                                        <div className="blog_post">
                                            <img className="media-object" src={this.props.blogs[i].image} alt="" />
                                            <h3 className="blogtitle"><NavLink to={BASEDIR+'/blog/blog-view'}>{this.props.blogs[i].title}</NavLink></h3>
                                            <p className="post-by">Written by <a href="#!">{this.props.blogs[i].author}</a> on {this.props.blogs[i].date}.</p>
                                            <p className="blog-content">{this.props.blogs[i].description}</p>
                                        </div>
                        </div>
            );
        }
        return (          
                                <div className="row">
                                       { blogsList }
                                </div>
        );
    }
}

BlogBlogPosts.propTypes = {
    blogs: PropTypes.arrayOf(PropTypes.object)
}

export default BlogBlogPosts;
