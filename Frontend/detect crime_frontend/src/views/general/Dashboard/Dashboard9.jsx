import React from 'react';
import {
    Table,
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import { Line, Bar } from 'react-chartjs-2';

import {
    dashboardAllProductsChart,
    dashboardAllProductsChart1,
    dashboardAllProductsChart2,
    dashboardAllProductsChart6,
    dashboardAllProductsChart3,
} from 'variables/general/dashboard-charts-9.jsx';

//import styles from 'jvectormap/jquery-jvectormap.css'
import { VectorMap } from 'react-jvectormap';

import {
    playlistCharts7,
    playlistCharts8,
    playlistCharts9,
    playlistCharts10,
} from 'variables/general/dashboard-charts-9.jsx';

var IMGDIR = process.env.REACT_APP_IMGDIR;

class Dashboard9 extends React.Component{
   
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

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Dashboard 9</h1>
                        </div>
                    </div>


                         



                    <div className="row margin-0">
                    



                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox">
                                        <div className="widdata">
                                          <i className='widicon i-user icon-lg icon-primary'></i>
                                          <h3 className="widtitle">Users</h3>
                                          <p className="widtag">32% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox bg-primary colored">
                                        <div className="widdata">
                                          <i className='widicon i-basket icon-lg icon-white'></i>
                                          <h3 className="widtitle">Sales</h3>
                                          <p className="widtag">12% increase</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox">
                                        <div className="widdata">
                                          <i className='widicon i-badge icon-lg icon-primary'></i>
                                          <h3 className="widtitle">Awards</h3>
                                          <p className="widtag">23% increase</p>
                                        </div> 
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox bg-primary colored">
                                        <div className="widdata">
                                          <i className='widicon i-wallet icon-lg icon-white'></i>
                                          <h3 className="widtitle">Earnings</h3>
                                          <p className="widtag">21% increase</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-2 d-xl-block d-lg-none d-md-none d-sm-block col-sm-4 col-6">
                                        <div className="db_box iconbox">
                                        <div className="widdata">
                                          <i className='widicon i-pencil icon-lg icon-primary'></i>
                                          <h3 className="widtitle">Posts</h3>
                                          <p className="widtag">30% increase</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-2 d-xl-block d-lg-none d-md-none d-sm-block col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox bg-primary colored">
                                        <div className="widdata">
                                          <i className='widicon i-share icon-lg icon-white'></i>
                                          <h3 className="widtitle">Shares</h3>
                                          <p className="widtag">20% increase</p>
                                        </div> 
                                        </div>
                                    </div>



                    </div>






                  <div className="row margin-0">

                        <div className="col-12 col-lg-12 col-xl-12 col-md-12 col-sm-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Platforms Used</h2>
                                    
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
                                                  Amanda Oliver
                                                  </td>
                                                  <td>$245,132</td>
                                                  <td>76533</td>
                                                  <td><span className="badge">Approved</span></td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px'}}>
                                                      <Bar data={playlistCharts7.data} options={playlistCharts7.options} />
                                                  </div>
                                                  </span></td>
                                                  <td>Standard</td>
                                                  <td>15 April 2019</td>
                                              </tr>
                                              <tr>
                                                  <td className="user-inline-img">
                                                  <img src={IMGDIR+"/images/profile/avatar-3.jpg"} alt="user avatar" className="avatar-image img-inline"/>
                                                  Anna Rees
                                                  </td>
                                                  <td>$312,444</td>
                                                  <td>75646</td>
                                                  <td><span className="badge">Pending</span></td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px'}}>
                                                      <Bar data={playlistCharts8.data} options={playlistCharts8.options} />
                                                  </div>
                                                  </span></td>
                                                  <td>Premium</td>
                                                  <td>12 April 2019</td>
                                              </tr>
                                              <tr>
                                                  <td className="user-inline-img">
                                                  <img src={IMGDIR+"/images/profile/avatar-8.jpg"} alt="user avatar" className="avatar-image img-inline"/>
                                                  Caroline Quinn
                                                  </td>
                                                  <td>$532,232</td>
                                                  <td>64333</td>
                                                  <td><span className="badge">Approved</span></td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px'}}>
                                                      <Bar data={playlistCharts9.data} options={playlistCharts9.options} />
                                                  </div>
                                                  </span></td>
                                                  <td>Standard</td>
                                                  <td>22 April 2019</td>
                                              </tr>
                                              <tr>
                                                  <td className="user-inline-img">
                                                  <img src={IMGDIR+"/images/profile/avatar-9.jpg"} alt="user avatar" className="avatar-image img-inline"/>
                                                  Peter Lee
                                                  </td>
                                                  <td>$133,533</td>
                                                  <td>54567</td>
                                                  <td><span className="badge">Approved</span></td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px'}}>
                                                      <Bar data={playlistCharts10.data} options={playlistCharts10.options} />
                                                  </div>
                                                  </span></td>
                                                  <td>Premium</td>
                                                  <td>04 May 2019</td>
                                              </tr>


                                          </tbody>
                                        </Table>

                                        </div>      
                                    </div> 
                                </div>
                            </section>    
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
                                          <h2 className="widtitle">4,342</h2>
                                          <p className="widtag">Downloads today</p>
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
                                          <h2 className="widtitle">5,643</h2>
                                          <p className="widtag">Shares today</p>
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
                                          <h2 className="widtitle">7,332</h2>
                                          <p className="widtag">Posts today</p>
                                        </div> 
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-4 col-md-4 d-xl-block d-lg-none d-md-none d-sm-block col-sm-6 col-12">
                                        <div className="db_box graph_widget">
                                        <div className="float-left">
                                          <div className="chart-area" style={{height: 60+'px', maxWidth: 80+'px'}}>
                                              <Line data={dashboardAllProductsChart6.data} options={dashboardAllProductsChart6.options} />
                                          </div>
                                        </div>                                        
                                        <div className="widdata float-left">
                                          <h2 className="widtitle">3,433</h2>
                                          <p className="widtag">Logins today</p>
                                        </div> 
                                        </div>
                                    </div>



                    </div>


                    <div className="row margin-0">
                        

                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Locations</h2>
                                
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
                                                                          fill: '#ff8a65',
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
                                                <div className="map_progress col-12 col-md-12">
                                                    <h5>Unique Visitors</h5>
                                                    <span className='text-muted'>Last Week Rise by 62%</span>
                                                    <div className="progress"><div className="progress-bar progress-bar-accent" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style={{width: 62+'%'}}></div></div>
                                                    <br/>
                                                    <h5>Registrations</h5>
                                                    <span className='text-muted'>Up by 57% last 7 days</span>
                                                    <div className="progress"><div className="progress-bar progress-bar-accent" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: 57+'%'}}></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>      
                                </div>

                            </div>
                        </section>

                    </div>


                        <div className="col-xl-8 col-lg-6 col-md-6 col-sm-12 col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Media</h2>
                                    
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



                  </div>


                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard9;
