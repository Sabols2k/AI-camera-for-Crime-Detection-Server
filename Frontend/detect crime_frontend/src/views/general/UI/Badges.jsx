import React from 'react';
import {
    Badge,
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UIBadges extends React.Component{
    

    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Badges</h1>
                        </div>
                    </div>





                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Badges</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12 ui-badges">
                            

                            
<h5>Badges</h5>
    <div>
        <Badge color="primary">1</Badge>
        <Badge color="secondary">2</Badge>
        <Badge color="success">3</Badge>
        <Badge color="danger">4</Badge>
        <Badge color="warning">5</Badge>
        <Badge color="info">6</Badge>
        <Badge color="light">7</Badge>
        <Badge color="dark">8</Badge>
        <Badge color="accent">9</Badge>
      </div>

<br/><br/>
<h5>Colors</h5>

<div>
        <Badge color="primary">Primary</Badge>
        <Badge color="accent">Accent</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="info">Info</Badge>
        <Badge color="light">Light</Badge>
        <Badge color="dark">Dark</Badge>
      </div>

<br/><br/>
<h5>Pills</h5>

<div>
        <Badge color="primary" pill>Primary</Badge>
        <Badge color="accent" pill>Accent</Badge>
        <Badge color="secondary" pill>Secondary</Badge>
        <Badge color="success" pill>Success</Badge>
        <Badge color="danger" pill>Danger</Badge>
        <Badge color="warning" pill>Warning</Badge>
        <Badge color="info" pill>Info</Badge>
        <Badge color="light" pill>Light</Badge>
        <Badge color="dark" pill>Dark</Badge>
      </div>

<br/><br/>
<h5>Links</h5>
 <div>
        <Badge href="#!" color="primary">Primary</Badge>
        <Badge href="#!" color="accent">Accent</Badge>
        <Badge href="#!" color="secondary">Secondary</Badge>
        <Badge href="#!" color="success">Success</Badge>
        <Badge href="#!" color="danger">Danger</Badge>
        <Badge href="#!" color="warning">Warning</Badge>
        <Badge href="#!" color="info">Info</Badge>
        <Badge href="#!" color="light">Light</Badge>
        <Badge href="#!" color="dark">Dark</Badge>
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

export default UIBadges;
