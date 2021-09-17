import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { Doughnut } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

class Chartjsdoughnut extends React.Component{
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
    
    labels: [
    'Apple',
    'Android',
    'Windows'
  ],
  datasets: [{
    data: [200, 10, 150],
    backgroundColor: [
      '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
    ],
  }]
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
    
    labels: [
    'Firefox',
    'Chrome',
    'Edge'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#ffccbc','#ffab91','#ff8a65','#ffa183','#fc8b68','#fe825b'
    ],
  }]
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
                            <h1 className="title">Doughnut Chart</h1>
                        </div>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Platforms Used</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            

                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Doughnut data={dashboardShippedProductsChart1.data} options={dashboardShippedProductsChart1.options}/>
                                    </div>



                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                                
                        
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Browsers Used</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Doughnut data={dashboardShippedProductsChart2.data} options={dashboardShippedProductsChart2.options}/>
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

export default Chartjsdoughnut;
