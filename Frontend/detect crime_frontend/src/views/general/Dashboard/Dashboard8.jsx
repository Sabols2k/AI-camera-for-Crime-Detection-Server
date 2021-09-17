import React from 'react';
import {

    Row, Col, Table,
} from 'reactstrap';

import {
    
} from 'components';


import {
    playlistCharts,
    playlistCharts1,
    playlistCharts2,
    playlistCharts3,
    playlistCharts4,
    playlistCharts5,
    playlistCharts6,
    playlistCharts7,
    playlistCharts8,
    playlistCharts9,
} from 'variables/general/dashboard-charts-8.jsx';

import { Line, Bar, Radar } from 'react-chartjs-2';

//import styles from 'jvectormap/jquery-jvectormap.css'
//import { VectorMap } from 'react-jvectormap';

import {
    dashboardAllProductsChart,
    dashboardAllProductsChart1,
    dashboardAllProductsChart2,
    dashboardAllProductsChart3,
} from 'variables/general/dashboard-charts-8.jsx';

import {
    Messagewidget,
} from 'components';

import { messagewidget } from 'variables/general/widget.jsx';

import PerfectScrollbar from 'perfect-scrollbar';
var ps;


var IMGDIR = process.env.REACT_APP_IMGDIR;

class Dashboard8 extends React.Component{
   
    componentDidMount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.notificationlist,{suppressScrollX: true, suppressScrollY: false});
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
        }
    }
    
    
    render(){


const data6 = {
  labels: ['Firefox',
    'Chrome',
    'Edge',
    'IE',
    'Safari','Opera','Others'],
  datasets: [
    {
      label: '2017',
      backgroundColor: 'rgba(38, 166, 154,0.5)',
      borderColor: 'rgba(38, 166, 154,1)',
      pointBackgroundColor: 'rgba(38, 166, 154,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [65, 59, 190, 81, 156, 55, 140]
    },
    {
      label: '2018',
      backgroundColor: 'rgba(255, 138, 101,0.5)',
      borderColor: 'rgba(255, 138, 101,1)',
      pointBackgroundColor: 'rgba(255, 138, 101,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [28, 148, 140, 19, 196, 27, 100]
    }
  ]
};


const options6={
        
      legend: {
          display: false,
       },
       scale: {
          display: true,
          gridLines: {
                  color: "rgba(0, 0, 0, 0.05)",
          },
          ticks: {
            beginAtZero: true
          }
        },
    maintainAspectRatio: false ,
 
  };



const data312 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Users',
      fill: true,
      lineTension: 0.2,
      backgroundColor: 'rgba(127, 143, 244,1)',
      borderColor: 'rgba(127, 143, 244,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(127, 143, 244,1)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(127, 143, 244,1)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [185, 161, 160, 185, 166, 175, 180]
    },
    {
      label: 'Subscriptions',
      fill: true,
      lineTension: 0.2,
      backgroundColor: 'rgba(255, 138, 101,1)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(255, 138, 101,1)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255, 138, 101,1)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [245, 274, 260, 265, 256, 265, 270]
    },
    {
      label: 'Visits',
      fill: true,
      lineTension: 0.2,
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(38, 166, 154,1)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(38, 166, 154,1)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [365, 359, 350, 365, 356, 350, 360]
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

const data3 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Visits',
      fill: true,
      lineTension: 0.2,
      backgroundColor: 'rgba(38, 166, 154,0.6)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#ffffff',
      pointBackgroundColor: 'rgba(38, 166, 154,1)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(38, 166, 154,1)',
      pointHoverBorderColor: 'rgba(240,240,240,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [391, 556, 365, 540, 371, 466]
    }
  ]
};


