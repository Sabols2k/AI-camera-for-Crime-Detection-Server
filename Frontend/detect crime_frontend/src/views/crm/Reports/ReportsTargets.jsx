import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { Polar, Line } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

import {
    dashboardShippedProductsChart,
    dashboardAllProductsChart,
} from 'variables/crm/charts.jsx';

class CrmReportsTargets extends React.Component{
    render(){

const data = {
  datasets: [{
    data: [
      121,
      116,
      127,
      323,
      114
    ],
    backgroundColor: [
      '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Vendors',
    'Advertisements',
    'Contacts',
    'Leads',
    'Other'
  ]
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
                                <h2 className="title float-left">Targets Achieved Today</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            

                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Line data={dashboardAllProductsChart.data} options={dashboardAllProductsChart.options} />
                                    </div>

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Targets Fulfilled By</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Polar data={data} options={gradientChartOptionsConfiguration2}/>
                                    </div>
                                

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Targets by Month</h2>
                                
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




                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default CrmReportsTargets;
