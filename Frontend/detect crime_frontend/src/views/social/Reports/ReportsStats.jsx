import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { HorizontalBar, Radar } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

class SocialReportsStats extends React.Component{
    render(){

const data = {
  labels: ['Subscriptions',
    'Emails',
    'Resources',
    'Revenue',
    'Uptime','Server','Site Rank'],
  datasets: [
    {
      label: '2017',
      backgroundColor: 'rgba(38, 166, 154,0.6)',
      borderColor: 'rgba(38, 166, 154,1)',
      pointBackgroundColor: 'rgba(38, 166, 154,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [1165, 2159, 1190, 2181, 2256, 1155, 2240]
    },
    {
      label: '2018',
      backgroundColor: 'rgba(255, 138, 101,0.6)',
      borderColor: 'rgba(255, 138, 101,1)',
      pointBackgroundColor: 'rgba(255, 138, 101,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [2148, 1248, 1340, 2129, 1296, 2127, 1300]
    }
  ]
};



const data3 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Subscriptions',
      backgroundColor: 'rgba(255, 138, 101,0.6)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 138, 101,0.6)',
      hoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [265, 259, 480, 381, 356, 255, 240]
    }
  ]
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

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Statistics Report</h1>
                        </div>
                    </div>
    

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Statistics by Year</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Radar data={data} options={gradientChartOptionsConfiguration1} />
                                    </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Monthly Subscriptions</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <HorizontalBar data={data3} options={gradientChartOptionsConfiguration2} />
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

export default SocialReportsStats;
