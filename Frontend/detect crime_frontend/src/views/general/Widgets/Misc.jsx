import React from 'react';
import {
    Row, Col
} from 'reactstrap';

import {  } from 'components';
//import styles from 'jvectormap/jquery-jvectormap.css'
import { VectorMap } from 'react-jvectormap';

var IMGDIR = process.env.REACT_APP_IMGDIR;

class Widgetsmisc extends React.Component{



constructor(props) {
    super(props);
    this.state = {
      data1: [
                        {
                            latLng: [41.90, 12.45],
                            name: 'Vatican City'
                        }, {
                            latLng: [43.73, 7.41],
                            name: 'Monaco'
                        }, {
                            latLng: [-0.52, 166.93],
                            name: 'Nauru'
                        }, {
                            latLng: [-8.51, 179.21],
                            name: 'Tuvalu'
                        }, {
                            latLng: [43.93, 12.46],
                            name: 'San Marino'
                        }, {
                            latLng: [47.14, 9.52],
                            name: 'Liechtenstein'
                        }, {
                            latLng: [7.11, 171.06],
                            name: 'Marshall Islands'
                        }, {
                            latLng: [17.3, -62.73],
                            name: 'Saint Kitts and Nevis'
                        }, {
                            latLng: [3.2, 73.22],
                            name: 'Maldives'
                        }, {
                            latLng: [17.11, -61.85],
                            name: 'Antigua and Barbuda'
                        }, {
                            latLng: [-4.61, 55.45],
                            name: 'Seychelles'
                        }, {
                            latLng: [7.35, 134.46],
                            name: 'Palau'
                        }, {
                            latLng: [42.5, 1.51],
                            name: 'Andorra'
                        }
      ]
    };
  }

    render(){
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Misc. Widgets</h1>
                        </div>
                    </div>




                    <div className="row margin-0">

                    <div className="col-12 col-md-6">
                        <section className="box nobox ">
                            <div className="content-body">    <div className="row">
                                    <div className="col-12">

                                        <div className="wid-weather">
                                            <div className="row margin-0">
                                                <div className="today col-12">
                                                    <div className="location float-left">
                                                        <h3>California, USA</h3>
                                                        <span>Today, 12<sup>th</sup> March 2015</span>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                    <div className="timings">
                                                        <ul className="list-inline list-unstyled">
                                                            <li><span className='time'>13:00</span><i className='i-energy icon-sm'></i><h4 className='temp'>21°</h4></li>
                                                            <li><span className='time'>15:00</span><i className='i-energy icon-sm'></i><h4 className='temp'>22°</h4></li>
                                                            <li><span className='time'>17:00</span><i className='i-energy icon-sm'></i><h4 className='temp'>22°</h4></li>
                                                            <li><span className='time'>19:00</span><i className='i-energy icon-sm'></i><h4 className='temp'>20°</h4></li>
                                                            <li className="d-xl-inline-block d-lg-none d-md-none d-sm-none d-xs-none"><span className='time'>21:00</span><i className='i-energy icon-sm'></i><h4 className='temp'>18°</h4></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>


                                    </div>

                                </div>
                            </div>
                        </section>

                    </div>

                    <div className="col-md-6 col-12">
                            <section className="box nobox ">
                                <div className="content-body">    <div className="row">
                                        <div className="col-12">

                                            <div className="wid-blog">

                                                <div className="wid-blog-title">
                                                    <h2>This is a beautiful theme with tons of features</h2>
                                                    <span className='actions'><i className='i-times'></i></span>
                                                </div>

                                                <div className="bg-white wid-blog-content row">

                                                    <div className="pic-wrapper col-3 col-xl-2 col-lg-3 float-left">
                                                        <img src={IMGDIR+"/images/profile/avatar-5.jpg"} className="" alt=""/>
                                                    </div>
                                                    <div className="info-wrapper col-9 col-xl-10 col-lg-9 float-left">                 
                                                        <div className="username">
                                                            <h4 className="">John Smith</h4>
                                                        </div>
                                                        <div className="info text-muted">
                                                            "Balance" is a concept based on human perception and the complex nature of the human senses of weight and proportion.
                                                        </div>  
                                                        <div className="info-details">
                                                            <ul className="list-unstyled list-inline">
                                                                <li className="list-inline-item"><a href="#!" className="text-muted">12<sup>th</sup> March, 2015</a></li>
                                                                <li className="list-inline-item"><a href="#!" className="text-muted"><i className="i-bubble"></i> 584</a></li>
                                                                <li className="list-inline-item"><a href="#!" className="text-muted"><i className="i-heart"></i> 12k</a></li>
                                                                <li className="list-inline-item"><a href="#!" className="text-muted">More</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    
                    </div>
                    <div className="clearfix"></div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Visitor's Statistics</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row margin-0">
                                    <div className="col-12">
                                        <div className="wid-vectormap mapfull">
                                            <div className="row">
                                                <div className="map_progress col-12 col-md-4">
                                                    <h4>Unique Visitors</h4>
                                                    <span className='text-muted'>Last Week Rise by 62%</span>
                                                    <div className="progress"><div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style={{width: 62+'%'}}></div></div>
                                                    <br/>
                                                </div>
                                                <div className="map_progress col-12 col-md-4">
                                                    <h4>Registrations</h4>
                                                    <span className='text-muted'>Up by 57% last 7 days</span>
                                                    <div className="progress"><div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: 57+'%'}}></div></div>
                                                    <br/>
                                                </div>
                                                <div className="map_progress col-12 col-md-4">
                                                    <h4>Direct Sales</h4>
                                                    <span className='text-muted'>Last Month Rise by 22%</span>
                                                    <div className="progress"><div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100" style={{width: 22+'%'}}></div></div>
                                                    <br/>
                                                </div>

                                                <div className="col-12 col-md-12 widget-map-area">
                                                    <div style={{width: 100+'%', height: 350}}>
                                                         <VectorMap map={'world_mill'}
                                                               backgroundColor=""
                                                               ref="map"
                                                               containerStyle={{
                                                                   width: '100%',
                                                                   height: '100%',
                                                               }}
                                                                markerStyle= {{
                                                                    initial: {
                                                                        fill: '#26a69a',
                                                                        stroke: '#ffffff',
                                                                        "stroke-width": 2,
                                                                        r: 6
                                                                    },
                                                                    hover: {
                                                                        fill: '#ff8a65',
                                                                        stroke: '#ffffff',
                                                                        "stroke-width": 2,
                                                                        cursor: 'pointer'
                                                                    },
                                                                    selected: {
                                                                        fill: '#FDB45C',
                                                                        "stroke-width": 0,
                                                                    },
                                                                }}
                                                                selectedRegion={{}}
                                                                regionStyle={{
                                                                  initial: {
                                                                    fill: "#26a69a"
                                                                  },
                                                                  hover: {
                                                                    fill: "#ff8a65"
                                                                  }
                                                                }}
                                                                markers={this.state.data1}
                                                               containerClassName="map"
                                                            />
                                                    </div>
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

export default Widgetsmisc;
