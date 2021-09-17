import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';

import {
    
} from 'components';
var IMGDIR = process.env.REACT_APP_IMGDIR;

class SinglePage extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Single Page</h1>
                        </div>
                    </div>


                            
    

                    <div className="col-xl-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Single Page</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row">
                                    <div className="col-12">


                                        <div className="blog_post full_blog_post">
                                            <h3><NavLink to='#!'>About Us</NavLink></h3>
                                            <h5>Written by <a href="#!">Me</a> on May 11, 2013.</h5>
                                            <p className="blog_info">
                                                <i className="i-bubble"></i> <a href="#comments">3 comments</a>
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <i className="i-tag"></i> <a href="#!">responsive</a> <a href="#!">web</a> <a href="#!">mobile</a>
                                            </p>

                                            <div className="blog-content">

                                                <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>

                                                <img alt="" className="media-object" src={IMGDIR+"/images/blog/pages/page-4.jpg"} />

                                                <p>Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space). "Balance" is a concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance. A design composition does not have to be symmetrical or linear to be considered balanced, the balance is global to all elements even the absence of content. In this context perfectly symmetrical and linear compositions are not necessarily balanced and so asymmetrical or radial distributions of text and graphic elements can achieve balance in a composition.</p>

                                                <p>Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships. For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways. Another way to describe contrast, is to say "a small object next to a large object will look smaller". As contrast in size diminishes, monotony is approached.</p>

                                                <p>Making a specific element stand out or draw attention to the eye. Emphasis can be achieved in graphic design by placing elements on the page in positions where the eye is naturally drawn, by using other principles such as contrast, repetition, or movement. Bold and italic type provides emphasis for text. Graphic elements gain emphasis through size, visual weight, color, complexity, uniqueness, placement on the page, and other features.</p>

                                            </div>

                                            <div id="comments">

                                                <h3>Comments</h3>

                                                <div className="card comment-block level-1" style={{display:'inline-block'}}>
                                                    <div className="row margin-0">
                                                        <div className="col-lg-1 col-md-1 col-sm-2 col-3 img-area">
                                                            <img alt="" src={IMGDIR+"/images/profile/avatar-1.jpg"} />
                                                        </div>
                                                        <div className="col-lg-11 col-md-11 col-sm-10 col-9 text-area">
                                                            <h6 className="author">By <a href="#!">Jason</a> on May 12, 2013.</h6>
                                                            <div>
                                                                <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong in labore pig pork biltong.</p>
                                                            </div>
                                                            <a href="#!" className="float-left">Reply &nbsp;<i className="i-arrow-right-circle"></i></a>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="card comment-block level-2" style={{display:'inline-block'}}>
                                                    <div className="row margin-0">
                                                        <div className="col-lg-1 col-md-1 col-sm-2 col-3 img-area">
                                                            <img alt="" src={IMGDIR+"/images/profile/avatar-2.jpg"} />
                                                        </div>
                                                        <div className="col-lg-11 col-md-11 col-sm-10 col-9 text-area">
                                                            <h6 className="author">By <a href="#!">Jason</a> on May 12, 2013.</h6>
                                                            <div>
                                                                <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong in labore pig pork biltong.</p>
                                                            </div>
                                                            <a href="#!" className="float-left">Reply &nbsp;<i className="i-arrow-right-circle"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card comment-block level-3" style={{display:'inline-block'}}>
                                                    <div className="row margin-0">
                                                        <div className="col-lg-1 col-md-1 col-sm-2 col-3 img-area">
                                                            <img alt="" src={IMGDIR+"/images/profile/avatar-3.jpg"} />
                                                        </div>
                                                        <div className="col-lg-11 col-md-11 col-sm-10 col-9 text-area">
                                                            <h6 className="author">By <a href="#!">Jason</a> on May 12, 2013.</h6>
                                                            <div>
                                                                <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong in labore pig pork biltong.</p>
                                                            </div>
                                                            <a href="#!" className="float-left">Reply &nbsp;<i className="i-arrow-right-circle"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card comment-block level-1" style={{display:'inline-block'}}>
                                                    <div className="row margin-0">
                                                        <div className="col-lg-1 col-md-1 col-sm-2 col-3 img-area">
                                                            <img alt="" src={IMGDIR+"/images/profile/avatar-4.jpg"} />
                                                        </div>
                                                        <div className="col-lg-11 col-md-11 col-sm-10 col-9 text-area">
                                                            <h6 className="author">By <a href="#!">Jason</a> on May 12, 2013.</h6>
                                                            <div>
                                                                <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong in labore pig pork biltong.</p>
                                                            </div>
                                                            <a href="#!" className="float-left">Reply &nbsp;<i className="i-arrow-right-circle"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>


                                            <div className="clearfix"></div><br/>
                                            <h3>Leave a Comment</h3>
                                            <form className="form row comment-form">
                                                <div className="form-group col-12">
                                                    <label className="form-label" htmlFor="inputName">Name</label>
                                                    <div className="controls">
                                                        <input type="text" className=" form-control" id="inputName" />
                                                    </div>
                                                </div>
                                                <div className="form-group col-12">
                                                    <label className="form-label" htmlFor="inputEmail">Email</label>
                                                    <div className="controls">
                                                        <input type="text" className=" form-control" id="inputEmail" />
                                                    </div>
                                                </div>

                                                <div className="form-group col-12">
                                                    <label className="form-label" htmlFor="inputComment">Comment</label>
                                                    <div className="controls">
                                                        <textarea className=" form-control" id="inputComment" rows="6"></textarea>
                                                    </div>
                                                </div>

                                                <div className="form-group col-12" style={{'marginBottom': '0px'}}>
                                                    <div className="controls action">
                                                        <button type="submit" className="btn btn-primary">Post Comment</button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>

                                        


                                    </div>
                                </div>
                            </div>
                        </section></div>



           


                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default SinglePage;
