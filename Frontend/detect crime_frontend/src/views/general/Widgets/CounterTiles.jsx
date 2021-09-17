import React from 'react';
import {
    Row, Col
} from 'reactstrap';

import {  } from 'components';
import CountTo from 'react-count-to';

class Widgetscountertiles extends React.Component{
    render(){ 
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Counter Tiles</h1>
                        </div>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Colored Counter Tiles</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row">

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="tile-counter bg-primary">
                                            <div className="wid-content">
                                                <i className='i-like icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={3504}/></h2>
                                                <div className="clearfix"></div>
                                                <span>People liked it !</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="tile-counter bg-purple">
                                            <div className="wid-content">
                                                <i className='i-heart icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={4504}/></h2>
                                                <div className="clearfix"></div>
                                                <span>Loved your post !</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="tile-counter bg-accent">
                                            <div className="wid-content">
                                                <i className='i-user icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={3304}/></h2>
                                                <div className="clearfix"></div>
                                                <span>New Users</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="tile-counter bg-warning">
                                            <div className="wid-content">
                                                <i className='i-share icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={7504}/></h2>
                                                <div className="clearfix"></div>
                                                <span>Shared this post</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="tile-counter bg-info">
                                            <div className="wid-content">
                                                <i className='i-rocket icon-lg'></i>
                                                <h2><CountTo speed={3000} from={11} to={87}/></h2>
                                                <h2><span>MB</span></h2>
                                                <div className="clearfix"></div>
                                                <span>Server Load</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="tile-counter bg-success">
                                            <div className="wid-content">
                                                <i className='i-speedometer icon-lg'></i>
                                                <h2><CountTo speed={3000} from={100} to={1624}/></h2>
                                                <div className="clearfix"></div>
                                                <span>New Sites!</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="tile-counter bg-danger">
                                            <div className="wid-content">
                                                <i className='i-dislike icon-lg'></i>
                                                <h2><CountTo speed={3000} from={0} to={224}/></h2>
                                                <div className="clearfix"></div>
                                                <span>People disliked it</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="tile-counter bg-secondary">
                                            <div className="wid-content">
                                                <i className='i-note icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={9824}/></h2>
                                                <div className="clearfix"></div>
                                                <span>Pages Bookmarked!</span>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </section></div>




                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Inverted Counter Tiles</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row">

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="tile-counter inverted text-primary">
                                            <div className="wid-content">
                                                <i className='i-like icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={3504}/></h2>
                                                <div className="clearfix"></div>
                                                <span>People liked it !</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="tile-counter inverted text-purple">
                                            <div className="wid-content">
                                                <i className='i-heart icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={4504}/></h2>
                                                <div className="clearfix"></div>
                                                <span>Loved your post !</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="tile-counter inverted text-accent">
                                            <div className="wid-content">
                                                <i className='i-user icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={3304}/></h2>
                                                <div className="clearfix"></div>
                                                <span>New Users</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="tile-counter inverted text-warning">
                                            <div className="wid-content">
                                                <i className='i-share icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={7504}/></h2>
                                                <div className="clearfix"></div>
                                                <span>Shared this post</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="tile-counter inverted text-info">
                                            <div className="wid-content">
                                                <i className='i-rocket icon-lg'></i>
                                                <h2><CountTo speed={3000} from={111} to={187}/></h2>
                                                <h2>MB</h2>                     <div className="clearfix"></div>
                                                <span>Server Load</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="tile-counter inverted text-success">
                                            <div className="wid-content">
                                                <i className='i-speedometer icon-lg'></i>
                                                <h2><CountTo speed={3000} from={100} to={1624} /></h2>
                                                <div className="clearfix"></div>
                                                <span>New Sites!</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="tile-counter inverted text-danger">
                                            <div className="wid-content">
                                                <i className='i-dislike icon-lg'></i>
                                                <h2><CountTo speed={3000} from={0} to={224}/></h2>
                                                <div className="clearfix"></div>
                                                <span>People disliked it</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                        <div className="tile-counter inverted text-secondary">
                                            <div className="wid-content">
                                                <i className='i-note icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={9824}/></h2>
                                                <div className="clearfix"></div>
                                                <span>Pages Bookmarked!</span>
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

export default Widgetscountertiles;
