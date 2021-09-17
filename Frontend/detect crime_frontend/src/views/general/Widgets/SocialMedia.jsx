import React from 'react';
import {
    Row, Col
} from 'reactstrap';

import CountTo from 'react-count-to';


class Widgetssocialmedia extends React.Component{
    componentDidMount(){
    }
    componentWillUnmount(){
    }
    render(){ 
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Social Media Widgets</h1>
                        </div>
                    </div>





                    <div className="row margin-0">



                        <div className="col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Social Media</h2>
                                </header>
                                <div className="content-body">    <div className="row">

                                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                            <div className="wid-social">
                                                <div className="social-icon">
                                                    <i className='i-social-facebook  icon-xlg float-right' ></i>
                                                </div>
                                                <div className="social-info">
                                                    <h3><CountTo speed={3000} from={0} to={143}/></h3>
                                                    <h3 className="bold count"> K</h3>                     
                                                    <h4 className="counttype">Likes</h4>
                                                    <span className="percent">5% increase from last week</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                            <div className="wid-social">
                                                <div className="social-icon">
                                                    <i className='i-social-twitter  icon-xlg float-right' ></i>
                                                </div>
                                                <div className="social-info">
                                                    <h3><CountTo speed={3000} from={0} to={3454}/></h3>
                                                    <h4 className="counttype ">Tweets</h4>
                                                    <span className="percent">2% increase from last week</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                            <div className="wid-social">
                                                <div className="social-icon">
                                                    <i className='i-social-google  icon-xlg float-right' ></i>
                                                </div>
                                                <div className="social-info">
                                                    <h3><CountTo speed={3000} from={0} to={523}/></h3>
                                                    <h4 className="counttype ">Circles</h4>
                                                    <span className="percent">2% increase from last week</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                            <div className="wid-social">
                                                <div className="social-icon">
                                                    <i className='i-social-dribbble  icon-xlg float-right' ></i>
                                                </div>
                                                <div className="social-info">
                                                    <h3><CountTo speed={3000} from={0} to={2525}/></h3>
                                                    <h4 className="counttype ">Subscribers</h4>
                                                    <span className="percent">7% increase from last week</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                            <div className="wid-social">
                                                <div className="social-icon">
                                                    <i className='i-social-linkedin  icon-xlg float-right'></i>
                                                </div>
                                                <div className="social-info">
                                                    <h3><CountTo speed={3000} from={0} to={2525}/></h3>
                                                    <h4 className="counttype ">Connections</h4>
                                                    <span className="percent">7% increase from last week</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                            <div className="wid-social">
                                                <div className="social-icon">
                                                    <i className='i-social-youtube  icon-xlg float-right' ></i>
                                                </div>
                                                <div className="social-info">
                                                    <h3><CountTo speed={3000} from={0} to={1523}/></h3>
                                                    <h4 className="counttype ">Subscribers</h4>
                                                    <span className="percent">7% increase from last week</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                            <div className="wid-social">
                                                <div className="social-icon">
                                                    <i className='i-social-skype  icon-xlg float-right' ></i>
                                                </div>
                                                <div className="social-info">
                                                    <h3><CountTo speed={3000} from={0} to={2721}/></h3>
                                                    <h4 className="counttype ">Contacts</h4>
                                                    <span className="percent">7% increase from last week</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                            <div className="wid-social">
                                                <div className="social-icon">
                                                    <i className='i-social-instagram  icon-xlg float-right' ></i>
                                                </div>
                                                <div className="social-info">
                                                    <h3><CountTo speed={3000} from={0} to={1221}/></h3>
                                                    <h4 className="counttype ">Story</h4>
                                                    <span className="percent">7% increase from last week</span>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </section>
                        </div>




                        <div className='clearfix'></div>


                    </div>


                                    
                        </Col>
                    </Row>
                </div>
            </div>


        );
    }
}

export default Widgetssocialmedia;
