import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { Bar } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

import {
    dashboard24HoursPerformanceChart
} from 'variables/general/charts.jsx';

class Chartjsline extends React.Component{
    render(){

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Users',
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(38, 166, 154,1)',
      hoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'Visitors',
      backgroundColor: 'rgba(255, 138, 101,1)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 138, 101,1)',
      hoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [45, 59, 60, 51, 76, 65, 50]
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
                            <h1 className="title">Bar Chart</h1>
                        </div>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Monthly Users</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area">

                                    <Bar
                                              data={data}
                                              width={100}
                                              height={450}
                                               options={dashboard24HoursPerformanceChart.options}
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
                                <h2 className="title float-left">Monthly Visits by Country</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
                                    <div className="chart-area" style={{height: 400+'px'}}>
                                        <Bar data={dashboard24HoursPerformanceChart.data} options={dashboard24HoursPerformanceChart.options} />
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

export default Chartjsline;
