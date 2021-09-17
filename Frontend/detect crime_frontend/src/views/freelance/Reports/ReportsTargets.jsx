import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { Line, Radar,Doughnut } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

import {
    dashboardShippedProductsChart,
} from 'variables/freelance/charts.jsx';

class FreelanceReportsTargets extends React.Component{
    render(){


const data2 = {
  labels: ['Projects',
    'Buyers',
    'Sellers',
    'Users',
    'Awards','Earnings','Uptime'],
  datasets: [
    {
      label: '2017',
      backgroundColor: 'rgba(38, 166, 154,0.8)',
      borderColor: 'rgba(38, 166, 154,1)',
      pointBackgroundColor: 'rgba(38, 166, 154,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [1165, 2159, 3290, 2281, 3516, 2355, 1540]
    },
    {
      label: '2018',
      backgroundColor: 'rgba(255, 138, 101,0.8)',
      borderColor: 'rgba(255, 138, 101,1)',
      pointBackgroundColor: 'rgba(255, 138, 101,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [2248, 3548, 2440, 3169, 1966, 4227, 2300]
    }
  ]
};


const data = {
  labels: [
    'New Buyers',
    'New Sellers',
    'New Projects'
  ],
  datasets: [{
    data: [300, 110, 450],
    backgroundColor: [
      '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
    ],
  }]
};

// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration1 = {
    maintainAspectRatio: false,
    legend: {
        display: true
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
          display:0,
          ticks: {
              display: false
          },
          gridLines: {
              
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
            display: true,
            drawBorder: false
          }
        }]
    },
    layout:{
      padding:{left:0,right:0,top:25,bottom:25}
    }
};



// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration2 = {
    maintainAspectRatio: false,
    legend: {
        display: true
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
          display:0,
          ticks: {
              display: false
          },
          gridLines: {
              
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
            display: true,
            drawBorder: false
          }
        }]
    },
    layout:{
      padding:{left:0,right:0,top:25,bottom:25}
    }
};

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Target Reports</h1>
                        </div>
                    </div>





                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Targets achieved by year</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Radar data={data2} options={gradientChartOptionsConfiguration1} />
                                    </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Earnings by Month</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            

                           
                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Line data={dashboardShippedProductsChart.data} options={dashboardShippedProductsChart.options} />
                                    </div>
                           

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Target Users</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area" style={{height: 400+'px'}}>
                                        <Doughnut data={data} options={gradientChartOptionsConfiguration2} />
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

export default FreelanceReportsTargets;
