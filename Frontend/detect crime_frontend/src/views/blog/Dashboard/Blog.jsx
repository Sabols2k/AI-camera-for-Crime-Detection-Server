import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import { Line, Bar, Doughnut, Scatter } from 'react-chartjs-2';

//import styles from 'jvectormap/jquery-jvectormap.css'
import { VectorMap } from 'react-jvectormap';

import {
    playlistCharts,
    playlistCharts1,
    playlistCharts2,
    playlistCharts3,
} from 'variables/blog/dashboard-charts.jsx';

import {
    dashboardAllProductsChart,
    dashboardAllProductsChart1,
    dashboardAllProductsChart31,
} from 'variables/blog/dashboard-charts.jsx';


class Blog extends React.Component{
   
    

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
    'New',
    'Last year',
    'Last Month',
    'today',
    'All time'
  ],
  datasets: [{
    data: [300, 520, 100, 715, 110],
    backgroundColor: [
      '#fb6373','#fb7987','#fb9fa9','#fc4a5d','#fd364b'
    ],
    hoverBackgroundColor: [
      '#fb6373','#fb7987','#fb9fa9','#fc4a5d','#fd364b'
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
    'New',
    'Last year',
    'Last Month',
    'today',
    'All time'
  ],
  datasets: [{
    data: [300, 250, 100, 275, 10],
    backgroundColor: [
      '#fb6373','#fb7987','#fb9fa9','#fc4a5d','#fd364b'
    ],
    hoverBackgroundColor: [
      '#fb6373','#fb7987','#fb9fa9','#fc4a5d','#fd364b'
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
    'New',
    'Last year',
    'Last Month',
    'today',
    'All time'
  ],
  datasets: [{
    data: [300, 150, 100, 75, 110],
    backgroundColor: [
      '#fb6373','#fb7987','#fb9fa9','#fc4a5d','#fd364b'
    ],
    hoverBackgroundColor: [
      '#fb6373','#fb7987','#fb9fa9','#fc4a5d','#fd364b'
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
    'New',
    'Last year',
    'Last Month',
    'today',
    'All time'
  ],
  datasets: [{
    data: [300, 50, 100, 75, 10],
    backgroundColor: [
      '#fb6373','#fb7987','#fb9fa9','#fc4a5d','#fd364b'
    ],
    hoverBackgroundColor: [
      '#fb6373','#fb7987','#fb9fa9','#fc4a5d','#fd364b'
    ]
  }]
};

const options123={
    legend: {
        display: false,
    },
};







const data312 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Visits',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(38, 166, 154,0)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(38, 166, 154,1)',
      pointBorderWidth: 4,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(38, 166, 154,1)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [65, 59, 50, 65, 56, 50, 60]
    },
    {
      label: 'Subscriptions',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(251, 99, 115,0)',
      borderColor: 'rgba(251, 99, 115,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(251, 99, 115,1)',
      pointBorderWidth: 4,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(251, 99, 115,1)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [45, 74, 60, 65, 56, 65, 70]
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



const data221 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Posts',
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(38, 166, 154,0.8)',
      hoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [1265, 1429, 1720, 1511, 1316, 1420,1243]
    },
    {
      label: 'Likes',
      backgroundColor: 'rgba(251, 99, 115,1)',
      borderColor: 'rgba(251, 99, 115,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(251, 99, 115,0.8)',
      hoverBorderColor: 'rgba(251, 99, 115,1)',
      data: [1465, 1619, 1130, 1821, 1516, 1455,1543]
    },
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
                maxBarThickness: 8,
              gridLines: {
                 color: "rgba(0, 0, 0, 0)",
              },
                ticks: {
                  display: false
                }
            }],
            yAxes: [{
                categoryPercentage: 0.6,
                barPercentage: 0.6,
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


const data4 = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'Uploads / Downloads',
      fill: true,
      backgroundColor: 'rgba(251, 99, 115,0.4)',
      pointBorderColor: 'rgba(251, 99, 115,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: 'rgba(251, 99, 115,1)',
      pointHoverBorderColor: 'rgba(251, 99, 115,1)',
      pointHoverBorderWidth: 4,
      pointRadius: 5,
      pointHitRadius: 5,
      data: [
        { x: 165, y: 275 },
        { x: 159, y: 349 },
        { x: 280, y: 290 },
        { x: 181, y: 329 },
        { x: 156, y: 236 },
        { x: 255, y: 225 },
        { x: 240, y: 278 },
        { x: 275, y: 455 },
        { x: 149, y: 439 },
        { x: 160, y: 240 },
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
                            <h1 className="title">Blog Dashboard</h1>
                        </div>
                    </div>


                            <div className="row margin-0">

                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box graph_widget pie">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 100+'px'}}>
                                                  <Doughnut height={190} data={data12} options={options12} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left widdata-pie">
                                          <h2 className="widtitle">Posts</h2>
                                          <p className="widtag">17% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box graph_widget">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                            <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">Users</h2>
                                          <p className="widtag">12% increase</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box graph_widget pie">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 100+'px'}}>
                                                  <Doughnut height={190} data={data121} options={options121} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left widdata-pie">
                                          <h2 className="widtitle">Shares</h2>
                                          <p className="widtag">10% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 d-xl-block d-lg-none d-md-none d-sm-block col-sm-6 col-12">
                                        <div className="db_box graph_widget">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                            <Bar data={playlistCharts1.data} options={playlistCharts1.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">Likes</h2>
                                          <p className="widtag">20% increase</p>
                                        </div> 
                                        </div>
                                    </div>


                            </div>


                            <div className="row margin-0">

                                <div className="col-12 col-md-6 col-lg-6 col-xl-5">
                                    <section className="box ">
                                        <header className="panel_header">
                                            <h2 className="title float-left">Users</h2>
                                            
                                        </header>
                                        <div className="content-body">        <div className="row">
                                                <div className="col-12">
                                                    <div className="chart-container">

                                                      <Line data={data312} options={options312} height={245}/>

                                                    </div>
                                                </div>      
                                            </div> 
                                        </div>
                                    </section>    
                                  </div>
                                  
                                  <div className="col-12 col-lg-6 col-md-6 col-xl-4">
                                       

                                      <section className="box ">
                                          <header className="panel_header">
                                              <h2 className="title float-left">Media</h2>
                                              
                                          </header>
                                          <div className="content-body">        <div className="row">
                                                  <div className="col-12">
                                                      <div className="chart-container">
                                                        <Scatter data={data4} options={options4} height={245} />
                                                      </div>
                                                  </div>      
                                              </div> 
                                          </div>
                                      </section>  
                                  </div>



                                <div className="col-xl-3 col-lg-12 col-md-12 col-12">

                                   <div className="row">
                                      <div className="col-xl-12 col-md-4 col-lg-4 col-sm-6 col-12">
                                        <div className="db_box graph_widget pie">
                                          <div className="float-left">
                                            <div className="chart-area" style={{height: 60+'px', maxWidth: 100+'px'}}>
                                                    <Doughnut height={190} data={data122} options={options122} />
                                            </div>
                                          </div>                                        
                                          <div className="widdata float-left widdata-pie">
                                            <h2 className="widtitle">Comments</h2>
                                            <p className="widtag">20% increase</p>
                                          </div> 
                                        </div>
                                      </div>

                                      <div className="col-xl-12 col-md-4 col-lg-4 col-sm-6 col-12">
                                        <div className="db_box graph_widget">
                                          <div className="float-left">
                                            <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                              <Bar data={playlistCharts2.data} options={playlistCharts2.options} />
                                            </div>
                                          </div>                                        
                                          <div className="widdata float-left">
                                            <h2 className="widtitle">Pages</h2>
                                            <p className="widtag">18% increase</p>
                                          </div> 
                                        </div>
                                      </div>


                                      <div className="col-xl-12 col-md-4 col-lg-4 col-sm-6 col-12">
                                        <div className="db_box graph_widget pie">
                                          <div className="float-left">
                                            <div className="chart-area" style={{height: 60+'px', maxWidth: 100+'px'}}>
                                                    <Doughnut height={190} data={data123} options={options123} />
                                            </div>
                                          </div>                                        
                                          <div className="widdata float-left widdata-pie">
                                            <h2 className="widtitle">Media</h2>
                                            <p className="widtag">24% increase</p>
                                          </div> 
                                        </div>
                                      </div>

                                      <div className="col-xl-12 col-md-4 col-lg-4 col-sm-6 col-12 d-xl-none d-md-none d-lg-none d-sm-block d-xs-none d-none">
                                        <div className="db_box graph_widget">
                                          <div className="float-left">
                                            <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                              <Bar data={playlistCharts3.data} options={playlistCharts3.options} />
                                            </div>
                                          </div>                                        
                                          <div className="widdata float-left">
                                            <h2 className="widtitle">Views</h2>
                                            <p className="widtag">34% increase</p>
                                          </div> 
                                        </div>
                                      </div>



                                    </div>

                                </div>




                            </div>

           
                            <div className="row margin-0">





                                  <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xl-8">
                                      <section className="box ">
                                          <header className="panel_header">
                                              <h2 className="title float-left">Blog Posts</h2>
                                              
                                          </header>
                                          <div className="content-body">        <div className="row">
                                                  <div className="col-12">
                                                      <div className="chart-container">

                                                        <Bar
                                                            data={data221}
                                                            height={360}
                                                             options={options221}
                                                            
                                                          />

                                                      </div>
                                                  </div>  

                                              </div> 
                                          </div>
                                      </section>    
                                    </div>




                                  <div className="col-xl-4 col-12 col-lg-6 col-md-6 col-sm-12">
                                      <section className="box ">
                                          <header className="panel_header">
                                              <h2 className="title float-left">User Country</h2>
                                              
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
                                                                                        fill: '#fb6373',
                                                                                        stroke: '#ffffff',
                                                                                        "stroke-width": 2,
                                                                                        r: 5
                                                                                    },
                                                                                    hover: {
                                                                                        fill: '#fb6373',
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
                                                                                    fill: "#fb6373"
                                                                                  },
                                                                                  hover: {
                                                                                    fill: "#fb6373"
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
                                                                              <h3 className="widtitle">5567</h3>
                                                                              <p className="widtag">50% increment in users</p>
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
                                                                              <h3 className="widtitle">9765</h3>
                                                                              <p className="widtag">50% increment in views</p>
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




                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Site Statistics</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row margin-0">
                                    <div className="col-12">
                                        <div className="wid-vectormap">
                                            <div className="row">
                                                <div className="col-12 col-md-8 col-lg-8 col-xl-9">
          
                                                      <div style={{width: 100+'%','marginLeft': '-20px'}}>

                                                          <Line data={dashboardAllProductsChart31.data} options={dashboardAllProductsChart31.options} height={300}/>
                                                
                                                      </div>

                                                </div>
                                                <div className="map_progress col-12 col-md-4 col-lg-4 col-xl-3">
                                                <div className="spacer d-md-none d-sm-block"></div>
                                                <div className="spacer d-md-none d-sm-block"></div>
                                                    <h4>Unique Visitors</h4>
                                                    <span className='text-muted'>Last Week Rise by 62%</span>
                                                    <div className="progress"><div className="progress-bar progress-bar-red" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style={{width: 62+'%'}}></div></div>
                                                    <br/>
                                                    <h4>Registrations</h4>
                                                    <span className='text-muted'>Up by 57% last 7 days</span>
                                                    <div className="progress"><div className="progress-bar progress-bar-red" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: 57+'%'}}></div></div>
                                                    <br/>
                                                    <h4>Direct Sales</h4>
                                                    <span className='text-muted'>Last Month Rise by 22%</span>
                                                    <div className="progress"><div className="progress-bar progress-bar-red" role="progressbar" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100" style={{width: 22+'%'}}></div></div>
                                                </div>
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

export default Blog;
