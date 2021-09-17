import React from 'react';
import {
    Table,
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import { Line, Bar, Doughnut, Scatter, HorizontalBar } from 'react-chartjs-2';

//import styles from 'jvectormap/jquery-jvectormap.css'
import { VectorMap } from 'react-jvectormap';

import {
    playlistCharts,
    playlistCharts3,
    playlistCharts4,
    playlistCharts5,
    playlistCharts1,
    playlistCharts2,
} from 'variables/general/dashboard-charts.jsx';

import {
    //dashboardAllProductsChart,
    //dashboardAllProductsChart1,
    dashboardAllProductsChart3,
} from 'variables/general/dashboard-charts.jsx';

//import CountTo from 'react-count-to';

import {
    Mailbox,
} from 'components';

//import { messagewidget } from 'variables/general/widget.jsx';
import { mailbox } from 'variables/general/mailbox.jsx';

import PerfectScrollbar from 'perfect-scrollbar';
var mailps;


class General extends React.Component{
    
    componentDidMount(){
        if(navigator.platform.indexOf('Win') > -1){
            mailps = new PerfectScrollbar(this.refs.mailboxlist,{suppressScrollX: true, suppressScrollY: false});
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
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
/*
const data123 = {
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

const options123={
    legend: {
        display: false,
    },
};*/


const data32 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Subscriptions',
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,0.8)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(38, 166, 154,0.8)',
      hoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [175, 159, 145, 121, 212, 125, 190]
    },
    {
      label: 'Visitors',
      backgroundColor: 'rgba(255, 138, 101,1)',
      borderColor: 'rgba(255, 138, 101,0.8)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 138, 101,0.8)',
      hoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [135, 129, 90, 91, 156, 95, 130]
    }
  ]
};


const options32 = {
        legend: {
          display: false,
       },
        scales: {
             xAxes: [{
              display:1,
              gridLines: {
                 color: "rgba(0, 0, 0, 0.01)",
              },
              ticks: {
                  display: false
              },

            }],
            yAxes: [{
                categoryPercentage: 0.7,
                barPercentage: 0.5,
                maxBarThickness: 11,
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




const data42 = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'Users New / Visitors',
      fill: true,
      backgroundColor: 'rgba(38, 166, 154,0.4)',
      pointBorderColor: 'rgba(38, 166, 154,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(38, 166, 154,1)',
      pointHoverBorderColor: 'rgba(38, 166, 154,1)',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointHitRadius: 5,
      data: [
        { x: 165, y: 275 },
        { x: 159, y: 349 },
        { x: 280, y: 290 },
        { x: 181, y: 329 },
        { x: 156, y: 236 },
        { x: 255, y: 225 },
        { x: 246, y: 366 },
        { x: 355, y: 275 },
        { x: 310, y: 218 },
        { x: 215, y: 425 },
        { x: 131, y: 339 },
        { x: 136, y: 476 },
        { x: 215, y: 325 },
        { x: 280, y: 258 },
        { x: 355, y: 145 },
        { x: 129, y: 159 },

      ]
    }
  ]
};

const options4={
        legend: {
          display: false,
       },
        scales: {
             xAxes: [{
              display:1,
              gridLines: {
                 color: "rgba(0, 0, 0, 0.01)",
              },
              ticks: {
                  display: false
              },

            }],
            yAxes: [{
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


const data312 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    
    {
      label: 'Subscriptions',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(255, 138, 101,0.55)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(255, 138, 101,0.55)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255, 138, 101,0.55)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [45, 74, 60, 65, 56, 65, 70]
    },
    {
      label: 'Users',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(38, 166, 154,0.55)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(38, 166, 154,0.55)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(38, 166, 154,0.55)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [85, 61, 60, 85, 66,75, 80]
    }
  ]
};

const options312 = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode:"nearest",
      intersect: 0,
      position:"nearest",
      xPadding:10,
      yPadding:10,
      caretPadding:10
    },
    responsive: 1,
    scales: {
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
            }],
        xAxes: [{
              display:1,
              gridLines: {
                 color: "rgba(0, 0, 0, 0.01)",
              },
              ticks: {
                  display: false
              },

            }]
    },
    layout:{
      padding:{left:0,right:0,top:0,bottom:0}
    }
};


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

