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

import { messagewidget } from 'variables/general/widget.jsx';

import {
    dashboardAllProductsChart,
    dashboardAllProductsChart2,
    dashboardAllProductsChart3,
} from 'variables/general/dashboard-charts-5.jsx';

import {
  Mailbox,
} from 'components';

import { mailbox } from 'variables/general/mailbox.jsx';

import PerfectScrollbar from 'perfect-scrollbar';
var ps;
var mailps;

var IMGDIR = process.env.REACT_APP_IMGDIR;

class Dashboard5 extends React.Component{
   
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
    '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
    ],
    hoverBackgroundColor: [
    '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
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
    data: [300, 350, 1060, 75, 10],
    backgroundColor: [
      '#ffccbc','#ffab91','#ff8a65','#ffa183','#fc8b68','#fe825b'
    ],
    hoverBackgroundColor: [
      '#ffccbc','#ffab91','#ff8a65','#ffa183','#fc8b68','#fe825b'
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
    data: [3010, 50, 1100, 75, 101],
    backgroundColor: [
    '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
    ],
    hoverBackgroundColor: [
    '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
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
    data: [300, 520, 1100, 715, 140],
    backgroundColor: [
      '#ffccbc','#ffab91','#ff8a65','#ffa183','#fc8b68','#fe825b'
    ],
    hoverBackgroundColor: [
      '#ffccbc','#ffab91','#ff8a65','#ffa183','#fc8b68','#fe825b'
    ]
  }]
};

const options123={
    legend: {
        display: false,
    },
};

const data221 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Users',
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(38, 166, 154,0.8)',
      hoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [1165, 1219, 180, 2121, 216, 1410, 211, 1116,265, 1119,140, 2111]
    },
    {
      label: 'Visits',
      backgroundColor: 'rgba(255, 138, 101,1)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 138, 101,0.8)',
      hoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [2155, 2179, 1140, 211, 1116, 265, 1119, 280, 121, 3116,265, 1119]
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
              barPercentage: 0.5,
              maxBarThickness: 8,
              gridLines: {
                 color: "rgba(0, 0, 0, 0.01)",
              },
                display:0,
                ticks: {
                  display: false
                }
            }],
            yAxes: [{
                categoryPercentage: 0.8,
                barPercentage: 0.6,
                maxBarThickness: 12,
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
                            <h1 className="title">Dashboard 5</h1>
                        </div>
                    </div>

                          <div className="row margin-0">
                          


                            <div className="col-12 col-xl-8 col-lg-6 col-md-6 col-sm-12">
                                    <section className="box ">
                                    <header className="panel_header">
                                        <h2 className="title float-left">Mailbox</h2>
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


                                  <div className="col-12 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                      <section className="box ">
                                          <header className="panel_header">
                                              <h2 className="title float-left">Visitors</h2>
                                              
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
                                                                                        fill: '#ff8a65',
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
                                                                            <h3 className="widtitle">6406</h3>
                                                                            <p className="widtag">Users this month</p>
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
                                                                            <h3 className="widtitle">5322</h3>
                                                                            <p className="widtag">Post Shares</p>
                                                                          </div> 
                                                                        </div> 
                                                                    </div>
                                                                </div>
                                                                <div className="graph-stats">
                                                                    <div className="graph_widget">
                                                                        <div className="row">
                                                                          <div className="col-6 col-sm-8 col-md-6">
                                                                            <div className="chart-area" style={{height: 50+'px', width: 100+'%', 'maxWidth': 'none'}}>
                                                                              <Line data={dashboardAllProductsChart3.data} options={dashboardAllProductsChart3.options} />
                                                                            </div>
                                                                          </div>                                        
                                                                          <div className="widdata col-6 col-sm-4 col-md-6">
                                                                            <h3 className="widtitle">$8575</h3>
                                                                            <p className="widtag">Revenue Generated</p>
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


                          </div> 
                          
                          <div className="row margin-0">
                            
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Subsciptions</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 120+'px', marginLeft: '-60px'}}>
                                                  <Doughnut height={240} data={data12} options={options12} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">645 Users</h2>
                                          <p className="widtag">Total 30% monthly increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Activity</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 120+'px', marginLeft: '-60px'}}>
                                                  <Doughnut height={240} data={data121} options={options121} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">753 Posts</h2>
                                          <p className="widtag">Total 60% monthly increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Shares & Likes</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 120+'px', marginLeft: '-60px'}}>
                                                  <Doughnut height={240} data={data122} options={options122} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">865 Shares</h2>
                                          <p className="widtag">Total 10% monthly increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 d-md-none d-lg-none d-xl-block d-sm-block">
                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Media</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 120+'px', marginLeft: '-60px'}}>
                                                  <Doughnut height={240} data={data123} options={options123} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">152 Uploads</h2>
                                          <p className="widtag">Total 30% monthly increase</p>
                                        </div> 
                                        </div>
                                    </div>

                          </div>



                          <div className="row margin-0">



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
                                                  height={390}
                                                   options={options221}
                                                  
                                                />

                                            </div>
                                        </div>  


                                        <div className="clearfix"></div>
                                    
                                    
                                    <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-6">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">350 <img alt="progress-img" src={IMGDIR+"/images/increase-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Shares</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-6 d-xl-block d-md-none d-lg-none d-sm-block">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">843 <img alt="progress-img" src={IMGDIR+"/images/increase-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Likes</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-6">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">731 <img alt="progress-img" src={IMGDIR+"/images/decrease-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Followers</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-3 col-md-6 col-lg-6 col-sm-6 col-6 d-xl-block d-md-none d-lg-none d-sm-block">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">853 <img alt="progress-img" src={IMGDIR+"/images/increase-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Uploads</p>
                                        </div> 
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

export default Dashboard5;
