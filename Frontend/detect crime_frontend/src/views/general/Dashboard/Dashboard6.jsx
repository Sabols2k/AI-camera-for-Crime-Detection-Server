import React from 'react';
import {
    Row, Col, Table, Progress,
} from 'reactstrap';

import {
    
} from 'components';

import { Bar,Line } from 'react-chartjs-2';

import {
    dashboardAllProductsChart3,
} from 'variables/general/dashboard-charts-6.jsx';

import {
    playlistCharts,
    playlistCharts1,
    playlistCharts2,
    playlistCharts3,
} from 'variables/general/dashboard-charts-6.jsx';

var IMGDIR = process.env.REACT_APP_IMGDIR;

class Dashboard6 extends React.Component{
   
    
    render(){


const data221 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Users',
      backgroundColor: 'rgba(38, 166, 154,.8)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(38, 166, 154,0.8)',
      hoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [165, 219, 1180, 221, 1216, 140, 211, 1116,265, 119, 1140, 211]
    },
    {
      label: 'Visits',
      backgroundColor: 'rgba(255, 138, 101,.8)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 138, 101,0.8)',
      hoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [255, 1279, 140, 1211, 116, 1265, 119, 280, 1121, 316, 265, 119]
    },
    {
      label: 'Subscriptions',
      backgroundColor: 'rgba(127, 143, 244,.8)',
      borderColor: 'rgba(127, 143, 244,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(127, 143, 244,0.8)',
      hoverBorderColor: 'rgba(127, 143, 244,1)',
      data: [265, 1119, 2180, 121, 316, 255, 1279, 140, 1211, 116, 280, 1121]
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
              maxBarThickness: 8,
              gridLines: {
                 color: "rgba(0, 0, 0, 0)",
              },
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



const data312 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Visits',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(38, 166, 154,0.6)',
      borderColor: 'rgba(38, 166, 154,0.6)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(38, 166, 154,0.6)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(38, 166, 154,0.6)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [65, 59, 150, 65, 156, 50, 160]
    },
    {
      label: 'Subscriptions',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(255, 138, 101,0.6)',
      borderColor: 'rgba(255, 138, 101,0.6)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(255, 138, 101,0.6)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255, 138, 101,0.6)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [145, 74, 160, 65, 156, 65, 170]
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



const data2 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Users',
      backgroundColor: 'rgba(255, 138, 101,1)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 138, 101,0.8)',
      hoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [1654, 2119, 1180, 2321, 2116, 2105, 2290, 1180, 1221, 2116, 2145, 1130]
    }
  ]
};


const options2={
        legend: {
          display: false,
       },
        scales: {
             xAxes: [{
              categoryPercentage: 0.5,
              barPercentage: 0.5,
              maxBarThickness: 8,
              gridLines: {
                 color: "rgba(0, 0, 0, 0)",
              },
                ticks: {
                  display: false
                }
            }],
            yAxes: [{
                categoryPercentage: 0.5,
                barPercentage: 0.5,
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
                            <h1 className="title">Dashboard 6</h1>
                        </div>
                    </div>




                        <div className="col-12 col-lg-12 col-xl-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">User Category</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">

                                              <Bar
                                                  data={data221}
                                                  height={350}
                                                   options={options221}
                                                  
                                                />

                                            </div>
                                        </div>  


                                        <div className="clearfix"></div>
                                    
                                        <div className="spacer"></div>
                                    
                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">231 <img alt="progress-img" src={IMGDIR+"/images/increase-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Users</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">645 <img alt="progress-img" src={IMGDIR+"/images/increase-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Subscriptions</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">1322 <img alt="progress-img" src={IMGDIR+"/images/decrease-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Visits</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">754 <img alt="progress-img" src={IMGDIR+"/images/increase-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Requests</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 d-xl-block d-lg-none d-md-none d-sm-block">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">325 <img alt="progress-img" src={IMGDIR+"/images/decrease-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Likes</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 d-xl-block d-lg-none d-md-none d-sm-block">
                                        <div className="iconbox inline has-arrow">
                                        <div className="widdata">
                                          <h2 className="widtitle">864 <img alt="progress-img" src={IMGDIR+"/images/increase-arrow.png"} style={{'height': 16+'px'}}/></h2>
                                          <p className="widtag">Shares</p>
                                        </div> 
                                        </div>
                                    </div>


                                    </div> 
                                </div>
                            </section>    
                          </div>
                        





                    <div className="row margin-0">
                        
                          <div className="col-12 col-lg-6 col-md-6">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Monthly Target</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">

                                              <Line data={data312} options={options312} height={300}/>

                                            </div>
                                        </div>  

                                    </div> 
                                </div>
                            </section>    
                          </div>
                          
                        <div className="col-12 col-lg-6 col-md-6">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Downloads</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">

                                              <Line data={dashboardAllProductsChart3.data} options={dashboardAllProductsChart3.options} height={300}/>


                                            </div>
                                        </div>  

                                    </div> 
                                </div>
                            </section>    
                          </div>
                          


                      </div>



                              <div className="row margin-0">
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress inverted">
                                            <div className="wid-content">
                                                <h2>643</h2>
                                                <p>New Subscriptions today</p>
                                                <Progress color="primary" value="40"/>
                                                <span>40% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress inverted">
                                            <div className="wid-content">
                                                <h2>234</h2>
                                                <p>Posts shared today</p>
                                                <Progress color="accent" value="20"/>
                                                <span>20% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                                        <div className="tile-progress inverted">
                                            <div className="wid-content">
                                                <h2>11</h2>
                                                <p>Posts Published Today</p>
                                                <Progress color="purple" value="30"/>
                                                <span>30% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 d-xl-block d-lg-none d-md-none d-sm-block">

                                        <div className="tile-progress inverted">
                                            <div className="wid-content">
                                                <h2>64</h2>
                                                <p>New Comments Today</p>
                                                <Progress color="primary" value="60"/>
                                                <span>60% increase</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>    


                      <div className="row margin-0">
                        


                        <div className="col-12 col-lg-6 col-md-6">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Affiliates</h2>
                                    
                                </header>
                                <div className="content-body">       
                                 <div className="row">
                                 <div className="col-12"> 
                                    <Table hover responsive>
                                            <thead>
                                              <tr>
                                                <th>Name</th>
                                                <th>Views</th>
                                                <th>Status</th>
                                                <th>Progress</th>
                                              </tr>
                                            </thead>
                                            <tbody>
          
                                              <tr>
                                                  <td>John Oliver</td>
                                                  <td>45000</td>
                                                  <td>Approved</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px', 'marginTop': '-5px', 'marginBottom': '5px'}}>
                                                      <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Piers McLean</td>
                                                  <td>15000</td>
                                                  <td>Approved</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px', 'marginTop': '-5px', 'marginBottom': '5px'}}>
                                                      <Bar data={playlistCharts1.data} options={playlistCharts1.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Stephen Hughes</td>
                                                  <td>11210</td>
                                                  <td>Approved</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px', 'marginTop': '-5px', 'marginBottom': '5px'}}>
                                                      <Bar data={playlistCharts2.data} options={playlistCharts2.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Liam Howard</td>
                                                  <td>46223</td>
                                                  <td>Approved</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px', 'marginTop': '-5px', 'marginBottom': '5px'}}>
                                                      <Bar data={playlistCharts3.data} options={playlistCharts3.options} />
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

                          <div className="col-12 col-lg-6 col-md-6">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Users</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">
                                               
                                          <Bar
                                              data={data2}
                                              height={300}
                                               options={options2}
                                              
                                            />

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

export default Dashboard6;
