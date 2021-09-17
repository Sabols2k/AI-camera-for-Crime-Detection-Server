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
    dashboardAllProductsChart5,
    dashboardAllProductsChart6,
    dashboardAllProductsChart7,
    dashboardAllProductsChart8,
    dashboardAllProductsChart1,
    dashboardAllProductsChart2,
    dashboardAllProductsChart3,
    dashboardAllProductsChart4,
} from 'variables/general/dashboard-charts-2.jsx';

import {
    playlistCharts,
    playlistCharts2,
    playlistCharts3,
    playlistCharts4,
} from 'variables/general/dashboard-charts-2.jsx';

class Dashboard2 extends React.Component{
   
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
      label: 'Visits',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(38, 166, 154,0.7)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(38, 166, 154,0.7)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(38, 166, 154,0.7)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [355, 264, 240, 375, 246, 155, 260]
    },
    {
      label: 'Subscriptions',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(255, 138, 101,0.7)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(255, 138, 101,0.7)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255, 138, 101,0.7)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [145, 274, 360, 265, 156, 265, 170]
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


const data121 = {
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

const options121={
    legend: {
        display: false,
    },
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

const options12={
    legend: {
        display: false,
    },
};

const data32 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: 'rgba(255, 138, 101,1)',
      borderColor: 'rgba(255, 138, 101,0.8)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 138, 101,0.8)',
      hoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [95, 159, 125, 121, 112]
    },
    {
      label: 'Earnings',
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,0.8)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(38, 166, 154,0.8)',
      hoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [165, 209, 170, 181, 206]
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
                categoryPercentage: 0.6,
                barPercentage: 0.4,
                maxBarThickness: 9,
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
      backgroundColor: 'rgba(38, 166, 154,0.4)',
      pointBorderColor: 'rgba(38, 166, 154,1)',
      pointBackgroundColor: '#fff',
      pointborderWidth: 4,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(38, 166, 154,1)',
      pointHoverBorderColor: 'rgba(38, 166, 154,1)',
      pointHoverBorderWidth: 7,
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
        { x: 171, y: 359 },
        { x: 129, y: 159 },
        { x: 255, y: 245 },
        { x: 150, y: 280 },
        { x: 131, y: 339 },
        { x: 136, y: 476 },
        { x: 215, y: 325 },
        { x: 280, y: 258 },
        { x: 355, y: 145 },
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
                            <h1 className="title">Dashboard 2</h1>
                        </div>
                    </div>


                            


                            <div className="row margin-0">





                             <div className="col-12 col-sm-12 col-lg-4 col-xl-3 col-md-4">
                                        
                                  <div className="row">

                                     <div className="col-12 col-sm-6 col-lg-12 col-xl-12 col-md-12">

                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Product Sales</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 120+'px', marginLeft: '-60px'}}>
                                                  <Doughnut height={240} data={data12} options={options12} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">4500 Sales</h2>
                                          <p className="widtag">Total 30% inc. in sales</p>
                                        </div> 
                                        </div>

                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-12 col-xl-12 col-md-12">


                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Total Earnings</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 120+'px', marginLeft: '-60px'}}>
                                                  <Doughnut height={240} data={data121} options={options121} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">$67K Earnings</h2>
                                          <p className="widtag">Total 20% inc. in earnings</p>
                                        </div> 
                                        </div>
                                    </div>


                                  </div>

                              </div>


                       <div className="col-12 col-sm-12 col-lg-8 col-xl-9 col-md-8">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Monthly Users</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">

                                              <Line data={data312} options={options312} height={460}/>

                                            </div>
                                        </div>  


                                    </div> 
                                </div>
                            </section>    
                          </div>
                             



                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">New Users</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 160+'px', marginLeft: '-80px'}}>
                                              <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h3 className="widtitle">3200 Users</h3>
                                          <p className="widtag">Total 10% inc. in users</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Monthly Sales</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 160+'px', marginLeft: '-80px'}}>
                                              <Bar data={playlistCharts2.data} options={playlistCharts2.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h3 className="widtitle">657K Sales</h3>
                                          <p className="widtag">Total 40% inc. in sales</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Revenue Generated</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 160+'px', marginLeft: '-80px'}}>
                                              <Bar data={playlistCharts3.data} options={playlistCharts3.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h3 className="widtitle">$776K Revenue</h3>
                                          <p className="widtag">Total 40% inc. in revenue</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 d-md-none d-lg-none d-xl-block d-sm-block">
                                        <div className="db_box biggraph_widget centered">
                                        <p className="widsubtag">Product Listings</p>
                                        <div className="float-left chart">
                                          <div className="chart-area" style={{height: 90+'px', width: 160+'px', marginLeft: '-80px'}}>
                                              <Bar data={playlistCharts4.data} options={playlistCharts4.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h3 className="widtitle">23K Products</h3>
                                          <p className="widtag">Total 34% inc. in products</p>
                                        </div> 
                                        </div>
                                    </div>



                            </div>

           




                            <div className="row margin-0">

                              <div className="col-12 col-sm-12 col-lg-8 col-xl-9 col-md-8">
                                <section className="box ">
                                    <header className="panel_header">
                                        <h2 className="title float-left">Monthly Revenue</h2>
                                        
                                    </header>
                                    <div className="content-body">        <div className="row">
                                            <div className="col-12">
                                                <div className="chart-container">
                                                    
                                                    <div className="chart-area">
                                                      <HorizontalBar data={data32} options={options32} height={325} />
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

                                          <div className="tile-counter bg-accent">
                                            <div className="wid-content">
                                                <i className='i-basket icon-lg'></i>
                                                <h2><CountTo speed={3000} from={4000} to={4504}/></h2>
                                                <div className="clearfix"></div>
                                                <span>New Orders placed</span>
                                            </div>
                                          </div>

                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-12 col-xl-12 col-md-12">


                                          <div className="tile-counter bg-primary">
                                            <div className="wid-content">
                                                <i className='i-people icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1000} to={1212}/></h2>
                                                <div className="clearfix"></div>
                                                <span>New Users Registered</span>
                                            </div>
                                          </div>
                                    </div>

                                </div>

                        </div>



                            </div>










                            <div className="row margin-0">


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
                                          <h2 className="widtitle">$95K</h2>
                                          <p className="widtag">Sales this month</p>
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
                                          <h2 className="widtitle">4,050</h2>
                                          <p className="widtag">Users this month</p>
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
                                          <h2 className="widtitle">62K</h2>
                                          <p className="widtag">Pageviews today</p>
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
                                          <h2 className="widtitle">440</h2>
                                          <p className="widtag">New Subscribers</p>
                                        </div> 
                                        </div>
                                    </div>

                                </div>     

                            </div>

                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Site Statistics</h2>
                                
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
                                                              <div className="chart-area" style={{height: 50+'px', width: 100+'%', 'maxWidth': 'none','marginTop': '5px'}}>
                                                                <Line data={dashboardAllProductsChart5.data} options={dashboardAllProductsChart5.options} />
                                                              </div>
                                                            </div>                                        
                                                            <div className="widdata col-6 col-sm-4 col-md-6">
                                                              <h3 className="widtitle">$25K</h3>
                                                              <p className="widtag">27% inc. earnings</p>
                                                            </div> 
                                                          </div> 
                                                      </div>
                                                  </div>
                                                  <div className="graph-stats">
                                                      <div className="graph_widget">
                                                          <div className="row">
                                                            <div className="col-6 col-sm-8 col-md-6">
                                                              <div className="chart-area" style={{height: 50+'px', width: 100+'%', 'maxWidth': 'none','marginTop': '5px'}}>
                                                                <Line data={dashboardAllProductsChart6.data} options={dashboardAllProductsChart6.options} />
                                                              </div>
                                                            </div>                                        
                                                            <div className="widdata col-6 col-sm-4 col-md-6">
                                                              <h3 className="widtitle">4436</h3>
                                                              <p className="widtag">30% inc. sales</p>
                                                            </div> 
                                                          </div> 
                                                      </div>
                                                  </div>
                                                  <div className="graph-stats">
                                                      <div className="graph_widget">
                                                          <div className="row">
                                                            <div className="col-6 col-sm-8 col-md-6">
                                                              <div className="chart-area" style={{height: 50+'px', width: 100+'%', 'maxWidth': 'none','marginTop': '5px'}}>
                                                                <Line data={dashboardAllProductsChart7.data} options={dashboardAllProductsChart7.options} />
                                                              </div>
                                                            </div>                                        
                                                            <div className="widdata col-6 col-sm-4 col-md-6">
                                                              <h3 className="widtitle">2,020</h3>
                                                              <p className="widtag">23% inc. users</p>
                                                            </div> 
                                                          </div> 
                                                      </div>
                                                  </div>
                                                  <div className="graph-stats">
                                                      <div className="graph_widget">
                                                          <div className="row">
                                                            <div className="col-6 col-sm-8 col-md-6">
                                                              <div className="chart-area" style={{height: 50+'px', width: 100+'%', 'maxWidth': 'none','marginTop': '5px'}}>
                                                                <Line data={dashboardAllProductsChart8.data} options={dashboardAllProductsChart8.options} />
                                                              </div>
                                                            </div>                                        
                                                            <div className="widdata col-6 col-sm-4 col-md-6">
                                                              <h3 className="widtitle">9,040</h3>
                                                              <p className="widtag">10% inc. pageviews</p>
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
                                    <h2 className="title float-left">Users & Visitors</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">
                                              <Scatter data={data4} options={options4} height={345} />
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
                                <h2 className="title float-left">Vendor Locations</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row margin-0">
                                    <div className="col-12">
                                        <div className="wid-vectormap mapbig">
                                            <div className="row">
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
                                                            fill: '#ffffff',
                                                            stroke: '#ff8a65',
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
                                                        fill: "#ff8a65"
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
                        </section>

                  </div>


                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard2;
