import React from 'react';
import {
    Jumbotron, Button, Container ,
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UIJumbotron extends React.Component{
   
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Jumbotron</h1>
                        </div>
                    </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Jumbotron</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                            
            <div>
      <Jumbotron>
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Fluid jumbotron</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            

    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-4">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
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

export default UIJumbotron;
