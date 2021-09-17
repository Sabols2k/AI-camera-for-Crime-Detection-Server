import React from 'react';
import {
   Row, Col
} from 'reactstrap';
// react plugin used to create charts
import { Line, Bar, Pie } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {} from 'components';

import {
  dashboardShippedProductsChart,
    dashboardAllProductsChart,
    dashboard24HoursPerformanceChart,
} from 'variables/university/charts.jsx';

class UniversityReportsUniversity extends React.Component{

    render(){
     

const data2 = {
  labels: [
    'Students',
    'Professors',
    'Staffs',
    'Administration'
  ],
  datasets: [{
    data: [300, 50, 100, 200],
    backgroundColor: [
      '#80cbc4','#4db6ac','#26a69a','#56d4c8','#5fcec4','#b2dfdb'
    ],
  }]
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
                            <h1 className="title">University Reports</h1>
                        </div>
                    </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Students Monthly Attendance</h2>
                                
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



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Professor Visits by Month</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        <Bar data={dashboard24HoursPerformanceChart.data} options={dashboard24HoursPerformanceChart.options} />
                                    </div>

                        


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Library Assets Issued today</h2>
                                
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
                                <h2 className="title float-left">University Stats</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area" style={{height: 400+'px'}}>
                                        <Pie data={data2} options={gradientChartOptionsConfiguration2} />
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

export default UniversityReportsUniversity;
