import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    Patientslist
} from 'components';

import { patients } from 'variables/hospital/patients.jsx';

class Patient extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Patient</h1>
                        </div>
                    </div>


                            
           

                    <div className="col-xl-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">All Patients</h2>
                            </header>
                            <div className="content-body">    


                            <div className="row">
                                    <div className="col-12">


                                <Patientslist patients={patients} />

                                    </div>
                                </div>
                            </div>
                        </section></div>



           
                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Patient;
