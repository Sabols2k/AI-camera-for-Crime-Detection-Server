import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { Bar, Polar,Scatter } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

class UniversityReportsStudents extends React.Component{
    render(){

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Students',
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(38, 166, 154,1)',
      hoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [265, 259, 180, 181, 156, 155, 140]
    },
    {
      label: 'Attendance',
      backgroundColor: 'rgba(255, 138, 101,1)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 138, 101,1)',
      hoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [425, 549, 640, 531, 726, 625, 350]
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
    'Computer Engineering',
    'Mechanical Engineering',
    'MBA',
    'Medical Students',
    'Automobile Engineering'
  ]
};


const data3 = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'Student Results / Students Count',
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
        { x: 265, y: 175 },
        { x: 259, y: 149 },
        { x: 280, y: 190 },
        { x: 281, y: 129 },
        { x: 356, y: 136 },
        { x: 255, y: 125 },
        { x: 140, y: 118 },
        { x: 365, y: 125 },
        { x: 459, y: 129 },
        { x: 580, y: 150 },
        { x: 381, y: 199 },
        { x: 556, y: 146 },
        { x: 455, y: 135 },
        { x: 240, y: 178 },
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
                            <h1 className="title">Student Reports</h1>
                        </div>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Monthly Student Attendance</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area" style={{height: 500+'px'}}>

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
                                <h2 className="title float-left">Student Results</h2>
                                
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
                                <h2 className="title float-left">Students Count</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Polar data={data2} options={gradientChartOptionsConfiguration3} />
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

export default UniversityReportsStudents;
