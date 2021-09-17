import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import { Line, Bar, Doughnut } from 'react-chartjs-2';

//import styles from 'jvectormap/jquery-jvectormap.css'
import { VectorMap } from 'react-jvectormap';


import {
    Messagewidget,
} from 'components';

import { messagewidget } from 'variables/ecommerce/widget.jsx';

import {
    dashboardAllProductsChart,
    dashboardAllProductsChart1,
    dashboardAllProductsChart2,
} from 'variables/ecommerce/dashboard-charts.jsx';

import {
  Mailbox,
} from 'components';

import { mailbox } from 'variables/ecommerce/mailbox.jsx';

import PerfectScrollbar from 'perfect-scrollbar';
var ps;
var mailps;

var IMGDIR = process.env.REACT_APP_IMGDIR;

class Ecommerce extends React.Component{
   
    componentDidMount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.notificationlist,{suppressScrollX: true, suppressScrollY: false});
            mailps = new PerfectScrollbar(this.refs.mailboxlist,{suppressScrollX: true, suppressScrollY: false});
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
            mailps.destroy();
        }
    }
    

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

const data12 = {
  labels: [
    'Firefox',
    'Chrome',
    'Edge',
    'Opera',
    'IE'
  ],
  datasets: [{
    data: [300, 50, 100, 75, 10],
    backgroundColor: [
    '#fb7ca0','#fb638e','#f9a5bd','#fd2763','#fc497c','#fa2e68'
    ],
    hoverBackgroundColor: [
    '#fb7ca0','#fb638e','#f9a5bd','#fd2763','#fc497c','#fa2e68'
    ]
  }]
};

const options12={
    legend: {
        display: false,
    },
};


const data121 = {
  labels: [
    'Firefox',
    'Chrome',
    'Edge',
    'Opera',
    'IE'
  ],
  datasets: [{
    data: [300, 530, 1100, 175, 310],
    backgroundColor: [
    '#fb7ca0','#fb638e','#f9a5bd','#fd2763','#fc497c','#fa2e68'
    ],
    hoverBackgroundColor: [
    '#fb7ca0','#fb638e','#f9a5bd','#fd2763','#fc497c','#fa2e68'
    ]
  }]
};

const options121={
    legend: {
        display: false,
    },
};


const data122 = {
  labels: [
    'Firefox',
    'Chrome',
    'Edge',
    'Opera',
    'IE'
  ],
  datasets: [{
    data: [1300, 1250, 2100, 2175, 1110],
    backgroundColor: [
    '#fb7ca0','#fb638e','#f9a5bd','#fd2763','#fc497c','#fa2e68'
    ],
    hoverBackgroundColor: [
    '#fb7ca0','#fb638e','#f9a5bd','#fd2763','#fc497c','#fa2e68'
    ]
  }]
};

const options122={
    legend: {
        display: false,
    },
};


const data123 = {
  labels: [
    'Firefox',
    'Chrome',
    'Edge',
    'Opera',
    'IE'
  ],
  datasets: [{
    data: [300, 150, 1100, 75, 210],
    backgroundColor: [
    '#fb7ca0','#fb638e','#f9a5bd','#fd2763','#fc497c','#fa2e68'
    ],
    hoverBackgroundColor: [
    '#fb7ca0','#fb638e','#f9a5bd','#fd2763','#fc497c','#fa2e68'
    ]
  }]
};

const options123={
    legend: {
        display: false,
    },
};






const data221 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Vendors',
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(38, 166, 154,0.8)',
      hoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [165, 219, 180, 221, 216, 140, 211]
    },
    {
      label: 'Customers',
      backgroundColor: 'rgba(251, 99, 142,1)',
      borderColor: 'rgba(251, 99, 142,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(251, 99, 142,0.8)',
      hoverBorderColor: 'rgba(251, 99, 142,1)',
      data: [255, 279, 140, 211, 116, 265, 119]
    }
  ]
};


