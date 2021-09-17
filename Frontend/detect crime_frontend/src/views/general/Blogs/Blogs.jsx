import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    BlogPosts
} from 'components';

import { blogs } from 'variables/general/blogs.jsx';

class Blogs extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Blogs</h1>
                        </div>
                    </div>
    
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Blog Posts</h2>
                            </header>
                            <div className="content-body">    

                                <BlogPosts blogs={blogs} />

                            </div>
                        </section>
                    </div>
                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Blogs;
