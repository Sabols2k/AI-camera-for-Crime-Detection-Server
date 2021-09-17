import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class PricingNarrow extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Pricing Tables</h1>
                        </div>
                    </div>


                            
           

                    <div className="col-xl-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Narrow Style</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row">
                                    <div className="col-12">


                                        <div className="pricing-tables compress row">

                                            <div className="col-sm-12 col-md-3 col-lg-3 col-12">

                                                <div className="price-pack  first">

                                                    <div className="head">
                                                        <h3>Beginner</h3>

                                                    </div>  

                                                    <div className="price">
                                                        <h3><span className="symbol">$</span>29</h3>
                                                        <h4>per month</h4>
                                                    </div>

                                                    <ul className="item-list list-unstyled">
                                                        <li><strong>30GB</strong> Storage</li>
                                                        <li><strong>10</strong> Email Addresses</li>
                                                        <li><strong>5</strong> Domains</li>
                                                        <li><strong>First-Class</strong> Support</li>

                                                    </ul>


                                                    <button type="button" className="btn btn-lg btn-primary">BUY</button>

                                                </div>


                                            </div>


                                            <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                                                <div className="price-pack ">

                                                    <div className="head">
                                                        <h3>Intermediate</h3>

                                                    </div>  

                                                    <div className="price">
                                                        <h3><span className="symbol">$</span>39</h3>
                                                        <h4>per month</h4>
                                                    </div>

                                                    <ul className="item-list list-unstyled">
                                                        <li><strong>75GB</strong> Storage</li>
                                                        <li><strong>10</strong> Email Addresses</li>
                                                        <li><strong>15</strong> Domains</li>
                                                        <li><strong>First-Class</strong> Support</li>

                                                    </ul>


                                                    <button type="button" className="btn btn-lg btn-primary">BUY</button>

                                                </div>

                                            </div>


                                            <div className="col-sm-12 col-md-3 col-lg-3 col-12 ">

                                                <div className="price-pack recommended">

                                                    <div className="head">
                                                        <h3>Advanced</h3>
                                                    </div>  

                                                    <div className="price">
                                                        <h3><span className="symbol">$</span>49</h3>
                                                        <h4>per month</h4>
                                                    </div>

                                                    <ul className="item-list list-unstyled">
                                                        <li><strong>150GB</strong> Storage</li>
                                                        <li><strong>20 </strong>Email Addresses</li>
                                                        <li><strong>25</strong> Domains</li>
                                                        <li><strong>First-Class</strong> Support</li>

                                                    </ul>


                                                    <button type="button" className="btn btn-lg btn-accent">BUY</button>
                                                </div>

                                            </div>

                                            <div className="col-sm-12 col-md-3 col-lg-3 col-12 ">

                                                <div className="price-pack last">

                                                    <div className="head">
                                                        <h3>Premium</h3>
                                                    </div>  

                                                    <div className="price">
                                                        <h3><span className="symbol">$</span>99</h3>
                                                        <h4>per month</h4>
                                                    </div>

                                                    <ul className="item-list list-unstyled">
                                                        <li><strong>150GB</strong> Storage</li>
                                                        <li><strong>20</strong> Email Addresses</li>
                                                        <li><strong>Unlimited</strong> Domains</li>
                                                        <li><strong>First-Class</strong> Support</li>

                                                    </ul>

                                                    <button type="button" className="btn btn-lg btn-primary">BUY</button>
                                                </div>

                                            </div>


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

export default PricingNarrow;
