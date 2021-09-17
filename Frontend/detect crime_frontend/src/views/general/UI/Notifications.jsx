import React from 'react';
import {
    Row, Col
} from 'reactstrap';
// react plugin for creating notifications over the dashboard
import NotificationAlert from 'react-notification-alert';

import { Button } from 'components';

class UINotifications extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
        this.onDismiss = this.onDismiss.bind(this);
        this.notify = this.notify.bind(this);
    }
    onDismiss(){
    }
    notify(place){
        var color = Math.floor((Math.random() * 5) + 1);
        var type;
        switch (color) {
            case 1:
                type = 'primary';
                break;
            case 2:
                type = 'success';
                break;
            case 3:
                type = 'danger';
                break;
            case 4:
                type = 'warning';
                break;
            case 5:
                type = 'info';
                break;
            default:
                break;
        }
        var options = {};
        options = {
            place: place,
            message: (
                <div className="notification-msg">
                    <div>
                        Welcome to <b>Zest Admin : React</b> - Multi-Concept Admin template based on ReactJs.
                    </div>
                </div>
            ),
            type: type,
            icon: "",
            autoDismiss: 7
        }
        this.refs.notificationAlert.notificationAlert(options);
    }
    render(){
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Notifications</h1>
                        </div>
                    </div>


                            


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Notifications</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">

                    <div className="notification-popup">
                    <NotificationAlert ref="notificationAlert"/>
                    </div>


                    <Row>
                        <Col md={12} xs={12}>


                                        <Row>
                                            <Col lg={8} xs={12} className="ml-auto mr-auto notification-btns">
                                                <Row>
                                                    <Col md={4} xs={12}>
                                                        <Button color="primary" block onClick={() => this.notify("tl")}>
                                                            Top Left
                                                        </Button>
                                                    </Col>
                                                    <Col md={4} xs={12}>
                                                        <Button color="primary" block onClick={() => this.notify("tc")}>
                                                            Top Center
                                                        </Button>
                                                    </Col>
                                                    <Col md={4} xs={12}>
                                                        <Button color="primary" block onClick={() => this.notify("tr")}>
                                                            Top Right
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col lg={8} xs={12} className="ml-auto mr-auto notification-btns">
                                                <Row>
                                                    <Col md={4} xs={12}>
                                                        <Button color="primary" block onClick={() => this.notify("bl")}>
                                                            Bottom Left
                                                        </Button>
                                                    </Col>
                                                    <Col md={4} xs={12}>
                                                        <Button color="primary" block onClick={() => this.notify("bc")}>
                                                            Bottom Center
                                                        </Button>
                                                    </Col>
                                                    <Col md={4} xs={12}>
                                                        <Button color="primary" block onClick={() => this.notify("br")}>
                                                            Bottom Right
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                        </Col>
                    </Row>






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

export default UINotifications;