const data121 = {
  labels: [
    'Firefox',
    'Chrome',
    'Edge',
    'Opera',
    'IE'
  ],
  datasets: [{
    data: [3400, 560, 1400, 4475, 1440],
    backgroundColor: [
      '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
    ],
    hoverBackgroundColor: [
      '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
    ]
  }]
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
    data: [300, 5032, 1010, 715, 1110],
    backgroundColor: [
      '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
    ],
    hoverBackgroundColor: [
      '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
    ]
  }]
};

const data124 = {
  labels: [
    'Firefox',
    'Chrome',
    'Edge',
    'Opera',
    'IE'
  ],
  datasets: [{
    data: [3040, 530, 1002, 1175, 2110],
    backgroundColor: [
      '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
    ],
    hoverBackgroundColor: [
      '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
    ]
  }]
};

const data125 = {
  labels: [
    'Firefox',
    'Chrome',
    'Edge',
    'Opera',
    'IE'
  ],
  datasets: [{
    data: [1300, 250, 2100, 175, 1110],
    backgroundColor: [
      '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
    ],
    hoverBackgroundColor: [
      '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
    ]
  }]
};

const data126 = {
  labels: [
    'Firefox',
    'Chrome',
    'Edge',
    'Opera',
    'IE'
  ],
  datasets: [{
    data: [300, 250, 2100, 275, 1011],
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



        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Dashboard</h1>
                        </div>
                    </div>




                    <div className="clearfix"></div>
                    <div className="col-xl-12">
                        <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box graph_widget">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                            <Bar data={playlistCharts3.data} options={playlistCharts3.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">9754</h2>
                                          <p className="widtag">Sales this month</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box graph_widget">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                            <Bar data={playlistCharts4.data} options={playlistCharts4.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">$95000</h2>
                                          <p className="widtag">Monthly Earnings</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box graph_widget">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                            <Bar data={playlistCharts5.data} options={playlistCharts5.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">89.99%</h2>
                                          <p className="widtag">Target Achieved</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-4 d-xl-block d-lg-none d-md-none d-sm-block col-sm-6 col-12">
                                        <div className="db_box graph_widget">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                            <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">32000</h2>
                                          <p className="widtag">New Visitors</p>
                                        </div> 
                                        </div>
                                    </div>

                            </div>

                          </div>





                            <div className="row margin-0">

                                 <div className="col-12 col-lg-7 col-xl-8 col-md-7">
                                    <section className="box ">
                                        <header className="panel_header">
                                            <h2 className="title float-left">Site Users</h2>
                                            
                                        </header>
                                        <div className="content-body">        <div className="row">
                                                <div className="col-12">
                                                    <div className="chart-container">
                                                        
                                                        <div className="chart-area">
                                                          <HorizontalBar data={data32} options={options32} height={385} />
                                                        </div>

                                                    </div>


                                                </div>      
                                            </div> 
                                        </div>
                                    </section>    
                                </div>

                         <div className="col-12 col-lg-5 col-md-5 col-xl-4">

                                <section className="box ">
                                          <header className="panel_header">
                                              <h2 className="title float-left">Visitor Locations</h2>
                                              
                                          </header>
                                          <div className="content-body">    <div className="row margin-0">
                                                  <div className="col-12">
                                                      <div className="wid-vectormap mapsmall">
                                                          <div className="row">
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
                                                                                        fill: '#26a69a',
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
                                                              <div className="map_progress col-12 col-md-12" style={{'marginTop': '-15px'}}>
                                                                  <h5>Unique Visitors</h5>
                                                                  <span className='text-muted'>Last Week Rise by 62%</span>
                                                                  <div className="progress"><div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style={{width: 62+'%'}}></div></div>
                                                                  <br/>
                                                                  <h5>Registrations</h5>
                                                                  <span className='text-muted'>Up by 57% last 7 days</span>
                                                                  <div className="progress"><div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: 57+'%'}}></div></div>
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
                        
                        <div className="col-12 col-lg-6 col-md-6">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Today Stats</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">

                                              <Line data={dashboardAllProductsChart3.data} options={dashboardAllProductsChart3.options} height={380}/>


                                            </div>
                                        </div>  

                                    </div> 
                                </div>
                            </section>    
                          </div>
                          
                        <div className="col-12 col-lg-6 col-md-6">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Site Referrals</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">
                                              <Scatter data={data42} options={options4} height={380} />
                                            </div>
                                        </div>      
                                    </div> 
                                </div>
                            </section>    

                      </div>

                    </div>





                    <div className="row margin-0">

                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox">
                                        <div className="widdata">
                                          <i className='widicon i-wallet icon-lg icon-primary'></i>
                                          <h3 className="widtitle">$4k Income</h3>
                                          <p className="widtag">30% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox bg-primary colored">
                                        <div className="widdata">
                                          <i className='widicon i-user icon-lg icon-white'></i>
                                          <h3 className="widtitle">560 Users</h3>
                                          <p className="widtag">15% increase</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox">
                                        <div className="widdata">
                                          <i className='widicon i-trophy icon-lg icon-primary'></i>
                                          <h3 className="widtitle">34 Awards</h3>
                                          <p className="widtag">20% increase</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox bg-primary colored">
                                        <div className="widdata">
                                          <i className='widicon i-envelope icon-lg icon-white'></i>
                                          <h3 className="widtitle">643 Mails</h3>
                                          <p className="widtag">30% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 d-xl-block d-lg-none d-md-none d-sm-block col-sm-4 col-6">
                                        <div className="db_box iconbox">
                                        <div className="widdata">
                                          <i className='widicon i-basket icon-lg icon-primary'></i>
                                          <h3 className="widtitle">364 Sales</h3>
                                          <p className="widtag">30% increase</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-2 d-xl-block d-lg-none d-md-none d-sm-block col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox bg-primary colored">
                                        <div className="widdata">
                                          <i className='widicon i-cup icon-lg icon-white'></i>
                                          <h3 className="widtitle">223 Coffee</h3>
                                          <p className="widtag">10% increase</p>
                                        </div> 
                                        </div>
                                    </div>
                          </div>




                          <div className="row margin-0">

                                  <div className="col-xl-8 col-lg-12 col-md-12 col-12">
                                      <section className="box ">
                                      <header className="panel_header">
                                          <h2 className="title float-left">Messages</h2>
                                      </header>
                                          <div className="content-body">    <div className="row">
                                                  <div className="col-12">
                                                      <div className="wid-notification">

                                                      <ul className="list-unstyled notification-widget" ref="mailboxlist">

                                                          <Mailbox mailbox={mailbox}/>
                                                          
                                                          </ul>

                                                      </div>

                                                  </div>
                                              </div>
                                          </div>
                                      </section>

                                  </div>



                                  <div className="col-xl-4 col-lg-5 d-xl-block d-lg-none d-md-none col-md-5 col-12">
                                      
                                      <section className="box ">
                                          <header className="panel_header">
                                              <h2 className="title float-left">Users</h2>
                                              
                                          </header>
                                          <div className="content-body">       
                                           <div className="row">
                                           <div className="col-12"> 
                                              <Table responsive className="fixheight">
                                                      <thead>
                                                        <tr>
                                                          <th>Name</th>
                                                          <th>Earnings</th>
                                                          <th>Progress</th>
                                                        </tr>
                                                      </thead>
                                                      <tbody>
                    
                                                        <tr>
                                                            <td>Isaac Carr</td>
                                                            <td>$145,466</td>
                                                            <td><span className="playlist_song1">
                                                            <div className="chart-area" style={{height: 40+'px', width: 70+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                                                <Bar data={playlistCharts1.data} options={playlistCharts1.options} />
                                                            </div>
                                                            </span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Kevin Alsop</td>
                                                            <td>$645,662</td>
                                                            <td><span className="playlist_song1">
                                                            <div className="chart-area" style={{height: 40+'px', width: 70+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                                                <Bar data={playlistCharts2.data} options={playlistCharts2.options} />
                                                            </div>
                                                            </span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Lucas Allan</td>
                                                            <td>$755,445</td>
                                                            <td><span className="playlist_song1">
                                                            <div className="chart-area" style={{height: 40+'px', width: 70+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                                                <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                                            </div>
                                                            </span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Austin Bell</td>
                                                            <td>$753,234</td>
                                                            <td><span className="playlist_song1">
                                                            <div className="chart-area" style={{height: 40+'px', width: 70+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                                                <Bar data={playlistCharts1.data} options={playlistCharts1.options} />
                                                            </div>
                                                            </span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>David Berry</td>
                                                            <td>$123,785</td>
                                                            <td><span className="playlist_song1">
                                                            <div className="chart-area" style={{height: 40+'px', width: 70+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                                                <Bar data={playlistCharts2.data} options={playlistCharts2.options} />
                                                            </div>
                                                            </span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Evan Hector</td>
                                                            <td>$752,786</td>
                                                            <td><span className="playlist_song1">
                                                            <div className="chart-area" style={{height: 40+'px', width: 70+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                                                <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                                            </div>
                                                            </span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>John Gordon</td>
                                                            <td>$342,868</td>
                                                            <td><span className="playlist_song1">
                                                            <div className="chart-area" style={{height: 40+'px', width: 70+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                                                <Bar data={playlistCharts2.data} options={playlistCharts2.options} />
                                                            </div>
                                                            </span></td>
                                                        </tr>



                                                    </tbody>
                                                  </Table>

                                                  </div> 

                                              </div> 
                                          </div>
                                      </section>   


                                  </div>


                          </div>


                        <div className="col-12 col-lg-12 col-xl-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Subscriptions</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">

                                              <Line data={data312} options={options312} height={350}/>

                                            </div>
                                        </div>  

                                        <div className="clearfix"></div>
                                    
                                        <div className="spacer"></div>
                                    
                                        <div className="spacer"></div>
                                    

                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="biggraph_widget centered transparent inline">
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 100+'px', marginLeft: '-50px'}}>
                                                  <Doughnut height={240} data={data12} options={options12} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h3 className="widtitle">January</h3>
                                          <p className="widtag">30% increase</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="biggraph_widget centered transparent inline">
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 100+'px', marginLeft: '-50px'}}>
                                                  <Doughnut height={240} data={data121} options={options12} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h3 className="widtitle">February</h3>
                                          <p className="widtag">20% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="biggraph_widget centered transparent inline">
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 100+'px', marginLeft: '-50px'}}>
                                                  <Doughnut height={240} data={data122} options={options12} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h3 className="widtitle">March</h3>
                                          <p className="widtag">43% increase</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="biggraph_widget centered transparent inline">
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 100+'px', marginLeft: '-50px'}}>
                                                  <Doughnut height={240} data={data126} options={options12} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h3 className="widtitle">April</h3>
                                          <p className="widtag">23% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 d-xl-block d-lg-none d-md-none d-sm-block">
                                        <div className="biggraph_widget centered transparent inline">
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 100+'px', marginLeft: '-50px'}}>
                                                  <Doughnut height={240} data={data124} options={options12} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h3 className="widtitle">May</h3>
                                          <p className="widtag">54% increase</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 d-xl-block d-lg-none d-md-none d-sm-block">
                                        <div className="biggraph_widget centered transparent inline">
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 100+'px', marginLeft: '-50px'}}>
                                                  <Doughnut height={240} data={data125} options={options12} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h3 className="widtitle">June</h3>
                                          <p className="widtag">65% increase</p>
                                        </div> 
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

export default General;
