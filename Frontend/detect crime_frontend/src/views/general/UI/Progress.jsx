import React from 'react';
import {
    Progress ,
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UIProgress extends React.Component{
    

    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Progress Bars</h1>
                        </div>
                    </div>


                   

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Progress bars</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">

                 
<div>
      <div className="text-left">0%</div>
      <Progress /><br/>
      <div className="text-left">25%</div>
      <Progress value="25"/><br/>
      <div className="text-left">50%</div>
      <Progress value={50}/><br/>
      <div className="text-left">75%</div>
      <Progress value={75}/><br/>
      <div className="text-left">100%</div>
      <Progress value="100"/><br/>
      <div className="text-left">Multiple bars</div>
      <Progress multi>
        <Progress bar value="15"/><br/>
        <Progress bar color="success" value="30"/><br/>
        <Progress bar color="info" value="25"/><br/>
        <Progress bar color="warning" value="20"/><br/>
        <Progress bar color="danger" value="5"/><br/>
      </Progress>
    </div>

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>





                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Progress bar Colors</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">


<div>
      <Progress value={2 * 5}/><br/>
      <Progress color="success" value="25"/><br/>
      <Progress color="info" value={50}/><br/>
      <Progress color="warning" value={75}/><br/>
      <Progress color="danger" value="100"/><br/>
    </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>





                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Progress bar labels</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">



<div>
      <Progress value="25">25%</Progress><br/>
      <Progress value={50}>1/2</Progress><br/>
      <Progress value={75}>You're almost there!</Progress><br/>
      <Progress color="success" value="100">You did it!</Progress><br/>
      <Progress multi>
        <Progress bar value="15">Meh</Progress>
        <Progress bar color="success" value="30">Wow!</Progress>
        <Progress bar color="info" value="25">Cool</Progress>
        <Progress bar color="warning" value="20">20%</Progress>
        <Progress bar color="danger" value="5">!!</Progress>
      </Progress><br/>
    </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>





                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Progress bar striped</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">



<div>
      <Progress striped value={2 * 5}/><br/>
      <Progress striped color="success" value="25"/><br/>
      <Progress striped color="info" value={50}/><br/>
      <Progress striped color="warning" value={75}/><br/>
      <Progress striped color="danger" value="100"/><br/>
      <Progress multi>
        <Progress striped bar value="10" />
        <Progress striped bar color="success" value="30" />
        <Progress striped bar color="warning" value="20" />
        <Progress striped bar color="danger" value="20" />
      </Progress><br/>
    </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>





                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Progress bar Animated</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">




<div>
      <Progress animated value={2 * 5}/><br/>
      <Progress animated color="success" value="25"/><br/>
      <Progress animated color="info" value={50}/><br/>
      <Progress animated color="warning" value={75}/><br/>
      <Progress animated color="danger" value="100"/><br/>
      <Progress multi>
        <Progress animated bar value="10" />
        <Progress animated bar color="success" value="30" />
        <Progress animated bar color="warning" value="20" />
        <Progress animated bar color="danger" value="20" />
      </Progress><br/>
    </div>




                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>





                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Progress bar stacked</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">



<div>
      <div className="text-left">Plain</div>
      <Progress multi>
        <Progress bar value="15" />
        <Progress bar color="success" value="20" />
        <Progress bar color="info" value="25" />
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="15" />
      </Progress><br/>
      <div className="text-left">With Labels</div>
      <Progress multi>
        <Progress bar value="15">Meh</Progress>
        <Progress bar color="success" value="35">Wow!</Progress>
        <Progress bar color="warning" value="25">25%</Progress>
        <Progress bar color="danger" value="25">LOOK OUT!!</Progress>
      </Progress><br/>
      <div className="text-left">Stripes and Animations</div>
      <Progress multi>
        <Progress bar striped value="15">Stripes</Progress>
        <Progress bar animated color="success" value="30">Animated Stripes</Progress>
        <Progress bar color="info" value="25">Plain</Progress>
      </Progress><br/>
    </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>





                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Progress bar Max value</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">


<div>
      <div className="text-left">1 of 5</div>
      <Progress value="1" max="5"/><br/>
      <div className="text-left">50 of 135</div>
      <Progress value={50} max="135"/><br/>
      <div className="text-left">75 of 111</div>
      <Progress value={75} max={111}/><br/>
      <div className="text-left">463 of 500</div>
      <Progress value="463" max={500}/><br/>

      <div className="text-left">Various (40) of 55</div>
      <Progress multi>
        <Progress bar value="5" max={55}>5</Progress>
        <Progress bar color="success" value="15" max={55}>15</Progress>
        <Progress bar color="warning" value="10" max={55}>10</Progress>
        <Progress bar color="danger" value="10" max={55}>10</Progress>
      </Progress>
    </div>


                                    </div>
                                </div>


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

export default UIProgress;
