import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { HorizontalBar, Polar, Pie } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

class SocialReportsSite extends React.Component{
    render(){



const data2 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Returing Visitors',
      backgroundColor: 'rgba(255, 138, 101,1)',
      borderColor: 'rgba(255, 138, 101,0.8)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 138, 101,0.8)',
      hoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [1265, 1159, 2145, 1121, 2212, 2125, 1230]
    },
    {
      label: 'Subscribers',
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,0.8)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(38, 166, 154,0.8)',
      hoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [865, 759, 670, 581, 856, 655, 570]
    }
  ]
};


const data3 = {
  datasets: [{
    data: [
      1113,
      1126,
      1617,
      1133,
      1824
    ],
    backgroundColor: [
      '#ff8a65','#f4511e','#ffccbc','#ffab91','#ff8a65','#ff5722'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Android',
    'IOS',
    'Windows',
    'Linux',
    'Others'
  ]
};

const data4 = {
  labels: [
    'Memory',
    'Speed',
    'Connections',
    'Emails'
  ],
  datasets: [{
    data: [5100, 5130, 3100, 4150],
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
const gradientChartOptionsConfiguration3 = {
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
                            <h1 className="title">Site Report</h1>
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
                                        <Polar data={data3} options={gradientChartOptionsConfiguration1} />
                                    </div>
                                

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Returing Visitors and Subscribers</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <HorizontalBar data={data2} options={gradientChartOptionsConfiguration2} />
                                    </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                                





                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Site Resources Used</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area" style={{height: 400+'px'}}>
                                        <Pie data={data4} options={gradientChartOptionsConfiguration3} />
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

export default SocialReportsSite;
