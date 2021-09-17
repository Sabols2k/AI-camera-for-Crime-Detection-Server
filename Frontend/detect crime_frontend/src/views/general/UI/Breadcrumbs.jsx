import React from 'react';
import {
  Breadcrumb, BreadcrumbItem,
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UIBreadcrumbs extends React.Component{
   
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Breadcrumbs</h1>
                        </div>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Breadcrumbs</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            

    <div>
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#!">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#!">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#!">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
<div>
      <Breadcrumb tag="nav">
        <BreadcrumbItem tag="a" href="#!">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#!">Library</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#!">Data</BreadcrumbItem>
        <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
      </Breadcrumb>
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

export default UIBreadcrumbs;
