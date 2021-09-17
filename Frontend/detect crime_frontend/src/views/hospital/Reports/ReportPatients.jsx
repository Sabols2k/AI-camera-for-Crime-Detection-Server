import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

import {
    dashboardShippedProductsChart,
} from 'variables/hospital/charts.jsx';

class HospitalReportsPatient extends React.Component{
    render(){

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Inpatient',
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(38, 166, 154,1)',
      hoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [35, 49, 30, 61, 56, 45, 60]
    },
    {
      label: 'Outpatient',
      backgroundColor: 'rgba(255, 138, 101,1)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 138, 101,1)',
      hoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [145, 159, 160, 151, 176, 165, 150]
    }
  ]
};

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Patient Reports</h1>
                        </div>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Patients every month</h2>
                                
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
                                <h2 className="title float-left">Patient Type</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area">

                                    <Bar
                                              data={data}
                                              width={100}
                                              height={450}
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
                            


               </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default HospitalReportsPatient;
