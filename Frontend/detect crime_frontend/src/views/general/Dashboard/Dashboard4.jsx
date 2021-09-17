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
} from 'variables/general/dashboard-charts-4.jsx';

import {
    dashboardAllProductsChart,
    dashboardAllProductsChart1,
    dashboardAllProductsChart31,
} from 'variables/general/dashboard-charts-4.jsx';


class Dashboard4 extends React.Component{
   
    

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
      '#ffccbc','#ffab91','#ff8a65','#ffa183','#fc8b68','#fe825b'
    ],
    hoverBackgroundColor: [
      '#ffccbc','#ffab91','#ff8a65','#ffa183','#fc8b68','#fe825b'
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
    data: [3100, 5110, 1100, 715, 1110],
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

const data312 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Visits',
      fill: true,
      lineTension: 0.4,
      backgroundColor: 'rgba(127, 143, 244,0)',
      borderColor: 'rgba(127, 143, 244,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(127, 143, 244,1)',
      pointBorderWidth: 4,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(127, 143, 244,1)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [65, 59, 50, 65, 56, 50, 60]
    },
    {
      label: 'Subscriptions',
      fill: true,
      lineTension: 0.4,
      backgroundColor: 'rgba(255, 138, 101,0)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(255, 138, 101,1)',
      pointBorderWidth: 4,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255, 138, 101,1)',
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
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Users',
      backgroundColor: 'rgba(127, 143, 244,1)',
      borderColor: 'rgba(127, 143, 244,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(127, 143, 244,0.8)',
      hoverBorderColor: 'rgba(127, 143, 244,1)',
      data: [1665, 2129, 2820, 2211, 1216, 1420, 3111, 2126, 1265, 1119, 2740, 2211]
    },
    {
      label: 'Subscriptions',
      backgroundColor: 'rgba(255, 138, 101,1)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 138, 101,0.8)',
      hoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [1865, 3119, 2130, 2181, 1316, 2155, 1711, 1740, 2211, 1216, 2280, 2121]
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
              barPercentage: 0.5,
              maxBarThickness: 9,
              gridLines: {
                 color: "rgba(0, 0, 0, 0)",
              },
              ticks: {
                  display: false
              },
            }],
            yAxes: [{
                categoryPercentage: 0.6,
                barPercentage: 0.4,
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
      label: 'Users New / Visitors',
      fill: true,
      backgroundColor: 'rgba(127, 143, 244,0.4)',
      pointBorderColor: 'rgba(127, 143, 244,1)',
      pointBackgroundColor: '#fff',
      pointborderWidth: 2,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: 'rgba(127, 143, 244,1)',
      pointHoverBorderColor: 'rgba(127, 143, 244,1)',
      pointHoverBorderWidth: 4,
      pointRadius: 4,
      pointHitRadius: 4,
      data: [
        { x: 165, y: 275 },
        { x: 159, y: 349 },
        { x: 280, y: 290 },
        { x: 181, y: 329 },
        { x: 156, y: 236 },
        { x: 270, y: 440 },
        { x: 151, y: 359 },
        { x: 150, y: 280 },
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
                            <h1 className="title">Dashboard 4</h1>
                        </div>
                    </div>


                            <div className="row margin-0">



                                  <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xl-8">
                                      <section className="box ">
                                          <header className="panel_header">
                                              <h2 className="title float-left">Monthly Subscriptions</h2>
                                              
                                          </header>
                                          <div className="content-body">        <div className="row">
                                                  <div className="col-12">
                                                      <div className="chart-container">

                                                        <Bar
                                                            data={data221}
                                                            height={355}
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
                                              <h2 className="title float-left">Locations</h2>
                                              
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
                                                                                        fill: '#7f8ff4',
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
                                                                              <h3 className="widtitle">15,000</h3>
                                                                              <p className="widtag">40% sales growth</p>
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
                                                                              <h3 className="widtitle">$65,213</h3>
                                                                              <p className="widtag">30% earnings growth</p>
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
                                        <div className="db_box graph_widget pie">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 100+'px'}}>
                                                  <Doughnut height={190} data={data12} options={options12} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left widdata-pie">
                                          <h2 className="widtitle">4203</h2>
                                          <p className="widtag">Users this month</p>
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
                                          <h2 className="widtitle">503</h2>
                                          <p className="widtag">Posts this month</p>
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
                                          <h2 className="widtitle">301</h2>
                                          <p className="widtag">Tickets this month</p>
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
                                          <h2 className="widtitle">7307</h2>
                                          <p className="widtag">Pageviews this month</p>
                                        </div> 
                                        </div>
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
                                                <div className="map_progress col-12 col-md-4 col-lg-4 col-xl-3">
                                                        <h4>Sales</h4>
                                                        <span className='text-muted'>Last Week Rise by 32%</span>
                                                        <div className="progress"><div className="progress-bar progress-bar-accent" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100" style={{width: 32+'%'}}></div></div>
                                                        <br/>
                                                        <h4>Earnings</h4>
                                                        <span className='text-muted'>Up by 57% last 7 days</span>
                                                        <div className="progress"><div className="progress-bar progress-bar-accent" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: 57+'%'}}></div></div>
                                                        <br/>
                                                        <h4>Progress</h4>
                                                        <span className='text-muted'>Last Month Rise by 42%</span>
                                                        <div className="progress"><div className="progress-bar progress-bar-accent" role="progressbar" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100" style={{width: 42+'%'}}></div></div>
                                                    </div>
                                                <div className="col-12 col-md-8 col-lg-8 col-xl-9">
          
                                                      <div style={{width: 98+'%','paddingLeft': '30px'}} className="chart-container dash-4-linechart">

                                                          <Line data={dashboardAllProductsChart31.data} options={dashboardAllProductsChart31.options} height={300}/>
                                                
                                                      </div>

                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>      
                                </div>

                            </div>
                        </section>

                  </div>

                            <div className="row margin-0">

                                <div className="col-xl-3 col-lg-12 col-md-12 col-12">

                                   <div className="row">
                                      <div className="col-xl-12 col-md-4 col-lg-4 col-sm-6 col-12">
                                        <div className="db_box graph_widget pie">
                                          <div className="float-left">
                                            <div className="chart-area" style={{height: 60+'px', maxWidth: 100+'px'}}>
                                                    <Doughnut height={190} data={data12} options={options12} />
                                            </div>
                                          </div>                                        
                                          <div className="widdata float-left widdata-pie">
                                            <h2 className="widtitle">5,400</h2>
                                            <p className="widtag">Downloads this month</p>
                                          </div> 
                                        </div>
                                      </div>

                                      <div className="col-xl-12 col-md-4 col-lg-4 col-sm-6 col-12">
                                        <div className="db_box graph_widget">
                                          <div className="float-left">
                                            <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                              <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                            </div>
                                          </div>                                        
                                          <div className="widdata float-left">
                                            <h2 className="widtitle">4060</h2>
                                            <p className="widtag">Uploads this month</p>
                                          </div> 
                                        </div>
                                      </div>


                                      <div className="col-xl-12 col-md-4 col-lg-4 col-sm-6 col-12">
                                        <div className="db_box graph_widget pie">
                                          <div className="float-left">
                                            <div className="chart-area" style={{height: 60+'px', maxWidth: 100+'px'}}>
                                                    <Doughnut height={190} data={data12} options={options12} />
                                            </div>
                                          </div>                                        
                                          <div className="widdata float-left widdata-pie">
                                            <h2 className="widtitle">7400</h2>
                                            <p className="widtag">Shares this month</p>
                                          </div> 
                                        </div>
                                      </div>

                                      <div className="col-xl-12 col-md-4 col-lg-4 col-sm-6 col-12 d-xl-none d-md-none d-lg-none d-sm-block d-xs-none d-none">
                                        <div className="db_box graph_widget">
                                          <div className="float-left">
                                            <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                              <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                            </div>
                                          </div>                                        
                                          <div className="widdata float-left">
                                            <h2 className="widtitle">5,031</h2>
                                            <p className="widtag">Users this month</p>
                                          </div> 
                                        </div>
                                      </div>



                                    </div>

                                </div>

                                <div className="col-12 col-md-6 col-lg-6 col-xl-5">
                                    <section className="box ">
                                        <header className="panel_header">
                                            <h2 className="title float-left">Registrations</h2>
                                            
                                        </header>
                                        <div className="content-body">        <div className="row">
                                                <div className="col-12">
                                                    <div className="chart-container">

                                                      <Line data={data312} options={options312} height={215}/>

                                                    </div>
                                                </div>      
                                            </div> 
                                        </div>
                                    </section>    
                                  </div>
                                  
                                  <div className="col-12 col-lg-6 col-md-6 col-xl-4">
                                       

                                      <section className="box ">
                                          <header className="panel_header">
                                              <h2 className="title float-left">Downloads / Uploads</h2>
                                              
                                          </header>
                                          <div className="content-body">        <div className="row">
                                                  <div className="col-12">
                                                      <div className="chart-container">
                                                        <Scatter data={data4} options={options4} height={215} />
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

export default Dashboard4;