const options3={
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
    /*scales: {
        yAxes: [{
          gridLines: {
              zeroLineColor: "transparent",
              color: "rgba(0, 0, 0, 0.07)",
              drawBorder: false
          }
        }],
        xAxes: [{
          display:0,
          ticks: {
              display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
    },*/
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
    layout:{
      padding:{left:0,right:0,top:0,bottom:0}
    }
};



        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Dashboard 8</h1>
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
                                    
                                    
                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">59% <img alt="progress-img" src={IMGDIR+"/images/increase-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Pageviews</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">26% <img alt="progress-img" src={IMGDIR+"/images/increase-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Visits</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">12% <img alt="progress-img" src={IMGDIR+"/images/decrease-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Shares</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">45% <img alt="progress-img" src={IMGDIR+"/images/increase-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Likes</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-md-3 col-sm-4 col-6 d-xl-block d-lg-none d-md-none d-sm-block">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">23% <img alt="progress-img" src={IMGDIR+"/images/decrease-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Activity</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-md-3 col-sm-4 col-6 d-xl-block d-lg-none d-md-none d-sm-block">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">34% <img alt="progress-img" src={IMGDIR+"/images/increase-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Downloads</p>
                                        </div> 
                                        </div>
                                    </div>

                                    </div> 
                                </div>
                            </section>    
                          </div>



                  <div className="row margin-0">
                    
                                    <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget">
                                        <p className="widsubtag">Product Sales</p>
                                        <div className="float-left chart-wrap">
                                          <div className="chart-area" style={{height: 90+'px', width: 95+'%'}}>
                                              <Line data={dashboardAllProductsChart.data} options={dashboardAllProductsChart.options} />
                                          </div> 
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">2323 Sales</h2>
                                          <p className="widtag">Total 30% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget">
                                        <p className="widsubtag">Earnings</p>
                                        <div className="float-left chart-wrap">
                                          <div className="chart-area" style={{height: 90+'px', width: 95+'%'}}>
                                              <Line data={dashboardAllProductsChart1.data} options={dashboardAllProductsChart1.options} />
                                          </div> 
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">$56K Earnings</h2>
                                          <p className="widtag">Total 20% increase</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget">
                                        <p className="widsubtag">Growth</p>
                                        <div className="float-left chart-wrap">
                                          <div className="chart-area" style={{height: 90+'px', width: 95+'%'}}>
                                              <Line data={dashboardAllProductsChart2.data} options={dashboardAllProductsChart2.options} />
                                          </div> 
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">56% Growth</h2>
                                          <p className="widtag">Total 16% increase</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget">
                                        <p className="widsubtag">Product Reviews</p>
                                        <div className="float-left chart-wrap">
                                          <div className="chart-area" style={{height: 90+'px', width: 95+'%'}}>
                                              <Line data={dashboardAllProductsChart3.data} options={dashboardAllProductsChart3.options} />
                                          </div> 
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">5643 Reviews</h2>
                                          <p className="widtag">Total 40% increase</p>
                                        </div> 
                                        </div>
                                    </div>




                  </div>





                    <div className="row margin-0">


                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <section className="box">
                            <header className="panel_header">
                                <h2 className="title float-left">Messages</h2>
                            </header>
                                <div className="content-body">    <div className="row">
                                        <div className="col-12">
                                            <div className="wid-notification">

                                                <ul className="list-unstyled notification-widget" ref="notificationlist" style={{'height': '640px'}}>

                                                    <Messagewidget messagewidget={messagewidget}/>

                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>




                         <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Sales</h2>
                                    
                                </header>
                                <div className="content-body">       
                                 <div className="row">
                                 <div className="col-12"> 
                                    <Table hover>
                                            <thead>
                                              <tr>
                                                <th>Name</th>
                                                <th>Earnings</th>
                                                <th>Progress</th>
                                              </tr>
                                            </thead>
                                            <tbody>
          
                                              <tr>
                                                  <td>Owen Hart</td>
                                                  <td>$75,767</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px', 'marginTop':'-5px', 'marginBottom':'5px'}}>
                                                      <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Jack King</td>
                                                  <td>$54,224</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px', 'marginTop':'-5px', 'marginBottom':'5px'}}>
                                                      <Bar data={playlistCharts1.data} options={playlistCharts1.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Ella Knox</td>
                                                  <td>$65,232</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px', 'marginTop':'-5px', 'marginBottom':'5px'}}>
                                                      <Bar data={playlistCharts2.data} options={playlistCharts2.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Amy Ince</td>
                                                  <td>$75,353</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px', 'marginTop':'-5px', 'marginBottom':'5px'}}>
                                                      <Bar data={playlistCharts3.data} options={playlistCharts3.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Diane Gill</td>
                                                  <td>$22,744</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px', 'marginTop':'-5px', 'marginBottom':'5px'}}>
                                                      <Bar data={playlistCharts4.data} options={playlistCharts4.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Felicity Luke</td>
                                                  <td>$22,776</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px', 'marginTop':'-5px', 'marginBottom':'5px'}}>
                                                      <Bar data={playlistCharts5.data} options={playlistCharts5.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>

                                              <tr>
                                                  <td>Jack Max</td>
                                                  <td>$54,232</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px', 'marginTop':'-5px', 'marginBottom':'5px'}}>
                                                      <Bar data={playlistCharts6.data} options={playlistCharts6.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Emma Oliver</td>
                                                  <td>$65,322</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px', 'marginTop':'-5px', 'marginBottom':'5px'}}>
                                                      <Bar data={playlistCharts7.data} options={playlistCharts7.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Joan Sam</td>
                                                  <td>$21,223</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px', 'marginTop':'-5px', 'marginBottom':'5px'}}>
                                                      <Bar data={playlistCharts8.data} options={playlistCharts8.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Karen Owen</td>
                                                  <td>$42,222</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px', 'marginTop':'-5px', 'marginBottom':'5px'}}>
                                                      <Bar data={playlistCharts9.data} options={playlistCharts9.options} />
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






                        <div className="col-12 col-md-12 col-lg-12 col-xl-4">
                          <div className="row">


                            <div className="col-lg-6 col-md-6 col-xl-12 col-12">

                              <section className="box ">
                                  <header className="panel_header">
                                      <h2 className="title float-left">Visitors</h2>
                                      
                                  </header>
                                  <div className="content-body">        <div className="row">
                                          <div className="col-12">
                                              <div className="chart-container">
                                                  
                                                  <div className="chart-area">
                                                    <Line data={data3} options={options3} height={260} />
                                                  </div>

                                              </div>

                                          </div>      
                                      </div> 
                                  </div>
                              </section>    

                            </div>


                            <div className="col-lg-6 col-md-6 col-xl-12 col-12">
                              <section className="box ">
                                  <header className="panel_header">
                                      <h2 className="title float-left">Browsers</h2>
                                      
                                  </header>
                                  <div className="content-body">        <div className="row">
                                          <div className="col-12">
                                              <div className="chart-container">
                                                  <Radar data={data6}  options={options6} height={260}/>
                                              </div>
                                          </div>      
                                      </div> 
                                  </div>
                              </section>    
                            </div>

                          </div>

                        </div>




                    </div>




           
                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard8;
