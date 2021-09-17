import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import CountTo from 'react-count-to';

import { Line, Bar, Doughnut, Scatter, HorizontalBar } from 'react-chartjs-2';

//import styles from 'jvectormap/jquery-jvectormap.css'
import { VectorMap } from 'react-jvectormap';

import {
    dashboardAllProductsChart11,
    dashboardAllProductsChart12,
    dashboardAllProductsChart13,
    dashboardAllProductsChart14,
    dashboardAllProductsChart1,
    dashboardAllProductsChart2,
    dashboardAllProductsChart3,
    dashboardAllProductsChart4,
} from 'variables/music/dashboard-charts.jsx';

import {
    playlistCharts,
    playlistCharts2,
    playlistCharts3,
    playlistCharts4,
} from 'variables/music/dashboard-charts.jsx';

class Music extends React.Component{
   
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


const data312 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Subscriptions',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(255, 138, 101,0.5)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(255, 138, 101,0.5)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255, 138, 101,0.5)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [45, 74, 60, 47, 56, 65, 70]
    },
    {
      label: 'Users',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(127, 143, 244,0.5)',
      borderColor: 'rgba(127, 143, 244,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(127, 143, 244,0.5)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(127, 143, 244,0.5)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [55, 64, 40, 75, 46, 55, 60]
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
    'New',
    'Advertise',
    'Social media',
    'Marketing',
    'Other'
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

const data122 = {
  labels: [
    'New',
    'Advertise',
    'Social media',
    'Marketing',
    'Other'
  ],
  datasets: [{
    data: [300, 510, 1100, 715, 120],
    backgroundColor: [
      '#ffccbc','#ffab91','#ff8a65','#ffa183','#fc8b68','#fe825b'
    ],
    hoverBackgroundColor: [
      '#ffccbc','#ffab91','#ff8a65','#ffa183','#fc8b68','#fe825b'
    ]
  }]
};

const options122={
    legend: {
        display: false,
    },
};

const data32 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Subscriptions',
      backgroundColor: 'rgba(127, 143, 244,1)',
      borderColor: 'rgba(127, 143, 244,0.8)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(127, 143, 244,0.8)',
      hoverBorderColor: 'rgba(127, 143, 244,1)',
      data: [265, 159, 145, 121, 212, 125, 230]
    },
    {
      label: 'Visitors',
      backgroundColor: 'rgba(255, 138, 101,1)',
      borderColor: 'rgba(255, 138, 101,0.8)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 138, 101,0.8)',
      hoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [165, 259, 170, 181, 256, 155, 170]
    }
  ]
};


