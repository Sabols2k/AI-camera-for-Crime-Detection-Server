import React from 'react';
import {
   Row, Col
} from 'reactstrap';
// react plugin used to create charts
import { Line } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {} from 'components';

import {
    dashboardShippedProductsChart,
    dashboardShippedProductsChart1,
    dashboardAllProductsChart,
} from 'variables/general/charts.jsx';

class Chartjsline extends React.Component{

    render(){
 
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Line Chart</h1>
                        </div>
                    </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Monthly Stats</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            


                                    <div className="chart-area" style={{height: 500+'px'}}>
                                        
                                        <Line data={dashboardShippedProductsChart1.data} options={dashboardShippedProductsChart1.options} />
                                    </div>
                      


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Users Stats</h2>
                                
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
                                <h2 className="title float-left">Day Time Stats</h2>
                                
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






                        </Col>
                        
                    </Row>
                </div>
            </div>
        );
    }
}

export default Chartjsline;
