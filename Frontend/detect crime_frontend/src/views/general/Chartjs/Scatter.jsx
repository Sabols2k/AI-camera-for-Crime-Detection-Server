import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { Scatter } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

class Chartjsscatter extends React.Component{
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
          display:1,
          ticks: {
              display: true
          },
          gridLines: {
              
              drawBorder: false
          }
        }],
        xAxes: [{
          display:1,
          ticks: {
              display: true
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
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    
    datasets: [
    {
      label: 'Users New / Visitors',
      fill: false,
      backgroundColor: 'rgba(38, 166, 154,0.4)',
      pointBorderColor: 'rgba(38, 166, 154,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 15,
      pointHoverBackgroundColor: 'rgba(38, 166, 154,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 5,
      pointRadius: 20,
      pointHitRadius: 20,
      data: [
        { x: 65, y: 75 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
      ]
    }
    ]
        }
    },
    options: gradientChartOptionsConfiguration1,
};


        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Scatter Chart</h1>
                        </div>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Visitor Stats</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Scatter data={dashboardShippedProductsChart1.data} options={dashboardShippedProductsChart1.options}/>
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

export default Chartjsscatter;
