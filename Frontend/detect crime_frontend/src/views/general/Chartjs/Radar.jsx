import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { Radar } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

class Chartjsradar extends React.Component{
    render(){



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

const dashboardShippedProductsChart1 = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, 'rgba(255, 138, 101,1)');
        gradientStroke.addColorStop(1, '#FFFFFF');
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(255, 138, 101, 1)");
        gradientFill.addColorStop(1, "rgba(255, 138, 101, 1)");
        return {
    
    labels: ['Firefox',
    'Chrome',
    'Edge',
    'IE',
    'Safari','Opera','Others'],
  datasets: [
    {
      label: '2017',
      backgroundColor: 'rgba(38, 166, 154,0.6)',
      borderColor: 'rgba(38, 166, 154,1)',
      pointBackgroundColor: 'rgba(38, 166, 154,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: '2018',
      backgroundColor: 'rgba(255, 138, 101,0.6)',
      borderColor: 'rgba(255, 138, 101,1)',
      pointBackgroundColor: 'rgba(255, 138, 101,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
        }
    },
    options: gradientChartOptionsConfiguration1,
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

const dashboardShippedProductsChart2 = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, 'rgba(255, 138, 101,1)');
        gradientStroke.addColorStop(1, '#FFFFFF');
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(255, 138, 101, 1)");
        gradientFill.addColorStop(1, "rgba(255, 138, 101, 1)");
        return {
    
    labels: ['Apple',
    'Android',
    'Windows',
    'Linux',
    'Unix','Other','IOS'],
  datasets: [
    {
      label: '2017',
      backgroundColor: 'rgba(38, 166, 154,0.8)',
      borderColor: 'rgba(38, 166, 154,1)',
      pointBackgroundColor: 'rgba(38, 166, 154,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [165, 259, 390, 281, 356, 255, 140]
    },
    {
      label: '2018',
      backgroundColor: 'rgba(255, 138, 101,0.8)',
      borderColor: 'rgba(255, 138, 101,1)',
      pointBackgroundColor: 'rgba(255, 138, 101,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [228, 348, 240, 319, 196, 227, 200]
    }
  ]
        }
    },
    options: gradientChartOptionsConfiguration2,
};


        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Radar Chart</h1>
                        </div>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Browers by Year</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            

                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Radar data={dashboardShippedProductsChart1.data} options={dashboardShippedProductsChart1.options}/>
                                    </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Platforms by Year</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            

                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Radar data={dashboardShippedProductsChart2.data} options={dashboardShippedProductsChart2.options}/>
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

export default Chartjsradar;
