import React from 'react';
import {

    Row, Col, Table,
} from 'reactstrap';

import {
    
} from 'components';

import { Line, Bar, Radar, HorizontalBar, Polar } from 'react-chartjs-2';

//import styles from 'jvectormap/jquery-jvectormap.css'
//import { VectorMap } from 'react-jvectormap';

import {
    playlistCharts,
    playlistCharts1,
    playlistCharts2,
    playlistCharts3,
} from 'variables/general/dashboard-charts-3.jsx'
;

import {
    Mailbox,
} from 'components';

import { mailbox } from 'variables/general/mailbox.jsx';

import PerfectScrollbar from 'perfect-scrollbar';

var mailps;

class Dashboard3 extends React.Component{
   
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
    
    
    render(){


const data32 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Subscriptions',
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,0.6)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(38, 166, 154,0.6)',
      hoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [265, 159, 145, 121, 212, 125, 230]
    },
    {
      label: 'Visitors',
      backgroundColor: 'rgba(127, 143, 244,1)',
      borderColor: 'rgba(127, 143, 244,0.6)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(127, 143, 244,0.6)',
      hoverBorderColor: 'rgba(127, 143, 244,1)',
      data: [165, 259, 170, 181, 256, 155, 259]
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
                categoryPercentage: 0.5,
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

const data6 = {
  labels: ['Firefox',
    'Chrome',
    'Edge',
    'IE',
    'Safari','Opera','Others'],
  datasets: [
    {
      label: '2017',
      backgroundColor: 'rgba(38, 166, 154,0.7)',
      borderColor: 'rgba(38, 166, 154,1)',
      pointBackgroundColor: 'rgba(38, 166, 154,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [165, 59, 190, 81, 56, 155, 40]
    },
    {
      label: '2018',
      backgroundColor: 'rgba(127, 143, 244,0.7)',
      borderColor: 'rgba(127, 143, 244,1)',
      pointBackgroundColor: 'rgba(127, 143, 244,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(127, 143, 244,1)',
      data: [28, 148, 40, 119, 196, 27, 100]
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
      label: 'Subscriptions',
      fill: true,
      lineTension: 0.2,
      backgroundColor: 'rgba(38, 166, 154,.8)',
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
      data: [145, 174, 160, 185, 156, 165, 170]
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



const data45 = {
  datasets: [{
    data: [
      111,
      161,
      71,
      113,
      124
    ],
    backgroundColor: [
      '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
    ],
    label: 'Browsers' // for legend
  }],
  labels: [
    'Firefox',
    'Chrome',
    'Edge',
    'IE',
    'Safari'
  ]
};



const options45={
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

};



        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left"> 
                            <h1 className="title">Dashboard 3</h1>
                        </div>
                    </div>

                            


                      <div className="row margin-0">
                            



                                {/* <div className="col-xl-3 col-md-4 col-lg-4 col-sm-6 col-12">
                                        <div className="db_box icon_stats">
                                            <i className=' widicon float-left i-wallet icon-primary'></i>
                                            <div className="stats float-left">
                                                <h2 className="widtitle">$567K</h2>
                                                <span className="widtag">New Orders placed</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-4 col-lg-4 col-sm-6 col-12">
                                        <div className="db_box icon_stats">
                                            <i className=' widicon float-left i-user icon-primary'></i>
                                            <div className="stats float-left">
                                                <h2 className="widtitle">4500</h2>
                                                <span className="widtag">New Visitors</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-4 col-lg-4 col-sm-6 col-12">
                                        <div className="db_box icon_stats">
                                            <i className=' widicon float-left i-handbag icon-primary'></i>
                                            <div className="stats float-left">
                                                <h2 className="widtitle">5608</h2>
                                                <span className="widtag">New Projects</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-4 col-lg-4 col-sm-6 col-12 d-xl-block d-lg-none d-md-none d-sm-block">
                                        <div className="db_box icon_stats">
                                            <i className=' widicon float-left i-note icon-primary'></i>
                                            <div className="stats float-left">
                                                <h2 className="widtitle">505</h2>
                                                <span className="widtag">New Posts</span>
                                            </div>
                                        </div>
                                    </div> */}

                        <div className="col-12 col-lg-6 col-md-6 col-xl-8">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Subscriptions</h2>
                                    
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


                        {/* <div className="col-12 col-lg-6 col-md-6 col-xl-4">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Browsers</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">
                                                <Radar data={data6}  options={options6} height={300}/>
                                            </div>
                                        </div>      
                                    </div> 
                                </div>
                            </section>    
                        </div>                             */}


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
                        

                        <div className="col-12 col-lg-12 col-md-12 col-xl-4">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Users</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">
                                                
                                                <div className="chart-area">
                                                  <HorizontalBar data={data32} options={options32} height={470} />
                                                </div>

                                            </div>


                                        </div>      
                                    </div> 
                                </div>
                              </section>    
                          </div>











                        <div className="col-lg-6 col-xl-8 col-md-6 col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Earnings</h2>
                                    
                                </header>
                                <div className="content-body">       
                                 <div className="row">
                                 <div className="col-12"> 
                                    <Table hover responsive className="fixheight">
                                            <thead>
                                              <tr>
                                                <th>Name</th>
                                                <th>Earnings</th>
                                                <th>Sales</th>
                                                <th>Progress</th>
                                              </tr>
                                            </thead>
                                            <tbody>
          
                                              <tr>
                                                  <td>John Hughes</td>
                                                  <td>$345,666</td>
                                                  <td>45000</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px'}}>
                                                      <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Evan Langdon</td>
                                                  <td>$345,666</td>
                                                  <td>45000</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px'}}>
                                                      <Bar data={playlistCharts1.data} options={playlistCharts1.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>Ian Martin</td>
                                                  <td>$345,666</td>
                                                  <td>45000</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px'}}>
                                                      <Bar data={playlistCharts2.data} options={playlistCharts2.options} />
                                                  </div>
                                                  </span></td>
                                              </tr>
                                              <tr>
                                                  <td>David Piper</td>
                                                  <td>$345,666</td>
                                                  <td>45000</td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px'}}>
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


                        <div className="col-12 col-lg-6 col-md-6 col-xl-4">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Browsers Used</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">
                                              <Polar data={data45} options={options45} height={280}/>
                                            </div>
                                        </div>      
                                    </div> 
                                </div>
                            </section>    </div>




                        </div>  
           
                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard3;
