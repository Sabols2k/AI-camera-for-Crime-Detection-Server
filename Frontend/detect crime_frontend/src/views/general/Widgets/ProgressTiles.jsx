import React from 'react';
import {
    Row, Col, Progress
} from 'reactstrap';

import {  } from 'components';

class Widgetsprogresstiles extends React.Component{
    render(){ 
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Progress Tiles</h1>
                        </div>
                    </div>


                    <div className="col-xl-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Colored Progress Bar Tiles</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row">

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress bg-primary">
                                            <div className="wid-content">
                                                <h2>3000</h2>
                                                <p>New Orders Placed today</p>
                                                <div className="progress"><div className="progress-bar" style={{width: 60+'%'}}></div></div>
                                                <span>60% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress bg-purple">
                                            <div className="wid-content">
                                                <h2>345</h2>
                                                <p>Posts liked today</p>
                                                <div className="progress"><div className="progress-bar" style={{width: 50+'%'}}></div></div>
                                                <span>50% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress bg-accent">
                                            <div className="wid-content">
                                                <h2>6546</h2>
                                                <p>New visitors today</p>
                                                <div className="progress"><div className="progress-bar" style={{width: 70+'%'}}></div></div>
                                                <span>70% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress bg-warning">
                                            <div className="wid-content">
                                                <h2>2232</h2>
                                                <p>Products delivered today</p>
                                                <div className="progress"><div className="progress-bar" style={{width: 40+'%'}}></div></div>
                                                <span>40% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress bg-info">
                                            <div className="wid-content">
                                                <h2>5453</h2>
                                                <p>Products shipped today</p>
                                                <div className="progress"><div className="progress-bar" style={{width: 65+'%'}}></div></div>
                                                <span>65% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress bg-success">
                                            <div className="wid-content">
                                                <h2>6569</h2>
                                                <p>Logged in users today</p>
                                                <div className="progress"><div className="progress-bar" style={{width: 34+'%'}}></div></div>
                                                <span>34% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress bg-danger">
                                            <div className="wid-content">
                                                <h2>6431</h2>
                                                <p>New Categories today</p>
                                                <div className="progress"><div className="progress-bar" style={{width: 45+'%'}}></div></div>
                                                <span>45% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress bg-secondary">
                                            <div className="wid-content">
                                                <h2>9876</h2>
                                                <p>Pages created today</p>
                                                <div className="progress"><div className="progress-bar" style={{width: 74+'%'}}></div></div>
                                                <span>74% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </section></div>


                    <div className="col-xl-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Inverted Progress Bar Tiles</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row">


                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress inverted">
                                            <div className="wid-content">
                                                <h2>6332</h2>
                                                <p>Posts published today</p>
                                                <Progress color="primary" value="60"/>
                                                <span>60% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress inverted">
                                            <div className="wid-content">
                                                <h2>1233</h2>
                                                <p>Media uploaded today</p>
                                                <Progress color="purple" value="67"/>
                                                <span>67% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress inverted">
                                            <div className="wid-content">
                                                <h2>4224</h2>
                                                <p>Files uploaded today</p>
                                                <Progress color="accent" value="87"/>
                                                <span>87% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress inverted ">
                                            <div className="wid-content">
                                                <h2>3343</h2>
                                                <p>Comments posted today</p>
                                                <Progress color="warning" value="34"/>
                                                <span>34% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress inverted">
                                            <div className="wid-content">
                                                <h2>5456</h2>
                                                <p>Vendors sold today</p>
                                                <Progress color="info" value="64"/>
                                                <span>64% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress inverted">
                                            <div className="wid-content">
                                                <h2>6435</h2>
                                                <p>Products sold today</p>
                                                <Progress color="success" value="57"/>
                                                <span>57% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress inverted">
                                            <div className="wid-content">
                                                <h2>1234</h2>
                                                <p>Users visited today</p>
                                                <Progress color="danger" value="84"/>
                                                <span>84% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress inverted">
                                            <div className="wid-content">
                                                <h2>7654</h2>
                                                <p>New Customers today</p>
                                                <Progress color="secondary" value="23"/>
                                                <span>23% increase</span>
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

export default Widgetsprogresstiles;
