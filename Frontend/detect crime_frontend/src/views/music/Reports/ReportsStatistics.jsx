import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { Bubble } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

class MusicReportsStatistics extends React.Component{
    render(){

const data = {
  labels: ['January'],
  datasets: [
    {
      label: 'New Visitors / Users / Subscibers',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(38, 166, 154,0.7)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(38, 166, 154,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(38, 166, 154,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 8,
      pointRadius: 10,
      pointHitRadius: 15,
      data: [{x:10,y:15,r:5},{x:8,y:10,r:4},{x:6,y:8,r:7},{x:5,y:4,r:7},{x:5,y:7,r:4},
      {x:7,y:5,r:15},{x:15,y:12,r:14},{x:16,y:18,r:17},{x:15,y:14,r:9},{x:6,y:9,r:11},
      {x:8,y:17,r:15},{x:6,y:13,r:14},{x:16,y:18,r:11},{x:15,y:14,r:17},{x:15,y:17,r:14},
      {x:9,y:15,r:12},{x:14,y:22,r:24},{x:11,y:28,r:27},{x:25,y:24,r:19},{x:16,y:19,r:21}]
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
                                <h2 className="title float-left">Visitor Stats</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Bubble data={data} options={gradientChartOptionsConfiguration1} />
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

export default MusicReportsStatistics;
