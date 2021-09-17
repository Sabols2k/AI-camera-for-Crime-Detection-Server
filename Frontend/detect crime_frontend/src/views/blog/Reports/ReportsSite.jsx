import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { Bar, Polar,Scatter } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

class BlogReportsSite extends React.Component{
    render(){

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Subscribers',
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(38, 166, 154,1)',
      hoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [2465, 2539, 1810, 1381, 1526, 1535, 1120]
    },
    {
      label: 'New Visitors',
      backgroundColor: 'rgba(255, 138, 101,1)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 138, 101,1)',
      hoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [4325, 5449, 3640, 1531, 7226, 6252, 3530]
    }
  ]
};

const data2 = {
  datasets: [{
    data: [
      1313,
      1326,
      1567,
      1633,
      2184
    ],
    backgroundColor: [
      '#ff8a65','#f4511e','#ffccbc','#ffab91','#ff8a65','#ff5722'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Advertisement',
    'Social Media',
    'Tweets',
    'Blog posts',
    'Other'
  ]
};


const data3 = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'Shares/ Comments',
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
        { x: 2465, y: 1175 },
        { x: 2359, y: 1249 },
        { x: 2580, y: 1390 },
        { x: 2851, y: 2129 },
        { x: 3356, y: 1336 },
        { x: 2535, y: 2125 },
        { x: 1450, y: 2118 },
        { x: 3265, y: 1225 },
        { x: 4659, y: 2129 },
        { x: 5680, y: 1150 },
        { x: 3871, y: 1499 },
        { x: 5566, y: 1246 },
        { x: 4455, y: 1335 },
        { x: 2430, y: 1478 },
      ]
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
                            <h1 className="title">Site Reports</h1>
                        </div>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Monthly Site User Type</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area">

                                    <Bar
                                              data={data}
                                              width={100}
                                              height={500}
                                              options={{
                                                maintainAspectRatio: false
                                              }}
                                            />

                                    </div>



                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                                
              
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Blog Shares and Comments</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Scatter data={data3} options={gradientChartOptionsConfiguration1} />
                                    </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Site visits from</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Polar data={data2} options={gradientChartOptionsConfiguration2} />
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

export default BlogReportsSite;
