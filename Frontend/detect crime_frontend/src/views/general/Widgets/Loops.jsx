import React from 'react';
import {
    Row, Col
} from 'reactstrap';

import {
    Messagewidget, Mailbox,
} from 'components';

import { messagewidget } from 'variables/general/widget.jsx';
import { mailbox } from 'variables/general/mailbox.jsx';

import PerfectScrollbar from 'perfect-scrollbar';
var ps;
var mailps;

class Widgetssocialmedia extends React.Component{
    componentDidMount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.notificationlist,{suppressScrollX: true, suppressScrollY: false});
            mailps = new PerfectScrollbar(this.refs.mailboxlist,{suppressScrollX: true, suppressScrollY: false});
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
            mailps.destroy();
        }
    }
    render(){ 
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Widget Loops</h1>
                        </div>
                    </div>





                    <div className="row margin-0">



                        <div className="col-xl-6 col-12">
                            <section className="box">
                            <header className="panel_header">
                                <h2 className="title float-left">Messages</h2>
                            </header>
                                <div className="content-body">    <div className="row">
                                        <div className="col-12">
                                            <div className="wid-notification">

                                                <ul className="list-unstyled notification-widget" ref="notificationlist">

                                                    <Messagewidget messagewidget={messagewidget}/>
                                                    


                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>



                        <div className="col-xl-6 col-12">
                            <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Mailbox</h2>
                            </header>
                                <div className="content-body">    <div className="row">
                                        <div className="col-12">
                                            <div className="wid-notification">

                                                <ul className="list-unstyled notification-widget" ref="mailboxlist">

                                                    <Mailbox mailbox={mailbox}/>
                                                    


                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>

                        

                        <div className='clearfix'></div>


                    </div>


                                    
                        </Col>
                    </Row>
                </div>
            </div>


        );
    }
}

export default Widgetssocialmedia;
