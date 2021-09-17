import React from 'react';
import {
    Table,
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import { Line, Bar, Doughnut } from 'react-chartjs-2';

import {
    dashboardAllProductsChart,
    dashboardAllProductsChart1,
    dashboardAllProductsChart2,
    dashboardAllProductsChart4,
    dashboardAllProductsChart3,
} from 'variables/social/dashboard-charts.jsx';

//import styles from 'jvectormap/jquery-jvectormap.css'
import { VectorMap } from 'react-jvectormap';

import {
    playlistCharts,
    playlistCharts1,
    playlistCharts2,
    playlistCharts3,
} from 'variables/social/dashboard-charts.jsx';

var IMGDIR = process.env.REACT_APP_IMGDIR;

class Social extends React.Component{
   
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
    'Windows',
    'Linux',
    'IOS',
    'Unix',
    'Android'
  ],
  datasets: [{
    data: [3100, 5110, 1100, 7115, 1110],
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
        display: true,
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
    data: [300, 50, 100, 75, 10],
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
        display: true,
    },
};

const data122 = {
  labels: [
    'New',
    'Registered',
    'Visitors',
    'Subscribers',
  ],
  datasets: [{
    data: [2100, 3110, 8100, 7115],
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
        display: true,
    },
};
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Social Media Dashboard</h1>
                        </div>
                    </div>


                            

                    <div className="row margin-0">
                    
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box graph_widget">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px'}}>
                                              <Line data={dashboardAllProductsChart.data} options={dashboardAllProductsChart.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">3343</h2>
                                          <p className="widtag">New Members</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box graph_widget">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px'}}>
                                              <Line data={dashboardAllProductsChart1.data} options={dashboardAllProductsChart1.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">2321</h2>
                                          <p className="widtag">Media Uploaded</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="db_box graph_widget">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px'}}>
                                              <Line data={dashboardAllProductsChart2.data} options={dashboardAllProductsChart2.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">657</h2>
                                          <p className="widtag">Posts Shared</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 d-xl-block d-lg-none d-md-none d-sm-block col-sm-6 col-12">
                                        <div className="db_box graph_widget">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px'}}>
                                              <Line data={dashboardAllProductsChart4.data} options={dashboardAllProductsChart4.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">878</h2>
                                          <p className="widtag">Posts Liked</p>
                                        </div> 
                                        </div>
                                    </div>



                    </div>




                    <div className="row margin-0">
                        
                        <div className="col-xl-8 col-lg-6 col-md-6 col-sm-12 col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Activity</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">

                                              <Line data={dashboardAllProductsChart3.data} options={dashboardAllProductsChart3.options} height={400}/>


                                            </div>
                                        </div>  

                                    </div> 
                                </div>
                            </section>    
                          </div>


                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
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
                                                                          fill: '#fb6373',
                                                                          stroke: '#ffffff',
                                                                          "stroke-width": 2,
                                                                          r: 3
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
                                                                      fill: "#fb6373"
                                                                    },
                                                                    hover: {
                                                                      fill: "#ff8a65"
                                                                    }
                                                                  }}
                                                                  markers={this.state.data1}
                                                                 containerClassName="map"
                                                      />
                                                  </div>
                                                <div className="map_progress col-12 col-md-12">
                                                    <h5>Unique Visitors</h5>
                                                    <span className='text-muted'>Last Week Rise by 62%</span>
                                                    <div className="progress"><div className="progress-bar progress-bar-red" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style={{width: 62+'%'}}></div></div>
                                                    <br/>
                                                    <h5>Registrations</h5>
                                                    <span className='text-muted'>Up by 57% last 7 days</span>
                                                    <div className="progress"><div className="progress-bar progress-bar-red" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: 57+'%'}}></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>      
                                </div>

                            </div>
                        </section>

                    </div>



                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox">
                                        <div className="widdata">
                                          <i className='widicon i-share icon-lg icon-red'></i>
                                          <h3 className="widtitle">323 Shares</h3>
                                          <p className="widtag">17% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox bg-red colored">
                                        <div className="widdata">
                                          <i className='widicon i-heart icon-lg icon-white'></i>
                                          <h3 className="widtitle">450 Likes</h3>
                                          <p className="widtag">16% increase</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox">
                                        <div className="widdata">
                                          <i className='widicon i-pencil icon-lg icon-red'></i>
                                          <h3 className="widtitle">153 Posts</h3>
                                          <p className="widtag">13% increase</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox bg-red colored">
                                        <div className="widdata">
                                          <i className='widicon i-picture icon-lg icon-white'></i>
                                          <h3 className="widtitle">642 Media</h3>
                                          <p className="widtag">32% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 d-xl-block d-lg-none d-md-none d-sm-block col-sm-4 col-6">
                                        <div className="db_box iconbox">
                                        <div className="widdata">
                                          <i className='widicon i-user icon-lg icon-red'></i>
                                          <h3 className="widtitle">128 Users</h3>
                                          <p className="widtag">12% increase</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-2 d-xl-block d-lg-none d-md-none d-sm-block col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox bg-red colored">
                                        <div className="widdata">
                                          <i className='widicon i-note icon-lg icon-white'></i>
                                          <h3 className="widtitle">564 Stories</h3>
                                          <p className="widtag">20% increase</p>
                                        </div> 
                                        </div>
                                    </div>



                  </div>



                  <div className="row margin-0">

                        <div className="col-12 col-lg-12 col-xl-12 col-md-12 col-sm-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Revenue generated</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">

                                          <Table hover responsive>
                                            <thead>
                                              <tr>
                                                <th>Name</th>
                                                <th>Earnings</th>
                                                <th>Sales</th>
                                                <th>Status</th>
                                                <th>Progress</th>
                                                <th>Type</th>
                                                <th>Added On</th>
                                              </tr>
                                            </thead>
                                            <tbody>
          
                                              <tr>
                                                  <td className="user-inline-img">
                                                  <img src={IMGDIR+"/images/profile/avatar-5.jpg"} alt="user avatar" className="avatar-image img-inline"/>
                                                  Gill Blake
                                                  </td>
                                                  <td>$75,434</td>
                                                  <td>45000</td>
                                                  <td><span className="badge">Approved</span></td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px'}}>
                                                      <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                                  </div>
                                                  </span></td>
                                                  <td>Premium</td>
                                                  <td>11 April 2019</td>
                                              </tr>
                                              <tr>
                                                  <td className="user-inline-img">
                                                  <img src={IMGDIR+"/images/profile/avatar-3.jpg"} alt="user avatar" className="avatar-image img-inline"/>
                                                  Coleman Connor
                                                  </td>
                                                  <td>$22,978</td>
                                                  <td>45000</td>
                                                  <td><span className="badge">Approved</span></td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px'}}>
                                                      <Bar data={playlistCharts1.data} options={playlistCharts1.options} />
                                                  </div>
                                                  </span></td>
                                                  <td>Premium</td>
                                                  <td>12 April 2019</td>
                                              </tr>
                                              <tr>
                                                  <td className="user-inline-img">
                                                  <img src={IMGDIR+"/images/profile/avatar-8.jpg"} alt="user avatar" className="avatar-image img-inline"/>
                                                  Joseph Ball
                                                  </td>
                                                  <td>$24,777</td>
                                                  <td>45000</td>
                                                  <td><span className="badge">Approved</span></td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px'}}>
                                                      <Bar data={playlistCharts2.data} options={playlistCharts2.options} />
                                                  </div>
                                                  </span></td>
                                                  <td>Premium</td>
                                                  <td>14 April 2019</td>
                                              </tr>
                                              <tr>
                                                  <td className="user-inline-img">
                                                  <img src={IMGDIR+"/images/profile/avatar-9.jpg"} alt="user avatar" className="avatar-image img-inline"/>
                                                  Kylie Brown
                                                  </td>
                                                  <td>$12,232</td>
                                                  <td>45000</td>
                                                  <td><span className="badge">Approved</span></td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px'}}>
                                                      <Bar data={playlistCharts3.data} options={playlistCharts3.options} />
                                                  </div>
                                                  </span></td>
                                                  <td>Premium</td>
                                                  <td>19 April 2019</td>
                                              </tr>

                                          </tbody>
                                        </Table>

                                        </div>      
                                    </div> 
                                </div>
                            </section>    
                        </div>

                        <div className="col-12 col-lg-4 col-xl-4 col-md-4 col-sm-6" style={{"display":"none"}}>
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Browsers Used</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">

                                              <div className="chart-area">
                                                  <Doughnut height={400} data={data121} options={options121} />
                                              </div>

                                            </div>
                                        </div>      
                                    </div> 
                                </div>
                            </section>    

                        </div>

                        <div className="col-12 col-lg-4 col-xl-4 col-md-4 col-sm-6" style={{"display":"none"}}>
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Users</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">

                                              <div className="chart-area">
                                                  <Doughnut height={400} data={data122} options={options122} />
                                              </div>

                                            </div>
                                        </div>      
                                    </div> 
                                </div>
                            </section>    

                        </div>

                        <div className="col-12 col-lg-4 col-xl-4 col-md-4 col-sm-6 d-xl-none d-lg-none d-md-none d-sm-none d-xs-none d-none">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Platforms Used</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">

                                              <div className="chart-area">
                                                  <Doughnut height={400} data={data12} options={options12} />
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

export default Social;
