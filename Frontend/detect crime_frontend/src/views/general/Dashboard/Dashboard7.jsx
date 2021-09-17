import React from 'react';
import {

    Row, Col,Table,
} from 'reactstrap';

import {
    
} from 'components';

import { Line, Bar, Scatter, HorizontalBar } from 'react-chartjs-2';

//import styles from 'jvectormap/jquery-jvectormap.css'
//import { VectorMap } from 'react-jvectormap';


import {
    dashboardAllProductsChart2,
    dashboardAllProductsChart3,
    playlistCharts,
    playlistCharts1,
    playlistCharts2,
    playlistCharts3,
    playlistCharts5,
    playlistCharts6,
    playlistCharts7,
    playlistCharts8,
    playlistCharts9,
    playlistCharts10,
} from 'variables/general/dashboard-charts-7.jsx';
var IMGDIR = process.env.REACT_APP_IMGDIR;

class Dashboard7 extends React.Component{
   
    
    render(){



const data32 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Visitors',
      backgroundColor: 'rgba(255, 138, 101,1)',
      borderColor: 'rgba(255, 138, 101,0.8)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 138, 101,0.8)',
      hoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [865, 1059, 1200, 1211, 956, 755, 1350]
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
                barPercentage: 0.5,
                maxBarThickness: 8,
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
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: 'rgba38, 166, 154,1)',
      pointHoverBorderColor: 'rgba(38, 166, 154,1)',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
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
        { x: 186, y: 436 },
        { x: 235, y: 355 },
        { x: 250, y: 268 },
        { x: 255, y: 245 },
        { x: 169, y: 359 },
        { x: 270, y: 440 },
        { x: 151, y: 359 },
        { x: 246, y: 366 },
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
                            <h1 className="title">Dashboard 7</h1>
                        </div>
                    </div>



                      <div className="row margin-0">
                       


                        <div className="col-12 col-lg-12 col-xl-8 col-md-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Media Stats</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">


                                              <Line data={dashboardAllProductsChart3.data} options={dashboardAllProductsChart3.options} height={360}/>

                                            </div>
                                        </div>  





                                    </div> 
                                </div>
                            </section>    
                          </div>


                            <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                                <section className="box ">
                                    <header className="panel_header">
                                        <h2 className="title float-left">Site Stats</h2>
                                        
                                    </header>
                                    <div className="content-body">    <div className="row">
                                            <div className="col-12">
                                                <div className="">
                                                    <div className="row">

                                                        <div className="bar_graph_rows">

                                                          <div className="graph-stats">
                                                              <div className="graph_widget">
                                                              <div className="widdata float-left">
                                                                <h3 className="widtitle">4644</h3>
                                                                <p className="widtag">Posts Shared today</p>
                                                              </div> 
                                                              <div className="float-right">
                                                                <div className="chart-area" style={{height: 50+'px', width: 100+'px'}}>
                                                                  <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                                                </div>
                                                              </div>                                        

                                                              </div>
                                                          </div>

                                                          <div className="graph-stats">
                                                              <div className="graph_widget">
                                                              <div className="widdata float-left">
                                                                <h3 className="widtitle">334</h3>
                                                                <p className="widtag">Comments posted today</p>
                                                              </div> 
                                                              <div className="float-right">
                                                                <div className="chart-area" style={{height: 50+'px', width: 100+'px'}}>
                                                                  <Bar data={playlistCharts1.data} options={playlistCharts1.options} />
                                                                </div>
                                                              </div>                                        

                                                              </div>
                                                          </div>

                                                          <div className="graph-stats">
                                                              <div className="graph_widget">
                                                              <div className="widdata float-left">
                                                                <h3 className="widtitle">4230</h3>
                                                                <p className="widtag">Posts Liked today</p>
                                                              </div> 
                                                              <div className="float-right">
                                                                <div className="chart-area" style={{height: 50+'px', width: 100+'px'}}>
                                                                  <Bar data={playlistCharts2.data} options={playlistCharts2.options} />
                                                                </div>
                                                              </div>                                        

                                                              </div>
                                                          </div>

                                                          <div className="graph-stats d-lg-none d-md-none d-sm-block d-xl-block">
                                                              <div className="graph_widget">
                                                              <div className="widdata float-left">
                                                                <h3 className="widtitle">321</h3>
                                                                <p className="widtag">Users subscribed today</p>
                                                              </div> 
                                                              <div className="float-right">
                                                                <div className="chart-area" style={{height: 50+'px', width: 100+'px'}}>
                                                                  <Bar data={playlistCharts3.data} options={playlistCharts3.options} />
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



                          <div className="col-12 col-md-6 col-lg-6 col-xl-4 d-xl-none d-lg-block">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Visitors</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">
                                                
                                                <div className="chart-area">
                                                  <HorizontalBar data={data32} options={options32} height={295} />
                                                </div>

                                            </div>


                                        </div>      
                                    </div> 
                                </div>
                            </section>    
                        </div>




                </div>
           
                            

                      <div className="row margin-0">
                       


                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox">
                                        <div className="widdata">
                                          <i className='widicon i-note icon-lg icon-accent'></i>
                                          <h3 className="widtitle">Posts</h3>
                                          <p className="widtag">10% increase</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox">
                                        <div className="widdata">
                                          <i className='widicon i-heart icon-lg icon-accent'></i>
                                          <h3 className="widtitle">Likes</h3>
                                          <p className="widtag">15% increase</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox">
                                        <div className="widdata">
                                          <i className='widicon i-globe-alt icon-lg icon-accent'></i>
                                          <h3 className="widtitle">Visits</h3>
                                          <p className="widtag">23% increase</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="db_box iconbox">
                                        <div className="widdata">
                                          <i className='widicon i-earphones icon-lg icon-accent'></i>
                                          <h3 className="widtitle">Songs</h3>
                                          <p className="widtag">31% increase</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-2 d-xl-block d-lg-none d-md-none d-sm-block col-sm-4 col-6">
                                        <div className="db_box iconbox">
                                        <div className="widdata">
                                          <i className='widicon i-share icon-lg icon-accent'></i>
                                          <h3 className="widtitle">Shares</h3>
                                          <p className="widtag">20% increase</p>
                                        </div> 
                                        </div>
                                    </div>


                                    <div className="col-xl-2 d-xl-block d-lg-none d-md-none d-sm-block col-sm-4 col-6">
                                        <div className="db_box iconbox">
                                        <div className="widdata">
                                          <i className='widicon i-trophy icon-lg icon-accent'></i>
                                          <h3 className="widtitle">Awards</h3>
                                          <p className="widtag">30% increase</p>
                                        </div> 
                                        </div>
                                    </div>


                       </div>




                        <div className="col-lg-12 col-xl-12 col-md-12 col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Users</h2>
                                    
                                </header>
                                <div className="content-body">       
                                 <div className="row">
                                 <div className="col-12"> 
                                    <Table hover responsive>
                                            <thead>
                                              <tr>
                                                <th style={{"minWidth": "200px"}}>Name</th>
                                                <th>Earnings</th>
                                                <th>Sales</th>
                                                <th>Status</th>
                                                <th>Progress</th>
                                                <th>Type</th>
                                                <th style={{"minWidth": "130px"}}>Added On</th>
                                              </tr>
                                            </thead>
                                            <tbody>
          
                                              <tr>
                                                  <td className="user-inline-img">
                                                  <img src={IMGDIR+"/images/profile/avatar-1.jpg"} alt="user avatar" className="avatar-image img-inline"/>
                                                  Tim May
                                                  </td>
                                                  <td>$145,666</td>
                                                  <td>33412</td>
                                                  <td><span className="badge">Approved</span></td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px'}}>
                                                      <Bar data={playlistCharts5.data} options={playlistCharts5.options} />
                                                  </div>
                                                  </span></td>
                                                  <td>Premium</td>
                                                  <td>11 April 2019</td>
                                              </tr>
                                              <tr>
                                                  <td className="user-inline-img">
                                                  <img src={IMGDIR+"/images/profile/avatar-4.jpg"} alt="user avatar" className="avatar-image img-inline"/>
                                                  Simon Morrison
                                                  </td>
                                                  <td>$345,666</td>
                                                  <td>32332</td>
                                                  <td><span className="badge">Pending</span></td>
                                                  <td><span className="playlist_song1">
                                                  <div className="chart-area" style={{height: 40+'px', width: 80+'px'}}>
                                                      <Bar data={playlistCharts6.data} options={playlistCharts6.options} />
                                                  </div>
                                                  </span></td>
                                                  <td>Standard</td>
                                                  <td>21 April 2019</td>
                                              </tr>
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
                                                  <img src={IMGDIR+"/images/profile/avatar-2.jpg"} alt="user avatar" className="avatar-image img-inline"/>
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



                      <div className="row margin-0">
                       

                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Users / Views</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">
                                              <Scatter data={data4} options={options4} height={295} />
                                            </div>
                                        </div>      
                                    </div> 
                                </div>
                            </section>    
                        </div>



                          <div className="col-12 col-md-6 col-lg-6 col-xl-4 d-xl-block d-lg-none d-none">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Visitors</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">
                                                
                                                <div className="chart-area">
                                                  <HorizontalBar data={data32} options={options32} height={295} />
                                                </div>

                                            </div>


                                        </div>      
                                    </div> 
                                </div>
                            </section>    
                        </div>


                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Views today</h2>
                                    
                                </header>
                                <div className="content-body">        <div className="row">
                                        <div className="col-12">
                                            <div className="chart-container">

                                              <Line data={dashboardAllProductsChart2.data} options={dashboardAllProductsChart2.options} height={295}/>

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

export default Dashboard7;
