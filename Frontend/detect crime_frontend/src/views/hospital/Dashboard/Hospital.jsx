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
} from 'variables/hospital/dashboard-charts.jsx';

import { Line, Bar, Radar } from 'react-chartjs-2';

//import styles from 'jvectormap/jquery-jvectormap.css'
//import { VectorMap } from 'react-jvectormap';

import {
    dashboardAllProductsChart,
    dashboardAllProductsChart1,
    dashboardAllProductsChart2,
    dashboardAllProductsChart3,
} from 'variables/hospital/dashboard-charts.jsx';

import {
    Messagewidget,
} from 'components';

import { messagewidget } from 'variables/hospital/widget.jsx';

import PerfectScrollbar from 'perfect-scrollbar';
var ps;


//var IMGDIR = process.env.REACT_APP_IMGDIR;

class Hospital extends React.Component{
   
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
  labels: ['Inpatient',
    'Outpatient',
    'Doctors',
    'Pharmacy',
    'Lab','Rooms','Others'],
  datasets: [
    {
      label: '2017',
      backgroundColor: 'rgba(38, 166, 154,0.85)',
      borderColor: 'rgba(38, 166, 154,1)',
      pointBackgroundColor: 'rgba(38, 166, 154,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: '2018',
      backgroundColor: 'rgba(255, 138, 101,0.85)',
      borderColor: 'rgba(255, 138, 101,1)',
      pointBackgroundColor: 'rgba(255, 138, 101,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
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
      label: 'Visits',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(38, 166, 154,0.85)',
      borderColor: 'rgba(38, 166, 154,0.85)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(38, 166, 154,0.85)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(38, 166, 154,0.85)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [85, 61, 60, 85, 66,45, 80]
    },
    {
      label: 'Subscriptions',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(255, 138, 101,0.85)',
      borderColor: 'rgba(255, 138, 101,0.85)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(255, 138, 101,0.85)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255, 138, 101,0.85)',
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

const data3 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  datasets: [
    {
      label: 'Visits',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(38, 166, 154,0.85)',
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
      data: [65, 59, 80, 81, 56, 55, 40, 71, 66]
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
                            <h1 className="title">Hospital Dashboard</h1>
                        </div>
                    </div>


                            

                  <div className="row margin-0">
                    
                                    <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget">
                                        <p className="widsubtag">Patients</p>
                                        <div className="float-left chart-wrap">
                                          <div className="chart-area" style={{height: 90+'px', width: 95+'%'}}>
                                              <Line data={dashboardAllProductsChart.data} options={dashboardAllProductsChart.options} />
                                          </div> 
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">4343 Patients</h2>
                                          <p className="widtag">Total 14% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget">
                                        <p className="widsubtag">Rooms Occupied</p>
                                        <div className="float-left chart-wrap">
                                          <div className="chart-area" style={{height: 90+'px', width: 95+'%'}}>
                                              <Line data={dashboardAllProductsChart1.data} options={dashboardAllProductsChart1.options} />
                                          </div> 
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">65 Beds</h2>
                                          <p className="widtag">Total 32% increase</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget">
                                        <p className="widsubtag">Pharmacy</p>
                                        <div className="float-left chart-wrap">
                                          <div className="chart-area" style={{height: 90+'px', width: 95+'%'}}>
                                              <Line data={dashboardAllProductsChart2.data} options={dashboardAllProductsChart2.options} />
                                          </div> 
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">2321 Medicines</h2>
                                          <p className="widtag">Total 10% increase</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                                        <div className="db_box biggraph_widget">
                                        <p className="widsubtag">Laboratory</p>
                                        <div className="float-left chart-wrap">
                                          <div className="chart-area" style={{height: 90+'px', width: 95+'%'}}>
                                              <Line data={dashboardAllProductsChart3.data} options={dashboardAllProductsChart3.options} />
                                          </div> 
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">1231 Lab Tests</h2>
                                          <p className="widtag">Total 20% increase</p>
                                        </div> 
                                        </div>
                                    </div>




                  </div>





                        <div className="col-12 col-lg-12 col-xl-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Users</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">

                                              <Line data={data312} options={options312} height={350}/>

                                            </div>
                                        </div>  

                                        <div className="clearfix"></div>
                                                                        
                                        <div className="spacer"></div>
                                    
                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h4 className="widtitle">Patients</h4>
                                          <p className="widtag">30% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h4 className="widtitle">Medicines</h4>
                                          <p className="widtag">20% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h4 className="widtitle">Laboratory</h4>
                                          <p className="widtag">12% decrease</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h4 className="widtitle">Pharmacy</h4>
                                          <p className="widtag">21% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-md-3 col-sm-4 col-6 d-xl-block d-lg-none d-md-none d-sm-block">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h4 className="widtitle">Inpatient</h4>
                                          <p className="widtag">14% decrease</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-md-3 col-sm-4 col-6 d-xl-block d-lg-none d-md-none d-sm-block">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h4 className="widtitle">Doctors</h4>
                                          <p className="widtag">09% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    </div> 
                                </div>
                            </section>    
                          </div>



                    <div className="row margin-0">




                        <div className="col-12 col-md-12 col-lg-12 col-xl-4">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-xl-12 col-12">
                              <section className="box ">
                                  <header className="panel_header">
                                      <h2 className="title float-left">Resources</h2>
                                      
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

                            <div className="col-lg-6 col-md-6 col-xl-12 col-12">

                              <section className="box ">
                                  <header className="panel_header">
                                      <h2 className="title float-left">Outpatients</h2>
                                      
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

                          </div>

                        </div>


                         <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Target Sales</h2>
                                    
                                </header>
                                <div className="content-body">       
                                 <div className="row">
                                 <div className="col-12"> 
                                    <Table hover className="fixheight">
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
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                                      <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Jack King</td>
                                                  <td>$54,224</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                                      <Bar data={playlistCharts1.data} options={playlistCharts1.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Ella Knox</td>
                                                  <td>$65,232</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                                      <Bar data={playlistCharts2.data} options={playlistCharts2.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Amy Ince</td>
                                                  <td>$75,353</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                                      <Bar data={playlistCharts3.data} options={playlistCharts3.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Diane Gill</td>
                                                  <td>$22,744</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                                      <Bar data={playlistCharts4.data} options={playlistCharts4.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Felicity Luke</td>
                                                  <td>$22,776</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                                      <Bar data={playlistCharts5.data} options={playlistCharts5.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>

                                              <tr>
                                                  <td>Jack Max</td>
                                                  <td>$54,232</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                                      <Bar data={playlistCharts6.data} options={playlistCharts6.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Emma Oliver</td>
                                                  <td>$65,322</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                                      <Bar data={playlistCharts7.data} options={playlistCharts7.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Joan Sam</td>
                                                  <td>$21,223</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
                                                      <Bar data={playlistCharts8.data} options={playlistCharts8.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Karen Owen</td>
                                                  <td>$42,222</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px','marginTop': '-5px','marginBottom': '5px'}}>
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

                    </div>




           
                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Hospital;
