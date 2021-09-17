import React from 'react';
import {
    Alert , UncontrolledAlert ,
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UIAlerts extends React.Component{
    
constructor(props) {
    super(props);

    this.state = {
      visible: true,
       visible1: true
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onDismiss1 = this.onDismiss1.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }
  onDismiss1() {
    this.setState({ visible1: false });
  }

    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Alerts</h1>
                        </div>
                    </div>




                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Alerts</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">

<div>
      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
      <Alert color="secondary" className="text-dark">
        This is a secondary alert — check it out!
      </Alert>
      <Alert color="success">
        This is a success alert — check it out!
      </Alert>
      <Alert color="danger">
        This is a danger alert — check it out!
      </Alert>
      <Alert color="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert color="info">
        This is a info alert — check it out!
      </Alert>
      <Alert color="light" className="text-dark">
        This is a light alert — check it out!
      </Alert>
      <Alert color="dark" className="bg-dark text-white">
        This is a dark alert — check it out!
      </Alert>
    </div>



                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Links in Alerts</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">

<div>
      <Alert color="primary">
        This is a primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="secondary" className="text-dark">
        This is a secondary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="success">
        This is a success alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="danger">
        This is a danger alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="warning">
        This is a warning alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="info">
        This is a info alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="light" className="text-dark">
        This is a light alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="dark" className="bg-dark text-white">
        This is a dark alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
    </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Alert with content</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">

<div>
      <Alert color="primary">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going
          to run a bit longer so that you can see how spacing within an alert works with this kind
          of content.
        </p>
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
        </p>
      </Alert>
    </div>

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Dismiss Alert</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">


<Alert color="primary" isOpen={this.state.visible} toggle={this.onDismiss}>
        I am an alert and I can be dismissed!
      </Alert>

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Uncontrolled Alerts</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">


<UncontrolledAlert color="primary">
      I am an alert and I can be dismissed!
    </UncontrolledAlert>      

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Alerts dismiss without fade</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">



<div>
        <Alert color="primary" isOpen={this.state.visible1} toggle={this.onDismiss1} fade={false}>
          I am a primary alert and I can be dismissed without animating!
        </Alert>
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

export default UIAlerts;