const options32 = {
        legend: {
          display: false,
       },
        scales: {
             xAxes: [{
              gridLines: {
                 color: "rgba(0, 0, 0, 0)",
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





const data4 = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'Users New / Visitors',
      fill: true,
      backgroundColor: 'rgba(255, 138, 101,0.4)',
      pointBorderColor: 'rgba(255, 138, 101,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255, 138, 101,1)',
      pointHoverBorderColor: 'rgba(255, 138, 101,1)',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointHitRadius: 5,
      data: [
        { x: 186, y: 436 },
        { x: 235, y: 355 },
        { x: 250, y: 268 },
        { x: 255, y: 245 },
        { x: 169, y: 359 },
        { x: 270, y: 440 },
        { x: 151, y: 359 },
        { x: 246, y: 366 },
        { x: 355, y: 275 },
        { x: 310, y: 218 },
        { x: 215, y: 425 },
        { x: 149, y: 429 },
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
                            <h1 className="title">Music Dashboard</h1>
                        </div>
                    </div>


                            


                            <div className="row margin-0">



                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Trending Music</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 200+'px', marginLeft: '-100px'}}>
                                              <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h3 className="widtitle">5643 Songs</h3>
                                          <p className="widtag">Total 30% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Music Downloads</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 200+'px', marginLeft: '-100px'}}>
                                              <Bar data={playlistCharts2.data} options={playlistCharts2.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h3 className="widtitle">322 Downloads</h3>
                                          <p className="widtag">Total 21% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Music Uploads</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 200+'px', marginLeft: '-100px'}}>
                                              <Bar data={playlistCharts3.data} options={playlistCharts3.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h3 className="widtitle">632 Uploads</h3>
                                          <p className="widtag">Total 20% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 d-md-none d-lg-none d-xl-block d-sm-block">
                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Genres</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 200+'px', marginLeft: '-100px'}}>
                                              <Bar data={playlistCharts4.data} options={playlistCharts4.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h3 className="widtitle">12 Genres</h3>
                                          <p className="widtag">Total 12% increase</p>
                                        </div> 
                                        </div>
                                    </div>




                             <div className="col-12 col-sm-12 col-lg-8 col-xl-9 col-md-8">
                                <section className="box ">
                                    <header className="panel_header">
                                        <h2 className="title float-left">Site Visitors</h2>
                                        
                                    </header>
                                    <div className="content-body">        <div className="row">
                                            <div className="col-12">
                                                <div className="chart-container">
                                                    
                                                    <div className="chart-area">
                                                      <HorizontalBar data={data32} options={options32} height={460} />
                                                    </div>

                                                </div>


                                            </div>      
                                        </div> 
                                    </div>
                                </section>    
                            </div>

                             <div className="col-12 col-sm-12 col-lg-4 col-xl-3 col-md-4">
                                        
                                  <div className="row">

                                     <div className="col-12 col-sm-6 col-lg-12 col-xl-12 col-md-12">

                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">New Users</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 120+'px', marginLeft: '-60px'}}>
                                                  <Doughnut height={240} data={data12} options={options12} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">232 Users</h2>
                                          <p className="widtag">Total 30% increase</p>
                                        </div> 
                                        </div>

                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-12 col-xl-12 col-md-12">


                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Subscriptions</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 120+'px', marginLeft: '-60px'}}>
                                                  <Doughnut height={240} data={data122} options={options122} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">121 Accounts</h2>
                                          <p className="widtag">Total 24% increase</p>
                                        </div> 
                                        </div>
                                    </div>


                                  </div>

                              </div>





                            </div>

           




                            <div className="row margin-0">


                       <div className="col-12 col-sm-12 col-lg-8 col-xl-9 col-md-8">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Subscriptions</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">

                                              <Line data={data312} options={options312} height={315}/>

                                            </div>
                                        </div>  


                                    </div> 
                                </div>
                            </section>    
                          </div>

                             <div className="col-12 col-sm-12 col-lg-4 col-xl-3 col-md-4">

                                  <div className="row">
                                    <div className="col-12 col-sm-6 col-lg-12 col-xl-12 col-md-12">

                                          <div className="tile-counter bg-purple">
                                            <div className="wid-content">
                                                <i className='i-share icon-lg'></i>
                                                <h2><CountTo speed={3000} from={3000} to={3504}/></h2>
                                                <div className="clearfix"></div>
                                                <span>Songs shared today</span>
                                            </div>
                                          </div>

                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-12 col-xl-12 col-md-12">


                                          <div className="tile-counter bg-accent">
                                            <div className="wid-content">
                                                <i className='i-heart icon-lg'></i>
                                                <h2><CountTo speed={3000} from={2000} to={2303}/></h2>
                                                <div className="clearfix"></div>
                                                <span>Song liked today</span>
                                            </div>
                                          </div>
                                    </div>

                                </div>

                        </div>



                            </div>










                            <div className="row margin-0">


                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Genres</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row">
                                    <div className="col-12">
                                        <div className="">
                                            <div className="row">
                                                
                                                <div className="bar_graph_rows" style={{'marginTop': '-10px'}}>

                                                  <div className="graph-stats">
                                                      <div className="graph_widget">
                                                          <div className="row">
                                                            <div className="col-6 col-sm-8 col-md-6">
                                                              <div className="chart-area" style={{height: 50+'px', width: 100+'%', 'maxWidth': 'none'}}>
                                                                <Line data={dashboardAllProductsChart11.data} options={dashboardAllProductsChart11.options} />
                                                              </div>
                                                            </div>                                        
                                                            <div className="widdata col-6 col-sm-4 col-md-6">
                                                              <h3 className="widtitle">Jazz</h3>
                                                              <p className="widtag">50% songs increment</p>
                                                            </div> 
                                                          </div> 
                                                      </div>
                                                  </div>
                                                  <div className="graph-stats">
                                                      <div className="graph_widget">
                                                          <div className="row">
                                                            <div className="col-6 col-sm-8 col-md-6">
                                                              <div className="chart-area" style={{height: 50+'px', width: 100+'%', 'maxWidth': 'none'}}>
                                                                <Line data={dashboardAllProductsChart12.data} options={dashboardAllProductsChart12.options} />
                                                              </div>
                                                            </div>                                        
                                                            <div className="widdata col-6 col-sm-4 col-md-6">
                                                              <h3 className="widtitle">Blues</h3>
                                                              <p className="widtag">20% songs increment</p>
                                                            </div> 
                                                          </div> 
                                                      </div>
                                                  </div>
                                                  <div className="graph-stats">
                                                      <div className="graph_widget">
                                                          <div className="row">
                                                            <div className="col-6 col-sm-8 col-md-6">
                                                              <div className="chart-area" style={{height: 50+'px', width: 100+'%', 'maxWidth': 'none'}}>
                                                                <Line data={dashboardAllProductsChart13.data} options={dashboardAllProductsChart13.options} />
                                                              </div>
                                                            </div>                                        
                                                            <div className="widdata col-6 col-sm-4 col-md-6">
                                                              <h3 className="widtitle">Rock</h3>
                                                              <p className="widtag">42% songs increment</p>
                                                            </div> 
                                                          </div> 
                                                      </div>
                                                  </div>
                                                  <div className="graph-stats">
                                                      <div className="graph_widget">
                                                          <div className="row">
                                                            <div className="col-6 col-sm-8 col-md-6">
                                                              <div className="chart-area" style={{height: 50+'px', width: 100+'%', 'maxWidth': 'none'}}>
                                                                <Line data={dashboardAllProductsChart14.data} options={dashboardAllProductsChart14.options} />
                                                              </div>
                                                            </div>                                        
                                                            <div className="widdata col-6 col-sm-4 col-md-6">
                                                              <h3 className="widtitle">Pop</h3>
                                                              <p className="widtag">21% songs increment</p>
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



                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Uploads / Downloads</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">
                                              <Scatter data={data4} options={options4} height={350} />
                                            </div>
                                        </div>      
                                    </div> 
                                </div>
                            </section>    

                      </div>


                    <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">

                            <div className="row">
                                    <div className="col-xl-12 col-lg-4 col-md-4 col-sm-6 col-12">
                                      <div className="db_box graph_widget">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                              <Line data={dashboardAllProductsChart1.data} options={dashboardAllProductsChart1.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">6433</h2>
                                          <p className="widtag">Pop songs uploaded</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-4 col-md-4 col-sm-6 col-12">
                                      <div className="db_box graph_widget">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                              <Line data={dashboardAllProductsChart2.data} options={dashboardAllProductsChart2.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">2412</h2>
                                          <p className="widtag">Rock songs uploaded</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-4 col-md-4 col-sm-6 col-12">
                                      <div className="db_box graph_widget">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                              <Line data={dashboardAllProductsChart3.data} options={dashboardAllProductsChart3.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">1004</h2>
                                          <p className="widtag">Jazz songs uploaded</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-4 col-md-4 col-sm-6 col-12 d-xl-block d-lg-none d-md-none d-sm-block">
                                      <div className="db_box graph_widget">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                              <Line data={dashboardAllProductsChart4.data} options={dashboardAllProductsChart4.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">3432</h2>
                                          <p className="widtag">Blues songs uploaded</p>
                                        </div> 
                                        </div>
                                    </div>

                                </div>     

                            </div>


                    </div>




                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Visitor's Statistics</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row margin-0">
                                    <div className="col-12">
                                        <div className="wid-vectormap">
                                            <div className="row">
                                                <div className="col-12 col-md-9">
                                    <div style={{width: 100+'%', height: 300}} className="map-area">
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
                                                            r: 7
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
                                                        fill: "#7f8ff4"
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
                                                <div className="map_progress col-12 col-md-3">
                                                    <h4>Unique Visitors</h4>
                                                    <span className='text-muted'>Last Week Rise by 62%</span>
                                                    <div className="progress"><div className="progress-bar progress-bar-accent" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style={{width: 62+'%'}}></div></div>
                                                    <br/>
                                                    <h4>Registrations</h4>
                                                    <span className='text-muted'>Up by 57% last 7 days</span>
                                                    <div className="progress"><div className="progress-bar progress-bar-accent" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: 57+'%'}}></div></div>
                                                    <br/>
                                                    <h4>Direct Sales</h4>
                                                    <span className='text-muted'>Last Month Rise by 22%</span>
                                                    <div className="progress"><div className="progress-bar progress-bar-accent" role="progressbar" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100" style={{width: 22+'%'}}></div></div>
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

export default Music;
