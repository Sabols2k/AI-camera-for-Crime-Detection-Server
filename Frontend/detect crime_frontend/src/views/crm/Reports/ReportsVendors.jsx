import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { Scatter, Pie } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

class CrmReportsVendors extends React.Component{
    render(){

const data = {
  labels: [
    'Subscriptions',
    'Advertisements',
    'Phone Calls'
  ],
  datasets: [{
    data: [3300, 750, 1100],
    backgroundColor: [
      '#ffccbc','#ffab91','#ff8a65','#ffa183','#fc8b68','#fe825b'
    ],
  }]
};


const data3 = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'New Vendors / Old Vendors',
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
        { x: 165, y: 175 },
        { x: 159, y: 149 },
        { x: 180, y: 290 },
        { x: 181, y: 129 },
        { x: 156, y: 236 },
        { x: 155, y: 225 },
        { x: 140, y: 218 },
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
                            <h1 className="title">Vendor Reports</h1>
                        </div>
                    </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Vendor Stats</h2>
                                
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
                                <h2 className="title float-left">Vendor Sources</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area" style={{height: 400+'px'}}>
                                        <Pie data={data} options={gradientChartOptionsConfiguration2}/>
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

export default CrmReportsVendors;