const options221={
        legend: {
          display: false,
       },
        scales: {
             xAxes: [{
              categoryPercentage: 0.6,
              barPercentage: 0.6,
              maxBarThickness: 9,
              gridLines: {
                 color: "rgba(0, 0, 0, 0)",
              },
                ticks: {
                  display: false
                }
            }],
            yAxes: [{
                categoryPercentage: 0.7,
                barPercentage: 0.7,
                maxBarThickness: 8,
                display:1,
                gridLines: {
                  color: "rgba(0, 0, 0, 0.01)",
                },
                ticks: {
                  display: true
                }
            }]
      },
    maintainAspectRatio: false 
  };


        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Ecommerce Dashboard</h1>
                        </div>
                    </div>

                          <div className="row margin-0">
                            
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Product Sales</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 120+'px', marginLeft: '-60px'}}>
                                                  <Doughnut height={240} data={data12} options={options12} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">4500 Sales</h2>
                                          <p className="widtag">Total 30% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Monthly Earnings</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 120+'px', marginLeft: '-60px'}}>
                                                  <Doughnut height={240} data={data121} options={options121} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">$23K Earnings</h2>
                                          <p className="widtag">Total 20% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Vendors</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 120+'px', marginLeft: '-60px'}}>
                                                  <Doughnut height={240} data={data122} options={options122} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">324 Vendors</h2>
                                          <p className="widtag">Total 10% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 d-md-none d-lg-none d-xl-block d-sm-block">
                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Customers</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 120+'px', marginLeft: '-60px'}}>
                                                  <Doughnut height={240} data={data123} options={options123} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">4341 Users</h2>
                                          <p className="widtag">Total 10% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                          </div>



                          <div className="row margin-0">




                        <div className="col-12 col-md-6 col-lg-6 col-xl-8">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Users</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">

                                              <Bar
                                                  data={data221}
                                                  height={370}
                                                   options={options221}
                                                  
                                                />

                                            </div>
                                        </div>  


                                        <div className="clearfix"></div>
                                    
                                        <div className="spacer"></div>
                                    
                                    <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-6">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">23% <img alt="progress-img" src={IMGDIR+"/images/increase-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Products</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-6 d-xl-block d-md-none d-lg-none d-sm-block">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">34% <img alt="progress-img" src={IMGDIR+"/images/increase-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Earnings</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-6">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">13% <img alt="progress-img" src={IMGDIR+"/images/decrease-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Vendors</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-6 d-xl-block d-md-none d-lg-none d-sm-block">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">43% <img alt="progress-img" src={IMGDIR+"/images/increase-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Customers</p>
                                        </div> 
                                        </div>
                                    </div>

                                    </div> 
                                </div>
                            </section>    
                          </div>


                              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                                  <section className="box">
                                  <header className="panel_header">
                                      <h2 className="title float-left">Messages</h2>
                                  </header>
                                      <div className="content-body">    <div className="row">
                                              <div className="col-12">
                                                  <div className="wid-notification">

                                                      <ul className="list-unstyled notification-widget" ref="notificationlist" style={{'height': '465px'}}>

                                                          <Messagewidget messagewidget={messagewidget}/>

                                                      </ul>

                                                  </div>

                                              </div>
                                          </div>
                                      </div>
                                  </section>

                              </div>





                    <div className="col-12 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Site Visitors</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row margin-0">
                                    <div className="col-12 padding-0">
                                        <div className="wid-vectormap mapsmall">
                                            <div className="row">
                                                <div className="col-12 col-md-12">
                                                  <div style={{width: 100+'%', height: 250}}>
                                                      <VectorMap map={'world_mill'}
                                                                 backgroundColor=""
                                                                 ref="map"
                                                                 containerStyle={{
                                                                     width: '100%',
                                                                     height: '100%',
                                                                 }}
                                                                  markerStyle= {{
                                                                      initial: {
                                                                          fill: '#fb638e',
                                                                          stroke: '#ffffff',
                                                                          "stroke-width": 2,
                                                                          r: 5
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
                                                                      fill: "#fb638e"
                                                                    },
                                                                    hover: {
                                                                      fill: "#fb638e"
                                                                    }
                                                                  }}
                                                                  markers={this.state.data1}
                                                                 containerClassName="map"
                                                      />
                                                  </div>

                                                </div>
                                                <div className="bar_graph_rows">


                                                  <div className="graph-stats">
                                                      <div className="graph_widget">
                                                          <div className="row">
                                                            <div className="col-6 col-sm-8 col-md-6">
                                                              <div className="chart-area" style={{height: 50+'px', width: 100+'%', 'maxWidth': 'none'}}>
                                                                <Line data={dashboardAllProductsChart.data} options={dashboardAllProductsChart.options} />
                                                              </div>
                                                            </div>                                        
                                                            <div className="widdata col-6 col-sm-4 col-md-6">
                                                              <h3 className="widtitle">$8,534</h3>
                                                              <p className="widtag">10% increment in sales</p>
                                                            </div> 
                                                          </div> 
                                                      </div>
                                                  </div>
                                                  <div className="graph-stats">
                                                      <div className="graph_widget">
                                                          <div className="row">
                                                            <div className="col-6 col-sm-8 col-md-6">
                                                              <div className="chart-area" style={{height: 50+'px', width: 100+'%', 'maxWidth': 'none'}}>
                                                                <Line data={dashboardAllProductsChart1.data} options={dashboardAllProductsChart1.options} />
                                                              </div>
                                                            </div>                                        
                                                            <div className="widdata col-6 col-sm-4 col-md-6">
                                                              <h3 className="widtitle">5432</h3>
                                                              <p className="widtag">20% increment in likes</p>
                                                            </div> 
                                                          </div> 
                                                      </div>
                                                  </div>
                                                  <div className="graph-stats">
                                                      <div className="graph_widget">
                                                          <div className="row">
                                                            <div className="col-6 col-sm-8 col-md-6">
                                                              <div className="chart-area" style={{height: 50+'px', width: 100+'%', 'maxWidth': 'none'}}>
                                                                <Line data={dashboardAllProductsChart2.data} options={dashboardAllProductsChart2.options} />
                                                              </div>
                                                            </div>                                        
                                                            <div className="widdata col-6 col-sm-4 col-md-6">
                                                              <h3 className="widtitle">4242</h3>
                                                              <p className="widtag">30% increment in shares</p>
                                                            </div> 
                                                          </div> 
                                                      </div>
                                                  </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>      
                                </div>

                            </div>
                        </section>

                    </div>

                    <div className="col-12 col-xl-8 col-lg-6 col-md-6 col-sm-12">
                            <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Mails</h2>
                            </header>
                                <div className="content-body">    <div className="row">
                                        <div className="col-12">
                                            <div className="wid-notification">

                                                <ul className="list-unstyled notification-widget" ref="mailboxlist" style={{'height': '430px'}}>

                                                    <Mailbox mailbox={mailbox}/>
                                                    


                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>


                            </div>    


                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Ecommerce;
